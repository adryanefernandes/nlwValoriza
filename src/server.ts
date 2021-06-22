import "reflect-metadata"
import express from 'express'

import "./database"

const app = express()

app.listen(3003, () => {
  console.log("Servis is running in http://localhost:3003")
})