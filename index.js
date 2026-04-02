const { error } = require('console');
const fs = require('fs');


const filecontent = fs.readFileSync('./sample.txt','utf-8');
console.log(filecontent);

fs.readFile('./sample.txt','utf-8' , (error,data)=>{    // best method while it comes to multiple users
  if(error){
  console.log('the error is ' +  error)
  }
  else{

    console.log('this is from async callback function'+data);
  }
});


// writing file with sync method;

fs.writeFileSync('syncwrite.txt','this is written by sync method');


// writing file with async method 


fs.writeFile('async.txt','this written by async method',(err)=>{

    if(err){
        console.log(err)
    }
    else{
        console.log('the file written')
    }
});



