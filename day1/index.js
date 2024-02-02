const fs= require("fs");

function readFileContent(filePath) {
    // Implementation

fs.readFile(filePath,"UTF-8",(err,data)=>{
    if(data){
        console.log(data);
    }
    if(data==''){
        console.log("Empty string");
    }
    if(err){
        console.log("Error reading file: ENOENT: no such file or directory...")
    }
});
}
readFileContent("read.txt")
// Hello this is Papia.
readFileContent("empty.txt")
// Empty string
readFileContent("unknown.txt")
// ENOENT: no such file or directory...