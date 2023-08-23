function kidsWithCandies(arr, extra){
  let max=0;
  let output=[];
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i];
    }
  if((arr[i]+extra)>max){
    output.push(true);
  }
  else{
    output.push(false);
  }
  }
  return output;
}

console.log(kidsWithCandies([12,1,12],10))