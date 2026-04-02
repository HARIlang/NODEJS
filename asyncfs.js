const { isUtf8 } = require('buffer');
const fs = require('fs/promises');

const readfile = async () =>{       // async fs using the try catch method

try{
    const data = await fs.readFile('sample.txt','utf-8')
    console.log(data);
}
catch(error){
    console.log(error);
}


}
readfile()