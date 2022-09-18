

class RingBuffer {
    constructor(max) {
      this.max = max;
      this.storage = new Array(this.max).fill(null); // dynamically generating array of nulls length of max
      this.pointer = 0;
    }

    insert(value) {
        this.storage[this.pointer] = value;
        this.pointer += 1;
        if (this.pointer > this.max - 1) {
          this.pointer = 0;
        }
    }

    getVals() {
        this.storage.forEach((item)=> {
           console.log(item);
        });
    }
}


const friedGreenTomatos = new RingBuffer(3);
friedGreenTomatos.insert("superduper");
friedGreenTomatos.insert("batmanJoker");
friedGreenTomatos.insert("WonderWoman");
friedGreenTomatos.insert("Baine");
friedGreenTomatos.insert("RobinFamilara");

friedGreenTomatos.getVals();
console.log(friedGreenTomatos.storage.length);