import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="content-footer">
        <div className="left-c">
          <h3>ABOUT THIS PAGE</h3>
          <p>Created with lots of music and coffee.</p>
        </div>
        <div className="divider">
        </div>
        <div className="right-c">
          <h3>AROUND THE WEB</h3>
          <ul>
            <li><a href="https://twitter.com/peter_krevenets" target="_blank"><i className="fa fa-twitter-square fa-2x"></i></a></li>
            <li><a href="https://ua.linkedin.com/in/peter-krevenets-35b50b33" target="_blank"><i className="fa fa-linkedin-square fa-2x"></i></a></li>
            <li><a href="https://github.com/GuRuGuMaWaRu" target="_blank"><i className="fa fa-github-square fa-2x"></i></a></li>
          </ul>
        </div>
        <p className="copyright">&copy; Peter Krevenets, 2016.</p>
      </div>
    );
  }
}

export default Footer;

// function methodize(func) {
//   return function (y) {
//     return func(this, y);
//   };
// }
//
// function methodize(func) {
//   return function (...y) {
//     return func(this, ...y);
//   };
// }
//
// demethodize(Number.prototype.add) (5,6) // 11
//
// function demethodize(func){
//   return function (that, y) {
//     return func.call(that, y);
//   }
// }
//
// function demethodize(func){
//   return function (that, ...y) {
//     return func.apply(that, y);
//   }
// }
//
// var double = twice(add);
// double(11) // 22
// var square = twice(mul);
// square(11) // 121
//
// function twice(func) {
//   return function(x) {
//     return func(x, x);
//   };
// }
//
// composeu(double, square)(3) // 36
//
// function composeu(func1, func2) {
//   return function(x) {
//     return func2(func1(x));
//   };
// }
//
// composeb(add, mul)(2, 3, 5) // 25
//
// function composeb(func1, func2) {
//   return function(a, b, c) {
//     return func2(func1(a, b), c);
//   };
// }
//
// add_once = once(add);
// add_once(3, 4) // 7
// add_once(3, 4) // throw!
//
// function once(func) {
//   return function() {
//     var f = func;
//     func = null;
//     return f.apply(this, arguments);
//   };
// }
//
// counter = counterf(10);
// counter.inc() // 11
// counter.dec() // 9
//
// function counterf(a) {
//   return {
//     inc: function() {
//       return a = a + 1;
//     },
//     dec: function() {
//       return a = a - 1;
//     }
//   };
// }
//
// temp = revocable(alert);
// temp.invoke(7); // alert: 7
// temp.revoke();
// temp.invoke(8); // throw
//
// function revocable(func) {
//   var f = func;
//   return {
//     invoke: function() {
//       return nice.apply(this, arguments);
//     },
//     revoke: function() {
//       func = null;
//     },
//     reinvoke: function() {
//       func = f;
//     }
//   };
// }
