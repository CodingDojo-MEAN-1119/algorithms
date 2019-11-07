//  Given k, return the value that is ‘k’ nodes from the list’s end. 
//  If given (list,1) , return the list’s last value. If given (list,4) ,
//  return the value at the node that has exactly 3 nodes following it. 


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
    returnK(value) {
        let count = 0;
        let runner = this.head;
        let runnerb = this.head;


        for(let i = 0; i < value; i ++) {
            runner = runner.next
        }

        while(runner != null) {
            count ++;
            runner = runner.next;
            runnerb = runnerb.next;
        }
        return runnerb.value;

    }
    reverseList(){
        let runner= this.head;
        let list= new NodeList();
        while(runner!=null){
            list.pushFront(runner.value);
            runner=runner.next;
        }
        this.head= list.head;
        return this;
    }

}

const list = new NodeList();
//console.log(list)
list.pushFront(1); 
list.pushFront(20); 
list.pushFront(11); 
list.pushFront(4); 
list.pushFront(65); 
list.pushFront(633); 
list.pushFront(7); 
console.log(list)
console.log(list.returnK(2));