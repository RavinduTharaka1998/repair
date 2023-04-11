const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/repair-routes");
// const router = require("./controllers/repairs-con");
const Routes=require("./routes/repair-routes");
const cors =require('cors');

const app = express();

//Middlewares
app.use(express.json());
app.use("/repair",router);
app.use(cors());


mongoose
  // .connect("mongodb+srv://admin:TpZYcEm8Mk3lYSKm@cluster0.idhoqcn.mongodb.net/hardwareStore?retryWrites=true&w=majority")
  .connect("mongodb://localhost:27017/RepairDB")
  .then(() => console.log("Connected to database"))
  .then(() =>{app.listen(8000);
    
})
.catch((err)=> console.log(err));
