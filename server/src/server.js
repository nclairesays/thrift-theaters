
import express from 'express';
// import bodyParser from 'body-parser'
// import { MongoClient } from 'mongodb'
import { localPort } from './constants'

const app = express();
// app.use(bodyParser.json())
app.set('port', process.env.PORT || localPort)

app.get('/', (req, res) => res.send(`Hellosdfsdf`))

app.listen(localPort, () => console.log(`Listening on port ${ localPort }`))