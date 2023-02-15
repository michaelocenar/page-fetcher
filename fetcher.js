const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error downloading ${url}: ${error}`);
    return;
  }
  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.error(`Error saving file to ${filePath}: ${err}`);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});
