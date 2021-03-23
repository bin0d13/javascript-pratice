// function f1(arg?:string, arg1?:string,arg2?:string):void{
//     console.log(arg,arg1,arg2)
// }
// f1();                            //undefined undefined undefined
// f1("angular","react","viu")     // angular react viu
// f1("react")                     // react undefined undefined
// f1(undefined,undefined,undefined)  // undefined undefined undefined
// f1(null,null,null)           //null null null
// optional with regular parameter
// in combination of optional parameter with normal parameter should be in last position
// function f1(arg1:string,arg2?:string):void{
//      console.log(arg1,arg2)
// }
// //f1();                            //error//Expected 1-2 arguments, but got 0.
// f1("hello-1");                      //hello-1 undefined
// f1("hello-1","hello-2")              //hello-1 hello-2
function f1(arg1, arg2, arg3) {
    if (arg2 === void 0) { arg2 = "hello-2"; }
    var arg4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        arg4[_i - 3] = arguments[_i];
    }
    console.log(arg1, arg2, arg3, arg4);
}
//f1();                                      //Expected at least 1 arguments, but got 0.
f1("hello-1"); //hello-1 hello-2 undefined []
f1("hello-1", undefined, "hello-3", "hello-4"); //hello-1 hello-2 hello-3 [ 'hello-4' ]
f1(null, null, null, null);
