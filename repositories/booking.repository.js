const db = require("../models/index");
const { Booking, BookingSeat, Show, Payment, sequelize } = db;

async function bookSeats(payload) {
  const { userId, showId, seatIds, paymentDetails } = payload;
  const transaction = await sequelize.transaction();

  try {
    // Verify the show exists
    const show = await Show.findByPk(showId, { transaction });
    if (!show) {
      await transaction.rollback();
      throw new Error("Show not found");
    }

    // Check if the seats are available
    const bookedSeats = await BookingSeat.findAll({
      where: { seatId: seatIds },
      include: [
        {
          model: Booking,
          where: { showId },
        },
      ],
      transaction,
    });

    if (bookedSeats.length > 0) {
      await transaction.rollback();
      throw new Error("Some of the seats are already booked");
    }

    // Create Booking
    const booking = await Booking.create(
      { userId, showId, status: 1 },
      { transaction }
    );

    // Create BookingSeats
    const bookingSeats = seatIds.map((seatId) => ({
      bookingId: booking.id,
      seatId,
    }));
    await BookingSeat.bulkCreate(bookingSeats, { transaction });

    // Process Payment
    const payment = await Payment.create(
      {
        bookingId: booking.id,
        amount: paymentDetails.amount,
        status: paymentDetails.status,
      },
      { transaction }
    );

    await transaction.commit();
    return { booking, payment };
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
}

module.exports = {
  bookSeats,
};
