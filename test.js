const express = require('express')
const app = express()

const { Kafka } = require('kafkajs')
 
const kafka = new Kafka({
  clientId: 'test-group-id',
  brokers: ['localhost:9092', 'localhost:9092']
})
 
const producer = kafka.producer()

app.get('/', async function (req, res) {
  res.send('Hello World');
  console.log(req.query);
  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [
        {value: JSON.stringify(req.query)}
    ],
  })
})
 
app.listen(3000)