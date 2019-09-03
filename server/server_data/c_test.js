const fs = require('fs');
//var json = require('./user_list.json');
//let messages = require('./message_hist');
//READ
fs.readFile('./user_list.json', 'utf8', (err, fileContents) => {
    if (err) {
      console.error(err)
      return;
    }
    try {
      const data = JSON.parse(fileContents)
      console.log(data);
      for (let i = 0; i < data.length ; i++ ) {
        if ("def" == data[i].email && "456" == data[i].pass) {
          //This is where we return true 
          console.log("The email address is " + data[i].email + " and the pass is " + data[i].pass );
        } else {
          console.log(false);
        }
      }
    } catch(err) {
      console.error(err);
    }
  });


//WRITE
/*let newmess = {
    "time":"114:53",
    "body":"aaaeer reg reaare ra rge",
    "cID":"3",
    "user":"Admin"
}

let messdata = JSON.stringify(newmess);
fs.appendFileSync('user_list.json',messdata);
*/

/*console.log(messages);
var em = "admin"
var p = "admin"

var obj = JSON.parse(json);
console.log(obj);
*/