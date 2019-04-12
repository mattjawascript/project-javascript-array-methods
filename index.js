let coffee = ["tubruk", "kopi susu", "aceh gayo", "joss"];
console.log(`Your coffee list: ${coffee}`);

const pop = () => {
  console.log(`You have removed ${coffee.pop()}`);
  console.log(`Now your coffee : ${coffee}`);
};

const push = () => {
  coffee.push(prompt(`What kind of coffee do you wanna add to?`));
  console.log(`Now your coffee : ${coffee}`);
};

const shift = () => {
  console.log(`You have removed ${coffee.shift()}`);
  console.log(`Now your coffee : ${coffee}`);
  return shift;
};

const unshift = () => {
  coffee.unshift(prompt(`What kind of coffee do you wanna restore to?`));
  console.log(`Now your coffee : ${coffee}`);
};

const showsnacks = () => {
  const snacks = ["Apem", "Bikang", "Cakwe", "Donat", "Eclair"];
  for (let snack of snacks) {
    console.log(snack);
  }
};
