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

// Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two. Example: given [1,2,2,2,7] and [2,2,6,6,7] , return [2,2,7] .

function intersectArr(a1,a2){

  const multiset = [];
  let indexA =0;
  let indexB = 0;
  while(indexA<a1.length && indexB<a2.length){
    if(a1[indexA] == a2[indexB]){
      multiset.push(a1[indexA]);
      indexA++;
      indexB++;
    }else if(a1[indexA]>a2[indexB]){
      indexB++;
    }else{
      indexA++;
    }
  }
  return multiset;
}

function intersectInPlace(a1,a2){
  let skip = 0;
  let indexA =0;
  let indexB = 0;
  while(indexA<a1.length && indexB<a2.length){
    if(a2[indexB]<a1[indexA]){
      indexB++;
    }else {
      if(a1[indexA]<a2[indexB]){
        skip++;
      }else{
        a1[indexA-skip]=a2[indexB];
        indexB++;
      }
        indexA++;
    }
  }
  a1.length=a1.length-skip;
  return a1;
}


// Union Sorted Arrays

// Efficiently combine two already-sorted arrays into a new sorted array containing the multiset union . Example: given [1,2,2,2,7] and [2,2,6,6,7] , return [1,2,2,2,6,6,7] .

function unionSort(a1,a2) {
  const unionSet = [];
  let indexA =0;
  let indexB = 0;
  while(indexA<a1.length || indexB<a2.length){
    if( indexB === a2.length){
      unionSet.push(...a1.slice(indexA))
    }
    else if( indexA === a1.lenth) {
      unionSet.push(...a2.slice(indexB))

    }
    else if(a1[indexA] == a2[indexB]){
      unionSet.push(a1[indexA]);
      indexA++;
      indexB++;
    }
    else if(a1[indexA] > a2[indexB]){
      unionSet.push(a2[indexB]);
      indexB++;
    }else{
      unionSet.push(a1[indexA]);
      indexA++;
    }
  }
  return unionSet;

}


const arr2 =[2,2,6,6,7]
      arr1= [1,2,2,2,7];

console.log(unionSort(arr1,arr2));
