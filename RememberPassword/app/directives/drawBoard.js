/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function () {
    "use strict";

    var drawBoard = function () {

        var canvas = {};

        canvas.restrict = "A";

        canvas.scope = {
            drawBoard: "="
        };

        canvas.link = function ($scope, $element) {


            // $scope.drawBoard.api = $element.sketch({defaultColor: "rgb(100,100,100)"});

            var canvasElement = $element[0];
            var context = canvasElement.getContext('2d');


            // doodle
            context.lineWidth = "3";
            context.lineJoin = "round";
            context.lineCap = "round";
            context.globalAlpha = 0.5;
            context.strokeStyle = "rgba(100,100,100,1)";
            var isActive = false,
            prevCords;



            function startDraw(event) {

                var coordinate = {};

                isActive = true;
                coordinate.x = event.offsetX || event.layerX - canvasElement.offsetLeft;
                coordinate.y = event.offsetY || event.layerY - canvasElement.offsetTop;

                prevCords = coordinate;
                context.moveTo(prevCords.x, prevCords.y);
                context.beginPath();

            }

            function draw(event) {
                if (isActive) {
                    var coordinate = {};

                    coordinate.x = event.offsetX || event.layerX - canvasElement.offsetLeft;
                    coordinate.y = event.offsetY || event.layerY - canvasElement.offsetTop;

                    context.lineTo(coordinate.x, coordinate.y);
                    context.stroke();
                    context.moveTo(prevCords.x, prevCords.y);



                    context.closePath();
                    prevCords = coordinate;
                }
            }

            function endDraw() {
                isActive = false;
                context.closePath();
            }

            // canvas.addEventListener("click",createRegion,false);
            canvasElement.addEventListener('mousedown', startDraw, false);
            canvasElement.addEventListener('mousemove', draw, false);
            canvasElement.addEventListener('mouseup', endDraw, false);

            $scope.drawBoard.saveDrawnImage = function () {

                if (canvasElement) {

                    var image = canvasElement.toDataURL('image/png');

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