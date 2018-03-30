(function() {
 'use strict';
    let app = require("./app");
    app.filter("internalId", () => {
        return (input) => {
            let output = 'BGP000'+input+(input*3/2);
            return output;  
        };
    });
    module.exports = app;
}());