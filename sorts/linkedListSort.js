class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List{
    constructor(){
    this.head = null;   
    }

    add(value){
        var newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
        }else{
            var current = this.head;
            newNode.next = current;
            this.head = newNode;

        } 
        return this;
    }

    addToBack(value){
        if(this.head == null){
        return this.add(value);
            }
        var newNode = new Node(value);
        var runner = this.head;
        while(runner.next !== null){
            runner = runner.next;
        }
        runner.next = newNode;
        return this;
    }

    contains(value){
        var runner = this.head;
        var contains = false;
        while(runner){
            
            if(runner.value == value){
                contains = true;
            }
            runner = runner.next;
        }
        return contains;

    }
}

var list = new List();
list.add(1);
list.add(2);
list.add(3);
list.addToBack(4);
console.log(list.contains(4));
console.log(list);
