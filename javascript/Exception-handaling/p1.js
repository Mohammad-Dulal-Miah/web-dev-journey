// The JavaScript statements try and catch come in pairs:

function add(x, y) {
  if (typeof x !== 'number') {
    throw 'The first argument must be a number'
  }
  if (typeof y !== 'number') {
    throw 'The second argument must be a number'
  }

  return x + y
}

try {
//   const result = add('a', 10)
//   console.log(result)

throw 'I am not Dulal Miah'
} catch (e) {
  console.log(e)
}

finally{
    console.log('Finally my work is completed')
}
