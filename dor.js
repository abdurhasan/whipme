const moment = require('moment')


const date = "05-05-1999"

console.log(
    moment(date, "DD-MM-YYYY").isValid()
)