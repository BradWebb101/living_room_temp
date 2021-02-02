var getData = require('./getData')

async function print() {

var data = await getData.tempData()

console.log(data)
}
print()