const myReadable = require("./custom-read-streams");
const myWritable = require("./custom-write-streams");

const readable = new myReadable();
const writable = new myWritable();

readable.pipe(writable);
