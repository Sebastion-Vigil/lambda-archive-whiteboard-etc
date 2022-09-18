// Assume we have a Stack class given by the following code:

// We wish to augment this Stack class such that we can 
// always fetch the max value from the Stack in constant time
// Use the given Stack class to implement a new `MaxStack` 
// class that has all the same methods as the base Stack class,
// along with a `getMax` method that returns the max value of
// the MaxStack in O(1) time. `getMax` should not remove the
// item.

// Analyze the time and space complexity of the methods of 
// your MaxStack class. What tradeoffs had to occur in order
// for you to achieve O(1) retrieval of the maximum value?

// So they want me to make another class, but I see an even 
// easier way to do this, and that is to just add a variable in 
// the constructor...ah no wait that would be too convoluted
// since I would have to change the max variable when the pop()
// method is invoked. Okay I get what it's asking now. Time to
// use two stacks working together...

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length) {
            return this.items.pop();
        }
        return null;
    }

    peek() {
        if (this.items.length) {
            return this.items[this.items.length - 1];
        }
        return null;
    }
};

// opting to not use inheritance and instead rely on a has-a relationship (composition)
// i.e., the `MaxStack` class has-a two instances of `Stack` inside of it, `stack` and `maxVals`
class MaxStack {
    constructor() {
        this.stack = new Stack();   // this will be our primary stack
        this.maxVals = new Stack(); // store max values, when pop() then next in line is automatically new max
    }
    push(item) {
        // first we check if item is greater than current maxVals.peek()
        if (!this.maxVals.length || item > this.maxVals.peek()) {
            this.maxVals.push(item);
        }
        this.stack.push(item);
    }
    pop() {
        // before popping off stack we must check if item at top of 
        // stack equals item at top of maxVals
        // if so, then we pop that item off maxVals
        if (this.stack.peek() === this.maxVals.peek()) {
            this.maxVals.pop();
        }
        return this.stack.pop();
    }
    peek() {
        if (this.stack.length) {
            return this.stack[this.stack.length - 1];
        }
    }
    getMax() {
        return this.maxVals.peek();
    }
}


const maxStack = new MaxStack();
console.log(maxStack.getMax());   // should print `null`

maxStack.push(1);
console.log(maxStack.getMax());   // should print 1

maxStack.push(100);
console.log(maxStack.getMax());   // should print 100

maxStack.pop();
console.log(maxStack.getMax());   // should print 1