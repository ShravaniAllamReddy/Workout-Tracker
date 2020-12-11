const router = require("express").Router();
const Workout = require("../models/workout.js");


router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.post("/api/workouts", ({ body }, res) => {

    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findById(params.id)
        .then(workout => {
            console.log(workout);
            const newtotalduration = body.duration + workout.totalduration;
            Workout.update({ "_id": params.id },
                {
                    $push: {
                        exercises: body
                    },
                    totalduration: newtotalduration

                })
                .then(dbWorkout => {
                    res.json(dbWorkout);
                })
                .catch(err => {
                    res.status(400).json(err);
                });
        })

});


// Export routes for server.js to use.
module.exports = router;