let countrySelected = "usa";

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

function getState(stateid) {
    $.get("/api/states/" + stateid, function (data) {
        console.log(data);
        $(".btns-div").hide();
        $(".back-btn").show();
        displayStateResults(data);
    });
}

function fillPlantTable(plants) {
    $(".results").append(`<h3>Native Plants</h3>`);

    $(".results").append(
        `<table class="table table-responsive table-bordered table-striped" id="plant-table">
            <thead>
                <tr>
                    <th scope="col">Common Name</th>
                    <th scope="col">Scientific Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Height (ft)</th>
                    <th scope="col">Flower Color</th>
                    <th scope="col">Bloom Period</th>
                    <th scope="col">Sunlight</th>
                    <th scope="col">Soil Moisture</th>
                </tr>
            </thead>
            <tbody id="plant-table-body">
            </tbody>
        </table>`
    );

    for (let i = 0; i < plants.length; i++) {
        $("#plant-table-body").append(
            `<tr class="plant-row" id="${plants[i].symbol}">
                <td>${plants[i].common_name}</td>
                <td>${plants[i].scientific_name}</td>
                <td>${plants[i].type}</td>
                <td>${plants[i].height_ft}</td>
                <td>${plants[i].flower_color}</td>
                <td>${plants[i].bloom_period}</td>
                <td>${plants[i].sunlight}</td>
                <td>${plants[i].soil_moisture}</td>
            </tr>`
        );
    }
}

function fillNurseryTable(nurseries) {

    $(".results").append(`<h3>Nurseries</h3>`);

    $(".results").append(
        `<table class="table table-responsive-sm table-bordered table-striped" id="nursery-table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Website</th>
                </tr>
            </thead>
            <tbody id="nursery-table-body">
            </tbody>
        </table>`
    );

    for (let i = 0; i < nurseries.length; i++) {
        let nurseryRow = "";
        if (nurseries[i].website != null) {
            nurseryRow = `<tr class="nursery-row" id="${nurseries[i].id}">
            <td>${nurseries[i].name}</td>
            <td>${nurseries[i].city}, ${nurseries[i].state}</td>
            <td><a href=${nurseries[i].website} target="_blank">${nurseries[i].website}</a></td>
        </tr>`
        } else {
            nurseryRow = `<tr class="nursery-row" id="${nurseries[i].id}">
            <td>${nurseries[i].name}</td>
            <td>${nurseries[i].city}, ${nurseries[i].state}</td>
            <td></td>
        </tr>`
        }
        $("#nursery-table-body").append(nurseryRow);
    }

}

function displayStateResults(data) {
    $("#instructions").hide();
    $(".map-container").hide();
    $(".results").empty();
    $(".state-title").text(data.name);

    let plants = data.Plants;

    fillPlantTable(plants);

    let nurseries = data.Nurseries;

    if (nurseries.length > 0) {

        fillNurseryTable(nurseries);

    }

}

function clearResults() {

    $("." + countrySelected + "-container").show();
    $("#instructions").show();
    $(".results").empty();
    $(".state-title").text("");
    $(".back-btn").hide();
    $(".btns-div").show();
}

function getPlant(plantid) {
    $.get("/api/states/" + plantid, function (data) {
        console.log(data);
    });
}

function getStateId(abbrev, callback) {
    return $.get("/api/abbreviation/" + abbrev, {}, callback)
}

function getAllNurseries() {
    $.get("/api/nurseries", function (data) {
        console.log(data);
    });
}

$(".state path").hover(
    function () {
        let stateid = $(this).attr('id');
        $('#' + stateid).css({ fill: "rgb(25, 85, 25)" });
    },

    function () {
        let stateid = $(this).attr('id');
        $('#' + stateid).css({ fill: "rgb(180, 200, 180" });
    }

);

$(".state path").on("click", function () {
    let abbrev = $(this).attr('id');
    getStateId(abbrev, function (data) {
        getState(data);
    });
});

$(document).on("click", '.plant-row', function () {
    let symbol = $(this).attr('id');
    console.log(symbol);
    window.open(`https://plants.sc.egov.usda.gov/core/profile?symbol=${symbol}`, '_blank');
});

$(".country-select").on("click", function () {
    let country = $(this).attr("value");
    if (country == "usa") {
        $(".can-container").hide();
        $(".usa-container").show();
    } else if (country == "can") {
        $(".can-container").show();
        $(".usa-container").hide();
    }

    countrySelected = country;
});

$(".back-btn").on("click", function () {
    clearResults();
})

$(document).ready(function () {

})