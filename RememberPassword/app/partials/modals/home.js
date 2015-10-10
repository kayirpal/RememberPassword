"use strict";

// Enroll controller
app.controller("homeController", function ($scope, $location, $rootScope) {

    var user  = $rootScope.user;

    // If no user has been identified, 
    if (!user) {
        $location.path("/enroll");
    }

    // Get current user
    $scope.user = {
        name: user.name ,//$rootScope.user.name
        gender: "male",
        genderClass: ["fa", "fa-toggle-off"],
        avatarIcon:  ["fa", "fa-male"],
        ageGroup: "18 - 20 years",
        weightGroup: "25 - 30 Kg"
    };


    // Form classes
    $scope.formClasses = ["form-group", "animated", "zoomIn","male-selected"];    
    
    var genderClasses = ["fa fa-toggle-off", "fa fa-toggle-on"],
            ageGroups = ["11 - 18 Years"
                , "19 - 30 Years"
                , "31 - 45 Years"
                , "45 - 60 Years"
                , "61 and above"],
             weightGroups = [
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
             ],
             avatarAgeIndex = 0,
             avatarHeightIndex = 0,
             avatarWeightIndex = 0,
             scaleX = 1,
             scaleY = 1;

    // Create transformation property string 
    var createAvatarTransform = function () {

        // Base string
        var transformStr = "-webkit-transform: ";

        // create transform property string
        // Add scale X
        transformStr = transformStr.concat("scaleX(", scaleX, ") ");

        // Add scale
        transformStr = transformStr.concat("scaleY(", scaleY, ") ;");

        // return transformation string
        return transformStr;

    };

    // Age group slider transform property
    $scope.ageSliderTransform = "-webkit-transform: translateX(0px) scale(1);";

    // Slide age group slider
    $scope.changeGender = function (gender) {

        if (gender && gender === $scope.user.gender) {
            return;
        }

        // Remove previous class 
        $scope.formClasses.pop();
        $scope.user.avatarIcon.pop();

        // Check current status
        if ($scope.user.gender === "male") {
            $scope.user.gender =  "female";
            $scope.user.genderClass = ["fa", "fa-toggle-on"];
            // Add new class 
            $scope.user.avatarIcon.push("fa-female");
            $scope.formClasses.push("female-selected");
        } else {
            $scope.user.gender = "male";
            $scope.user.genderClass = ["fa", "fa-toggle-off"];
            // Add new class 
            $scope.user.avatarIcon.push("fa-male");
            $scope.formClasses.push("male-selected");
        }

    };

    // Select correct gender
    if (!!$rootScope.user.gender && $rootScope.user.gender === 'female') {
        $scope.changeGender($rootScope.gender);
    }

    // Slide age group slider
    $scope.changeAgeGroup = function (increase) {

        // Update age group index
        avatarAgeIndex += increase;

        // Check for boundaries
        if (avatarAgeIndex < 0 || avatarAgeIndex > 4) {
            // Update age group index
            avatarAgeIndex -= increase;
            return;
        }
        // Update user group
        $scope.user.ageGroup = ageGroups[avatarAgeIndex];

        // create transform property string

        // Base string
        var transform = "-webkit-transform: ",
            // Base offset for transformation
            translateOffset = 35 * (avatarAgeIndex),
            scaleOffset = 0.25 * (avatarAgeIndex + 4);

        // Add translate X
        transform = transform.concat("translateX(", translateOffset, "px) ");

        // Add scale
        transform = transform.concat("scale(", scaleOffset, ") ;");

        // Update age group slider transform property
        $scope.ageSliderTransform = transform;
    };    

    // Slide weight group slider
    $scope.changeWeight = function (increase) {

        // Update age group index
        avatarWeightIndex += increase;

        // Check for boundaries
        if (avatarWeightIndex < 0 || avatarWeightIndex > 9) {
            // Update age group index
            avatarWeightIndex -= increase;
            return;
        }

        // Set scale X property    
        scaleX = avatarWeightIndex * 0.65 + 1;

        // Update user group
        $scope.user.weightGroup = weightGroups[avatarWeightIndex];

        // Update age group slider transform property
        $scope.avatarTransform = createAvatarTransform();
    };

    // Slide weight group slider
    $scope.changeHeight = function (increase) {

        // Update age group index
        avatarHeightIndex += increase;

        // Check for boundaries
        if (avatarHeightIndex < 0 || avatarHeightIndex > 9) {
            // Update age group index
            avatarHeightIndex -= increase;
            return;
        }

        // Set scale Y property    
        scaleY = avatarHeightIndex * 0.45 + 1;

        // Update user group
        $scope.user.weightGroup = weightGroups[avatarHeightIndex];

        // Update age group slider transform property
        $scope.avatarTransform = createAvatarTransform();
    };


    // Weight group slider transform property
    $scope.avatarTransform = "transform: scaleX(1) scaleY(1);";

    scaleX = 2.35;
    scaleY = 2.3;
    avatarWeightIndex = 2;
    avatarHeightIndex = 3;
    // Weight group slider transform property
    $scope.avatarTransform = createAvatarTransform();

});