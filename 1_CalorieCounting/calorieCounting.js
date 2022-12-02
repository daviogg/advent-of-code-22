const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const elves = data.split('\n\n');
  let totCalorie = [];
  elves.forEach(elf => {
    const calorie = elf.split("\n");
    const sum = calorie.reduce((partial, next) => Number(partial) + Number(next), 0);
    totCalorie.push(sum);
  });

  totCalorie = totCalorie.sort((a, b) => a - b);
  const topOne = totCalorie.slice(-1);
  const topThree = totCalorie.slice(-3); 
  const sum = topThree.reduce((partial, next) => partial + next, 0);
  
  console.log(`Best elf carrying: ${topOne}`);
  console.log(`Sum of top three Elves carrying the most Calories: ${sum}`); // 6
});