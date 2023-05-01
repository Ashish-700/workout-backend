const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//routes
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

//initilize express
const app = express();

//middleware
app.use(express.json()); //allows req to get the data of the post request, which is passing in adress

app.use((req, res, next) => {
  console.log(`path: ${req.path}, method: ${req.method}`);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listening
    app.listen(process.env.PORT, () => {
      console.log(
        "connected to db & listening to request on port",
        process.env.PORT
      );
    });
  })
  .catch((err) => console.log(err));
