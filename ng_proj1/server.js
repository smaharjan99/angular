var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('express-myconnection');
var basePath = "/service";

var app = express();

app.use(bodyParser.json()); //to support JSON encoded bodies

app.use(bodyParser.urlencoded({ //to support URL encoded bodies
    extended: true
}));

app.use(connection(mysql, {
    host: 'localhost',
    user: 'personUser',
    password: 'person1',
    database: 'personTbl'
}, 'request'));

var getPutObj = {
    person: {
        url: basePath + "/person/:pid",
        query: "UPDATE personinfo SET ? WHERE pid = ?",
        ids: ["pid"]
    },
    account: {
        url: basePath + "/account/:accountid",
        query: "UPDATE account SET ? WHERE accountid = ?",

        ids: ["accountid"]
    }
}

var getPostObj = {
    person: {
        query: "INSERT INTO personinfo set ?",
        url: basePath + "/person",
        ids: []
    },
    account: {
        query: "INSERT INTO account set ?",
        url: basePath + "/account",
        ids: []
    }
}

var getServiceObj = {
    person: {
        query: "SELECT * FROM personinfo",
        url: basePath + "/person",
        ids: []
    },
    account: {
        query: "SELECT * FROM account",
        url: basePath + "/account",
        ids: []
    },
    personUnique: {
        query: "SELECT * FROM personinfo where pid=?",
        url: basePath + "/person/:pid",
        ids: ["pid"]
    },
    accountUnique: {
        query: "SELECT * FROM account where accountid=?",
        url: basePath + "/account/:accountid",
        ids: ["accountid"]
    },
    personAccount: {
        query: "SELECT * FROM personinfo a INNER JOIN account b on b.personid=a.pid WHERE a.pid=?",
        url: basePath + "/person/:pid/account",
        ids: ["pid"]
    }
};

var getDeleteObj = {
    person: {
        "url": basePath + "/person/:pid",
        "query": "DELETE FROM personinfo WHERE pid = ?",
        "ids": ["pid"]
    },
    account: {
        "url": basePath + "/account/:accountid",
        "query": "DELETE FROM account WHERE accountid = ?",
        "ids": ["accountid"]
    }
};
/*var getServiceByIdObj = {
    person: {
        query: "SELECT * FROM personinfo where personinfoid=?",
        url: basePath + "/person/:personid",
        id: ["personid"]
    },
    person: {
        query: "SELECT * FROM account where accountinfoid=?",
        url: basePath + "/account/:accountid",
        id: ["accountid"]
    }

};*/
for (var key in getServiceObj) {
    getService(getServiceObj[key].url, getServiceObj[key].ids, getServiceObj[key].query);
    //console.log(getServiceObj[key].url);
}

for (var key in getPostObj) {
    postSevice(getPostObj[key].url, getPostObj[key].ids, getPostObj[key].query);
}

for (var key in getPutObj) {
    putSevice(getPutObj[key].url, getPutObj[key].ids, getPutObj[key].query);
}
for (var key in getDeleteObj) {
    deleteService(getDeleteObj[key].url, getDeleteObj[key].ids, getDeleteObj[key].query);
}
/*for (var key in getServiceByIdObj) {
    getService(getServiceByIdObj[key].query, getServiceByIdObj[key].url, getServiceByIdObj[key].ids);
    //console.log(getServiceObj[key].url);
}*/
/*var query = "SELECT * FROM personinfo";
var ids = [];
var url = basePath + "/person";
getService(url, ids, query);

var query = "SELECT * FROM account";
var ids = [];
var url = basePath + "/account";
getService(url, ids, query);*/




function getService(url, ids, query) {
    app.get(url, function (req, res, next) {
        //var params = [];
        //for (var)
        req.getConnection(function (err, connection) {
            if (err) return next(err);

            connection.query(query, req.params[ids], function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql Error, check your query");
                }
                res.json(results);
            });
        });
    });
}


function postSevice(url, ids, query) {
    app.post(url, function (req, res, next) {
        var reqObj = req.body;
        req.getConnection(function (err, connection) {
            if (err) return next(err);
            connection.query(query, reqObj, function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql Error, check your query");
                }
                res.json(results);
            });
        });


    });
}


function putSevice(url, ids, query) {
    app.put(url, function (req, res, next) {
        var id = req.params[ids];
        var reqObj = req.body;
        req.getConnection(function (err, connection) {
            if (err) return next(err);
            connection.query(query, [reqObj, id], function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql Error, check your query");
                }
                res.json(results);
            });
        });


    });
}

function deleteService(url, ids, query) {
    app.delete(url, function (req, res, next) {

        req.getConnection(function (err, connection) {
            if (err) return next(err);

            connection.query(query, req.params[ids], function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql Error, check your query");
                }
                res.json(results);
            });
        });
    });
}


//hosting static files
app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {
    res.redirect('/view/index.html');
})


app.listen(3000, function (req, res) {
    console.log('listening');
})