(function () {

    "use strict";

    // Define settings controller
    var SettingsController = function (state, constants) {

        // current scope
        var settings = this;

        settings.fontStyle = {
            color: "#fff",
            left: "25px"
        };

        function getNobeStyle(event) {

            var offsetX = event.offsetX,
                offset,
                colorString = "";

            offset = offsetX / 75;

            offsetX += 10;

            var nobeStyle = {
                left: offsetX + "px"
            };

            if (offset < 0.5) {
                offset = 1 - offset;
                colorString = "rgba(255,255,255," + offset + ")";
            } else if (offset < 1.5) {
                offset = offset - 0.5;
                colorString = "rgba(255,255,0," + offset + ")";
            } else if (offset < 2.5) {
                offset = offset - 1.5;
                colorString = "rgba(255,25,0," + offset + ")";
            } else if (offset < 3.65) {
                offset = offset - 2.5;
                colorString = "rgba(25,125,0," + offset + ")";
            } else if (offset < 4.65) {
                offset = offset - 3.65;
                colorString = "rgba(0,50,255," + offset + ")";
            } else if (offset < 5.65) {
                offset = offset - 4.65 + 0.5;
                colorString = "rgba(0,20,255," + offset + ")";
            } else {
                offset = offset - 5.65 + 0.5;
                colorString = "rgba(0,0,0," + offset + ")";
            }

            nobeStyle.color = colorString;

            return nobeStyle;
        }

        settings.setFontColor = function (event) {

            settings.fontStyle = getNobeStyle(event);
        };
        settings.setBackgroundColor = function (event) {

            settings.backgroundStyle = getNobeStyle(event);
        };
        settings.setIconColor = function (event) {

            settings.iconStyle = getNobeStyle(event);
        };
            
        return settings;
    };

    // Define enroll module
    angular.module("settingsModule")

    // Enroll controller
    .controller("SettingsController", ['$state', 'constants', SettingsController]);
}());