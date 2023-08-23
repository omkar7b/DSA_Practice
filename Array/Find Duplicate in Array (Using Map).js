function containsDuplicate(arr){
  let set = new Set()
  for(let i=0;i<arr.length;i++){
    if(set.has(arr[i])){
      return arr[i];
    }
    else{
      set.add(arr[i]);
    }
  }
  return -1;
}


console.log(containsDuplicate([1,2,3,4,3]))