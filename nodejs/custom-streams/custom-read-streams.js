const { Readable } = require("stream");

class MyReadable extends Readable {
   constructor(options) {
      super(options);
      this.currentCharCode = 65;
   }

   _read(size) {
      if (this.currentCharCode >= 90) {
         this.push(null);
      } else {
         const chunk = String.fromCharCode(this.currentCharCode++);
         console.log(`Pushing chunk: ${chunk}`);
         this.push(chunk);
      }
   }
}

module.exports = MyReadable;
