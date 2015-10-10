/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function () {
    "use strict";

    // Define directive
    var animationEnd = function () {

        // define directive object
        var animationEndDirective = {};

        // Set restrict
        // Restrict to element and attribute
        animationEndDirective.restrict = "A";


        // define linking funtion
        /*
        @param {object} scope of the elmenet
        @param {object} the elmenet
        @param {object} attribute of the elmenet
        */
        animationEndDirective.link = function (scope, element, attribute) {

            var el = element[0];

            el.addEventListener(
                'webkitAnimationEnd',
                function (e) {
                    if (scope[attribute.animationEnd]) {
                        scope[attribute.animationEnd](element);
                    }
                    return false;
                },
                false
                );
        };

        return animationEndDirective;
    };

    var ngCanvas = function () {

        var canvas = {};

        canvas.restrict = "A";


        canvas.link = function ($scope, $element, $attribute) {

            var element = $element[0],
            context = element.getContext('2d'),
            avatar = new Image();

            avatar.onload = function () {


                $scope.canvasSize = {

                    height: this.height,
                    width: this.width

                };

                $scope.$apply();

                context.drawImage(avatar, 0, 0);

            };

            // Src
            avatar.src = $scope.avatarUrl;


            element.onclick = function (event) {

                console.log(event);

            };

        }

        return canvas;
    };

    var drawBoard = function () {

        var canvas = {};

        canvas.restrict = "A";

        canvas.scope = {
            drawBoard: "="
        };

        canvas.link = function ($scope, $element, $attribute) {


            // $scope.drawBoard.api = $element.sketch({defaultColor: "rgb(100,100,100)"});

            var canvas = $element[0];
            var context = canvas.getContext('2d');


            // doodle
            context.lineWidth = "3";
            context.lineJoin = "round";
            context.lineCap = "round";
            context.globalAlpha = 0.5;
            context.strokeStyle = "rgba(100,100,100,1)";
            var isActive = false,
            prevCords;



            function startDraw() {

                var coordinate = {};

                isActive = true;
                coordinate.x = event.offsetX || event.layerX - canvas.offsetLeft;
                coordinate.y = event.offsetY || event.layerY - canvas.offsetTop;

                prevCords = coordinate;
                context.moveTo(prevCords.x, prevCords.y);
                context.beginPath();

            }

            function draw(event) {
                if (isActive) {
                    var coordinate = {};

                    coordinate.x = event.offsetX || event.layerX - canvas.offsetLeft;
                    coordinate.y = event.offsetY || event.layerY - canvas.offsetTop;

                    context.lineTo(coordinate.x, coordinate.y);
                    context.stroke();
                    context.moveTo(prevCords.x, prevCords.y);



                    context.closePath();
                    prevCords = coordinate;
                }
            }

            function endDraw(event) {
                isActive = false;
                context.closePath();
            }

            // canvas.addEventListener("click",createRegion,false);
            canvas.addEventListener('mousedown', startDraw, false);
            canvas.addEventListener('mousemove', draw, false);
            canvas.addEventListener('mouseup', endDraw, false);

            $scope.drawBoard.saveDrawnImage = function () {

                if (canvas) {

                    var image = canvas.toDataURL('image/png');

                    window.open(image, "_blank");
                }
            };
            // set context for editing
            $scope.drawBoard.context = context;

        };

        return canvas;
    };

    var fileUpload = function () {

        var directive = {};

        directive.restrict = "A";
        directive.priority = 1;

        directive.scope = {
            fileUpload: "="
        };


        directive.link = function (scope, element, attr) {

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

                    if (scope.fileUpload && scope.fileUpload.onUpload && typeof (scope.fileUpload.onUpload) === "function") {
                        scope.fileUpload.onUpload(uploadedFile);
                        scope.$apply();
                    }

                };
                reader.readAsDataURL(file);

            };

            scope.fileUpload = scope.fileUpload || {};

            element.append(uploader);

        };

        return directive;
    };

    var initUpload = function () {

        return {
            priority: 2,
            link : function (scope, element, attr) {
                element.trigger("click");
            }
        };

    };

    var extractIcon = function () {

        return {

            scope : {
                extractIcon: "="
            },
            link : function (scope, element, attr) {

                scope.extractIcon = scope.extractIcon||{};

                var canvas = element[0];
                var context = canvas.getContext('2d');
                scope.extractIcon.context = context;

                

            }
        };

    };
    
    
    // Define directive module
    angular.module("Directive", [])

    // Add the directive to the module
    .directive("animationEnd", animationEnd)
    
    // Add the directive to the module
    .directive("drawBoard", drawBoard)
    // Add the directive to the module
    .directive("initUpload", initUpload)
    // Add the directive to the module
    .directive("fileUpload", fileUpload)

    .directive("extractIcon", extractIcon)

    // Add the directive to the module
    .directive("ngCanvas", ngCanvas);

} ());