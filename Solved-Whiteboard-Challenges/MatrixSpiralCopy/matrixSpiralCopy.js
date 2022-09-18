inputMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];


// so the background noise is really bad right now
// so I'll just type
// this is the spiral matrix challenge.
// we are to take a 2d matrix and represent it as a 1d matrix, in spiral form
// this one took me several days to complete, to be honest
// and I could still refactor it



// inputMatrix = [
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, 9, 10, 11, 12],
//   [13, 14, 15, 16, 17, 18],
//   [19, 20, 21, 22, 23, 24],
//   [25, 26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35, 36]
// ]

const spiralCopy = (matrix) => {
  const spiralLength = matrix.length * matrix[0].length;
  const spiral = [];

  let iLeftRightStart = 0; // +1
  let iLeftRightEnd = matrix[0].length; // -1
  let leftRightPosition = 0; // +1
  let iTopBottomStart = 1; // +1
  let iTopBottomEnd = matrix.length; // -1
  let topBottomPosition = matrix[0].length - 1; // -1
  let iRightLeftStart = matrix[0].length - 2; // -1
  let iRightLeftEnd = 0; // +1
  let rightLeftPosition = matrix.length - 1; // -1
  let iBottomTopStart = matrix.length - 2; // -1
  let iBottomTopEnd = 1; // +1                      
  let bottomTopPosition = 0; // +1

  const leftToRight = (iStart, iEnd, position) => {
    for (let i = iStart; i < iEnd; i++) {
      spiral.push(matrix[position][i]);
    }
  }
  
  const topToBottom = (iStart, iEnd, position) => {
    for (let i = iStart; i < iEnd; i++) {
      spiral.push(matrix[i][position]);
    }
  }

  const rightToLeft = (iStart, iEnd, position) => {
    for (let i = iStart; i >= iEnd; i--) {
      spiral.push(matrix[position][i]);
    }
  }

  const bottomToTop = (iStart, iEnd, position) => {
    for (let i = iStart; i >= iEnd; i--) {
      spiral.push(matrix[i][position]);
    }
  }

  while (spiral.length < spiralLength) {
    leftToRight(iLeftRightStart, iLeftRightEnd, leftRightPosition);
    topToBottom(iTopBottomStart, iTopBottomEnd, topBottomPosition);
    rightToLeft(iRightLeftStart, iRightLeftEnd, rightLeftPosition);
    bottomToTop(iBottomTopStart, iBottomTopEnd, bottomTopPosition);
    iLeftRightStart++;
    iLeftRightEnd--;
    leftRightPosition++;
    iTopBottomStart++;
    iTopBottomEnd--;
    topBottomPosition--;
    iRightLeftStart--;
    iRightLeftEnd++;
    rightLeftPosition--;
    iBottomTopStart--;
    iBottomTopEnd++;
    bottomTopPosition++;
  }
  return spiral;
}
console.log(spiralCopy(inputMatrix));
// [1, 2, 3, 4, 5, 6, 12, 18, 24, 30, 36, 35, 34, 33, 32, 31, 25, 19, 13, 7, 8, 9, 10, 11, 17, 23, 29, 28, 27, 26, 20, 14, 15, 16, 22, 21]


// You realize what you've done by showing me the door, right?
// eyes opened never closed again...
// I think I can, I think I can...





















































































































































































































































































































// graspy graspy 401 Super Duper Not Found!!!!!!!!!!!!!!!!!!111111111111111111111








































































































































































































































































// read me like a book
// please tell me when to look
// I'm feeling out of touch
// my mind is turning into mush
// she's nearly down outside
// I'm trying not to hide
// emotions start to suck me in
// her life is ready to begin
// she's turning me upside down
// she's turning me inside out
// sweet lips
// dainty fingertips
// so sexy and whole
// with just one glance
// she puts me in a trance
// very similar to the effects of alcohol
// lost outside the end of songs
// they're sending out the snarling hounds
// they've left me nothing left to give 
// she's given me the will to live
