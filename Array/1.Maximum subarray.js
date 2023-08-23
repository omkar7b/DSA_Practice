function maximumSubarray(arr){
  let max=0;
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
    if(sum>max){
      max=sum;
    }
    if(sum<0){
      sum=0
    }
  }
  return max;
}

console.log(maximumSubarray([5,4,-1,7,8]))
