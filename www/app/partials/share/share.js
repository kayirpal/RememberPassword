(function () {

    "use strict";

    // Define settings controller
    var ShareController = function (state, constants) {

        // current scope
        var share = this;

        share.shareOptions = [{
            classList: "fa fa-facebook",
            positionStyle: {
                top: "5em",
                left: "20em"
            },
            spinnerColor: "#3A5795"
        }, {
            classList: "fa fa-google-plus",
            positionStyle: {
                top: "5em",
                left: "10em"
            },
            spinnerColor: "#EA4335"
        }, {
            classList: "fa fa-twitter",
            positionStyle: {
                top: "15em",
                left: "10em"
            },
            spinnerColor: "#28A9E0"
        }, {
            classList: "fa fa-whatsapp",
            positionStyle: {
                top: "5em",
                left: "30em"
            },
            spinnerColor: "#4AC456"
        }, {
            classList: "fa fa-reddit-alien",
            positionStyle: {
                top: "15em",
                left: "30em"
            },
            spinnerColor: "rgb(247, 97, 70)"
        }, {
            classList: "fa fa-envelope",
            positionStyle: {
                top: "15em",
                left: "20em"
            },
            spinnerColor: "#3A5795"
        }];

        return share;
    };

    // Define enroll module
    angular.module("shareModule")

    // Enroll controller
    .controller("ShareController", ['$state', 'constants', ShareController]);
}());