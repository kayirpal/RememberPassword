(function () {
    "use strict";

    // Define enroll controller
    var HintController = function (constants) {

        // scope 
        var hint = this;

        function resetHintCreator(currentStep) {
            // reset hint creator
            hint.selectedHintOption = undefined;

            // remove added action button
            currentStep.customStepActions =[];
        }

        function selectHintCreator(currentStep) {

            // do post select 
            var hintOption = hint.selectedHintOption;

            var hintDetails = {
                typeId :  hintOption.id
            };

            switch (hintOption.id) {
                case 1:
                    hintDetails.hintImageData = hintOption.uploadedIconUrl || hintOption.rawFileUrl;
                    break;
                case 2:
                    hintDetails.hintImageData = hintOption.getSnapshot();
                    break;
                    //TODO: get camera and mic recordings
            }

            currentStep.hintDetails = hintDetails;

            // call step complete callback
            if (currentStep.onComplete && typeof (currentStep.onComplete) === "function") {
                currentStep.onComplete();
            }
        }

        // hint create options
        hint.createOptions = constants.createHints;

        //#region Drawing board

        hint.changeBrushType = function (newType, drawingBoard) {

            drawingBoard.selectedBrushType = newType.typeClass;

            drawingBoard.drawingModeClass = newType.modeClass;

            drawingBoard.setStrokeType(newType.modeClass);

        };


        hint.toggleBoardConfig = function (curStepData) {

            curStepData.configureBoard = !curStepData.configureBoard;
        };


        hint.positionNobe = function (color, drawingBoard) {

            var offsetX = event.offsetX,
            colorOffset = Math.floor(offsetX / 2),
            base = "rgb(",
            colorString = "",
                colorOffsetString;

            colorOffsetString = 220 - colorOffset;
            colorOffsetString = colorOffsetString.toString();
            color.colorStyle = color.colorStyle || {};

            switch (color.color) {
                case "red":
                    drawingBoard.composedColor.red = colorOffset;
                    colorString = base.concat("255,", colorOffsetString, ",", colorOffsetString, ")");
                    break;
                case "green":
                    drawingBoard.composedColor.green = colorOffset;
                    colorString = base.concat(colorOffsetString, ",255,", colorOffsetString, ")");

                    break;
                case "blue":
                    drawingBoard.composedColor.blue = colorOffset;
                    colorString = base.concat(colorOffsetString, ",", colorOffsetString, ",255)");
                    break;
            }
            drawingBoard.composedStyle = {
                color: base.concat(drawingBoard.composedColor.red, ",", drawingBoard.composedColor.green, ",", drawingBoard.composedColor.blue, ")")
            };
            color.colorStyle.color = colorString;
            color.colorStyle.left = offsetX + "px";


            drawingBoard.setStrokeColor(drawingBoard.composedStyle.color);
        };
        
        //#endregion

        // select hint creator
        hint.selectHintCreator = function (currentStep, hintOption) {

            // set hint creator
            hint.selectedHintOption = hintOption;

            // do preselects 
            switch (hintOption.id) {
                case 2:
                    hint.selectedHintOption.selectedBrushType = "fa-pencil";
                    hint.selectedHintOption.selectedWidthIndex = 0;
                    hint.selectedHintOption.selectedColorPallet = "rgba(153, 153, 153, 0.75)";
                    hint.selectedHintOption.backgroundImage = {
                        onUpload: function (imageData) {
                            if (hint.selectedHintOption.setBackground && typeof(hint.selectedHintOption.setBackground ) === "function" ) {
                                hint.selectedHintOption.setBackground(imageData);
                            }
                        }
                    };
                    break;
            }

            // append action
            currentStep.customStepActions =[{
                performAction: resetHintCreator,
                actionClass: "fa-times discardChanges"
            },{
                performAction: selectHintCreator,
                actionClass: "fa-check saveChanges"
            }];

        };
    };

    // Define enroll module
    angular.module("dashboardModule")

    // Enroll controller
    .controller("HintController", ["constants", HintController]);
}());