(function () {
    "use strict";

    // Define dashboard controller
    var dashboardController = function (root, state, constants, pService, iconService) {

        var dashboard = this;

        var allSteps = constants.passSteps,
        currentIcon,
        iconCount = 0;

        dashboard.icons = [];

        //Common methods

        function onUploadIcon(uploadedFile) {

            var currentStep = dashboard.currentStep;

            var context = currentStep.uploadedIcon.context;

            if (context) {

                var imageObj = new Image();
                imageObj.height = context.canvas.height;
                imageObj.width = context.canvas.width;
                imageObj.src = uploadedFile;
                context.drawImage(imageObj, 0, 0, context.canvas.width, context.canvas.height);

                currentStep.uploadedIconUrl = 'url(' + context.canvas.toDataURL("image/png") + ')';
            }
        }

        // add new icon
        function createIcon(currentStep) {

            iconCount += 1;

            currentIcon = {
                iconId: iconCount,
                message: currentStep.message,
                iconDetails: {
                    iconText: "Ks"
                }
            };

            // add to list
            dashboard.icons.push(currentIcon);

        }

        function proceedToNextStep() {

            var currentStep = dashboard.currentStep;

            switch (currentStep.id) {

                case 1:

                    // create a new icon
                    createIcon(currentStep);

                    break;

                case 2:

                    currentIcon.hintDetails = currentStep.hintDetails;
                    break;

                case 3:

                    currentIcon.iconDetails = currentStep.iconDetails;
                    break;

            }

            // update saved list
            iconService.saveIcons(dashboard.icons);

            if (currentStep.nextStepIndex >= 0) {

                // new current step
                currentStep = allSteps[currentStep.nextStepIndex];

                // set on Complete action
                currentStep.onComplete = proceedToNextStep;

                // reset step actions
                currentStep.customStepActions = [];

                currentStep.onUpload = onUploadIcon;

                dashboard.currentStep = currentStep;
                if (currentStep.state) {
                    state.go(currentStep.state);
                }
            } else {
                dashboard.hideUserActions();
            }

        }
        
        function addImageToBoard(image) {

            var curStepData = dashboard.currentStep.data,
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
            currentStep.primaryHeader = "Set hints";
            currentStep.headerClass = "fa-lightbulb-o";

        }

        // Add icons
        dashboard.addNewIcon = function () {

            // reset current step
            dashboard.currentStep = angular.copy(allSteps[0]);

            // set on Complete action
            dashboard.currentStep.onComplete = proceedToNextStep;

            // show enter secret form
            if (dashboard.currentStep.state) {
                state.go(dashboard.currentStep.state);
            }
        };

        // show home screen
        dashboard.showDashboard = function () {

            // hide action panel
            dashboard.hideUserActions();

        };

        dashboard.hideUserActions = function () {
            dashboard.currentStep = undefined;
            state.go("dashboard");
        };

        //# region create icon 

        //#endregion

        // set password

        dashboard.analyzePassword = function (password) {

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

            dashboard.currentStep.passStrengthClass = sClass;

        };

        dashboard.confirmPassword = function (currentStep) {

            if (!!currentStep.password) {
                proceedToNextStep(currentStep);
            }

        };

        // create hint

        dashboard.createPasswordHint = function (currentStep, createHint) {

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

        dashboard.traverseQuestion = function (curStepData, isNext) {

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
        dashboard.removeItem = function (index, array) {
            if (!!array[index]) {
                array.splice(index, 1);
            }
        };

        function deleteIcon(currentStep) {

            var iconIndex = dashboard.icons.length;

            if (currentIcon && iconIndex) {
                
                while (iconIndex >= 0) {
                    iconIndex -= 1;
                    var icon = dashboard.icons[iconIndex];

                    if (icon.iconId === currentIcon.iconId) {
                        dashboard.icons.splice(iconIndex, 1);
                        break;
                    }
                }
            }

            dashboard.currentStep = undefined;

            // update saved list
            iconService.saveIcons(dashboard.icons);

            state.go("dashboard");

        }

        dashboard.guessPassword = function (icon) {

            // set current icon in service
            currentIcon = icon;

            // set current step
            dashboard.currentStep = constants.guessSecret;

            // set secret word
            dashboard.currentStep.message = icon.message;

            // set hint details
            dashboard.currentStep.hintDetails = icon.hintDetails;

            dashboard.currentStep.customStepActions = [{
                performAction: deleteIcon,
                actionClass: "deleteIcon fa-trash-o"
            }];

            // goto guess panel
            state.go("dashboard.guess");
        };

        // init
        (function () {
            var currentState = state.current || {};

            // get saved icons
            var savedIcons = iconService.getIcons();

            if(savedIcons && savedIcons.length){
                dashboard.icons = savedIcons;
            }

            if (currentState.name && currentState.name !== "dashboard") {

                if (currentState.name === "dashboard.secret") {

                    // add new icon
                    dashboard.addNewIcon();
                } else if (currentState.name === "dashboard.guess") {

                    dashboard.guessPassword();
                } else {

                    state.go("dashboard");
                }
            }
        }());
    };

    // Define enroll module
    angular.module("dashboardModule")

    // Enroll controller
    .controller("dashboardController", ["$rootScope", "$state", "constants", "secretservice", "iconservice", dashboardController]);

}());