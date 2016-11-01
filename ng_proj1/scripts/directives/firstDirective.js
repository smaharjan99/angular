angular.module("appName").directive("sampleHeader", function () {
    return {

        //E is element
        //A is attribut
        //M is comments
        //C is class
        restrict: "EAMC",
        template: "<h1> {{header}} </h1>",
        //controller: 'appCtrl',
        /*controller: function ($scope) {
            $scope.header = "Head FROM Directive";
            $scope.xyz = 15;
        }*/
        link: function ($scope) {
            $scope.header = "fROM DIRECTIVE";

        }

    };
});