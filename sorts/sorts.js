

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


function combineArrs(a1,a2){
    let indexA = 0;
    let indexB=0;
    while(indexA<a1.length && indexB<a2.length){

        if(a2[indexB]<a1[indexA]){
            for (let k=a1.length; k>indexA; k--){
                a1[k]=a1[k-1];;
            }
            a1[indexA]=a2[indexB];
            indexB++;
        }else{
            indexA++;
        }
        // console.log(a2);
    }
    for(indexB; indexB<a2.length; indexB++){
        a1.push(a2[indexB]);
        // console.log(a2[indexB]);
    }
      // console.log(a1);
    return a1;
}

//SList: Merge Sort
//Use combineLists(list1,list2) to build the mergeSortList(list) algorithm for an unsorted singly linked list.
//What are run-time and space complexities of your solution?
function  mergeSortArrs(arr) {
    if (arr.length<=1) {
        return arr;
    }else{
        let mid = Math.floor(arr.length/2);
        let lhalf = [];
        let rhalf = [];

        for (let i = 0; i< mid; i++) {
            lhalf.push( arr[i]);
        }
        for (let i = mid; i< arr.length; i++) {
            rhalf.push( arr[i]);
        }
        // console.log(rhalf);
        let r = mergeSortArrs(rhalf);
        // console.log(r);
        let l = mergeSortArrs(lhalf);
        // console.log(mergeSortArrs(r));
        return combineArrs(mergeSortArrs(l), mergeSortArrs(r));
    }
}


function mergeSort2(a){
    if(a.length<=1){
        return a;
    }else{
        const mid = Math.floor(a.length/2);
        const left = a.slice(0,mid);
        const right = a.slice(mid);
        return combineArrs(mergeSort2(left),mergeSort2(right));
    }
}

// Array: Partition

// Partition unsorted array in-place. Use arr[0] as pivot val; return idx of pivot. Inpu t [5,4,9,2,5,3] becomes [4,2,3,5,9,5] , return 4 .
function arrPartition(a, start=0, end=a.length-1){
  let mid = Math.floor((start+end)/2);
  const pivot =a[mid];

  while( start<=end){

      while(a[start] < pivot){
        start ++;
      }
      while(a[end]> pivot){
        end --;
      }
      if(start<=end){
        let temp = a[start];
        a[start]=a[end];
        a[end]=temp;
        start++;
        end --;
      }

    }
  // console.log(pivot);
  return start;

}

function quickSort(a, start=0, end=a.length-1){
  let result = arrPartition(a, start, end);
  if(start < result-1){
    quickSort(a, start, result-1);
  }
  if(end> result){
    quickSort(a, result, end);
  }
  return a;
}





const a1 = [1,3,5,7,9,11];
const a2 = [2,4,6,8,10,12,14,16,18];

const a =[3];

// console.log(arrPartition(a));
console.log(quickSort(a));
