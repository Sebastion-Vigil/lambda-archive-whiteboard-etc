def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

def car(f):
    def first_element(a, b):
        return a
    return f(first_element)

def cdr(f):
    def last_element(a, b):
        return b
    return f(last_element)

print(car(cons(3,4))) # should print 3
print(cdr(cons(3,4))) # should print 4