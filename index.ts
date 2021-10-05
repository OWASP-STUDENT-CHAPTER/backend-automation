var touch = require("touch")
const fs = require('fs')

let content:string="This is is the First Line Inside The Backend Automation Text File"
touch('backend-automation.txt',()=>{

  console.log("An Automated Backend Text File has been created !")
  fs.writeFile('./backend-automation.txt', content, 'utf8' , <T>(err) => {
    if (err) {
      console.error(<T> err)
      return
    }
  })

})
exports.printMsg = function():void {
    console.log("This is a message from Backend Automation NPM Package and Basic Typescript Enviroment Setup !");
  }