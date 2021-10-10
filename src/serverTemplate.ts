const basicServerSetup:string = `
require("dotenv").config(envConfig);
const express = require("express");
const app = express();

//Requiring Database
require("./initDatabase/db");

const envConfig = {
    path: process.env.NODE_ENV === "production" ? "prod.env" : ".env",
  };

  //Importing All Of The Routes 
  //(Will Be Made Dynamic)
  const auth = require("./routes/Auth");
  const participants = require("./routes/participants");
  const team = require("./routes/Team");
  const question = require("./routes/Questions");
  const round = require("./routes/rounds");

  //Using The Routes With An API Route Prefixed To All The API'S

  app.use("/api/event", round);
  app.use("/api/auth", auth);
  app.use("/api/participants", participants);
  app.use("/api/team", team);
  app.use("/api/question", question);

  const server = app.listen(process.env.PORT, () =>
  console.log(\`Server Started on port \${process.env.PORT}\`)

);
  `

  export default basicServerSetup;