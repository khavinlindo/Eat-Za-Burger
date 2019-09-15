
var connection = require("./connection.js");

var orm = {
    all: function(table, callback) {
        connection.query("SELECT * FROM "+table+";", function(err, result) {
           if (err) throw err;
           callback(result);
        });
    }
}

module.exports = orm;