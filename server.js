//================LOAD THE CARIABLE FOR THE EXPRESS MODULE====================//
const express = require("express")
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'));

require("./RoutesAPI")(app);
require("./RoutesHTML")(app);

app.listen(PORT, () =>{
    console.log("SERVER IS LISTENING AT PORT 5000.")
});


