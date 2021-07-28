const router = require("express").Router();
const { Workouts } = require("../../models")

router.get("/workouts", async (req, res, next) => {
    console.log('workouts:', Workouts)
    try{
    // read the workouts from db
    const workouts = await Workouts.find();
    res.json(workouts)
    //send workouts
    } catch(e) {
        next(e)
    }
    
  });


module.exports = router;