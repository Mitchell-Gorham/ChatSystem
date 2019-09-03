const fs = require('fs');

//Compares the passed values against the userlist to see if the right credentials are posted
export function loginParse (email, pass) {
  fs.readFile('./user_list.json', 'utf8', (err, fileContents) => {
      if (err) {
        console.error(err)
        return;
      }
      try {
        const data = JSON.parse(fileContents)
        //console.log(data);
        for (let i = 0; i < data.length ; i++ ) {
          if (email == data[i].email && pass == data[i].pass) {

            //return (data[i]); // Returns
            console.log(data[i]);
            //console.log("UN:"+ data[i].name +" EM:" + data[i].email + " PW:" + data[i].pass );
          } else if ( i == data.length-1 && data[i].pass != pass ) {
            return(false);
          } else {
            continue;
          }
        }
      } catch(err) {
        console.error(err);
      }
    });
}

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