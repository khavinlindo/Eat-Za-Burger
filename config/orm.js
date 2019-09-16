
var connection = require("./connection.js");

var orm = {
    all: function(table, callback) {
        connection.query("SELECT * FROM "+table+";", function(err, result) {
           if (err) throw err;
           callback(result);
        });
    },

    update: function(table, idValue, callback) {
       connection.query("UPDATE "+table+ " SET devoured=true WHERE id="+idValue+";", function(err, result) {
           if (err) throw err;
           callback(result);
       });
    },

    create: function(table, name, callback) {
        connection.query("INSERT into "+table+" (burger_name) VALUES ('"+name+"');", function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
}



module.exports = orm;