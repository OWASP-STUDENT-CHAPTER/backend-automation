#! /usr/bin/env node

const CLI=require('clui')
var touch = require("touch")
const fs = require('fs')
const Spinner = CLI.Spinner;
const serverSetup = require("../src/serverTemplate.js")
const envSetup = require("../src/envTemplate.js")
const mongoSetup = require("../src/mongoTemplate")
const argRetrival = require("../src/argTemp")

const serverLoading = new Spinner('Creating Server.js File And Linking Your Stuff, Hold On...')
const envLoading = new Spinner('Creating And Configuring Your Enviroment Variables, Hold On...')
const routesLoading = new Spinner('Creating Your CRUD routes automatically , Hold On...')
const succesMessage = new Spinner('All Scripts Executed Succesfully, Applying Finishing Touches...')


touch('server.js', () => {
  serverLoading.start()
    fs.writeFile('./server.js', serverSetup.default , (err:any) => {
      if (err) 
      {
        console.error(err)
        return
      }
      serverLoading.stop()
    })
})

// fs.promises.mkdir("./initDatabase")
// .then(()=>{
//     touch("./initDatabase/db.js", () => {
     
//         fs.writeFile("./initDatabase/db.js", mongoSetup.default , (err:any) => {
//           if (err) 
//           {
//             console.error(err)
//             return
//           }
//         })
//     })
//   }).catch((err)=> {
//     console.log(err)
//   })
fs.promises.mkdir("./initDatabase")
.then(()=>{
    fs.writeFile("./initDatabase/db.js", mongoSetup.default , (err:any) => {
    if (err) 
    {
      console.error(err)
      return
    }
  })
})
.catch((err)=> {
  console.log(err)
})


touch('.env',()=>
{
  envLoading.start()
  fs.writeFile('.env', envSetup.default , (err:any) => {
    if (err) 
    {
      console.error(err)
      return
    }
    envLoading.stop()
  })
})


touch('prod.env',(err:any)=>
{
  if (err) 
    {
      console.error(err)
      return
    }
    
    fs.writeFile('prod.env', "ENTER YOUR PRODUCTION ENV DETAILS HERE" , (err:any) => {
      if (err) 
      {
        console.error(err)
        return
      }
      
    })
})


setTimeout(function():void{ succesMessage.start()}, 0);
setTimeout(function():void{ succesMessage.stop()}, 2000);

exports.printMsg = function():void {
    console.log("This is a message from Backend Automation NPM Package and Basic Typescript Enviroment Setup !");
  }