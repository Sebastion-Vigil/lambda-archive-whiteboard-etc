"""Define a class with the `class` keyword"""
class Node:
  """The `__init__` method on a class in Python is analogous 
  with JavaScript's `constructor` method; it specifies how a 
  class should be initialized give some parameters. You'll 
  also notice the `self` keyword, which is passed in to 
  every class method as the first argument. It's very much
  analogous to JavaScript's `this` keyword."""
  def __init__(self, data=None, next_node=None):
    self.data = data
    self.next_node = next_node

  """Returns the data stored at the current node"""
  def get_data(self):
    return self.data
    
  """Returns the next node this node points to"""
  def get_next(self):
    return self.next_node
    
  """Sets this node's `next_node` pointer"""
  def set_next(self, new_next):
    self.next_node = new_next
    
    
"""Now that we've defined our `Node`, we can define our Linked List
class, which will utilize our `Node` class"""
class LinkedList:
  def __init__(self, head=None, tail=None):
    self.head = head
    self.tail = tail

  """Wraps the input item in a Node and adds it as the 
  current node's next node"""
      
  def insert(self, item):
    new_node = Node(item)
    if not self.head:
      self.head = new_node
      self.tail = new_node
    else:
      self.tail.next_node = new_node
      self.tail = new_node
    
    
  """Returns the number of nodes in the linked list"""
  def size(self):
      nodes = 0
      if not self.head:
        return nodes
      else:
        current_node = self.head
        while current_node:
          nodes += 1
          current_node = current_node.next_node
      return nodes


  """Returns the Node conataining the target item if 
  it is in the linked list, and None otherwise"""
  def search(self, target):
    if not self.head:
      return None
    else:
      current_node = self.head
      while current_node:
        if current_node.data == target:
          return current_node
        current_node = current_node.next_node
    return None

    
  """Deletes the target item from the linked list if it is 
  in the list. Raises a ValueError exception otherwise if 
  the target item is not in the list"""
  def delete(self, target):
    found = False
    if self.head == self.tail:
        if self.head.data == target:
          self.head = None
          self.tail = None
    elif self.head:
      previous_node = self.head
      current_node = previous_node.get_next()
      while current_node:
          if current_node.data == target:
              current_node.head = None
              current_node.tail = None
              break
          previous_node.next_node = current_node.get_next()
          # previous_node = current_node
          # current_node = current_node.get_next()
          previous_node = previous_node.get_next()
    else:
        raise ValueError('Target item not in list!')
  

my_ll = LinkedList()
my_ll.insert(1)
my_ll.insert(2)
my_ll.insert(3)
print(my_ll.head.data)
my_ll.delete(1)
print(my_ll.head.data)
# print(my_ll.head.next_node.data)













# ll = LinkedList()
# ll.insert('hello')
# ll.insert('how are you?')
# ll.insert('what up')
# print(ll.tail.data)
# print(ll.head.data)
# print(ll.size())
# print(ll.search('world'))
# print(ll.delete('hello'))
# print(ll.head.data)

ll = LinkedList()
ll.insert('hello')
print(ll.head.data)

ll.delete('penis')

