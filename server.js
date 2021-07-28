const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(router);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true, 
useFindAndModify: false,
useUnifiedTopology: true
 }).then(()=>{

    app.listen(PORT, () => {
        console.log(`App is running on PORT ${PORT}`)
    })
 }).catch(console.log)
