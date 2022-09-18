

# Zeros to the Right
# Write a function that takes an array of integers and moves each non-zero integer 
# to the left side of the array, then returns the number of non-zero integers. 
# The order of the non-zero integers
# does not matter in the mutated array.

# Sample input: [0, 3, 1, 0, -2]
# Expected output: 3
# Expected output array state: [3, 1, -2, 0, 0]
# Sample input: [4, 2, 1, 5]
# Expected output: 4
# Expected output array state: [4, 2, 1, 5]


def zerosToRight(ints):
    left = []
    right = []
    for i in range(len(ints)):
        if ints[i] == 0:
            right.append(ints[i])
        if ints[i] != 0:
            left.append(ints[i])
    print("Expected output array state: ", left + right)
    return len(left)

integers = [0, 3, 1, 0, -2]
other_ints =[4, 2, 1, 5]

print(zerosToRight(integers))
print(zerosToRight(other_ints))