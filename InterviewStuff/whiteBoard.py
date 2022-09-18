
# array of int
# find all pairs of int that sum up to some param
# e.g., find all ints that sum up to 10

# does the array have an even # of items
# could be oven or odd

# only positive ints 
arr = [1, 2, 3, 4]
# 1, 4

def find_pairs(arr, num):
    # for each item in array:
    # current item arr

    pairs = ""
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[i] + arr[j] == num:
                pairs += str((arr[i], arr[j]))
    return "Pairs found: " + pairs
    

# pairs found: (1, 4), (2, 3)

print(find_pairs(arr, 5))





