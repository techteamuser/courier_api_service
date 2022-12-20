import express, { Request, Response } from 'express'
import dotenv from "dotenv";

  const app = express()
  const port = process.env.APP_PORT || 8080

  app.get('/', (_req: Request, res: Response) => {
    return res.send(`${process.env.APP_NAME} running on port ${process.env.APP_PORT}`)
  })

  app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓')
  })

  dotenv.config();
  app.listen(port, () => {
    return console.log(`Server is listening on ${port}`)
  })