//exercise 1//
for (var x = "#"; x.length < 8; x += "#")
  console.log(x);

//exercise 2//
for (let n = 1; n <=100; n++) {
  var output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
console.log(output || n);
}

//exercise 3//
let size = 8;
let board = "";
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
    
console.log(board);

//I had to look up the answers for all of these :(//