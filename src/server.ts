import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";
import server from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("Mongo connection succeed");
    const PORT = process.env.PORT ?? 3003;
    server.listen(PORT, function () {
      console.log(`The server is running succesfully on port: ${PORT}`);
      console.log(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => console.log("ERROR on connection MongoDb", err));
