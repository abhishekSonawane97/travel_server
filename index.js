const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose")
require("./database/config")
const User = require("./database/users")
const cors = require("cors")
const validateToken = require("./middlewares/validateToken")


const app = express();
app.use(express.json())
app.use(cors());

// user api --->
app.use("/api/login", require("./routes/LoginRoute"))
app.use("/api/register", require("./routes/RegisteRoute"))
app.use("/api/profile",validateToken, require("./routes/UserProfileRoute"))


// serveyData api --->
app.use("/api/serveyData", require("./routes/serveyDataRoute"))

app.listen(process.env.PORT, ()=> console.log('Server is running on port : ', process.env.PORT));
