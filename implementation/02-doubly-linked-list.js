// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        // Your code here
        let node = new DoublyLinkedNode(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        // Your code here
        if (!this.head) return undefined;
        let oldHeadVal = this.head.value;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return oldHeadVal;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here
        if (!this.head) return undefined;
        let oldTailVal = this.tail.value;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return oldTailVal;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        // Your code here
        if (!this.head) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node

        // Your code here
        if (!this.head) return undefined;
        return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
    }
    print() {
        let current = this.head;
        while (current) {
            process.stdout.write(`${current.value} <-> `);
            //console.log(current.value);
            current = current.next;
        }
        process.stdout.write('NULL');
        console.log(" ")
    }
}
let list = new DoublyLinkedList;
let n = 5;

while (n > 0) {
    list.addToHead(n);
    n--;
}

list.print();
console.log(list.removeFromTail());
console.log(list.removeFromTail());
console.log(list.removeFromTail());
list.print();


module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
