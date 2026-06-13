const League = require("../models/Leagues.js");

const createLeague = async (req, res) => {
    try {
        const {
            name,
            description,
            format,
            teamsPerGroup,
            knockoutTeams
        } = req.body;

        const league = await League.create({
            name,
            description,
            format,
            teamsPerGroup,
            knockoutTeams
        });

        res.status(201).json(league);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = { createLeague };