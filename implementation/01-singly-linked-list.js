// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        // Your code here
        if (!this.head) return undefined;
        let cur = this.head;
        this.head = this.head.next;
        this.length--;
        return cur;


        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here
        if (!this.head) return undefined;
        this.length--;
        let cur = this.head;
        if (!cur.next) {
            this.head = null;
            return cur;
        }
        while (cur.next.next) {
            cur = cur.next;
        }
        let oldTail = cur.next;
        cur.next = null;
        return oldTail;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here
        if (!this.head) {
            return undefined;
        } else {
            return this.head.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Your code here
        let cur = this.head;
        while (cur) {
            //process.stdout.write(`${current.value} -> `);
            console.log(cur.value);
            cur = cur.next;
        }
        //process.stdout.write('NULL');
        //console.log(" ")
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
