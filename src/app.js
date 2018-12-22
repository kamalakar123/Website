import http from 'http'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'// default index.js

const mongoUri = "mongodb://localhost:27017/Website";// connection string for mango db...
const port = 3000;

const app = express('', api)// Routs include
const server = http.createServer(app)// create server

mongoose.connect(mongoUri)// Connect mango db
mongoose.Promise = Promise// It will Executes mango db

setImmediate(() => {
  server.listen(port, () => {// listeb the port 
    console.log(`Express server listening ${port}`);
  })
})

export default app


//this is all about requesting 