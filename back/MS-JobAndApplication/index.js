const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload"); // Import express-fileupload
const jobRoutes = require("./routes/jobRoutes");
const jobApplicationRoutes = require("./routes/jobApplicationRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Enable file upload middleware
app.use(
  fileUpload({
    createParentPath: true,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
    abortOnLimit: true,
  })
);

// Static file serving for uploaded files
app.use("/uploads", express.static("uploads"));

mongoose.connect("mongodb://localhost:27017/MSJobsAndApplication", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/api", jobRoutes);
app.use("/api", jobApplicationRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
