function multipleElementsExceptOwnPoitionElement(list) {
  if(!list.length){
    return list
  }
  let total = 1;
  for (let i=0;i<list.length;i++){
    total *= list[i]
  }
  
  let newList = [];
  for (let j=0;j<list.length;j++){
    newList.push(total/list[j])
  }
  return newList
}

multipleElementsExceptOwnPoitionElement([1,2,3,4])