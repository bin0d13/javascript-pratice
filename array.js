// arr1 = [1,2,3,4,5]
// let arr2 = arr1.map((element,index)=>{
//        return element*10;
// })
// console.log(arr1)  //[ 1, 2, 3, 4, 5 ]            
// console.log(arr2)  //[ 10, 20, 30, 40, 50 ]

// console.log([1,2,3,4,5].map((element,index)=>{
//       return "$"+element         //[ '$1', '$2', '$3', '$4', '$5' ]
// }))


// filter()

// arr1=[10,20,30,40,50];
// let arr2 = arr1.filter((element,index)=>{
//     return element<=40;
// })
// console.log(arr2)     // [ 10, 20, 30, 40 ]

//map
// arr1=[1,2,3,4,5,6,7,8,9]
// let arr2 = arr1.map((element,index)=>{
//     return element*10;
// }).filter((element,index)=>{
//     return element>=50
// })
// console.log(arr2)      //[ 50, 60, 70, 80, 90 ]


//reduce()

// arr1 = [1,2,3,4,5];
// let arr2 = arr1.reduce((firstElement,secondElement)=>{
//     return firstElement+secondElement;
// })
// console.log(arr2);    //15

// let arr1 = [1,2,3,4,5].map((element,index)=>{
//     return element;
// }).filter((element,index)=>{
//     return element<=4;
// }).reduce((firstElement,secondElement)=>{
//     return firstElement+secondElement;
// })  
// console.log(arr1)     //10



// let arr2 = [1,2,3,4,5,6,7,8,9].map((element,index)=>{
//     return element;
// }).filter((element,index)=>{
//     return element<=6;
// }).reduce((firstElement,secondElement)=>{
//     return firstElement+secondElement;
// })
// console.log(arr2)       //21


//reduceRight()

// let arr1=["reactjs","to","welcome"].reduceRight((firstElement,secondElement)=>{
//       return firstElement + " "+secondElement;
// })
// console.log(arr1)         //welcome to reactjs



// concat():
// -----------


// let arr1 = ["Angular"]
// let arr2 = ["nodejs"];
// let arr3 = ["mongoDB"];
// let arr = arr1.concat(arr2,arr3);
// console.log(arr)         //[ 'Angular', 'nodejs', 'mongoDB' ]
// // ES6 using spread parameter
// let arr5 = [...arr1,...arr2,...arr3];
// console.log(arr5)    //[ 'Angular', 'nodejs', 'mongoDB' ]


//find():
// ------
//  let arr = [1,2,3,4,5];
//  let arr1=arr.find((element,index)=>{
//      return element === 5;
//  })
//  console.log(arr1)    //5 if value is true //if not ans is "undefined".



// some():


// let arr=[1,2,3,4,5].some((element,index)=>{
//      return element<=3;
// })
// console.log(arr)    // true


// every():

// let arr=[10,20,30,40,50].every((element,index)=>{
//      return element<=50;
// })
// console.log(arr)   //true


//push():
//  let arr = [10,20];
//  // adding the last element of array
//  arr.push(30);
//  console.log(arr)  //[10,20,30]
//  //unshift()
//  // adding the element in first position
//  arr.unshift(40)
//  console.log(arr)  //[ 40, 10, 20, 30 ]
// //  pop()
// // delete the array of last element
//  arr.pop()
//  console.log(arr);   //[ 40, 10, 20 ]
//  //unshift()
//  //deleting from the first element of array
//  arr.shift()
//  console.log(arr)    //[ 10, 20 ]




//  splice()
// let arr = [10,20,30,40,50,60,70,80,90,100]
// console.log(arr);
// arr.splice(5,2)
// console.log(arr)    //[10, 20, 30,  40, 50, 80, 90, 100 ]
// arr.splice(0,2)
// console.log(arr)    //[ 30, 40, 50, 80, 90, 100 ]
// arr.splice(0,0,10,20)
// console.log(arr)     //[10,20, 30, 40, 50, 80, 90, 100 ]
// arr.splice(5,0,60,70)
// console.log(arr)

// findIndex():

// let arr =[1,2,3,4,5,6]
// let arr2 = arr.findIndex((element,index)=>{
//      return element ===3;
// })
// console.log(arr2)     //2

// let arr3 = arr.findIndex((element,index)=>{
//      return element===50;

// })
// console.log(arr3)    //-1 


// let arr = [
//      {"id":111,"p_name":"p-one","p_coast":1000},
//      {"id":222,"p_name":"p-two","p_coast":2000},
//      {"id":333,"p_name":"p-three","p_coast":3000},
//      {"id":444,"p_name":"p-four","p_coast":4000},
//      {"id":555,"p_name":"p-five","p_coast":5000},
//      {"id":666,"p_name":"p-six","p_coast":6000},
// ]

