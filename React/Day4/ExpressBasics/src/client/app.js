import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Needed for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Product data
let products = [
  { id: 1, name: "LLLLLL", price: 2345 },
  { id: 2, name: "MMMMMM", price: 234435 },
  { id: 3, name: "NNNNNN", price: 23565 },
];

// Middleware
app.use(express.json());

// Serve static files from '../client'
app.use(express.static(path.join(__dirname, "../client")));

// API routes
app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/newproduct", (req, res) => {
  const payload = req.body;
  console.log(payload);
  products.push(payload);
  res.send("Product added!!");
});

// Start server
app.listen(port, () => {
  console.log(`Express app running at http://localhost:${port}`);
});
