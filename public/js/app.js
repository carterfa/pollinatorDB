$(document).ready(function () {

    function getAllPlants() {
        $.get("/api/plants", function (data) {
            console.log(data);
        });
    }

    function getAllStates() {
        $.get("/api/states", function (data) {
            console.log(data);
        });
    }

    function getAllNurseries() {
        $.get("/api/nurseries", function (data) {
            console.log(data);
        });
    }

    getAllNurseries();

})