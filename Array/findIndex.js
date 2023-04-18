//findIndex

// want callback to find index

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.findIndex(checkAdult));
