const router = require("express").Router();
const { Workouts } = require("../../models");

router.get("/workouts", async (req, res) => {
  console.log("workouts:", Workouts);

  Workouts.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((e) => {
      res.json(e);
    });
});

router.post('/workouts', (req, res) => {
  Workouts.create({})
  .then((dbWorkouts) => {
    res.json(dbWorkouts);
  })
  .catch((e) => {
    res.json(e);
  });
})

router.put('/workouts/:id', (req, res, next) => {
Workouts.findByIdAndUpdate(
  req.params.id,
  {$push: {'exercises':}}
)

});
module.exports = router;
