const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

//middleware
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.et8bo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
client.connect(err => {
  const collection = client.db("carventory").collection("product")
  // perform actions on the collection object
  console.log('Mongodb is connected')
  client.close()
})


app.get('/',(req,res)=>{
    res.send('Carventory server is running')
})

app.listen(port,()=>{
    console.log('Listening from', port)
})