// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
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
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        //O(1)
        return this.length;

        //O(n)
        let count = 0;
        if (!this.head) return 0;
        let cur = this.head;
        while (cur) {
            count++;
            cur = cur.next;
        }
        return count;
        // Your code here
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Your code here
        let total = 0;
        if (!this.head) return 0;
        let cur = this.head;
        while (cur) {
            total += cur.value;
            cur = cur.next;
        }
        return total;
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Your code here
        let total = 0;
        let count = 0;
        if (!this.head) return 0;
        let cur = this.head;
        while (cur) {
            total += cur.value;
            count++;
            cur = cur.next;
        }
        return total / count;
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Your code here
        if (!this.head) return null;
        let cur = this.head;
        let count = 0;
        while (count < n) {
            count++;
            cur = cur.next;
        }
        return cur;

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        // Your code here
        let midInd = ((this.length - this.length % 2) / 2 + this.length % 2) - 1
        return this.findNthNode(midInd);


        // Write your hypothesis on the time complexity of this method here
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
        // Does the time complexity change? How about space complexity?

        // Your code here
        let reversed = new SinglyLinkedList;
        let cur = this.head;
        while (cur) {
            reversed.addToHead(cur.value);
            cur = cur.next;
        }
        //console.log(reversed);
        return reversed;

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here
        let node = this.head;
        let previous;
        let temp;

        while (node) {
            temp = node.next;
            node.next = previous;
            previous = node;
            node = temp;
        }
        this.head.next = null;
        this.head = previous;
        return this;


        // Write your hypothesis on the time complexity of this method here
    }
    print() {
        let current = this.head;
        while (current) {
            process.stdout.write(`${current.value} -> `);
            //console.log(current.value);
            current = current.next;
        }
        process.stdout.write('NULL');
        console.log(" ")
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        // Your code here
        let midInd = ((this.length - this.length % 2) / 2 + this.length % 2) - 1
        console.log(midInd);
        if (!this.head) return null;
        let cur = this.head;
        let count = 0;
        while (count < midInd) {
            count++;
            cur = cur.next;
        }
        return cur;
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let temp;
        let cur = this.head;
        while (cur) {
            temp = cur.next;
            cur.next = cur.prev
            cur.prev = cur.next;
            cur = temp;
        }
        // Your code here
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here
        let temp;
        let cur = this.head;
        while (cur) {
            temp = cur.next;
            cur.next = cur.prev
            cur.prev = cur.next;
            cur = temp;
        }
        // Your code here
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        return this;
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
// let list = new DoublyLinkedList();
// list.addToTail(1);
// list.addToTail(2);
// list.addToTail(3);
// list.addToTail(4);
// list.addToTail(5);
// list.addToTail(6);
// list.print();
// list.reverse();
// list.print();



module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
