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


  function differencr(array, values) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (!values.includes(array[i])) {
        result.push(array[i])
      }
    }
    return result
  }


  function differenceBy(array, values, iteratee) {
    for (var i = 0; i < array.length; i++) {
      array.splice(i, 1, iteratee(array[i]))
    }
    for (var i = 0; i < values.length; i++) {
      values.splice(i, 1, iteratee(array[i]))
    }
    var result = []
    result = differencr(array, values)
    return result
  }


  function differenceWith(array, values, comparator) {

  }


  function drop(array, n) {
    if (n == undefined) {
      n = 1
    }
    array.splice(0, n)
    return array
  }


  function dropRight(array, n) {
    if (n == undefined) {
      n = 1
    }
    if (n > array.length) {
      return []
    }
    array.splice(array.length - n, n)
    return array
  }


  function fill(array, value, start, end) {
    if (start == undefined) {
      start = 0
    }
    if (end == undefined) {
      end = array.length
    }
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }


  return {
    chunk: chunk,
    compact: compact,
    differencr: differencr,
    differenceBy: differenceBy,
    drop: drop,
    dropRight: dropRight,
    fill: fill,
}
}()