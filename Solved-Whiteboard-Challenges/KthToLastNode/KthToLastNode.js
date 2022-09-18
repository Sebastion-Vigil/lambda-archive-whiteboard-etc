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

  
  function kthtolast(list, k) {
    let state = 0;
    let finalNode = undefined;
    function recursive(node) {
        if (node.next) {
            recursive(node.next);
        }
        state++;
        if(state == k) {
            finalNode = node;
        }
    }
    recursive(list);
    return finalNode;
 }

 console.log(kthtolast(a, 2))
  
  
  // const KthToLast = (k, node) => {
  //     // unpack linked list and store the nodes
  //     const nodeStore = []; // space complexity O(n)
  //     let current_node = node;
  //     while (current_node) {
  //       nodeStore.unshift(current_node); // time comlexity O(n)
  //       current_node = current_node.next;
  //     }
  //     if (k > nodeStore.length) {
  //         return -1;
  //     }
  //     return nodeStore[k-1];
  // }

  // console.log(KthToLast(2, a));
