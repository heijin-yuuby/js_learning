'abc'
"abc"

'Did she say \'Hello\'?'
// "Did she say 'Hello'?"

"Did she say \"Hello\"?"
// "Did she say "Hello"?"

/*'a
b
c'*/
// SyntaxError: Unexpected token ILLEGAL,正确方式如下
var longString = 'Long \
long \
long \
string';

longString
// "Long long long string"

var longString = 'Long '
  + 'long '
  + 'long '
  + 'string';

  /*tostring() 将函数转换为字符串，包含了整个函数体。*/
  (function () { /*
    line 1
    line 2
    line 3
    */}).toString().split('\n').slice(1, -1).join('\n')
    // "line 1
    // line 2
    // line 3" 
