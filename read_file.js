var fs = require("fs");
var newFile = process.argv[2];
let content;

function processFile(content) {
  fs.appendFile(`./tmp/${newFile}`, content, function read(err, data) {
    if (err) {
      throw err;
    }
  });
  console.log(content);
}

fs.readFile("./readingText.txt", function read(err, data) {
  if (err) {
    throw err;
  }
  content = data.toString();
  processFile(content);
});
    