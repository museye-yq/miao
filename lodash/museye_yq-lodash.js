var museye_yq = function () {
  function chunk(array, size) {
    var result = []
    var count = 0
    var arr = []
    for (var i = 0; i < array.length; i++) {
      arr.push(array[i])
      count++
      if (count === size) {
        result.push(arr)
        arr = []
        count = 0
      }
    }
    if (count !== 0) {
      result.push(arr)
    }
    return result
  }


  function compact(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] == false) {
        continue
      }
      result.push(array[i])
    }
    return result
  }


  function concat() {

  }
}