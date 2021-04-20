const router = require("express").Router()
const Team = require("../models/team.js")

// router.post("/api/create-team", async (req, res) => {
//     console.log(req.body)
//     const post = new Team({teamOwner: req.body.teamOwner}).then(dbCreation => {
//         res.json(dbCreation)
//     })
    
// })
router.post("/api/create-team", async (req, res) => {
    const post = new Team({
        teamOwner: req.body.teamOwner
    })
    console.log(post)
    await post.save();
    res.send(post)
})
router.get("/api/getStats", async (req, res) => {
    
    const posts = await Team.find()
    res.send(posts)
})

router.delete("/api/delete-team/:id", (req, res) => {
    // console.log("param passed", req.params.id)
    Team.findByIdAndDelete(req.params.id,  function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    })
})

module.exports = router;