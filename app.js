//sync code example

function otherFunct() {
  console.log("we are in another funct");
  console.log("do some stuff");
}

console.log("start");

otherFunct();

console.log("End");

//Async code example

console.log("start");

setTimeout(() => {
  console.log("we are in the timeout");
}, 2000);

const items = [1, 2, 3, 4, 5];

items.forEach(item => {
    console.log(item);
});

console.log("End");
