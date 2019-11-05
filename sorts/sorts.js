// Array: Bubble Sort

// For review, create a function that uses BubbleSort to sort an unsorted array in-place. 

function bubbleSort(a){
    var swapp;
    var n = a.length-1;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (a[i] > a[i+1])
            {
               var temp = a[i];
               a[i] = a[i+1];
               a[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return a; 
}

function selectionSort(a){
    
    for(let i=0; i<a.length; i++){
        let min = i;
        for(var j=i+1; j<a.length; j++){
            if(a[j]<a[min]){
                min=j;
            }
        }
        if(i!==min){
            let temp = a[i];
            a[i]=a[min];
            a[min] = temp;
        }
    }
    return a;
}

function InsertionSort(a){
    for(let i=1; i<a.length; i++){
        let j = i-1;
        let temp = a[i];
        while(j>=0 && a[j]>temp){
            a[j+1] = a[j];
            j--;
        }
        a[j+1]=temp;
    }
    return a;
}
    
// Create function combineArrs(arr1,arr2) that sorts two already separately sorted arrays, placing the result back into the first provided array. Can you work completely in-place? 

function combineArrs(a1,a2){
    let indexA = 0;
    let indexB=0;
    while(indexA<a1.length && indexB<a2.length){
        if(a2[indexB]<=a1[indexA]){
            for (let k=a1.length; k>indexA; k--){
                a1[k]=a1[k-1];;
            }
            a1[indexA]=a2[indexB];
            indexB++;
        }else{
            indexA++;
        }
        
        for(indexB; indexB<a2.length; indexB++){
            a1.push(a2[indexB]);
        }
    }    
    return a1;
}
            

        
        


        

const a1 = [1,3,5,7,9,11];
const a2 = [2,4,6,8,10,12,14,16,18];

const a =[3,7,2,8,4,90,13,-115,45];

console.log(combineArrs(a1,a2));

// Create a function that InsertionSort to sort an unsorted array in-place. What is the run-time complexity? What is the space complexity? 
