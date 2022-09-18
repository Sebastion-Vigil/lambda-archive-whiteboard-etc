

class RingBuffer:
    def __init__(self, limit):
        self.limit = limit
        self.storage = [None] * limit 
        self.pointer = 0
    
    def append(self, item):
        self.storage[self.pointer] = item
        self.pointer += 1
        self.pointer = self.pointer % self.limit

    def allValues(self):
        print(self.storage)


buffer = RingBuffer(3)

buffer.append('a')
buffer.append('b')
buffer.append('c')

buffer.allValues()   # should return ['a', 'b', 'c']

buffer.append('d')

buffer.allValues()   # should return ['d', 'b', 'c']

buffer.append('e')
buffer.append('f')

buffer.allValues()   # should return ['d', 'e', 'f']
