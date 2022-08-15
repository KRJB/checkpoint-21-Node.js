
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, data) {
  if (err) {
    return console.log(err)
  }
  const result = data.toString().split('\n').length - 1
  console.log(result)
})