// // let arr1 = arr.findIndex((element,index)=>{
// //      return element.id=== 333;
// // })
// // console.log(arr1)      //2

// let arr2 = arr.splice(arr.findIndex((element,index)=>{
//     return element.id === 222;
// }),1)
// console.log(arr)


// let arr = [10,20,30,40,50,60,70,80,90]

// let arr1 = arr.slice(2,5);
// console.log(arr1)       //[ 30, 40, 50 ]
// let arr2 = arr.slice(6,10)
// console.log(arr2)       //[ 70, 80, 90 ]
// let arr3 = arr.slice(0,3);
// console.log(arr3)        //[ 10, 20, 30 ]
// console.log([...arr2,...arr3])    //[ 70, 80, 90, 10, 20, 30 ]

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let a1 = arr.slice(5);
// let a2 = arr.slice(0,5);     
// let a3 = [...a1,...a2];
// console.log(a3)         //[6, 7, 8, 9, 10, 1, 2, 3, 4,  5]
// // concat operator using
// let a4 =a2.concat(a1)
// console.log(a4)    //  [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

// copywithin():


// let arr1= [10,20,30,40,50,60,70,80,90,100]
// let arr2 = arr1.copyWithin(3)
// console.log(arr2)                   //[10, 20, 30, 10, 20,30, 40, 50, 60, 70] 



// includes():





// sort():

// let arr=[10,20,30,40,50,60]
// //ascending
// let arr2 = arr.sort((arg1,arg2)=>{
//       return arg1-arg2;
// })
// console.log(arr2)        //[ 10, 20, 30, 40, 50, 60 ]
// //descending
// let arr3 = arr.sort((arg1,arg2)=>{
//      return arg2-arg1;
// })
// console.log(arr3)         //[ 60, 50, 40, 30, 20, 10 ]

// let arr4 = arr.sort((arg1,arg2)=>{
//      return arg1-arg2;
// })[0]    
// console.log(arr4)   //10

// let arr5 = arr.sort((arg1,arg2)=>{
//      return arg2-arg1;
// })[0]
// console.log(arr5)      //60


//indexof():

// let arr = [10,20,10,40,30,,20,50]
// arr.forEach((element,index)=>{
//      console.log(arr.indexOf(element))        //0 1 0 3 4 1 7
//   })
// let arr1 = [10,20,30,10,20,30,40,10]
// arr1.forEach((element,index)=>{
//      console.log(arr1.indexOf(element))
// })


// let arr = [40,30,80,40,80,50,10,70,50,30]
// arr.forEach((element,index)=>{
//      console.log(arr.indexOf(element))   //0 1 2 0  2 5 6 7 5 1 
// })

// let arr = [10,20,30,10,20,30]
// let arr1= arr.filter((element,index)=>{
//      return arr.indexOf(element)  == index;
// })
// console.log(arr1)      //[ 10, 20, 30 ]


// let arr = [10,20,30,10,50,20,30]
// let arr2 = arr.filter((element,index)=>{
//      return arr.indexOf(element) == index
// }).sort((arg1,arg2)=>{
//      return arg1-arg2
// })
// console.log(arr2)     //[ 10, 20, 30, 50 ]    
// if we  are doing sort process that out put is [ 10, 20, 30, 50 ]

// length():
// --------
// let arr = [10,20,30,40,50,60,70,80,90,100]
// let arr1 = arr.length
// console.log(arr1)      //10

// console.log(arr[1], arr[2] , arr[5])    //20 30 60
// console.log(arr[10])      //undefined


// console.log(arr.length = 5)       //5


// console.log(arr[0] , arr[3] , arr[5] )    //10 40 undefined


// delete():

// let arr = [10,20,30,40,50,60]
// console.log(arr.length)    //6
// console.log(arr)      //[ 10, 20, 30, 40, 50, 60 ]
// arr

// delete arr[2]
// console.log(arr.length)    //6
// console.log(arr)     //[ 10, 20, <1 empty item>, 40, 50, 60 ]


// FileList():
// let arr  = [10,20,30,40,50,60]
// arr.fill(100)
// console.log(arr)                    //[ 100, 100, 100, 100, 100, 100 ]

// arr.fill(200,2)
// console.log(arr)                    //[ 100, 100, 200, 200, 200, 200 ]

// arr.fill(300,1,3)
// console.log(arr)                    //[ 100, 300, 300, 200, 200, 200 ]


