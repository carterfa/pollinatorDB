var db = require("../models");
const Op = require("sequelize");

module.exports = function (app) {

    //Gets state id
    app.get("/api/abbreviation/:abbrev", function (req, res) {
        db.State.findOne({
            where: {
                abbreviation: req.params.abbrev
            }
        }).then(function (result) {
            return res.json(result.id);
        });
    })

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

    //Pulls up result for nursery
    app.get("/api/nurseries/:nursery", function (req, res) {
        db.Nursery.findOne({
            where: {
                id: req.params.nursery
            }, include: [
                {
                    model: db.Plant,
                    through: {
                        where: {
                            nursery_id: req.params.nursery
                        }
                    }
                }
            ]
        }).then(function (result) {
            return res.json(result);
        });
    });

    //Pulls up result for plant
    app.get("/api/plants/:plant", function (req, res) {
        db.Plant.findOne({
            where: {
                id: req.params.plant
            }, include: [
                {
                    model: db.State,
                    through: {
                        where: {
                            plant_id: req.params.plant
                        }
                    }
                },
                {
                    model: db.Nursery,
                    through: {
                        where: {
                            plant_id: req.params.plant
                        }
                    }
                },
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