

class Stack:
    def __init__(self):
        self.storage = []

    def push(self, item):
        self.storage.append(item)

    def pop(self):
        return self.storage.pop()

    def peek(self):
        if self.is_empty():
            return []
        else:
            return self.storage[-1]

    def is_empty(self):
        return len(self.storage) == 0

    def print_contents(self):
        for i in range(len(self.storage)):
            print(self.storage[i])


def sort_stack(stack):
    sorted = Stack()
    while len(stack.storage):
        tmp = stack.pop()
        if sorted.is_empty():
            sorted.push(tmp)
            continue
        if tmp >= sorted.peek():
            sorted.push(tmp)
        else:
            while not sorted.is_empty() and tmp < sorted.peek():
                stack.push(sorted.pop())
            sorted.push(tmp)
    return sorted

s = Stack()
s.push(4)
s.push(10)
s.push(8)
s.push(5)
s.push(1)
s.push(6)
print("s.print_contents():")
s.print_contents()
sorted_s = sort_stack(s)
print("sorted_s.print_contents():")
sorted_s.print_contents()