// let arr = [[1],[2,3],[4,5,6],[7]]
// let arr1=arr.flat(1)
// console.log(arr1)   //[1,2,3,4,5,6,7]

// let arr2 = [[1],[2,3],[4,5,6]]
// let arr3 = arr2.flat(1).reduce((a,b)=>{
//      return a+b
// })
// console.log(arr3)       //21

// let arr4 = [1,[[[[[[[[2]]]]]]]]]
// let arr5 = arr4.flat(Infinity)
// console.log(arr5)     //[1,2]


// let arr4 = [1,[[[[[[[[2]]]]]]]]]
// let arr5 = arr4.flat(Infinity).reduce((a,b)=>{
//      return a+b
// })
//  console.log(arr5)      //3


// let arr1 = [1,2,3,4,5]
// let arr2 = ["one","two","three","four","five"]
// let arr3 = arr1.map((element,index)=>{
//      return [element,arr2[index]]
// })
// console.log(arr3)     //[[ 1, 'one' ],[ 2, 'two' ],[ 3, 'three' ],[ 4, 'four' ],[ 5, 'five' ]]


// let arr4 = arr1.map((element,index)=>{
//      return [element,arr2[index]]
// }).flat(1)
// console.log(arr4)     //[ 1, 'one', 2, 'two', 3, 'three', 4, 'four', 5, 'five']

// flatMap():


// let arr5 = arr1.flatMap((element,index)=>{
//      return [element,arr2[index]]
// })
// console.log(arr5)        //[     1, 'one',     2, 'two',     3, 'three',     4, 'four',]   


// reverse():
// let  arr = [1,2,3,4,5]
// arr.reverse()
// console.log(arr)     //[ 5, 4, 3, 2, 1 ]

// let arr = "hello"
// // let arr2 = Array.from(arr)           //[ 'h', 'e', 'l', 'l', 'o' ]
// // let arr2 = Array.from(arr).reverse()    //[ 'o', 'l', 'l', 'e', 'h' ]

// let arr2 = Array.from(arr).reverse().join("=")    //olleh  o=l=l=e=h
//  console.log(arr2) 


//  let arr3 = Array.from(arr).reverse().toString()   //o,l,l,e,h
//  console.log(arr3)

//  let arr4 = Array.from(arr).reverse().toString().replace(",","")
//  console.log(arr4)                                //ol,l,e,h


//  let arr5= Array.from(arr).reverse().toString().replace(/,/g,"")
//  console.log(arr5)                             //olleh

// repeat():
// let arr = "hello"
// let arr2 = arr.repeat(2)
// console.log(arr2)

// lastIndexOf():

// let arr = [10,20,30,40,10,20,30,50]
// let arr2 = arr.lastIndexOf(10)
// console.log(arr2)      // 4
// let arr3 = arr.lastIndexOf(50) 
// console.log(arr3)          //7
// let arr4 = arr.lastIndexOf(60)
// console.log(arr4)             //-1

// trim():

// let arr = " binod ";
// console.log(arr.length)   //7
// // trimStart():
// console.log(arr.trimStart().length)   //6
// //trimEnd():
// console.log(arr.trimEnd().length)   //6

//padStart():

// let arr = "binod";
// console.log(arr.padStart(10,"*"))           //*****binod
// console.log(arr.padEnd(20,"angular"))       //binodangularangulara

// split():

// let arr = "he,l,|,l,o"
// let arr1 = arr.replace(/,/g,"")  
// console.log(arr1)       //hel|lo
// let arr3 = arr.replace(/,/g,"").replace("|","")
// console.log(arr3)        //hello
// let arr2 = arr.replace(/,/g,"").replace("|","").split("")  //[ 'h', 'e', 'l', 'l', 'o' ]

// console.log(arr2)

// subStr():

// starting index is length 
// second index is how much character you want
// let arr = "welcome to javascript"
// console.log(arr.substr(0,7))  // welcome
// console.log(arr.substr(8,2))   //to
// console.log(arr.substr(11,20))


// subString():

// let arr = "hello welcome to javascript";
// console.log(arr.substring(0,5))          //hello
// console.log(arr.substring(6,13))         //welcome
// console.log(arr.substring(14,16))        //to
// console.log(arr.substring(17))           //javascript


// for...in():

// let arr = 
//     {"key1":"angular",
//     "key2":"reactJs",
//     "key3":"viu"}

// for(let key in arr){
//     // console.log( arr[key] );      //angular reactJs viu
//     console.log(key)                 //key1 key2 key
// }

// for.. of():

let arr = [10,20,30,40,50,60]
for(let key of arr){
    console.log(key)        //10 20 30 40 50 60
}
