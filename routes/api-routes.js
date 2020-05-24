var db = require("../models");

module.exports = function (app) {

    //Pulls up result for state
    app.get("/api/states/:state", function (req, res) {
        db.State.findOne({
            where: {
                id: req.params.state
            }, include: [
                {
                    model: db.Plant,
                    through: {
                        where: {
                            state_id: req.params.state
                        }
                    }
                },
                {
                    model: db.Nursery
                }
            ]
        }).then(function (result) {
            return res.json(result);
        });
    });

    // Displays all plants
    app.get("/api/plants", function (req, res) {

        db.Plant.findAll({}).then(function (results) {
            res.json(results);
        })

    });

    // Displays all nurseries
    app.get("/api/nurseries", function (req, res) {

        db.Nursery.findAll({}).then(function (results) {
            res.json(results);
        })

    });

    // Displays all states
    app.get("/api/states", function (req, res) {

        db.State.findAll({}).then(function (results) {
            res.json(results);
        })

    });

}