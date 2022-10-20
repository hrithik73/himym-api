import path from "path"
import express from 'express';
import { fileURLToPath } from 'url';
import cors from "cors"

import quotes from "./src/quotes.js"
import characters from "./src/charaters.js"



const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateRandomindex = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static("images"));

// res.header("Access-Control-Allow-Origin");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/quotes', (req, res) => {
  const randomIndex = generateRandomindex(0, quotes.length)
  console.log(randomIndex)
  res.send(quotes[randomIndex])
})

app.get('/api/characters', (req, res) => {
  res.send(characters)
})

app.listen(port, () => console.log("🚀 Server ready at: http://localhost:3000"))