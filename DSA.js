class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(val) {
        let newNode = new Node(val);

        if(this.length == 0) this.head = newNode;
        else this.tail.next = newNode;

        this.tail = newNode;
        this.length++;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

module.exports = {
    SinglyLinkedList: SinglyLinkedList,
    Node: Node
};


// Stack (Last In, First Out)
/*
    |Messenger|
    |Facebook|
    |Google|
*/

// Queue (First In, First Out)
// "Ivan" -> "Bernard" -> "Ralph" -> "Sophia" -> null