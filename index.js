$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/OriginCodeAcademy/Cohort10/master/Projects/04-SanDiegoTopSpots/topspots.json",
    function (data) {
        var tr;
        for (var i = 0; i < data.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + data[i].name + "</td>");
            tr.append("<td>" + data[i].description + "</td>");
            tr.append("<td>" + '<a href="https://www.google.com/maps/place/' + data[i].location + '">' + data[i].location + '</a>'+ "</td>");
            $('table').append(tr);
        }
    });
});
