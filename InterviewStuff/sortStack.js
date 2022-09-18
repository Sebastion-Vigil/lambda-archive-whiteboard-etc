class Stack {
    constructor() {
        this.storage = [];
    }

    push(item) {
        this.storage.push(item);
    }

    pop() {
        return this.storage.pop();
    }

    peek() {
        return this.storage[this.storage.length - 1];
    }

    isEmpty() {
        return this.storage.length === 0;
    }

    printContents() {
        this.storage.forEach(elem => console.log(elem));
    }
}
// function returns a new stack that is sorted but is still a stack

const sortStack = (s) => {
    const sortedStack = new Stack();
    while (!s.isEmpty()) {
        let tmp = s.pop();
        if (sortedStack.isEmpty() || tmp > sortedStack.peek()) {
            sortedStack.push(tmp);
        } else {
            while (sortedStack.peek() > tmp) {
                s.push(sortedStack.pop());
            }
            sortedStack.push(tmp);
        }
    }
    return sortedStack;
}

const myStack = new Stack();
myStack.push(5)
myStack.push(1)
myStack.push(8)
myStack.push(10)
myStack.push(6)
console.log("Here is the unsorted stack: ");
console.log(myStack);
console.log("And here is the sorted stack: ");
console.log(sortStack(myStack));