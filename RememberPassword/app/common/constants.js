(function () {
    "use strict";

    // declare the constructor function
    var constants = {};

    // site name 
    constants.siteName = "Kirpal Singh";

    // Is user found
    constants.isUserFound = true;

    constants.user = {
        name: "Kirpal Singh",
        gender: "male"

    };

    // Enroll module constants
    constants.enrollFormClasses = ["form-group", "animated", "fadeInDown"];

    constants.oAuthClasses = ["connectOptionGrid", "animated", "zoomIn"];


    // Main app controller 
    constants.userActionClasses = ["userActions"];

    // Reg-Exp for form validations
    constants.validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // create hints options
    constants.createHints = [{
        wrapperClass: "selectPicture",
        iconClass: "fa-file-image-o",
        autoOpen: true,
        header: "Sherlock mode !!!",
        id: 1
    }, {
        wrapperClass: "drawPicture",
        iconClass: "fa-paint-brush",
        brushWidths: ["font-14", "font-19", "font-24", "font-31", "font-39"],
        selectedBrushWidth: "font-14",
        brushTypes: [{
            modeClass: "pencilMode",
            typeClass: "fa-pencil"
        }, {
            modeClass: "paintMode",
            typeClass: "fa-paint-brush"
        }, {
            modeClass: "eraserMode",
            typeClass: "fa-eraser"
        }],
        colorPallet: ["rgba(153, 153, 153, 0.75)", "#DD4E4E", "#F52", "#0CB", "rgb(76, 171, 82)", "rgb(193, 30, 82)", "rgba(193, 164, 21, 0.81)"],
        composedColor: { red: 100, green: 100, blue: 100 },
        composedStyle: { color: "rgb(100,100,100)" },
        colorComponents: [{ color: "red", colorClass: "redComponent" }, { color: "green", colorClass: "greenComponent" }, { color: "blue", colorClass: "blueComponent" }],
        header: "Picasso mode !!!",
        id: 2
    }, {
        wrapperClass: "capturePicture",
        iconClass: "fa-camera",
        header: "Paparazzi mode !!!",
        id: 3
    }, {
        wrapperClass: "recordSound",
        iconClass: "fa-microphone",
        header: "Rockstar mode !!!",
        id: 4
    }];


    constants.createIconOptions = [{
        id: 1,
        title: "Type it",
        typeClass: "fa-keyboard-o"
    }, {
        id: 2,
        title: "Browse it",
        autoOpen: true,
        typeClass: "fa-file-image-o"
    }, {
        id: 3,
        title: "Select it",
        faIconList : ["fa-facebook", "fa-credit-card", "fa-gamepad", "fa-key", "fa-money", "fa-mobile", "fa-phone", "fa-file-word-o", "fa-simplybuilt", "fa-skyatlas", "fa-adjust", "fa-user-secret", "fa-whatsapp", "fa-connectdevelop", "fa-sellsy", "fa-facebook-official", "fa-heartbeat"],
        typeClass: "fa-th-large"
    }, {
        title: "Capture it",
        id: 4,
        typeClass: "fa-camera"
    }];

    

    constants.passSteps = [{
        id: 1,
        state: "dashboard.secret",
        nextStepIndex: 1,
        stepClass: "savePassword",
        primaryHeader: "Hushhhhhh !!",
        headerClass: "fa-key",
        secondaryHeader: ""
    }, {
        id: 2,
        nextStepIndex: 2,
        state: "dashboard.hint",
        stepClass: "createPassHint",
        primaryHeader: "Set hints",
        headerClass: "fa-lightbulb-o",
        secondaryHeader: ""
    }, {
        id: 3,
        state: "dashboard.icon",
        stepClass: "savePassword",
        primaryHeader: "Set icon",        
        headerClass: "fa-eye",
        passStrengthClass: "",
        secondaryHeader: ""
    }];

    // Create directive module under app 
    angular.module('common')

    // add the constants 
    .constant("constants", constants);
}());