angular.module("appName").directive("sampleHeader", function () {
    return {
        restrict: "EAMC",
        template: "<h1>This is a header from sample header directive</h1>"
    };
});