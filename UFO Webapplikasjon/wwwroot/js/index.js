$(function(){
    readAllSightings();
});

function readAllSightings() {
    $.get("sighting/ReadAll", function (reports) {
        modSightings(reports);
    });
}

function modSightings(reports) {
    let ut = "<table class='table table-bordered'>" +
        "<tr>" +
        "<th scope='col'>City</th><th scope='col'>Country</th><th scope='col'>Duration</th><th scope='col'>Date Posted</th><th scope='col'>Date/Time</th><th scope='col'>Comments</th>" +
        "<th scope='col'></th><th scope='col'></th>" +
        "</tr>";
    for (let report of reports) {
        ut += "<tr>" + 
            "<td>" + report.city + "</td>" +
            "<td>" + report.country + "</td>" +
            "<td>" + report.duration + "</td>" +
            "<td>" + report.dateposted + "</td>" +
            "<td>" + report.datetime + "</td>" +
            "<td>" + report.comments + "</td>" +
            "<td> <a class='btn btn-info' href='update.html?id="+report.id+"'>Update</a></td>"+
            "<td> <button class='btn btn-danger' onclick='deleteSighting("+report.id+")'>Delete</button></td>"+
            "</tr>";
    }
    ut += "</table>";
    $("#reports").html(ut);
}

function deleteSighting(id) {
    const url = "Sighting/Delete?id="+id;
    $.get(url, function (OK) {
        if (OK) {
            window.location.href = 'index.html';
        }
        else {
            $("#err").html("Error - Try again later");
        }
    });
}