'use strict';


function someFunction(arg1, arg2, obj) {
  obj.someFunction(arg1, arg2);
}

let MyModule = {
  someFunction: someFunction
};

exports.MyModule = MyModule;
/* No side effect */
