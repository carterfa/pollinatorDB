var path = require("path");

module.exports = function (app) {

    //shows home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //shows sources
    app.get("/sources", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/sources.html"));
    });

    //catch all page
    app.get("*", function (req, res) {
        res.send("404");
    });

}