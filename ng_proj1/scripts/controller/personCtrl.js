'use strict!';

angular.module("appName")
    .controller("personCtrl", ["$scope", "personService", function ($scope, personService) {

        //Creating model for person form
        $scope.personModel = {
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: "",
        };
        $scope.personModelEdit = {
            pid: "",
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: "",
        };

        $scope.resetPersonModel = {};

        function reset() {
            $scope.personModel = angular.copy($scope.resetPersonModel);
            personService.personObj = $scope.personModel;
        }
        //console.log(personService.getElement(0));
        personService.personObj = $scope.personModel;
        $scope.personArray = [];
        //personService.personArray;
        updatePersonList();



        //console.log($scope.personArray);

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
            /*  $scope.personModel.firstName = "John";
  $scope.personModel.lastName = "Smith";
  $scope.personModel.address = "Texas";
  $scope.personModel.phoneNumber = "210-123-9870";*/

        $scope.personForm = {
                addPerson: function () {
                    personService.addPerson().then(function () {
                        updatePersonList();
                        reset();
                    });

                },
                editPerson: personService.editPersonList,
                deletePerson: function (id) {
                    personService.deletePersonList(id).then(function () {
                        updatePersonList();
                    });
                },
                editPersonForm: function (object) {
                    console.log(object);
                    $scope.personModelEdit = object;
                },
                updatePerson: function (object) {
                        personService.putPersonList(object).then(function () {
                            updatePersonList();
                            $scope.personModelEdit = {};
                        });
                    }
                    /*= {
                                        pid: "",
                                        firstName: "",
                                        lastName: "",
                                        address: "",
                                        phoneNumber: "",
                                    };*/
            }
            /*: function (id) {
                personService.editPerson(id);
                console.log("id1 = " + id);
            }*/

        /*                var personEditPromise = personService.editPersonList();
                        personEditPromise.then(function (response) {
                            //$scope.personArray = response;
                        });*/
        //alert("from editperson" + );
        //console.log(personForm.editPerson);



        function updatePersonList() {
            var personListPromise = personService.getPersonList();
            personListPromise.then(function (response) {
                $scope.personArray = response;
            });
        }
        /*     $scope.personForm = {
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
        $scope.personTable = {
            sortBy: 'firstname',
            sortOrder: false,
            toggleOrder: function (name) {
                if ($scope.personTable.sortBy != name) {
                    $scope.personTable.sortOrder = false;
                    $scope.personTable.sortBy = name;
                } else {

                    $scope.personTable.sortOrder = !$scope.personTable.sortOrder;
                }
            }
        }


    }]);