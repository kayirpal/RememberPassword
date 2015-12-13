/*jshint -W001 */
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function () {
    "use strict";

    var fileUpload = function () {

        var directive = {};

        directive.restrict = "A";
        directive.priority = 1;

        directive.scope = {
            fileUpload: "="
        };
        
        directive.link = function (scope, element) {

            var uploader = document.createElement("input");

            uploader.type = "file";
            uploader.className = "ng-hide";

            uploader.onchange = function (event) {

                var curElement = event.currentTarget,
                files = curElement.files,
                file = files[0];

                var reader = new FileReader();
                reader.onload = function (ev) {

                    var uploadedFile = ev.currentTarget.result;

                    scope.fileUpload.rawFileUrl = uploadedFile;
                    
                    //if (scope.fileUpload && scope.fileUpload.onUpload && typeof (scope.fileUpload.onUpload) === "function") {
                    //    scope.fileUpload.onUpload(uploadedFile);
                    //}

                    scope.$apply();
                };
                reader.readAsDataURL(file);

                scope.fileUpload.rawFileUrl = undefined;
                scope.$apply();

            };

            scope.fileUpload = scope.fileUpload || {};

            element.append(uploader);
            if (scope.fileUpload.autoOpen) {
                uploader.click();
            }

        };

        return directive;
    };
        
    // Define directive module
    angular.module("directives")

    // Add the directive to the module
    .directive("fileUpload", fileUpload);

} ());