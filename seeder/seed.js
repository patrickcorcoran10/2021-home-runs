let mongoose = require("mongoose")
let db = require("../models/Team");


mongoose.connect("mongodb://localhost/homeRuns21", {
  useNewUrlParser: true,
  useFindAndModify: false
});

  let teamSeed = [
      {
      teamOwner: "massa",
      overallScore: 0,
      aprilScore: 0,
      mayScore: 0,
      juneScore: 0,
      julyScore: 0,
      augustScore: 0,
      septemberScore: 0,
      },
      {
        teamOwner: "ross",
        overallScore: 0,
        aprilScore: 0,
        mayScore: 0,
        juneScore: 0,
        julyScore: 0,
        augustScore: 0,
        septemberScore: 0,
       },
       {
        teamOwner: "lakeman",
        overallScore: 0,
        aprilScore: 0,
        mayScore: 0,
        juneScore: 0,
        julyScore: 0,
        augustScore: 0,
        septemberScore: 0,
        },
        {
            teamOwner: "olsen",
            overallScore: 0,
            aprilScore: 0,
            mayScore: 0,
            juneScore: 0,
            julyScore: 0,
            augustScore: 0,
            septemberScore: 0,
            },
            {
                teamOwner: "corcoran",
                overallScore: 0,
                aprilScore: 0,
                mayScore: 0,
                juneScore: 0,
                julyScore: 0,
                augustScore: 0,
                septemberScore: 0,
                },
  ];

  db.Team.deleteMany({})
    .then(() => db.Team.collection.insertMany(teamSeed))
    .then(data => {
        console.log(data.result.n + " records inserted")
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
      });