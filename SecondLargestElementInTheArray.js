function secondLargest(arr, size){
    var firstLargest = -1;
    var secondLargest = -1;

    for(var i =0; i< size;i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondLargest([2,4,5,6,8],5));
console.log(secondLargest([2,4,6,5,8],5));
console.log(secondLargest([10,10,10,10,10],5));