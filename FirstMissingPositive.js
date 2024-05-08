function firstMissingPositive(arr){
    var res = new Array(arr.length + 1).fill(0);;
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > 0 && arr[i] <=arr.length){
            res[arr[i]] = 1;
        }
    }
    var i=1;
    for(; i < res.length; i++){
        if(res[i] === 0) {
            return i;
        }
    }
    return i;
}

console.log(firstMissingPositive([3,2,4,1,-1]));
console.log(firstMissingPositive([0,3,2,-6,1,-1]));