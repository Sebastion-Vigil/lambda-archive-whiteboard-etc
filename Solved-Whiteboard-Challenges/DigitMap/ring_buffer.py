

class RingBuffer:

    def __init__(self, max):
        self.max = max
        self.storage = [None] * self.max
        self.pointer = 0

    def insert(self, value):
        self.storage[self.pointer] = value
        self.pointer += 1
        if self.pointer > self.max - 1:
            self.pointer = 0

    def printAll(self):
        for i in range(len(self.storage)):
            print(self.storage[i])


sean = RingBuffer(3)
sean.insert("skittles")
sean.insert("coca-cola")
sean.insert("nintendo")
sean.printAll()
sean.insert("coffee")
sean.insert("this should rewrite the second one")
sean.insert("DarthVadar")
sean.printAll()
