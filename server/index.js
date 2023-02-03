import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

// import connectDB from "./mongodb/connect.js";
// import postRoutes from "./routes/postRoutes.js";
// import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});

const startServer = async () => {
  app.listen(8080, () =>
    console.log("Server has started on port https://localhost:8080")
  );
};

startServer();
