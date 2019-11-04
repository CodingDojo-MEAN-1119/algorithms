class BTNode { 
    constructor(value){
    this.val = value; 
    this.left = null; 
    this.right = null;
    }
    add(node){
        if(node.val>=this.val){
            if(this.right==null){
                this.right=node;
            }
            else{
                this.right.add(node);
            }
        }
        else{
        
            if(this.left==null){
            this.left=node;
            }else{
            this.left.add(node);
            }
        }
    }
    min(){
        
        if(this.left==null){
            return this.val;
        }else{
            
            return this.left.min();
        }
    }

    count(){
        var counter=1;
        if(this.right!=null){
            var rightCount= this.right.count();
            counter+=rightCount;
        }
        if(this.left!=null){
            var leftCount=this.left.count();
            counter+=leftCount;
        }
        return counter;
    }
    search(val){
        if(this.val == val){
            return true;
        }
        if(val<this.val && this.left!=null){
            return this.left.search(val);
        }
        if(val> this.val && this.right!=null){
            return this.right.search(val)
        }
        return false;
    }
    findMax(){
        if(this.right==null){
            return this.val;
        }else{
            
            return this.right.findMax();
        }
    }
    height(){
        
        var rCount=0;
        var lCount=0;

        if(this.right!=null){
            rCount=this.right.height();
        }
        if(this.left!=null){
            lCount=this.left.height();
        }
        return (rCount > lCount ? rCount : lCount) + 1;
       
    }
    balance(){        
        var rCount=0;
        var lCount=0;

        if(this.right!==null){
            rCount=this.right.height();
        }
        if(this.left!=null){
            lCount=this.left.height();
        }
        if(Math.abs(rCount-lCount) > 1) {
            return false;            
        } 
        var right= true;
        var left = true;

        if(this.right!==null) {
            right= this.right.balance();
        }
        if(this.left!=null) {
            left= this.left.balance();
        }
        return right && left;
    } 
    
}

class BST { 
    constructor(){
    this.root = null; 
    }
    
    newAdd(val, index){
        var node=new BTNode(val);
        
        if(this.root==null){
            this.root=node;
        }else{
            this.root.add(node);
        }
        return this;
    }
     

    min2(){
        if(this.root==null){
            return false;
        }else{
            return this.root.min();
        }
    }
    size(){
        if(this.root==null){
            return 0;
        }else{
            return this.root.count();
        }
    }
    contains(val){
        if(this.root==null){
            return false;
        }else{
            return this.root.search(val);
        }
    }

    max(){
        if(this.root==null){
            return null;
        }else{
            return this.root.findMax();
        }

    }
    isEmpty(){
        return this.root==null;
    }

    findHeight(){
        if(this.root==null){
            return 0;
        }
        return this.root.height();
    }
    isBalanced() {
        if(this.root ==null) {
            return true;
        }
        return this.root.balance();
    }
}    


bSTree=new BST();
bSTree.newAdd(10);
bSTree.newAdd(35);
bSTree.newAdd(5);
bSTree.newAdd(7);
bSTree.newAdd(3);
bSTree.newAdd(19);
bSTree.newAdd(255);
bSTree.newAdd(15);
bSTree.newAdd(-3); 
bSTree.newAdd(8);
bSTree.newAdd(14);
bSTree.newAdd(13);
bSTree.newAdd(6);
bSTree.newAdd(15);
bSTree.newAdd(3);
// console.log(bSTree.root.right.val);
// console.log(bSTree.root.left.val);
// console.log(bSTree.root.val);
// console.log("The min is:"+bSTree.min2());
// console.log(bSTree.size());
// console.log(bSTree.contains(-35));
console.log("The max is:"+bSTree.max());
console.log("the height is: "+bSTree.findHeight());
console.log(bSTree.isBalanced());



