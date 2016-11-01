angular.module("appName").directive("tableForm", function () {
    return {

        //E is element
        //A is attribut
        //M is comments
        //C is class
        restrict: "EAMC",
        controller: "personCtrl",
        templateUrl: "/view/tableForm.html",

        link: function ($scope) {
            console.log("From directive");
            console.log($scope.personArray);

        }

    };
});