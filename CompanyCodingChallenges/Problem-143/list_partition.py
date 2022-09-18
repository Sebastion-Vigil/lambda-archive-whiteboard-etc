# https://www.dailycodingproblem.com/

# Good morning! Here's your coding interview problem for today.

# This problem was asked by Amazon.

# Given a pivot x, and a list lst, partition the list into three parts.

# The first part contains all elements in lst that are less than x
# The second part contains all elements in lst that are equal to x
# The third part contains all elements in lst that are larger than x
# Ordering within a part can be arbitrary.

# For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], 


def partition_list(x, lst):
    first = []
    second = []
    third = []
    for i in range(len(lst)):
        if lst[i] < x:
            first.append(lst[i])
        elif lst[i] == x:
            second.append(lst[i])
        else:
            third.append(lst[i])
    return first + second + third

sample = [9, 12, 3, 5, 14, 10, 10]
print(partition_list(10, sample))




