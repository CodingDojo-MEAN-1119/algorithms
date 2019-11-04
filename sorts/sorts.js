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
    
    
        

    

const a =[3,7,2,8,4,90,13,-115,45];

console.log(selectionSort(a));

// For review, create a function that uses SelectionSort to sort an unsorted array in-place. 
