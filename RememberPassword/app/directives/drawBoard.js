/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function () {
    "use strict";

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

    // Define directive module
    angular.module("directives")

    // Add the directive to the module
    .directive("drawBoard", drawBoard);

}());