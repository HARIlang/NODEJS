const sum = (a,b,c) =>{
return a+b+c;
}


const randomNum = Math.floor(Math.random()*100)+1;
const a = randomNum;
const b = randomNum;
const c = randomNum;

const add = sum(a,b,c);
console.log(add);
