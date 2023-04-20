import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import cors from "cors";
import {productsRouter} from "./routes/product.js"
const app = express();
const PORT = 7000;
dotenv.config();
app.use(cors());
const MONGO_URL = process.env.MONGO_URL;
app.use(express.json());
//Mongo connection
async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongo is Connected");
    return client;
  }
  
  export const client = await createConnection();

  

app.get("/", (req, res) => {
    res.send("Hello Everyone🥳🥳🥳🥳");
  });


  app.use("/product", productsRouter);

  app.listen(PORT, () => console.log("Server started on the port", PORT));