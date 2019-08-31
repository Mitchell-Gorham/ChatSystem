const fs = require('fs');
//let messages = require('./message_hist');
/*READ
fs.readFile('./message_hist.json', 'utf8', (err, fileContents) => {
    if (err) {
      console.error(err)
      return;
    }
    try {
      const data = JSON.parse(fileContents)
      //console.log(data);
    } catch(err) {
      console.error(err);
    }
  });
*/

//WRITE
let newmess = {
    "time":"114:53",
    "body":"aaaeer reg reaare ra rge",
    "cID":"3",
    "user":"Admin"
}

let messdata = JSON.stringify(newmess);
fs.appendFileSync('message_hist.json',messdata);


//console.log(messages);
