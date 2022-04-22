const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    startWeight: {
      type: Number,
      required: true
    },
    reps: {
      type: Number,
      required: true
    },
    sets: {
      type: Number,
      required: true
    },
    increment: {
      type: Number,
      required: true
    },
    restPeriod: {
        type: Number,
        required: false
    }
  }
);

const Exercise = model('exercise', exerciseSchema);

module.exports = Exercise;
