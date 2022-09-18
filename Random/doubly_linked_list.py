"""Each ListNode holds a reference to its previous node
as well as its next node in the List."""

def repr(self):
    len = sum(1 for _ in self)
    output = ''
    tab = '\t'
    for i, n in enumerate(self):
        output += tab[0] * i + 'prev: '
        if i == 0 and not n.prev:
            output += 'None'
        if n.prev:
            output += str(n.prev.val)
        output += '\n' + tab[0] * i + 'val : ' + str(n.val)
        output += '\n' + tab[0] * i + 'next: '
        if i == len - 1 and not n.next:
            output += 'None\n'
            continue
        if n.next:
            output += str(n.next.val) + ' ┐\n'
    return output

# what I have so far: 
# a working doubly linked list, can add and remove items on both head and tail
# an attempt at insert_after() in the ListNode class, but was unsuccessful
# and attempted the move_to_front() method but have not figured it out
class ListNode:
  def __init__(self, val, prev=None, next=None):
    self.prev = prev
    self.val = val
    self.next = next

  def __iter__(self):
        """__iter__ makes ListNode iterable"""
        node = self
        while node:
            yield node
            node = node.next

  def __repr__(self):
        """__repr__ returns a string representation of the DLL"""
        return repr(self)
  
  """Wrap the given value in a ListNode and insert it
  after this node. Note that this Node could already
  have a next node it is pointing to."""
  def insert_after(self, val):
    new_node = ListNode(val)
    new_node.prev = self
    
    if self.next:
      # next_ref = self.next
      new_node.next = self.next
      self.next.prev = new_node
    self.next = new_node
  
  """Wrap the given value in a ListNode and insert it
  before this node. Note that this Node could already
  have a previous node it is pointing to."""
  def insert_before(self, val):
    new_node = ListNode(val)
    new_node.next = self
      
    if self.prev:
      self.prev.next = new_node
      new_node.prev = self.prev
    self.prev = new_node

      
  """Rearranges this ListNode's previous and next pointers 
  accordingly, effectively deleting this ListNode."""
  def delete(self):
    # automatically point next and prev of self to None
    # check if prev exists store ref
      # prev_ref.next = None
    # check if next exists store ref
      # next_ref.prev = None
    # self.prev = None
    # self.next = None
    prev_ref = None
    next_ref = None
    if self.prev:
      prev_ref = self.prev
    if self.next:
      next_ref = self.next
    if prev_ref and next_ref:
      prev_ref.next = next_ref
      next_ref.prev = prev_ref
    elif prev_ref:
      
    self.next = None
    self.prev = None
      
"""Our doubly-linked list class. It holds references to 
the list's head and tail nodes."""
class DoublyLinkedList:
  def __init__(self, node=None):
    self.head = node
    self.tail = node

  def __iter__(self):
        node = self.head
        while node:
            yield node
            node = node.next

  def __repr__(self):
        return repr(self)
  
  """Wraps the given value in a ListNode and inserts it 
  as the new head of the list. Don't forget to handle
  the old head node's previous pointer accordingly."""
  def add_to_head(self, val):
    new_node = ListNode(val)
    if not self.head:
      self.head = new_node
      self.tail = new_node
    else:
      self.head.prev = new_node
      new_node.next = self.head
      self.head = new_node
    
  """Removes the List's current head node, making the
  current head's next node the new head of the List.
  Returns the removed Node."""
  def remove_from_head(self):
    if not self.head:
      return 
    else:
      new_head = self.head.next
      new_head.prev = None
      self.head.next = None
      self.head = new_head
      
  """Wraps the given value in a ListNode and inserts it 
  as the new tail of the list. Don't forget to handle 
  the old tail node's next pointer accordingly."""
  def add_to_tail(self, val):
    new_node = ListNode(val)
    if not self.head:
      self.head = new_node
      self.tail = new_node
    else:
      self.tail.next = new_node
      new_node.prev = self.tail
      self.tail = new_node
      
  """Removes the List's current tail node, making the 
  current tail's previous node the new tail of the List.
  Returns the removed Node."""
  def remove_from_tail(self):
    if not self.head:
      return
    else:
      new_tail = self.tail.prev
      self.tail.prev = None
      new_tail.next = None
      self.tail = new_tail
      
  """Removes the input node from its current spot in the 
  List and inserts it as the new head node of the List."""
  def move_to_front(self, val):
    if self.head.val == val:
      return
    else:
      current_node = self.head
      while current_node:
        if current_node.val == val:
          if current_node == self.tail:
            new_tail = current_node.prev
            current_node.prev = None
            current_node.next = self.head
            self.head.prev = current_node
            self.head = current_node
          else:
            next_node = current_node.next
            prev_node = current_node.prev
            current_node.prev = None
            current_node.next = self.head
            self.head.prev = current_node
            self.head = current_node
            prev_node.next = next_node
            next_node.prev = prev_node
        current_node = current_node.next
    
  """Removes the input node from its current spot in the 
  List and inserts it as the new tail node of the List."""
  def move_to_end(self, node):
    pass


dll = DoublyLinkedList()
# dll.add_to_head(1)
# dll.add_to_head(2)
# dll.add_to_head(3)

# print(dll.head.val, dll.head.next.val, dll.head.next.next.val)
# dll.remove_from_head()
# print(dll.head.val, dll.head.next.val)
# dll.add_to_tail(1)
# dll.add_to_tail(2)
# dll.add_to_tail(3)
# dll.add_to_head(0)
# print(dll.head.val, dll.head.next.val, dll.head.next.next.val, dll.head.next.next.next.val)
# dll.remove_from_tail()
# print(dll.tail.val)

ln = ListNode('Frank')
ln.insert_after('SuperSean')
ln.insert_after('Christina Aguilera')
ln.next.insert_before('Brittany Spears')
print(ln)
ln.next.delete()
print(ln)
