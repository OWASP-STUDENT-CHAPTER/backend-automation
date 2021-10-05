var touch = require("touch");
var fs = require('fs');
var content = "This is is the First Line Inside The Backend Automation Text File";
touch('backend-automation.txt', function () {
    console.log("An Automated Backend Text File has been created !");
    fs.writeFile('./backend-automation.txt', content, 'utf8', function (err) {
        if (err) {
            console.error(err);
            return;
        }
    });
});
exports.printMsg = function () {
    console.log("This is a message from Backend Automation NPM Package and Basic Typescript Enviroment Setup !");
};
