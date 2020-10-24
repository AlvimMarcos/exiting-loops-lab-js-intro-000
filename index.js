function breakOut(array, changeValue, stopValue) {
  for (var i=0, l = array.length; i<l; i++){
    if(array[i] === stopValue){
      break
    }
    array[i] = changeValue
  }
  return array
}


function breakOut(array, changeValue, stopValue) {
  for (var i=0, l = array.length; i < l; i++){
    if (array[i] === skipValue){
      continue
    }
    array[i] = changeValue
  }
  return array
}
