'use strict!';

angular.module("appName")
    .controller("personCtrl", ["$scope", "personService", "personFactory", function ($scope, personService, personFactory) {

        //Creating model for person form
        $scope.personModel = {
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: "",
        };

        console.log(personService.getElement(0));
        $scope.personArray = personService.personArray;

        console.log($scope.personArray);

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


        /*   $scope.personForm = {
       addPerson: function () {
           var personObj = {
               firstName: $scope.personModel.firstName,
               lastName: $scope.personModel.lastName,
               address: $scope.personModel.address,
               phoneNumber: $scope.personModel.phoneNumber
           }
           $scope.personArray.push(personObj);

       }
   };*/
    }]);