function containsDuplicate(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]==arr[j]){
        return true;
      }
    }
  }
    return false;
}

console.log(containsDuplicate([1,2,3,4,1]));