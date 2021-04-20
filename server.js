const express = require("express");
const mongoose = require("mongoose");
// const MLBStatsAPI = require('mlb-stats-api');
// const mlbStats = new MLBStatsAPI();

const logger = require("morgan");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(logger("dev"));
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/homeRuns21',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// const getData = async () => {
//   // const response = await mlbStats.getAttendance({params: { teamId: 111, leagueId: 103, leagueListid: 103 }});
//   // console.log("mlb data response", response)
//   const response = await axios()
// }
// getData();

app.use(require("./routes/api-routes.js"));

app.listen(PORT, () => {
    console.log("Swing for the fences on ", PORT)
})