angular.module("appName").service("samplePersonService", function () {
    var firstName = "Don";
    var lastName = "Draper";

    this.setFirstName = function (fname) {
        firstName = fname;
    }
    this.setLastName = function (lname) {
        lastName = lname;
    }
    this.getFirstName = () =>
        firstName;
    this.getLastName = () =>
        lastName;
});