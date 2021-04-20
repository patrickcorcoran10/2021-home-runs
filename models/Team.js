const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamOwner: {type: String},
    overallScore: {type: Number},
    aprilScore: {type: Number},
    mayScore: {type: Number},
    juneScore: {type: Number},
    julyScore: {type: Number},
    augustScore: {type: Number},
    septemberScore: {type: Number},
    roster: [
        {
            playerName: {type: String},
            previousHomeRunTotal: {type: Number},
            currentMonthHomeRuns: {type: Number}

        }
    ]
    

})

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;