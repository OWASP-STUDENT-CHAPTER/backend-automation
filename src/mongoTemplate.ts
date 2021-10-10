const mongoTemplate:string = `const mongoose = require("mongoose");
const mongoDB = mongoose.createConnection(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.error("Connection to Mongo DB failed.");
    return console.log("Connected to Mongo DB.");
  }
);
  
  module.exports = {
      mongoDB
  };
`

  export default mongoTemplate;