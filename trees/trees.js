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
        console.log(this.val);
        if(this.left==null){
            return this.val;
        }else{
            console.log(this.left.val);
            return this.left.min();
        }
    }
    
}

class BST { 
    constructor(){
    this.root = null; 
    }
    
    add(val){
        var node=new BTNode(val);
        if(this.root==null){
            this.root=node;
        }else{
            var runner = this.root;
            while (runner){
                if(val>= runner.val){
                    if(runner.right==null){
                        runner.right=node;
                        break;
                }else{
                    runner = runner.right;
                    }
                }
                else{
                    if (runner.left==null){
                        runner.left=node;
                        break;
                    } 
                    runner = runner.left;
                    }
                }
            }

        
        console.log(node.val);
    }

    // Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values. 

    newAdd(val, index){
        var node=new BTNode(val);
        
        if(this.root==null){
            this.root=node;
        }else{
            this.root.add(node);
        }
        return this;
    }
    findMin(){
        if(this.root==null){
            return false;
        }
        var runner=this.root
        while(runner){
            if(runner.left==null){
                return runner.val;
            }else{
                runner=runner.left;
            }
        }
    }    

    min2(){
        if(this.root==null){
            return false;
        }else{
            return this.root.min();
        }
    }
}
    


bSTree=new BST();
bSTree.newAdd(10);
bSTree.newAdd(35);
bSTree.newAdd(5);
bSTree.newAdd(3);
// console.log(bSTree.root.right.val);
// console.log(bSTree.root.left.val);
// console.log(bSTree.root.val);
console.log("The min is:"+bSTree.min2());





