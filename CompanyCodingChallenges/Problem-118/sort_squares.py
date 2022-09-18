# [Problem-118] Square Sort: Good morning! Here's your coding interview problem for today.

# This problem was asked by Google.

# Given a sorted list of integers, square the elements and give the output in sorted order.

# For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

def sort_squares(ints):
    sorted = []
    for i in range(len(ints)):
        sorted.append(ints[i] * ints[i])
    sorted.sort()
    return sorted

integers = [-9, -2, 0, 2, 3]
sorted_squares = sort_squares(integers)
print("integers: ", integers)
print("sorted_squares: ", sorted_squares)