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
console.log(bSTree.root.right.val);
console.log(bSTree.root.left.val);
console.log(bSTree.root.val);
console.log("The min is:"+bSTree.min2());
console.log(bSTree.size());
console.log(bSTree.contains(-35));





