# Daily Coding Problem: Problem #134 [Easy]
# Good morning! Here's your coding interview problem for today.

# This problem was asked by Facebook.

# You have a large array with most of the elements as zero.

# Use a more space-efficient data structure, SparseArray, that
# implements the same interface:

# init(arr, size): initialize with the original large array and size.
# set(i, val): updates index at i with val.
# get(i): gets the value at index i.


class SparseArray:
    
    def __init__(self, arr, size):
        self.arr = ar
        self.storage = {}
        self.size = size
        self.error = "Invalid index"
        for i in range(len(self.arr)):
            if self.arr[i] != 0:
                self.storage[i] = self.arr[i]
        

    def set(self, i, val):
        if i < 0 or i >= self.size:
            return self.error
        self.storage[i] = val
    
    def get(self, i):
        if i < 0 or i >= self.size:
            return self.error
        if i not in self.storage:
            return 0
        return self.storage[i]



sparse_arr = [0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]

x = SparseArray(sparse_arr, len(sparse_arr))
print(x.storage)
print(x.get(6))
x.set(6, 11)
print(x.get(6))
print(x.get(4))


