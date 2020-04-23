const express  = require('express');
const port = 2112;

const app = express();

apiRouter= require('./routes/api')

app.use ('/api',apiRouter)

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})