const express  = require('express');

//Wrapping the port number in a variable 
const port = 2112;

const app = express();

apiRouter= require('./routes/api')

app.use ('/api',apiRouter)

//Mongoose boilerplate for connecting to mongoDB
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const mongoDb = 'mongodb+srv://ndrwwhtmr:VaUOsbhP8iq8kqQ2@cluster0-taich.mongodb.net/test?retryWrites=true&w=majority'
console.log(`Connecting to Mongo @ ${mongoDb}...`);
mongoose.connect(mongoDb, {useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB crapped out'));
//Starting the server and giving it a port to listen on
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})