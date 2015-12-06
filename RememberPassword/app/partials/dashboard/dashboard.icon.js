(function () {

    "use strict";

    // Define enroll controller
    var IconController = function (constants) {

        var icon = this;

        function resetIconCreator(currentStep) {

            icon.selectedIconCreator = undefined;

            // append action
            currentStep.customStepActions = [];
        }

        function setIcon(currentStep) {

            // do post select 
            var iconCreator = icon.selectedIconCreator;

            var iconDetails = {
                typeId: iconCreator.id,
                iconStyle: {}
            };

            switch (iconCreator.id) {
                case 1:
                    iconDetails.iconStyle = iconCreator.iconStyle;
                    iconDetails.iconText = iconCreator.iconText;
                    break;
                case 2:
                    iconDetails.iconStyle.background = "url("+ iconCreator.iconText+") center no-repeat";
                    break;
                case 3:
                    iconDetails.iconClass = iconCreator.iconClass;
                    break;
                default:
                    iconDetails.iconText = "Ks";
                    break;
                    //TODO: get camera 
            }
            currentStep.iconDetails = iconDetails;

            // call step complete callback
            if (currentStep.onComplete && typeof (currentStep.onComplete) === "function") {
                currentStep.onComplete();
            }
        }

        // icon creator options
        icon.createIconOptions = constants.createIconOptions;


        //Icon creator
        icon.changeIconCreatorType = function (iconCreatorType, currentStep) {

            icon.selectedIconCreator = iconCreatorType;

            // do preselects 
            switch (iconCreatorType.id) {
                case 1:
                    icon.selectedIconCreator.nobeStyle = undefined;
                    icon.selectedIconCreator.iconStyle = undefined;
                    icon.selectedIconCreator.iconText = "";
                    break;

                case 2:
                    icon.selectedIconCreator.rawFileUrl = undefined;
                    icon.selectedIconCreator.uploadedIconUrl = undefined;
                    break;
                case 3:
                    icon.selectedIconCreator.iconClass = "";
                    break;
            }
            // append action
            currentStep.customStepActions = [{
                performAction: resetIconCreator,
                actionClass: "fa-times discardChanges"
            }, {
                performAction: setIcon,
                actionClass: "fa-check saveChanges"
            }];

        };

        icon.setIconBackgroundColor = function (selectedIconCreator) {

            var offsetX = event.offsetX,
                offset,
                colorString = "",
                textColor = "";

            offset = offsetX / 75;

            offsetX += 10;
            console.log(offsetX);
            console.log(offset);

            selectedIconCreator.nobeStyle = {
                left: offsetX + "px"
            };

            if (offset < 0.5) {
                offset = 1 - offset;
                colorString = "rgba(255,255,255," + offset + ")";
                textColor = "#333";
            } else if (offset < 1.5) {
                offset = offset - 0.5;
                colorString = "rgba(255,255,0," + offset + ")";
                textColor = "rgba(119, 15, 15, 0.95)";
            } else if (offset < 2.5) {
                offset = offset - 1.5;
                colorString = "rgba(255,25,0," + offset + ")";
                textColor = "rgb(255, 200, 200)";
            } else if (offset < 3.65) {
                offset = offset - 2.5;
                colorString = "rgba(25,125,0," + offset + ")";
                textColor = "rgb(255, 255, 255)";
            } else if (offset < 4.65) {
                offset = offset - 3.65;
                colorString = "rgba(0,50,255," + offset + ")";
                textColor = "rgb(255, 255, 255)";
            } else if (offset < 5.65) {
                offset = offset - 4.65 + 0.5;
                colorString = "rgba(0,20,255," + offset + ")";
                textColor = "rgb(255, 255, 255)";
            } else {
                offset = offset - 5.65 + 0.5;
                colorString = "rgba(0,0,0," + offset + ")";
                textColor = "rgb(255, 255, 255)";
            }

            selectedIconCreator.iconStyle = {
                backgroundColor: colorString,
                color: textColor
            };

            selectedIconCreator.nobeStyle.color = colorString;

        };
    };

    // Define enroll module
    angular.module("dashboardModule")

    // Enroll controller
    .controller("IconController", ["constants", IconController]);
}());
