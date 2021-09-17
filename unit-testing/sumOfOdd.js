export default function sumOfOdd(arr) {

  if (arr.some((el) => typeof el !== "number" || el % 1)) {
    throw new Error("Must pass an array of integers!");
  }

  if (arr.length === 0) {
    return arr;
  }

  if (arr.length === 1) {
    if (arr[0] % 2 === 0) {
      return 0;
    }
    return arr[0];
  }

  return arr.filter((el) => el % 2 !== 0).reduce((acc, curr) => acc + curr);
}

console.log(sumOfOdd([2]))