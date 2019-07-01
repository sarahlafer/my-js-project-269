console.log(`Hello from JavaScript`);

let sum = 0;
console.log(sum);
sum++;
console.log(sum);

const name = "Sarah";
console.log(name);
// ERROR
// name = "Joanna";
// console.log(name);

const firstName = "Ringo";
const lastName = "Starr";

const fullName = `${firstName} ${lastName} is a drummer`;

console.log(fullName);

const teachers = ["Joanna", "Filipe", "Valerie", "Jack", "Morten"]

teachers.forEach((teacher) => {
  console.log(teacher.toUpperCase());
});

const square = (x) => {
  return x * x;
};

console.log(square(3));
