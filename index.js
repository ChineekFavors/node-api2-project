
const server = require('./server.js');

server.get('/', (req,res) =>{
    res.status(200).send('<h1>welcome 2 NODE-API2-PROJECT</h1>')
});

server.listen(4000, () =>{ console.log('server listening on port 4000')});