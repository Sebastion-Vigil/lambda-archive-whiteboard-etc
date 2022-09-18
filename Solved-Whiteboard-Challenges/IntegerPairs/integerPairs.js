/*
Write a function `integerPairs` to find and print out all
pairs of integers within an input array which sum up to a
specified input value `k`.

There are multiple ways to do this, depending on whether 
you want to favor runtime or space.
*/


// so I know I have to compare every number with every other number
// going into this I believe my initial solution will be O^2
// so my plan is to append pairs array with pairs of numbers
// that meet required condition

// but first let's console.log() to better understand 
// the behavior of the nested loop

const integerPairs = (ints, k) => {
    const pairs = [];
    for (let i = 0; i < ints.length; i++) {
        for (let j = i+1; j < ints.length; j++) {
          if (ints[i] + ints[j] === k) {
              let pairString = parseInt(ints[j]) + ' ' + parseInt(ints[i]) + ', ';
              pairs.unshift(pairString);
          }
        }
    }
    return pairs.join('');
}



console.log(integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
// should print '6 5', '7 4', '8 3', '9 2', '10 1'