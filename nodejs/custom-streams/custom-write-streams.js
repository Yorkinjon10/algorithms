const { Writable } = require("stream");

class MyWritable extends Writable {
   _write(chunk, encoding, callback) {
      console.log(`writing chunk: ${chunk.toString()}`);
      setTimeout(() => {
         callback();
      }, 100)
   }
}

module.exports = MyWritable;
