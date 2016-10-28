'use strict!';

angular.module("appName")
    .controller("appCtrl",["$scope", function($scope){
        $scope.header="hello World";
        $scope.test=function(){
            $scope.header="oh look it changed";
        }
        
        
    }]);