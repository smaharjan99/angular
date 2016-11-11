angular.module("appName").directive("editForm", function () {
    return {

        //E is element
        //A is attribut
        //M is comments
        //C is class
        restrict: "EAMC",
        controller: 'personCtrl',
        templateUrl: "/view/editForm.html",

        link: function ($scope) {


        }

    };
});