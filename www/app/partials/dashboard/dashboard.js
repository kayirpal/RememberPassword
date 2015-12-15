(function () {
    "use strict";

    // Define dashboard controller
    var dashboardController = function (state, constants, pService, iconService) {

        var dashboard = this;

        var allSteps = constants.passSteps,
        currentIcon;

        dashboard.icons = [];

        //Common methods

        // add new icon
        function createIcon(currentStep) {

            var id = pService.generateGUID();

            currentIcon = {
                iconId: id,
                message: currentStep.message,
                iconDetails: {
                    iconText: "Ks"
                }
            };

            // add to list
            dashboard.icons.push(currentIcon);

        }

        // goto next step
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

                dashboard.currentStep = currentStep;

                if (currentStep.state) {
                    state.go(currentStep.state);
                }
            } else {
                dashboard.hideUserActions();
            }

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

        // hide user action window
        dashboard.hideUserActions = function () {
            dashboard.currentStep = undefined;
            state.go("dashboard");
        };

        //# region create icon 

        //#endregion

        function deleteIcon() {

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

            if (savedIcons && savedIcons.length) {
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
    .controller("dashboardController", ["$state", "constants", "secretservice", "iconservice", dashboardController]);

}());