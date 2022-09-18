


class RingBuffer {
    constructor(max) {
      this.max = max;
      this.pointer = 0;
      this.storage = []
      for (let i = 1; i <= this.max; i++) {
          this.storage.push(null);
      }
    }

    insert(value) {
        this.storage[this.pointer] = value;
        this.pointer += 1;
        if (this.pointer >= this.max) {
            this.pointer = 0;
        }
    }

    get() {
        console.log(this.storage);
    }
}


const x = new RingBuffer(3);

x.insert('a');
x.insert('b');
x.insert('c');

x.get();

x.insert('d');
x.get();
x.insert('e');
x.get();
x.insert('f');
x.get();