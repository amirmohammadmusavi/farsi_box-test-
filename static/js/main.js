// section 3 -> 1
function seperate_odd_items(arr) {
    new_list = []
    for(let i=0;i<arr.length;i++) {
        if(i % 2 != 0) {
            new_list.push(arr[i])
        }
    }
    return new_list
}

console.log(seperate_odd_items([1,10,3,40,5]))


// section 3 -> 2
function bubble(arr) {
    var len = arr.length;
  
    for (var i = 0; i < len ; i++) {
      for(var j = 0 ; j < len - i - 1; j++){ 
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
     }
    }
    return arr;
  }

console.log(bubble([1,9,2,3,7,6,4,5,5]));

