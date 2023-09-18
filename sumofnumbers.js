function sumFor(list){
  let sum = 0;
  for(let i =0; i<list.length;i++){
    sum += list[i]
  }
  return sum;
}

function sumWhile(list){
  let sum = 0;
  let i = 0
  while(i<list.length){
    sum += list[i]
    i++
  }
  return sum;
}

function sumRecursion(list){
  if (list.length <= 0) {
    return 0
  } else {
    return sumRecursion(list.length-1) + list[list.length-1]
  }
}

function sumTheSimpleWay(list){
  return _.reduce(list,function(total,num){return total+num}, 0)
}