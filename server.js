const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./backend/middleware/errorMiddleware");
const connectDB = require("./backend/config/db");
const colors = require("colors");
const port = process.env.PORT || 5000;
const path = require("path");

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/users", require("./backend/routes/userRoutes"));

app.use(express.static(path.join(__dirname, "./frontend/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./", "frontend", "dist", "index.html"))
);

app.use(errorHandler);
app.listen(port);
