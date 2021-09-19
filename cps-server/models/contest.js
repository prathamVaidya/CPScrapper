const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contestSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    actionLink: {
      type: String,
      required: true,
    },

    code: {
      type: String,
      required: false,
    },
    writers: {
      type: String,
      required: false,
    },
    totalParticipants: {
      type: String,
      required: false,
    },
    minRating: {
      type: String,
      required: false,
    },
    maxRating: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Contest = mongoose.model("Contest", contestSchema);

module.exports = Contest;
