const { Router } = require("express");
const userRoutes = require("../routes/user.route");
const movieRoutes = require("../routes/movie.route");
const theaterRoutes = require("../routes/theater.route");
const showRoutes = require("../routes/show.route");
const bookingRoutes = require("../routes/booking.route");
const router = Router();

router.use("/users", userRoutes);
router.use("/movies", movieRoutes);
router.use("/theaters", theaterRoutes);
router.use("/shows", showRoutes);
router.use("/bookings", bookingRoutes);

module.exports = router;
