
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function () {

    "use strict";

    // Define enroll controller
    var dashboardController = function (scope, constants, pService) {

        var allSteps = constants.passSteps,
        currentIcon,
        iconCount = 0;

        scope.icons = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

        //Common methods

        function onUploadIcon(uploadedFile) {

            var currentStep = scope.currentStep;

            var context = currentStep.uploadedIcon.context;

            if (context) {

                var imageObj = new Image();
                imageObj.height = 150;
                imageObj.width = 150;
                imageObj.src = uploadedFile;
                context.drawImage(imageObj, 0, 0, 150, 150);

                currentStep.uploadedIconUrl = 'url(' + context.canvas.toDataURL("image/png") + ')';
            }
        }

        function proceedToNextStep(currentStep) {


            switch (currentStep.id) {

                case 2:
                    // Save the password
                    pService.savePassowrd(currentStep);

                    // remove the actual password
                    currentStep.password = undefined;
                    break;

            }

            if (currentStep.nextStepIndex >= 0) {

                scope.currentStep = allSteps[currentStep.nextStepIndex];


                // set on Complete action
                scope.currentStep.onComplete = proceedToNextStep;

                scope.currentStep.onUpload = onUploadIcon;

            }
        }

        function createIcon(currentStep) {

            // add new icon
            iconCount += 1;
            currentIcon = {
                iconId: iconCount,
                iconType: currentStep.iconCreatorTypeId,
                iconText: currentStep.iconText,
                iconSrc: currentStep.uploadedIconUrl,
                iconClass: currentStep.iconClass
            };

            // add to list
            scope.icons.push(currentIcon);

            // next step
            proceedToNextStep(currentStep);
        }
        
        function addImageToBoard(image) {

            var curStepData = scope.currentStep.data,
            context = curStepData.context;

            if (context) {
                var imageObj = new Image(),
                prevComposition = context.globalCompositeOperation,
                prevGlobalAlpha = context.globalAlpha;
                context.globalAlpha = 1;
                imageObj.height = 225;
                context.globalCompositeOperation = "source-over";
                imageObj.width = 450;
                imageObj.src = image;
                context.drawImage(imageObj, 0, 0, 450, 225);
                context.globalAlpha = prevGlobalAlpha;
                context.globalCompositeOperation = prevComposition;
            }

        }
        

        function selectQuestion(currentStep) {

            currentStep.data = {};
            currentStep.createHintId = 0;
            currentStep.customStepActions = [];
            currentStep.primaryHeader = "Set hints";
            currentStep.headerClass = "fa-lightbulb-o";

        }

        // Add icons
        scope.addNewIcon = function () {

            // set current step
            scope.currentStep = angular.copy(allSteps[0]);

            // reset creator type
            scope.currentStep.iconCreatorTypeId = 0;

            // set on Complete action
            scope.currentStep.onComplete = createIcon;

        };

        // show home screen
        scope.showDashboard = function () {
            
            // hide action panel
            scope.hideUserActions();

        };


        scope.hideUserActions = function () {
            scope.currentStep = false;
        };

        // transitions


        //# region create icon 

        //#endregion

        //Icon creator
        scope.changeIconCreatorType = function (currentStep, iconCreatorType) {

            // set creator type
            currentStep.iconCreatorTypeId = iconCreatorType.id;

            // set header text
            currentStep.primaryHeader = iconCreatorType.title;

            if (iconCreatorType.id === 2) {

                currentStep.autoOpen = true;

                currentStep.onUpload = onUploadIcon;
                // set uploaded icon
                currentStep.uploadedIcon = {};
            }

            currentStep.customStepActions = [{
                actionClass: "fa-times discardChanges",
                performAction: function () {
                    currentStep.iconCreatorTypeId = 0;
                    currentStep.iconText = "";
                    currentStep.primaryHeader = "Set icon";
                    currentStep.iconClass = "";
                    currentStep.customStepActions = [];
                    currentStep.uploadedIcon = undefined;
                }
            }];

        };


        // set password

        scope.analyzePassword = function (password) {

            // strength index
            var sIndex = pService.getPasswordStrength(password),
            sClass = "";

            switch (sIndex) {
                case 0: sClass = "v-week"; break;
                case 1: sClass = "week"; break;
                case 2: sClass = "normal"; break;
                case 3: sClass = "strong"; break;
                default: sClass = "v-strong";
            }

            scope.currentStep.passStrengthClass = sClass;

        };

        scope.confirmPassword = function (currentStep) {

            if (!!currentStep.password) {
                proceedToNextStep(currentStep);
            }

        };

        // create hint

        scope.createPasswordHint = function (currentStep, createHint) {

            var data = {},
            stepActions = [];

            // set selected hint creator
            currentStep.createHintId = createHint.id;

            switch (createHint.id) {

                case 1:

                    data.questionBase = createHint.questions;

                    data.onUpload = function (uploadedFile) {

                        var context = data.context;

                        if (context) {
                            var imageObj = new Image();
                            imageObj.height = 150;
                            imageObj.width = 250;
                            imageObj.src = uploadedFile;
                            context.drawImage(imageObj, 0, 0, 250, 150);
                        }

                    };

                    break;

                case 2:

                    data.brushTypes = createHint.brushTypes;
                    data.brushWidths = createHint.brushWidths;
                    data.selectedBrushWidth = createHint.selectedBrushWidth;
                    data.colorPallet = createHint.colorPallet;
                    data.composedStyle = createHint.composedStyle;
                    data.selectedBrushType = createHint.brushTypes[0];
                    data.onUpload = addImageToBoard;
                    data.composedColor = createHint.composedColor;
                    data.colorComponents = createHint.colorComponents;
                    break;
            }
            // Add "add qestion" action
            stepActions.push({
                performAction: selectQuestion,
                actionClass: "selectQuestion fa-check-square-o"
            });
            currentStep.data = data;
            currentStep.customStepActions = stepActions;
            currentStep.primaryHeader = createHint.header;
            currentStep.headerClass = createHint.iconClass;
        };
        
        scope.traverseQuestion = function (curStepData, isNext) {

            var curQuestionIndex = curStepData.curQuestionIndex,
            noOfQuestions = curStepData.questions.length,
            lastIndex = noOfQuestions - 1;

            if (!!lastIndex) {

                if (isNext && curQuestionIndex !== lastIndex) {

                    curStepData.curQuestionIndex = curQuestionIndex + 1;


                } else if (!!curQuestionIndex) {

                    curStepData.curQuestionIndex = curQuestionIndex - 1;
                }
            }
        };


        // remove question
        scope.removeItem = function (index, array) {
            if (!!array[index]) {
                array.splice(index, 1);
            }
        };

        scope.toggleBoardConfig = function (curStepData) {

            curStepData.configureBoard = !curStepData.configureBoard;
        };


        scope.setStrokeWidth = function (widthIndex, curStepData) {

            // set selected width
            curStepData.selectedBrushWidth = curStepData.brushWidths[widthIndex];

            if (curStepData.context) {
                curStepData.context.lineWidth = Math.floor((widthIndex + 1) * 3);
            }

        };


        scope.positionNobe = function (color, curStepData) {

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
                    curStepData.composedColor.red = colorOffset;
                    colorString = base.concat("255,", colorOffsetString, ",", colorOffsetString, ")");
                    break;
                case "green":
                    curStepData.composedColor.green = colorOffset;
                    colorString = base.concat(colorOffsetString, ",255,", colorOffsetString, ")");

                    break;
                case "blue":
                    curStepData.composedColor.blue = colorOffset;
                    colorString = base.concat(colorOffsetString, ",", colorOffsetString, ",255)");
                    break;
            }
            curStepData.composedStyle = {
                color: base.concat(curStepData.composedColor.red, ",", curStepData.composedColor.green, ",", curStepData.composedColor.blue, ")")
            };
            console.log(curStepData.composedColor);
            color.colorStyle.color = colorString;
            color.colorStyle.left = offsetX + "px";

            if (curStepData.context) {
                curStepData.context.strokeStyle = curStepData.composedStyle.color;
            }
        };


        scope.setStrokeColor = function (color, curStepData) {
            curStepData.composedStyle = {
                color: color
            };
            if (curStepData.context) {
                curStepData.context.strokeStyle = color;
            }
        };


        scope.changeBrushType = function (newType, curStepData) {

            curStepData.selectedBrushType = newType;

            var context = curStepData.context;

            if (context) {

                context.globalAlpha = 1;
                context.globalCompositeOperation = "source-over";
                context.lineCap = "round";
                context.mode = newType;

                switch (newType) {
                    case "fa-pencil":
                        break;
                    case "fa-paint-brush":
                        context.globalAlpha = 0.1;
                        context.lineCap = "butt";
                        break;
                    case "fa-eraser":
                        context.globalCompositeOperation = "destination-out";
                        break;
                }
            }
        };
        scope.saveDrawnImage = function (curStepData) {

            var context = curStepData.context;

            if (context) {

                var image = context.toDataURL('image/png');

                window.open(image, "_blank");


            }

        };


    };

    // Define enroll module
    angular.module("dashboardModule", [])

    // Enroll controller
    .controller("dashboardController", ['$scope', "constants", "passwordservice", dashboardController]);

}());
