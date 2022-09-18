Kth to Last Node in a Singly-Linked List

Given a pointer to the head element of a linked list, write a function that also 
takes an integer parameter k and returns the kth to last node of the list.

For example:

class ListNode {
 constructor(value) {
   this.value = value;
   this.next = null;
 }
}

let a = new ListNode("Australian Sheperd");
let b = new ListNode("Beagle");
let c = new ListNode("Cairne Terrier");
let d = new ListNode("Dobermann");
let e = new ListNode("English Mastiff");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

kthToLastNode(2, a);  // returns the node with value "Dobermann" (the 2nd to last node)

*/


/* 
Approach: 
1) Go through each node and count how many nodes are in the linked list
2) The kth to the last node in the linked list is then ((length of linked list) - (k))

for a linked list with 5 nodes, the 1st to last node is 5-1=4
                              , the 2nd to last node is 5-2=3

-if there are 5 nodes, if k is the last element
-if k is the second to last node, 
*/


class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
   
let a = new ListNode("Australian Sheperd");
let b = new ListNode("Beagle");
let c = new ListNode("Cairne Terrier");
let d = new ListNode("Dobermann");
let e = new ListNode("English Mastiff");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

//kthToLastNode(2, a);  // returns the node with value "Dobermann" (the 2nd to last node)

let returnKthToLastNode = (k,head) => {
    let count = 1;
    let store = [];
    let currentNode = head;

    while (currentNode.next !== null) {
        count +=1;
        currentNode = currentNode.next;
        store.push(currentNode)
    }
    console.log('number of nodes in linked list: ', count);
    let numberOfNodes = count;

    let kthToLastNode = null;
    currentNode = head;
    for (let i = 0; i<numberOfNodes-count;i++) {
        currentNode = currentNode.next;
    }
    console.log(numberOfNodes-count)
    console.log('currentNode ', currentNode);
    return currentNode
}

returnKthToLastNode(2, a);