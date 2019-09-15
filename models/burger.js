
var orm = require("../config/orm");


var burger = {
    all: function(callback) {
       orm.all("burgers", function(result) {
           callback(result);
       });
    }
}

module.exports = burger;

