const { Kafka } = require('kafkajs')
 
const kafka = new Kafka({
  clientId: 'test-group-id',
  brokers: ['localhost:9092', 'localhost:9092']
})
 
const producer = kafka.producer()
 
const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })
 
  
}
 
run().catch(console.error)