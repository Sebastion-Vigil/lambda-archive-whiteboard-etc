

class Heap:
    def __init__(self):
        self.storage = [0]

    def insert(self, value):
        self.storage.append(value)
        self._bubble_up(self.storage[-1])

    def delete(self):
        self.storage[1], self.storage[-1] = self.storage[-1], self.storage[1]
        deleted_node = self.storage.pop(-1)
    
    def get_max(self):
        return self.storage[1]

    def get_size(self):
        return len(self.storage) - 1
    
    def _bubble_up(self, index):
        pass

    def _sift_down(self):
        pass

heap = Heap()
heap.insert(1)
heap.insert(2)
heap.insert(3)

print(heap.get_size())

