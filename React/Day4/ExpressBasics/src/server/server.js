// server.js

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Convert import.meta.url to __dirname (for ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dummy product list
let products = [
  { id: 1, name: "LLLLLL", price: 2345 },
  { id: 2, name: "MMMMMM", price: 234435 },
  { id: 3, name: "NNNNNN", price: 23565 },
];

// Middleware to parse JSON
app.use(express.json());

// Serve static files from "../client" folder
app.use(express.static(path.join(__dirname, "../client")));

// GET request to return products
app.get("/products", (req, res) => {
  res.json(products);
});

// POST request to add a new product
app.post("/newproduct", (req, res) => {
  const payload = req.body;
  console.log("New product received:", payload);

  products.push(payload);
  res.send("Product added!!");
});
app.delete("/deleteproduct", (req, res) => {
  const { id } = req.body;
  const index = products.findIndex(p => p.id === id);

  if (index !== -1) {
    products.splice(index, 1);
    res.send("Product deleted!");
  } else {
    res.status(404).send("Product not found!");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
