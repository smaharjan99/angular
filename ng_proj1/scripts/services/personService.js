angular.module("appName").service("personService", ["$http", function ($http) {

    var personObj = {
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: ""
    }
    var that = this;
    this.addPerson = addPerson;

    // this.editPerson = editPerson;
    //this.personArray = [];

    this.getPersonList = function () {
        return $http({
            method: "GET",
            url: "/service/person"
        }).then(function (results) {
            //that.personArray = resutlt.data;
            return results.data
        });
    }

    this.postPersonList = function (dataParam) {
        return $http({
            method: "POST",
            url: "/service/person",
            data: dataParam
        }).then(function (results) {
            //that.personArray = resutlt.data;
            return results.status;
        });
    }

    this.deletePersonList = function (id) {
        return $http({
            method: "DELETE",
            url: "/service/person/" + id
        }).then(function (results) {
            //that.personArray = resutlt.data;
            return results.data;
        });
    }

    this.putPersonList = function (dataParam) {
        return $http({
            method: "PUT",
            url: "/service/person/" + dataParam.pid,
            data: dataParam
        }).then(function (results) {
            //that.personArray = resutlt.data;
            return results.status;
        });
    }

    this.editPersonList = function (id) {
        return $http({
            method: "GET",
            url: "/service/person/" + id,

        }).then(function (results) {
            console.log(results.data);
        });
    }

    /*this.validDup = function(){
        var sorted =this.personArray.concat().sort(function(a,b){
            if (a.firstname>b.firstname){
                return 1
            };
            if (a.firstname<b.firstname){
                
            return -1
            };
            return 0;
        });
        for(i = 0; i < $scope.personArray.length; i++) {
            isDuplicate = ((sorted[i-1] && sorted[i-1].firstname == sorted[i].firstname) || (sorted[i+1] && sorted[i+1].firstname == sorted[i].firstname));
            sorted[i].form.personArray.firstname.$setValidity('duplicate',!isDuplicate);
        }
        
    }*/


    /*this.personArray = [
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
    ];*/

    this.getElement = function (index) {
            var length = this.personArray.length;
            if (index < length) {
                //  console.log(this.personArray[index].firstName);
            }
        }
        //var that = this;
        /* this.test = function () {
        console.log(this.personObj);
    }
*/
    function addPerson() {
        // this.personObj = "random";
        //console.log(that.personObj);
        var tempPersonObj = {
                firstname: that.personObj.firstName,
                lastname: that.personObj.lastName,
                address: that.personObj.address,
                phone: that.personObj.phoneNumber

            }
            //console.log(tempPersonObj);
        return that.postPersonList(tempPersonObj);
        //that.personArray.push(tempPersonObj)
    }

    /* function editPerson(id) {
     console.log("id2 = " + id);
     that.editPersonList(id);


 }*/
}]);