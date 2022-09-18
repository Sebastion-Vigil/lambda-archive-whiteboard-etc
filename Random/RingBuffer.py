class RingBuffer:
  def __init__(self, capacity):
    self.capacity = capacity
    self.storage = []
    self.pointer = 0
    
  def append(self, item):
    """append an element to the end of the RingBuffer"""
    if len(self.storage) < self.capacity:
        self.storage.append(item)
    else:
        self.storage[self.pointer] = item
        self.pointer += 1
        if self.pointer == self.capacity:
            self.pointer = 0
  def get(self):
    """Return all the elements from the oldest to the newest"""
    return self.storage

"""
model solution from repl.it
class RingBuffer:
  def __init__(self, capacity):
    self.capacity = capacity  
    self.current = 0
    self.buffer = [None] * capacity
    
  def append(self, item):
    #append an element to the end of the RingBuffer
    self.buffer[self.current] = item
    self.current += 1
    # If we reach the capacity of the buffer
    # set the current pointer back to the beginning
    if self.current == self.capacity:
      self.current = 0 
      
  def get(self):
    #Return a list of elements from the oldest to the newest
    return [x for x in self.buffer if x != None]
"""

"""
x = RingBuffer(3)
x.append('a')
x.append('b')
x.append('c')
x.append('d')
print(x.get())
x.append('e')
print(x.get())
x.append('f')
print(x.get())
"""
