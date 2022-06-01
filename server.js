const app  = require('./index');

const port = 3000;

const serverURI = 'http://localhost:'+port

app.listen(port,()=>console.log('Webseerver'+serverURI));