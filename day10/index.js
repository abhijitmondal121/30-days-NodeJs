const express =require('express');
function staticFileServer(req, res) {

const app = express();

// Serve static files from the "public" directory 
app.use(express.static('public'));

// Handle requests to the root ("/") by serving "index.html"

app.get('/', (req, res)=> {
res.sendfile(__dirname + '/index.html');
});
// Start the Express server

app.listen(3000, ()=>{
console.log('Server listening on port 3000');
});

app(req, res);
}
module.exports=staticFileServer;
