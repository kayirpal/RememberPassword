"use strict";

// Enroll controller
app.controller("enrollController", ['$scope', '$location', '$rootScope', 'authService','constants', function ($scope, $location, $rootScope, $authService,constants) {

    // Form classes
    $scope.formClasses = ["form-group", "animated", "fadeInDown"];

    // OAuth classes
    $scope.oAuthClasses = ["connectOptionGrid", "animated", "zoomIn"];

    $scope.dummyFunc = function(){
        if(!!constants.isUserFound){
            $location.path("/home");
            $scope.$apply();
        }
    };
    
    // Enroll user
    $scope.enroll = function (oAuthMode) {
        
        // Check if form is filled
        if (!!$scope.uName && (!!oAuthMode || !!$scope.uPassword)) {
            
            // Save user details in root context
            $rootScope.user = {
                name: $scope.uName,
                gender: $scope.gender||'male'
            };

            // Update classes for the form elements
            $scope.formClasses.pop();
            $scope.oAuthClasses.pop();
            $scope.formClasses.push("fadeOutDown");
            $scope.oAuthClasses.push("zoomOutDown");
            
        }
    };

    $scope.oAuthService = function (serviceProvider) {

        $authService.oAuth(serviceProvider).then(
            function (response) {
                console.log(response);
                constants.isUserFound = true;
                $scope.uName = response.name;
                $scope.gender = response.gender === 0 ? 'male' : 'female';
                $scope.enroll(true);
                //$scope.$apply();
            },
            function (error) {
                console.log("Failed to authenticate using oAuth");
            });
    };

}]);
