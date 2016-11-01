angular.module("appName").directive("personForm", function () {
    return {

        //E is element
        //A is attribut
        //M is comments
        //C is class
        restrict: "EAMC",
        controller: 'personCtrl',
        /*function ($scope) {
                   $scope.personForm = {
                        addPerson: function () {
                            var personObj = {
                                firstName: $scope.personModel.firstName,
                                lastName: $scope.personModel.lastName,
                                address: $scope.personModel.address,
                                phoneNumber: $scope.personModel.phoneNumber
                            }
                            $scope.personArray.push(personObj);

                        }
                    };

                },*/
        templateUrl: "/view/personForm.html",

        link: function ($scope) {


        }

    };
});