function rotateArrayByK(arr,k){
    var result = [], j=0;
    for(var i=k;i<arr.length;i++){
        result[j++] = arr[i];
    }
    for(var i=0;i<k;i++){
        result[j++] = arr[i];
    }
    return result;
}

const arr = [1,2,3,4,5];
const k = 3;
console.log(rotateArrayByK(arr,k));