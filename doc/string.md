# string
The common.string has methods to manipulate String strings, using examples

## Contents
- [Demo](#Demo)
- [Api](#Api)

<span id="Demo"></span>
### Demo
```javascript
const common = require('nebjs-common');
// Empty space at both ends of the string
common.string.trim('  abc  ');
// console.log: 'abc'

// Empty the left margin of the string
common.string.trimLeft('  abc  ');
// console.log: 'abc  '

// Empty the right margin of the string
common.string.trimRight('  abc  ');
// console.log: '  abc'

// escape character
common.string.escape("\\n\\t\\r\\f");
// console.log: 'ntr\u000f'
```

<span id="Api"></span>
### Api
#### common.string.trim(str)
This method intercepts whitespace characters at both ends of a string
- @param str {String} target string
- @return a new string that intercepts both blank characters

#### common.string.trimLeft(str)
This method intercepts the blank character on the left side of the string
- @param str {String} target string
- @return a new string that intercepts the blank character on the left side of the string

#### common.string.escape(str)
This method can escape escaped characters in a string
- @param str {String} target string
- @return a new escaped string
