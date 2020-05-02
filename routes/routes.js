const router = require("express").Router();
const Fitness = require("../models/index")

//ROUTES
// creating workout
router.post(`/api/workouts`, (req, res) => {
    Fitness.create({})
    .then(dbWorkouts => {
        res.json(dbWorkouts)
    })
})

//finding workout and updating 
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Fitness.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      )
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
  });

// previous workout 
router.get("/api/workouts", (req, res) => {
  Fitness.find().then((dbWorkouts) => {
    res.json(dbWorkouts);
  });
});

// all workouts created
router.get("/api/workouts/range", ({ query }, res) => {
  Fitness.find().then((dbWorkouts) => {
    res.json(dbWorkouts);
  });
});

module.exports = router;