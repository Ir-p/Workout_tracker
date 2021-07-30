const router = require("express").Router();
const { Workouts } = require("../../models");

router.get("/workouts", async (req, res) => {
  Workouts.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((workout_tracker) => {
      res.json(workout_tracker);
    })
    .catch((e) => {
      res.json(e);
    });
});

router.post("/workouts", ({ body }, req, res) => {
  Workouts.create(body)
    .then((workout_tracker) => {
      res.json(workout_tracker);
    })
    .catch((e) => {
      res.json(e);
    });
});

router.put("/workouts/:id", (req, res, next) => {
  var id = req.params.id;
  var inputData = req.body;
  console.log("inputData:", inputData);
  Workouts.findByIdAndUpdate({ _id: id }, { $push: { inputData } })
    .then((workout_tracker) => {
      res.json(workout_tracker);
    })
    .catch((e) => {
      res.json(e);
    });
});

router.get("/workouts/range", async (req, res) => {
  Workouts.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((workout_tracker) => {
      res.json(workout_tracker);
    })
    .catch((e) => {
      res.json(e);
    });
});


router.post("/workouts/range", (req, res) => {
  Workouts.create({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((e) => {
      res.json(e);
    });
});
module.exports = router;
