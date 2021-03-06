// Write a function capitalize first which takes in an array of strings and capitalizes the first letter of each string value.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

const capitalizeFirst = arr => {
  const capitalArray = [];
  if (arr.length === 0) return [];

  while (arr.length) {
    if (arr[0][0]) {
      let capitalLetter = arr[0][0].toUpperCase();

      const capitalWord = (capitalLetter += arr[0].slice(1));
      capitalArray.push(capitalWord);

      arr = arr.slice(1);
      return [...capitalArray, ...capitalizeFirst(arr)]; //capitalArray.concat(capitalizeFirst(arr));
    }
  }

  return capitalArray;
};
