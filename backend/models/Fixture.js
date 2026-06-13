const mongoose = require("mongoose");

const fixtureSchema = new mongoose.Schema(
  {
    league: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "League",
      required: true,
    },

    homeTeam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },

    awayTeam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },

    matchday: {
      type: Number,
      required: true,
    },

    played: {
      type: Boolean,
      default: false,
    },

    homeGoals: {
      type: Number,
      default: null,
    },

    awayGoals: {
      type: Number,
      default: null,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Fixture", fixtureSchema);