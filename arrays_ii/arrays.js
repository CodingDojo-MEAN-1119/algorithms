// Array: Average (Warmup)
// (Warm-up) Always run through some quick algorithm problems before any coding interview, to get yourself warmed up. How about this one: return the average value of an array of unsorted numbers .
function average_array(arr){
    var sum=0;
    for(var i=0; i<arr.length; ++i){
        sum+=arr[i];
    }
    avg=sum/arr.length;
    return avg
};
// average_array([1,2,3,4,5])

function sum_of_array(arr){
    var sum=0;
    for(var i=0; i<arr.length; ++i){
        sum+=arr[i];
    }
    return sum
};
sum_of_array([1,2,3,4,5])

// Balance Point
// Write a function that returns whether the given array has a balance point between indices, 
// where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true ( between indices 3&4 ), but [1,2,4,2,1] → false .

function balance_point(arr){
    var total_sum = 0;
    var sum_list_front= 0; 
    var sum_list_back= 0;
    for(var i=0; i<arr.length; ++i){
        sum_list_front+=arr[i];
        sum_list_back=0;

        for(var k=i+1; k<arr.length; ++k){
            sum_list_back+=arr[k];
        }
        if(sum_list_front == sum_list_back){
            return true;
        }
    };
    return false;
};
console.log(balance_point([1,2,4,2,1]))