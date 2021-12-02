const { Consumer } = require("@finviet-promotion/rd-kafka-node");

const consumer = new Consumer({
  // Required options
  name: "ConsumerA",
  groupId: "test-group-id",
  host: "localhost:9092",
  topic: "test-topic",

  // Optional options
//   connectTimeout: 5000,
  mode: "flowing",
  logger: console
});

consumer.listen(async (data) => {
    console.log("Listen data:", data);
    const value = (data.value.toString());
    
//   console.log("Listen data:", data);
  console.log(` Value: ${value}` );
});