// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 1000,
// -1 ≤ a[i] ≤ 1000.

// [output] array.integer

// Sorted array a with all the trees untouched.

function sortByHeight(a) {
    if (a.length === 1) return a
    copyA = a.slice()
    copyA.sort((a, b) => a - b)
    copyA = copyA.filter(function(element) {
        return element !== -1
    })
    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) {
            continue
        }
        else {
            replaceWith = copyA.shift()
            a[i] = replaceWith
        }
    }
    return a
    
}

console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]))