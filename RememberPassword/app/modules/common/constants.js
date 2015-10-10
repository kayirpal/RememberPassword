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

    // Sub sites
    constants.subSites = [{
        name: "Home",
        isAuthRequired: true,
        iconClasses: ["fa", "fa-home"],
        subSiteId: 1
    }, {
        iconClasses: ["fa", "fa-sign-in"],
        isAuthRequired: false,
        name: "Login",
        subSiteId: 2
    }];

    // Dummy user object
    constants.dummyUser = {
        name: "",
        gender: "male",
        genderClass: ["fa", "fa-toggle-off"],
        avatarIcon: ["fa", "fa-male"],
        ageGroup: "18 - 20 years",
        weightGroup: "25 - 30 Kg"
    };

    // Animation classes
    constants.homeFormClasses = ["form-group", "animated", "zoomIn", "male-selected"];

    constants.genderClasses = ["fa fa-toggle-off", "fa fa-toggle-on"];

    constants.ageGroups = ["11 - 18 Years"
    , "19 - 30 Years"
    , "31 - 45 Years"
    , "45 - 60 Years"
    , "61 and above"];

    constants.weightGroups = [
    " 25 - 35 Kg",
    " 35 - 45 Kg",
    " 45 - 50 Kg",
    " 50 - 55 Kg",
    " 55 - 60 Kg",
    " 60 - 65 Kg",
    " 65 - 70 Kg",
    " 70 - 80 Kg",
    " 80 - 90 Kg",
    " 90 and above"
    ];

    // Enroll module constants
    constants.enrollFormClasses = ["form-group", "animated", "fadeInDown"];

    constants.oAuthClasses = ["connectOptionGrid", "animated", "zoomIn"];


    // Main app controller 
    constants.userActionClasses = ["userActions"];

    // Reg-Exp for form validations
    constants.validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    constants.passSteps = [{
        id: 1,
        nextStepIndex: 1,
        stepClass: "savePassword",
        primaryHeader: "Set icon",
        iconCreatorTypes: [{
            id: 1,
            title: "Type it",
            typeClass: "fa-keyboard-o"
        }, {
            id: 2,
            title: "Browse it",
            typeClass: "fa-file-image-o"
        }, {
            id: 3,
            title: "Select it",
            typeClass: "fa-th-large"
        }, {
            title: "Capture it",
            id: 4,
            typeClass: "fa-camera"
        }],
        sampleIcons: ["fa-facebook", "fa-credit-card", "fa-gamepad", "fa-key", "fa-money", "fa-mobile", "fa-phone", "fa-file-word-o", "fa-simplybuilt", "fa-skyatlas", "fa-adjust", "fa-user-secret", "fa-whatsapp", "fa-connectdevelop", "fa-sellsy", "fa-facebook-official", "fa-heartbeat"],
        headerClass: "fa-eye",
        passStrengthClass: "",
        secondaryHeader: ""
    }, {
        id: 2,
        nextStepIndex: 2,
        stepClass: "savePassword",
        primaryHeader: "Password !!!",
        headerClass: "fa-key",
        passStrengthClass: "",
        secondaryHeader: "Trust me, i'll keep it safe"
    }, {
        id: 3,
        nextStepIndex: 0,
        stepClass: "createPassHint",
        primaryHeader: "Set hints",
        headerClass: "fa-lightbulb-o",
        createHints: [{
            wrapperClass: "selectPicture",
            iconClass: "fa-file-image-o",
            header: "Sherlock mode !!!",
            id: 1
        }, {
            wrapperClass: "drawPicture",
            iconClass: "fa-paint-brush",
            brushWidths: ["font-14", "font-19", "font-24", "font-31", "font-39"],
            selectedBrushWidth: "font-14",
            brushTypes: ["fa-pencil", "fa-paint-brush", "fa-eraser"],
            colorPallet: ["#DD4E4E", "#F52", "#0CB", "rgb(76, 171, 82)", "rgb(193, 30, 82)", "rgb(193, 30, 21)"],
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
        }],
        secondaryHeader: ""
    }];

    // Create directive module under app 
    angular.module('Constants', [])

    // add the constants 
    .constant("constants", constants);
} ());