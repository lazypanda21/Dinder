$(function() {

    var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#current-date").append(currentDate);
}