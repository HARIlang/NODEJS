fs  = require('fs');
const readStream = fs.createReadStream('./file1.txt',{

    encoding:"utf-8",
    


})

const writeStream = fs.createWriteStream('./file2.txt');


readStream.on('data' , (chunk)=>{
    console.log(chunk);
    writeStream.write(chunk)
})