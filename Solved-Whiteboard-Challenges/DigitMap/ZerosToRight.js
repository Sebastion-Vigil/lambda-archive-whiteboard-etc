


const Zeros2Right = (ints) => {
    const left = [];
    const right = [];
    ints.forEach((int) => {
      if (int === 0) {
          right.push(int);
      }
      if (int !== 0) {
          left.push(int);
      }
    });
    console.log("Expected output array state: ", left.concat(right));
    return left.length;
}

const integers = [0, 3, 1, 0, -2]
const other_ints =[4, 2, 1, 5]

console.log(Zeros2Right(integers));
console.log(Zeros2Right(other_ints));