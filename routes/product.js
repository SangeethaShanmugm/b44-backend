import express from "express";
import {client} from "../app.js"
const router = express.Router();

//get all products
router.get("/", async (req, res) => {     
    
    const result =  await client.db("b44wd").collection("products").find({}).toArray();     
    res.send(result);
  });

 //get product by ID 
  router.get("/:id", async (req, res) => {     
    const { id } = req.params;
    const result =  await client.db("b44wd").collection("products").findOne({ id: id})     
    res.send(result);
  });

//delete product by ID 
router.delete("/:id", async (req, res) => {
    const { id } = req.params;     
    const result =  await client.db("b44wd").collection("products").deleteOne({ id: id})     
    res.send(result);
  });
  
//Add products
  router.post("/", async (req, res) => {     
    const newProducts = req.body;
    const result =  await client.db("b44wd").collection("products").insertMany(newProducts)     
    res.send(result)
  });

//Update product
  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    const result = await client
    .db("b44wd")
    .collection("products")
    .updateOne({ id: id }, { $set: updatedProduct });
    res.send(result);
  });
  export const productsRouter = router;

