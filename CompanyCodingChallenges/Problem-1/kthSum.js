

const ints = [10, 15, 3, 7];

// function will take two params, an array of numbers
// and an integer, k. If any two of the numbers in the array
// add up to k, return true. Otherwise, return false


// so what the hell should I call this function?
// this is one case where naming it is harder than 
// coding the damn thing

const kFound = (numbers, k) => {
    if (numbers.length < 2) return false;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === k) {
                return true;
            }
        }
    }
    return false;
}


console.log(kFound(ints, 17));