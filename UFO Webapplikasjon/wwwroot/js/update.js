$(function () {
 
    const id = window.location.search.substring(1);

    const url = "Sighting/Read?" + id;
    $.get(url, function (report) {
        $("#id").val(report.id);
        $("#city").val(report.city);
        $("#country").val(report.country);
        $("#duration").val(report.duration);
        $("#dateposted").val(report.dateposted);
        $("#datetime").val(report.datetime);
        $("#comments").val(report.comments);
    });
});


function updateSighting() {
    // Henter nåværende dato for når lagringsknappen trykkes
    let date = new Date();
    // Formaterer datoen til mm/dd/yyyy
    let formatDate = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();

    // Henter og kombinerer Streng og Select-verdi
    let durationNumber = $("#durationNumber").val();
    let durationUnit = $("#durationUnit").val();
    let duration = durationNumber + durationUnit;

    const report = {
        id: $("#id").val(),
        city: $("#city").val(),
        country: $("#country").val(),
        duration: duration,
        dateposted: formatDate,
        datetime: $("#datetime").val(),
        comments: $("#comments").val(),
    };
    $.post("Sighting/Update", report, function (OK) {
        if (OK) {
            window.location.href = './index.html';
        }
        else {
            $("#err").html("Error - Try again later");
        }
    });
}