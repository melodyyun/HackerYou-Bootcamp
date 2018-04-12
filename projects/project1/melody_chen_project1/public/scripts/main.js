"use strict";

var app = {};

app.nav = function () {
    var navHome = $("#home");
    navHome.on("click", function () {
        console.log("clicked on nav bar");
    });
};

app.init = function () {
    app.nav();
};

// document ready;
$(document).ready(function () {
    app.init();
});