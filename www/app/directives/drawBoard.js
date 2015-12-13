/// <reference path="../../../typings/angularjs/angular.d.ts"/>
(function () {
    "use strict";

    var drawBoardDiective = function () {

        var canvas = {};

        canvas.restrict = "A";

        canvas.scope = {
            drawBoard: "="
        };

        canvas.link = function ($scope, $element) {


            // $scope.drawBoard.api = $element.sketch({defaultColor: "rgb(100,100,100)"});

            // canvas element
            var canvasElement = $element[0];

            // context of the canvas
            var context = canvasElement.getContext('2d');

            // scope object
            var drawBoard = $scope.drawBoard || {};

            // default doodle settings
            context.lineWidth = "3";
            context.lineJoin = "round";
            context.lineCap = "round";
            context.globalAlpha = 0.5;
            context.strokeStyle = "rgba(100,100,100,1)";

            // drawing logic

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

            drawBoard.getSnapshot = function () {

                var image = context.canvas.toDataURL('image/png');

                return image;
            };
            // get snapshot of the canvas
            drawBoard.saveDrawnImage = function () {


                    var image = context.toDataURL('image/png');

                    window.open(image, "_blank");
            };

            // set stroke width
            drawBoard.setStrokeWidth = function (widthIndex) {

                // set selected width
                drawBoard.selectedWidthIndex = widthIndex;

                context.lineWidth = Math.floor((widthIndex + 1) * 3);

            };

            // set stroke color
            drawBoard.setStrokeColor = function (color) {

                // update composed style
                drawBoard.composedStyle = {
                    color: color
                };

                // set context
                context.strokeStyle = color;

                drawBoard.selectedColorPallet = color;
            };

            drawBoard.setStrokeType = function (type) {

                // reset 
                context.globalAlpha = 1;
                context.globalCompositeOperation = "source-over";
                context.lineCap = "round";

                switch (type) {
                    case "pencilMode":
                        break;
                    case "paintMode":
                        context.globalAlpha = 0.1;
                        context.lineCap = "butt";
                        break;
                    case "eraserMode":
                        context.globalCompositeOperation = "destination-out";
                        break;
                }

            };

            // update scope
            $scope.drawBoard = drawBoard;

        };

        return canvas;
    };

    // Define directive module
    angular.module("directives")

    // Add the directive to the module
    .directive("drawBoard", drawBoardDiective);

}());