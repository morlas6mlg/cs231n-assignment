const arr = [1, 2, 3, 4, 5];

function doubleArray(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i] * 2;
    newArr.push(element);
  }
  return newArr;
}

console.log(doubleArray(arr));
