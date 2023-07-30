import express, { Application, Request, Response } from 'express'
require('dotenv').config()
import {getRecords} from "./repository/getRecords";

const env = process.env
const app: Application = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (_req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Hello World!',
  })
})

app.get('/records', async (_req: Request, res: Response) => {
  const result  = await getRecords()
  return res.status(200).send({
    data:result.records
  })
})

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`)
  })
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}
