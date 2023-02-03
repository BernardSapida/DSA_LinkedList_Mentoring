// Variables
const DSA = require('./DSA.js');
const SinglyLinkedList = DSA.SinglyLinkedList;
let SLL = new SinglyLinkedList();

// Insert
SLL.insert(4);
SLL.insert(6);
SLL.insert(8);
SLL.insert(2);

console.log(SLL);
console.log("\n\nHead: ");
console.log(SLL.head)
console.log("\n\nTail: ");
console.log(SLL.tail)

/*
    [4] -> null
    Head and Tail

    newNode = [6]

    [4] -> [6] -> [8] -> [2] -> null
    Head                 Tail


    [4] -> [6] -> [8] -> [2] -> null
    Head                 Tail
*/