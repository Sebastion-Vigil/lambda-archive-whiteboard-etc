
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
s.push(6);

const sortStack = (stack) => {
  let n = 0;
  sorted = new Stack();
  while (stack.storage.length) {
    let tmp = stack.pop();
    n += 1;  
    if (tmp >= sorted.peek()) {
      sorted.push(tmp);
      n += 1;
    } else {
      while (tmp < sorted.peek()) {
        stack.push(sorted.pop());
        n += 1;
      }
      sorted.push(tmp);
      n += 1;
    }
  }
  console.log("n: ", n);
  return sorted;
}

sortedStack = sortStack(s);
sortedStack.printContents();
