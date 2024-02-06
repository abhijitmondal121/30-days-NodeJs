
function greetHandler(req,res){
    const url=new URL(req.url,'http://localhost');
    const name=url.searchParams.get('name') || 'Guest';
    const response=`Hello, ${name}`;
    console.log(response);
}


greetHandler({url:"/greet?name=Abhijit"});
greetHandler({url:"/greet"});