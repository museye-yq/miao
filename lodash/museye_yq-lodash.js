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
      if (array[i]) {
        result.push(array[i])
      } else {
        continue
      }
    }
    return result
  }


  function difference(array, ...values) {
    var result = []
    var newvalues = [].concat(...values)
    for (var i = 0; i < array.length; i++) {
      if (!newvalues.includes(array[i])) {
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


  function flatten() {

  }


  function fromPairs(pairs) {
    var obj = {}
    for (var i = 0; i < pairs.length; i++) {
      obj[pairs[i][0]] = pairs[i][1]
    }
    return obj
  }


  function head(array) {
    return array[0]
  }


  function indexOf(array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
  }


  function initial(array) {
    if (!array) {
      return []
    }
    array.splice((array.length - 1))
    return array
  }


  function join(array, separator) {
    var res = ''
    for (var i = 0; i < array.length; i++) {
      res += array[i]
      if(i == array.length - 1) {
        continue
      } else {
        res += separator
      }
    }
    return res
  }


  function last(array) {
    return array[(array.length - 1)]
  }


  function reverse(array) {
    var res = []
    for (var i = array.length - 1; i >= 0; i--) {
      res.push(array[i])
    }
    return res
  }


  function uniq (array) {
    var set = []
    for (var i = 0; i < array.length; i++) {
      if (set.includes(array[i])) {
        continue
      } else {
        set.push(array[i])
      }
      }
      return set
  }


  function unzip(array) {
    var set = []
    for (var i = 0; i < array[0].length; i++) {
      var arr = []
      for (var j = 0; j < array.length; j++) {
        arr.push = array[j][i]
      }
      set.push(arr)
    }
    return set
  }


  function zip (array) {
    var set = []
    for (var i = 0; i < array[0].length; i++) {
      var arr = []
      for (var j = 0; i < array.length; j++) {
        arr.push(array[j][i])
      }
      set.push(arr)
    }
    return set
  }
  return {
    chunk: chunk,
    compact: compact,
    difference: difference,
    differenceBy: differenceBy,
    drop: drop,
    dropRight: dropRight,
    fill: fill,
    flatten: flatten,
    fromPairs: fromPairs,
    head: head,
    indexOf: indexOf,
    initial: initial,
    join:join,
    last:last,
    reverse:reverse,
    uniq:uniq,
    unzip:unzip
  }
}()