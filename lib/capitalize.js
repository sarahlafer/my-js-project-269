const capitalize = (name) => {
  const firstLetter = name[0].toUpperCase();
  const restOfWord = name.substring(1).toLowerCase();
  return `${firstLetter}${restOfWord}`;
  // OR concatinate return firstLetter + restOfWord;
};

console.log(capitalize("jOaNNa"));
// => "Joanna"
