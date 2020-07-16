const mongodb = require('mongodb')
const Express = require("express")

const path = require('path')


const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb+srv://scroll-database:habibi0610&@cluster0-y9g8b.mongodb.net/test'
const databaseName = 'scroll-database'
const json = require('./dummy.json')




const app = Express()
const publicDirectoryPath = path.join(__dirname, './public')

app.use(Express.static(publicDirectoryPath))






  MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
    return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    console.log('Connected to databaseName')

    /*
    db.collection("users").insertMany(json, function(err, res) {
   
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
    })  */

    
    
   app.use((req,res,next) => {
   
   const page = req.query.page
   const limit = req.query.limit
   const skip = page*limit

   db.collection("users").find({}).limit(10).skip(skip).toArray((error, result) => {
    
    res.send(result);
    });

     next()
   })
   
    
   app.get("/data", (request, response) => {
     
   //response.send()
});
     /*
    app.get("/data", (request, response) => {
     
      db.collection("users").find({}).limit(10).skip(10).toArray((error, result) => {
          if(error) {
              return response.status(500).send(error);
          }
          response.send(result);
      });
  });

  
*/
  

  //db.collection("users").find({}).limit(5).skip(0).toArray((error, result) => {
  

   
  








app.listen(3000, () => {
  console.log('Server is up on port 3000.')
  })


  })