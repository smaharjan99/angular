'use strict';
describe("test ctrl", function () {

    beforeEach(angular.mock.module('appName'));
    var $controller;
    var $scope;

    //before each
    beforeEach(angular.mock.inject(function (_$controller_, $rootScope) {
        $controller = _$controller_;
        $scope = $rootScope.$new();
        var controller = $controller('samplePersonCtrl', {
            $scope: $scope
        });
    }));

    it('has first Name as Don by default', function () {
        expect($scope.firstName).toEqual('Don');
    });
    it('has last Name as Draper by default', function () {
        expect($scope.lastName).toEqual('Draper');
    });

    xit('should update the first name', function () {
        //spyOn(4scope, 'update')
        $scope.update();
        //$scope.$digest();
        expect($scope.firstName).toEqual('Roger');
    });
});