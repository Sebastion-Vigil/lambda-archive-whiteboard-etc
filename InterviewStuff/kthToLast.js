


class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

let a = new ListNode("Australian Sheperd");
let b = new ListNode("Beagle");
let c = new ListNode("Cairne Terrier");
let d = new ListNode("Dobermann");
let e = new ListNode("English Mastiff");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// console.log(a);

const kthToLastNode = (k, head) => {
  // have to get the size of ll somehow...
  // okay so let's try something kind of wacky...
  const nodeStore = [];
  current_node = head;
  while (current_node) {
      nodeStore.unshift(current_node);
      current_node = current_node.next;
  }
  if (k > nodeStore.length) {
      return "Integer k greater than linked list length!";
  }
  return nodeStore[k-1];
};


console.log(kthToLastNode (2, a));