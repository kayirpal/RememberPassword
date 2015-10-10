(function () {

    "use strict";

    // Define enroll controller
    var homeController = function ($scope, $location, constants) {

        // If no user has been identified, 
        if (!constants.isUserFound) {
            $location.path("/Login");
            return;
        }

        // Get current user
        $scope.user = constants.dummyUser;

        // update 
        $scope.user.name = constants.user.name;
        $scope.user.gender = constants.user.gender;

        // Form classes
        $scope.formClasses = constants.homeFormClasses;

        var genderClasses = constants.genderClasses,
                ageGroups = constants.ageGroups,
                 weightGroups = constants.weightGroups,
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
                $scope.user.gender = "female";
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
        if (!!$scope.user.gender && $scope.user.gender === 'female') {
            $scope.changeGender($scope.user.gender);
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


        // load dashboard        
        $scope.loadDashboard = function(){

            $location.path("/dashboard");
        };


        // Weight group slider transform property
        $scope.avatarTransform = "transform: scaleX(1) scaleY(1);";

        scaleX = 2.35;
        scaleY = 2.3;
        avatarWeightIndex = 2;
        avatarHeightIndex = 3;
        // Weight group slider transform property
        $scope.avatarTransform = createAvatarTransform();

    };

    // Define enroll module
    angular.module("homeModule", [])

        // Enroll controller
        .controller("homeController", ['$scope', '$location', "constants", homeController]);

}());
