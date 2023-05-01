const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

//initializing express router
const router = express.Router();

//middleware
router.use(requireAuth);

//GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getSingleWorkout);

//POST a new workout
router.post("/", createWorkout);

//Delete a workout
router.delete("/:id", deleteWorkout);

//Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
