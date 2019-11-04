class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class NodeList {
    constructor() {
        this.head = null;

    }
    pushBack(value) {


    }
    pushFront(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }
}
const list = new NodeList();
console.log(list)
list.pushFront();