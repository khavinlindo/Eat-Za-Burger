
var orm = require("../config/orm");


var burger = {
    all: function(callback) {
       orm.all("burgers", function(result) {
           callback(result);
       });
    },

    update: function(id, callback) {
        orm.update("burgers", id, function(result) {
          callback(result);
        }); 
    },

    create: function(name, callback) {
        orm.create("burgers", name, function(result) {
            callback(result);
        });  
     }
}

module.exports = burger;

