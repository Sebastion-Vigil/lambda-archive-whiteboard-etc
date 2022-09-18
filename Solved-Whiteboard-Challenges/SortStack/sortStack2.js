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
      return this.storage[this.storage.length-1];
    }
  
    isEmpty() {
      return this.storage.length === 0;
    }
  
    printContents() {
      this.storage.forEach(elem => console.log(elem));
    }
  }


const s = new Stack();
s.push(4);
s.push(10);
s.push(8);
s.push(5);
s.push(1);
s.push(6); // top of stack

// s.printContents();
// console.log(s.peek());

const sortStack = (stack) => {
  const sorted = new Stack();
  
  while (!stack.isEmpty()) {
      let tmp = stack.pop();
      if (tmp >= sorted.peek()) {
          sorted.push(tmp);
      }
      else {
          while (tmp < sorted.peek()) {
              stack.push(sorted.pop());
          }
          sorted.push(tmp);
      }
  }
  return sorted;
}

const x = sortStack(s);
console.log(x);