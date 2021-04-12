const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamOwner: {type: String, required: true},
    aprilRoster: [
        {
            playerName: {type: String},
            previousHomeRunTotal: {type: Number},
            currentMonthHomeRuns: {type: Number}

        }
    ],
    mayRoster: [
        {
            playerName: {type: String},
            previousHomeRunTotal: {type: Number},
            currentMonthHomeRuns: {type: Number}

        }
    ],
    juneRoster: [
        {
            playerName: {type: String},
            previousHomeRunTotal: {type: Number},
            currentMonthHomeRuns: {type: Number}

        }
    ],
    julyRoster: [
        {
            playerName: {type: String},
            previousHomeRunTotal: {type: Number},
            currentMonthHomeRuns: {type: Number}

        }
    ],
    augustRoster: [
        {
            playerName: {type: String},
            previousHomeRunTotal: {type: Number},
            currentMonthHomeRuns: {type: Number}

        }
    ],
    septRoster: [
        {
            playerName: {type: String},
            previousHomeRunTotal: {type: Number},
            currentMonthHomeRuns: {type: Number}

        }
    ]

})

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;