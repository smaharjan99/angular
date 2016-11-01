'use strict!';

angular.module("appName")
    .controller("personCtrl", ["$scope", function ($scope) {

        //Creating model for person form
        $scope.personModel = {
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: "",
        };

        $scope.personArray = [
            {
                firstName: "John",
                lastName: "Doe",
                phoneNumber: "231-131-1411",
                address: "abbey rd"
            },
            {
                firstName: "Paul",
                lastName: "Scholes",
                phoneNumber: "231-131-8923",
                address: "Hartr rd"
            },
            {
                firstName: "Eric",
                lastName: "Cantona",
                phoneNumber: "941-131-1411",
                address: "french rd"
            },
            {
                firstName: "Ryan",
                lastName: "Giggs",
                phoneNumber: "231-941-1411",
                address: "welshy rd"
            },
            {
                firstName: "Frank",
                lastName: "De Boer",
                phoneNumber: "231-123-1411",
                address: "dutchy rd"
            }
        ]

        $scope.forNgShow = true;
        $scope.forNgIf = true;

        $scope.toggleForShow = function () {
            $scope.forNgShow = !$scope.forNgShow;

            /* $scope.forNgShow = (true)?!$scope.forNgShow:$scope.forNgShow;
             
             if($scope.forNgShow){
                 $scope.forNgShow=false;
             }else{
                 $scope.forNgShow=true;
             }*/
        }
        $scope.toggleForIf = function () {
            $scope.forNgIf = !$scope.forNgIf;
            /* if($scope.forNgIf){
                $scope.forNgIf=false;
            }else{
                $scope.forNgIf=true;
            }
*/
        }
        $scope.personModel.firstName = "John";
        $scope.personModel.lastName = "Smith";
        $scope.personModel.address = "Texas";
        $scope.personModel.phoneNumber = "210-123-9870";


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
    }]);