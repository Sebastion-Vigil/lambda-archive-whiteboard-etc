

class RingBuffer {
    constructor(limit) {
       this.limit = limit;
       this.storage = [];
       this.pointer = 0;
       this.append = this.append.bind(this);
       this.allValues = this.allValues.bind(this);
    }
    
    append(item) {
        this.storage[this.pointer] = item;
        this.pointer = ++this.pointer % this.limit;
    }
    allValues() {
        console.log(this.storage);
    }
}

const buffer = new RingBuffer(3);

buffer.append('a');
buffer.append('b');
buffer.append('c');

buffer.allValues();   // should return ['a', 'b', 'c']

buffer.append('d');

buffer.allValues();   // should return ['d', 'b', 'c']

buffer.append('e');
buffer.append('f');

buffer.allValues();   // should return ['d', 'e', 'f']
