const amqp = require("amqplib");

const amqpUrl = "amqp://localhost:5672"
const queueName = "nodequeue001";

async function recieveMessage() {
   try {
      const connection = await amqp.connect(amqpUrl);
      const channel = await connection.createChannel();

      await channel.assertQueue(queueName);

      channel.consume(queueName, (msg) => {
         console.log(msg.content.toString());

         channel.ack(msg);

         console.log(`Waiting for a message on ${queueName}...`);
      })
   } catch (error) {
      console.error(JSON.stringify(error));
      
   }
}

recieveMessage()