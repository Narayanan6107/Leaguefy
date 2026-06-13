const mongoose = require("mongoose");

const leagueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    format: {
      type: String,
      enum: ["league", "league-knockout", "group-knockout"],
      required: true
    },

    teamsPerGroup: {
      type: Number,
      default: null
    },

    knockoutTeams: {
      type: Number,
      default: null
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("League", leagueSchema);