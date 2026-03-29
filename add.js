const add = () => {
  const sum = (a, b, c) => {
    return a + b + c;
  };

  const randomNum = Math.floor(Math.random() * 100) + 1;
  const a = randomNum;
  const b = randomNum;
  const c = randomNum;

  console.log(sum(a, b, c));
};

module.exports = add