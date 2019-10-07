const mongo = require('mongodb')
const client = mongo.MongoClient;

let db;

module.exports.loginParse = async function loginParse(email, pass){
	try {
		const collection = db.collection("groupList");
		const user = await collection.find({ "email":email }).limit(1).toArray();
		console.log(user);

		if (user.length === 0){
			console.log("User isn't real");
			return false;
		} if (user[0].pass === pass){
			console.log("User hacked successfully");
			return true;
		} else {
			console.log("Wrong email or password");
			return false;
		}
	} catch (err) {
		console.warn(err)
		response.status(500).json("Something Bad Occured")
	}
}

module.exports.sidebarPopulate = function sidebarPopulate(){
	const groupColl = db.collection("groupList")
	groupColl.find({}).toArray((err,data))
	return(data)
}

// POPULATE EMPTY DATABASE
// Populate User List
client.connect("mongodb://localhost:27017",  { useNewUrlParser: true, useUnifiedTopology: true }).then(async (client) => {
	try {
		db = client.db("chitterDB")
		const collection = db.collection("userList");
		const user = await collection.find({ "name":"Admin" }).limit(1).toArray();
		if (user.length > 0){
			await collection.drop();
		}
		if (user.length === 0 ){	// If no database exists, create dummy database
			await collection.insertMany([
			{
				"name":"Admin",
				"email":"admin",
				"pass":"admin",
				"admin":"super"
			},
			{
				"name":"The Coolest Kid",
				"email":"abc",
				"pass":"123",
				"admin":"no"
			},
			{
				"name":"Mangu pangu",
				"email":"bcd",
				"pass":"234",
				"admin":"group"
			},
			{
				"name":"Hero of the Chat Forum",
				"email":"cde",
				"pass":"345",
				"admin":"super"
			},
			{
				"name":"Eek",
				"email":"def",
				"pass":"456",
				"admin":"no"
			}
			])
		}
		console.log(user)
    } catch (err) {
        console.warn(err)
		response.status(500).json("Something Bad Occured")
	}
});

// Populate Group List
client.connect("mongodb://localhost:27017",  { useNewUrlParser: true, useUnifiedTopology: true }).then(async (client) => {
	try {
		db = client.db("chitterDB")
		const collection = db.collection("groupList");
		const user = await collection.find({ "id":0 }).limit(1).toArray();
		if (user.length === 0 ){	// If no database exists, create dummy database
			await collection.insertMany([
			{
				"id":0,
				"gname":"Cat"
			},
			{
				"id":1,
				"gname":"Dog"
			},
			{
				"id":2,
				"gname":"Snake"
			},
			{
				"id":3,
				"gname":"Badger"
			},
			{
				"id":4,
				"gname":"Horse"
			},
			{
				"id":5,
				"gname":"Spider"
			},
			{
				"id":6,
				"gname":"Goose"
			},
			{
				"id":7,
				"gname":"Falcon"
			}
			])
		}
    } catch (err) {
        console.warn(err)
		response.status(500).json("Something Bad Occured")
	}
});

// Populate Channel List
client.connect("mongodb://localhost:27017",  { useNewUrlParser: true, useUnifiedTopology: true }).then(async (client) => {
	try {
		db = client.db("chitterDB")
		const collection = db.collection("channelList");
		const user = await collection.find({ "id":0 }).limit(1).toArray();
		if (user.length === 0 ){	// If no database exists, create dummy database
			await collection.insertMany([
			{
				"id":0,
				"cname":"Calcio",
				"group":"Cat",
				"owner":"Admin",
				"memberlist":["Admin", "The Coolest Kid", "Eek"]
			},
			{
				"id":1,
				"cname":"Ragdoll",
				"group":"Cat",
				"owner":"Admin",
				"memberlist":["Admin", "Hero of the Chatform", "Eek"]

			},
			{
				"id":2,
				"cname":"Persian",
				"group":"Cat",
				"owner":"Admin",
				"memberlist":["Admin", "Mangu Pangu", "Eek"]
			},
			{
				"id":3,
				"cname":"Bombay",
				"group":"Cat",
				"owner":"Admin",
				"memberlist":["Admin", "The Coolest Kid", "Eek"]
			},
			{
				"id":4,
				"cname":"Viper",
				"group":"Snake",
				"owner":"Mangu Pangu",
				"memberlist":["Admin", "Mangu Pangu"]
			},
			{
				"id":5,
				"cname":"Rattlesnake",
				"group":"Snake",
				"owner":"Mangu Pangu",
				"memberlist":["Admin", "Mangu Pangu", "Eek"]
			},
			{
				"id":6,
				"cname":"Cobra",
				"group":"Snake",
				"owner":"Mangu Pangu",
				"memberlist":["Admin", "Mangu Pangu"]
			},
			{
				"id":7,
				"cname":"Border Collie",
				"group":"Dog",
				"owner":"Admin",
				"memberlist":["Admin"]
			},
			{
				"id":8,
				"cname":"unnamed",
				"group":"Goose",
				"owner":"Admin",
				"memberlist":["Admin"]
			},
			{
				"id":9,
				"cname":"Gyrfalcon",
				"group":"Falcon",
				"owner":"Admin",
				"memberlist":["Admin"]
			},
			{
				"id":10,
				"cname":"Redback",
				"group":"Spider",
				"owner":"Admin",
				"memberlist":["Admin"]
			},
			{
				"id":11,
				"cname":"Arabian",
				"group":"Horse",
				"owner":"Admin",
				"memberlist":["Admin"]
			}
			])
		}
    } catch (err) {
        console.warn(err)
		response.status(500).json("Something Bad Occured")
	}
});

// //Compares the passed values against the userlist to see if the right credentials are posted
// export function loginParse (email, pass) {
// 	console.log("RUNNING")
// 	fs.readFile('./user_list.json', 'utf8', (err, fileContents) => {
// 		if (err) {
// 			console.error(err)
// 		return;
// 		}
// 	try {
// 		const data = JSON.parse(fileContents)
// 		//console.log(data);
// 		for (let i = 0; i < data.length ; i++ ) {
// 			if (email == data[i].email && pass == data[i].pass) {
// 				return (data[i]); // Returns
// 				console.log(data[i]);
// 				//console.log("UN:"+ data[i].name +" EM:" + data[i].email + " PW:" + data[i].pass );
// 			} else if ( i == data.length-1 && data[i].pass != pass ) {
// 				return(false);
// 			} else {
// 				continue;
// 			}
// 			}
// 		} catch(err) {
// 		console.error(err);
// 		}
// 	});
// }

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