# date
The util.date has methods to manipulate Date objects, using example

## Contents
- [Demo](#Demo)
- [Api](#Api)

<span id="Demo"></span>
### Demo
```
// Gets the Date object format string
const util = require('nebjs-util');
util.date.toFormatString(new Date("2018-07-18 16:36:49"), "yyyy年MM月dd日");
// console.log: "2018年07月18日"
util.date.fromFormatString('2018年07月18日 16:36:49', 'yyyy年MM月dd日 HH:mm:ss');
// console.log: 2018-07-18T08:36:49.000Z
```

<span id="Api"></span>
### Api
#### util.date.toFormatString(date, format)
This method used to gets the formatting string from the date object
- @param date {Date}
- @param format {String} format string, default: "yyyy-MM-dd HH:mm:ss"
- @return a format date/time string

#### util.date.fromFormatString(dateStr, format)
This method used to gets the date/time from the formatted string
- @param dateStr {String} date/time string
- @param format {String} format string, default: "yyyy-MM-dd HH:mm:ss"
- @return a date object
