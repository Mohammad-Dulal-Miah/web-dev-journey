function arrIndex(arr, idx) {

  const string = arr.flat().filter((value, index) => {
    for (let num of idx) {
      if (num - 1 === index) return value
    }
  }).join('');

  return string;
  
}

arr = [
  ['m', 'u', 'b'],
  ['a', 's', 'h'],
  ['i', 'r', '1'],
]

idx = [1, 3, 5, 8]

arrIndex(arr, idx)
