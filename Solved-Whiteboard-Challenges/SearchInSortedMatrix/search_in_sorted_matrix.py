# Search In Sorted Matrix
# Given a matrix (a two-dimensional array), whose width and height do not necessarily match,
#  containing distinct integers where each row is sorted and each column is also sorted, write a 
#  function that searches for a target value in the matrix. The function should return a tuple 
#  (or two-element array) of the row and column indices of the target value. If the target value is 
#  not found in the array, the function should return [-1, -1]#
# Sample input: 45, 
# [ 
# [1, 4, 7, 12, 15, 999], 
# [2, 5, 19, 32, 35, 1001], 
# [4, 8, 24, 34, 36, 1002], 
# [40, 41, 42, 44, 45, 1003], 
# [98, 99, 101, 104, 190, 1009], 
# #
# Expected output: [3, 4] // i and j index addresses of 45 (location#
# Analyze the space and time complexity of your solution.

sample = [ 
    [1, 4, 7, 12, 15, 999], 
    [2, 5, 19, 32, 35, 1001], 
    [4, 8, 24, 34, 36, 1002], 
    [40, 41, 42, 44, 45, 1003], 
    [98, 99, 101, 104, 190, 1009], 
    ]

def search_sorted_matrix(matrix, num):
    location = [-1, -1]
    if num < sample[0][0] or num > sample[len(sample) - 1][-1]:
        return location
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrix[i][j] == num:
                location.pop()
                location.pop()
                location.append(i)
                location.append(j)
    return location


print(search_sorted_matrix(sample, 45))

    