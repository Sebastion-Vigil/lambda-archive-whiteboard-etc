
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
    

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_node(self, value):
        new_node = Node(value)
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
    
    def display_nodes(self):
        current = self.head
        while current:
            print(current.value)
            current = current.next


x = LinkedList()
x.insert_node('a')
x.insert_node('b')
x.insert_node('c')
x.display_nodes()
        
        
        
