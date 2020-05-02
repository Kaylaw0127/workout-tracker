const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workout = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "required",
      },
      name: {
        type: String,
        trim: true,
        required: "required",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "required",
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model(`Workout`, workout);

module.exports = Workout;