const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");


//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(
  cors(
    (origin = "https://mca3ProjectStatic.onrender.com"),
    (methods = "GET,HEAD,PUT,PATCH,POST,DELETE"),
    (allowedHeaders = "Content-Type,Authorization"),
    (credentials = true)
  )
);



//middlewares
app.use(express.json());
app.use(moragan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/receptionist", require("./routes/receptionistRoutes"));
app.use("/api/v1/patient", require("./routes/patientRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes.js"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

if (process.env.NODE_MODE === "production") {
  app.use("/", express.static(path.join(__dirname, "frontEnd", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontEnd/build", "index.html"));
  });
}


//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
