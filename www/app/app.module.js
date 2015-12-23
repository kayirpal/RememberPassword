(function () {

    "use strict";

    // Define main module
    angular.module("MyApp", ["ui.router"
        , 'hmTouchEvents'
        , 'common'
        , "services"
        , "directives"
        , "enrollModule"
        , "dashboardModule"
        , "settingsModule"
        , "shareModule"
    ]);
}());