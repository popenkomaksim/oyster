function loadPackages(){
    var packages = {};

    // all external packages should be initialized here
    // this will give us better control to manage exernal packages

    packages.Promise = require("bluebird");
    packages.lodash = require("lodash");
    packages.Bookshelf = require("bookshelf");
    packages.SCrypt = require("scrypt"); // only usable on linux environment
    packages.dateFormat = require("dateformat");
    packages.Winston = require("winston");
    packages.Hold = require("hold");
    packages.Memcached = require("memcached");
    packages.Redis = require("redis");
    packages.Knex = require("knex");
    packages.Apn = require("apn");

    global.Packages = packages;
}

module.exports = loadPackages;
