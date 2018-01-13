const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft === 0) {
    reader.close();
    completionCallback(sum);
    return null;
  }
  reader.question('Pick a number!!!', (res) => {
    let response = res;
    sum += parseInt(response);
    numsLeft --;
    addNumbers(sum, numsLeft, completionCallback);
  });

  completionCallback(sum);
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
