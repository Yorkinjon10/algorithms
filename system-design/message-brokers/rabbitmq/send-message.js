const amqp = require("amqplib");

const url = "amqp://localhost:5672";

const queueName = "nodequeue001";

async function sendMessage(msg) {
   try{const connection = await amqp.connect(url);

   const channel = await connection.createChannel();

   await channel.assertQueue(queueName);

   await channel.sendToQueue(queueName, Buffer.from(msg));

   console.log(`Message send to ${channel} ${msg}`);

   await channel.close();
      await connection.close();
   } 
   
   catch (error) {
      console.log(error);
   }
}

sendMessage("Hi From Yorkinjon 👋"); 