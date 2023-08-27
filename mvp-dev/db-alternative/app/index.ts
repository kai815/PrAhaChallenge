import express, { Application, Request, Response } from 'express'
require('dotenv').config()
import {getRecords} from "./repository/getRecords";
import {createRecord} from "./repository/createRecord";

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

app.post('/records', async (req: Request, res: Response) => {
  const body = req.body
  console.log({body})
  if (Number(body.age) < 0){
    return res.status(400).send({
      ok:false
    })
  }
  const result  = await createRecord({name:body.name, age:Number(body.age), status:body.status})
  return res.status(200).send({
    ok:true
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
