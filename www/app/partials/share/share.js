(function () {
    "use strict";

    // Define settings controller
    var ShareController = function (state, constants) {

        // current scope
        var share = this;

        share.shareOptions = [{
            classList: "fa fa-facebook",
            animateClass: "rotateInDownLeft",
            spinnerColor: "#3A5795"
        }, {
            classList: "fa fa-twitter",
            animateClass: "rotateInDownRight",
            spinnerColor: "#28A9E0"
        }, {
            classList: "fa fa-google-plus",
            animateClass: "slideInDown",
            spinnerColor: "#EA4335"
        }, {
            classList: "fa fa-reddit-alien",
            animateClass: "slideInUp",
            spinnerColor: "rgb(247, 97, 70)"
        }, {
            classList: "fa fa-whatsapp",
            animateClass: "rotateInUpRight",
            spinnerColor: "#4AC456"
        }, {
            classList: "fa fa-envelope",
            animateClass: "rotateInUpLeft",
            spinnerColor: "#3A5795"
        }];

        return share;
    };

    // Define enroll module
    angular.module("shareModule")

    // Enroll controller
    .controller("ShareController", ['$state', 'constants', ShareController]);
}());