angular.module("appName").factory("personFactory", [function () {

    var personObj = {
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: ""
    }
    return {
        addPerson: function () {
            var personObj = {
                firstName: $scope.personModel.firstName,
                lastName: $scope.personModel.lastName,
                address: $scope.personModel.address,
                phoneNumber: $scope.personModel.phoneNumber
            }
            $scope.personArray.push(personObj);

        },
        personArray: [
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

        /*  this.getElement = function (index) {
        var length = this.personArray.length;
        if (index < length) {
            console.log(this.personArray.[index].firstName);
        }
        }*/
    }
}]);
/*   var that =this;
        this.test=function(){
            console.log(this.personObj);
        }*/

/* function addPerson(){
     this.personObj="random";
     console.log(that.personObj);
     var tempPersonObj = {
         firstName:that.personObj.firstName,
         lastName:that.personObj.lastName,
         address:that.personObj.address,
         phoneNumber:that.personObj.phoneNumber
         
     }
     that.personArray.push(tempPersonObj)
 }*/