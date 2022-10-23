$(function () {
    // hent kunden med kunde-id fra url og vis denne i skjemaet
    const id = window.location.search.substring(1);

    const url = "Sighting/Read?" + id;
    $.get(url, function (report) {
        $("#id").val(report.id); // må ha med id inn skjemaet, hidden i html
        $("#city").val(report.city);
        $("#country").val(report.country);
        $("#duration").val(report.duration);
        $("#dateposted").val(report.dateposted);
        $("#datetime").val(report.datetime);
        $("#comments").val(report.comments);
    });
});


function updateSighting() {
    const report = {
        id: $("#id").val(), // må ha med denne som ikke har blitt endret for å vite hvilken kunde som skal endres
        city: $("#city").val(),
        country: $("#country").val(),
        duration: $("#duration").val(),
        dateposted: $("#dateposted").val(), // skal det være mulig å endre på utgivelsesdatoen (admin)
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