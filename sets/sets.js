function interleaveArr(arr1,arr2){
  let newArr=[];
  let index =0;
  if(arr2.length>arr1.length){
    for(let i=0; i<arr1.length; i++){
      newArr.push(arr1[i]);
      newArr.push(arr2[i]);
      index++
    }
    for(let j=index; j<arr2.length; j++){
      newArr.push(arr2[j]);
    }

  }else {
    for(let i=0; i<arr2.length; i++){
      newArr.push(arr1[i]);
      newArr.push(arr2[i]);
      index++
    }
    for(let j=index; j<arr1.length; j++){
      newArr.push(arr2[j]);
    }

  }
  return newArr;
}

// Merge Sorted Arrays

// Efficiently merge two already-sorted arrays into a new sorted array containing the multiset of all values. Example: given [1,2,2,2,7] and [2,2,6,6,7] , return new array [1,2,2,2,2,2,6,6,7,7] .

function mergerSorted(arr1,arr2){
  let newArr=interleaveArr(arr1,arr2);
  for(let i=1; i<newArr.length; i++ ){

      let j = i-1;
      let temp = newArr[i];
      while(j>=0 && newArr[j]>temp){
          newArr[j+1] = newArr[j];
          j--;
      }
      newArr[j+1]=temp;
  }
  return newArr;

}

function mergeSorted2(a1,a2){
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
  }
  for(indexB; indexB<a2.length; indexB++){
      a1.push(a2[indexB]);
    }
    return a1;
  }



const arr1 =[2,2,6,6,7]
      arr2= [1,2,2,2,7];
console.log(mergeSorted2(arr1,arr2));


