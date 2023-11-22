//1. question:
var obj1 = { name: "person1", age: 5 };
var obj2 = { age: 5, name: "person1" };


var obj1Str = JSON.stringify(obj1);
var obj2Str = JSON.stringify(obj2);

if (obj1Str ===obj2Str) {
  console.log("The objects are equal.");
} else {
  console.log("The objects are not equal.");
}
