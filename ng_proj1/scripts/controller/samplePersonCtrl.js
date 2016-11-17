angular.module("appName").controller("samplePersonCtrl", ["samplePersonService", "$scope", function (samplePersonService, $scope) {
    $scope.firstName = samplePersonService.getFirstName();
    $scope.lastName = samplePersonService.getLastName();

    $scope.update = function () {
        samplePersonService.setFirstName("Roger");
        samplePersonService.setLastName("Sterling");
    }

    $scope.$watch(samplePersonService.getFirstName, function (newVal, oldVal) {

        if (newVal != oldVal) {
            $scope.firstName = newVal;
        }
    });

    $scope.$watch(samplePersonService.getLastName, function (newVal, oldVal) {

        if (newVal != oldVal) {
            $scope.lastName = newVal;
        }
    });
}]);

/*describe("test ctrl", function () {
    beforeEach(angular.mock.module(appName));
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

    it('has first Name as JOhn by default', function () {
        expect($scope.firstName).toEqual('John');
    });
    it('has last Name as Doe by default', function () {
        expect($scope.lastName).toEqual('Doe');
    });

    xit('should update the first name', function () {
        //spyOn(4scope, 'update')
        $scope.update();
        //$scope.$digest();
        expect($scope.firstName).toEqual('george');
    })
});*/