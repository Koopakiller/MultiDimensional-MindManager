/// <reference path="typings/jquery/jquery.d.ts" />

//$(document).ready(() => {
//    alert('test document');
//});

$("#submitButton").click(() => {
    //http://localhost:54583
    var selected = $("#select").find(":selected");
    var url = "/Home/GetAssociated?table=" +
        selected.data("table") +
        "&column=" +
        selected.data("column") +
        "&value=" +
        $("#numberBox").val();
    $.getJSON(url,
        null,
        data => {

        });
});