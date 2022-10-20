import path from "path"
import express from 'express';
const app = express()
const port = 3000
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

import quotes from "./src/quotes.js"
import characters from "./src/charaters.js"

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const generateRandomindex = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
app.use(express.static("images"));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/api/quotes', (req, res) => {
  const randomIndex = generateRandomindex(0, quotes.length)
  console.log(randomIndex)
  res.send(quotes[randomIndex])
})

app.get('/api/characters', (req, res) => {
  res.send(characters)
})

app.listen(port, () => console.log("🚀 Server ready at: http://localhost:3000"))