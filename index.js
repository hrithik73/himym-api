import express from 'express';
const app = express()
const port = 3000
import { quotes } from "./src/quotes.js"

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const generateRandomindex = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

app.get('/api/quotes', (req, res) => {
  const randomIndex = generateRandomindex(0, quotes.length)
  console.log(randomIndex)
  res.send(quotes[randomIndex])
})
const server = app.listen(port, () => console.log("🚀 Server ready at: http://localhost:3000"))