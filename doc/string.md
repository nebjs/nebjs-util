
## Contents

- [demo](#demo)
- [api](#api)

The util.string has methods to manipulate String strings, using examples
##string

<span id="demo"></span>
###string demo

```javascript
const util = require('nebjs-util');
// Empty space at both ends of the string
util.string.trim('  abc  ');
// console.log: 'abc'

// Empty the left margin of the string
util.string.trimLeft('  abc  ');
// console.log: 'abc  '

// Empty the right margin of the string
util.string.trimRight('  abc  ');
// console.log: '  abc'
// escape character
util.string.escape("\\n\\t\\r\\f");
// console.log: 'ntr\u000f'
```

<span id="api"></span>
###string api

####util.string.trim(str)
This method intercepts whitespace characters at both ends of a string
- @param str {String} target string
- @return a new string that intercepts both blank characters

####util.string.trimLeft(str)
This method intercepts the blank character on the left side of the string
- @param str {String} target string
- @return a new string that intercepts the blank character on the left side of the string

####util.string.escape(codeStr)
This method can escape escaped characters in a string
- @param codeStr {String} target string
- @return a new escaped string
