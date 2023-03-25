// let person = {
//     firstname:'Abhisek',
//     lastname: 'Roy',
//     sayHello (){
//         console.log("Hello! I am   " +  this.firstname + " " +  car.brand+ " car")
//     }
// };

// let car ={
//     brand:'tata',
//     model:'safari'
// }

// person.firstname='Ram'
// person.age= 20;

// person.sayHello = function (){
//     console.log(" Hello !")
// }

// person.sayHello();

// function greet(){
//     console.log(" hello")
// }

// person.say=greet;

// person.say();

// person.sayHello();
// function expression
//  let show = function (){
//     console.log(" Abhisek")
// };
//  show();

//  setTimeout(show,3000)

// (function (){
//     console.log(" This is immediately invoked function")
// })();

// let msg = " This is my script"

// function show (){
//     console.log(msg)
// };
// show();

// document.write(" This is the window")

// function  add(){
    
//    if(arguments.length==0){
//     console.log("No parameter")
//    }

//    else{

//     let sum = 0;

//     for(let i=0;i<arguments.length;i++){
//         sum = sum + arguments[i];

//     }
//     console.log(sum)
//    }

// }


// add()
 function sum (a,b){
    return a+b

 }

 let   sumA = (a,b) =>{
    return a+b

 }

 console.log(sum(2,3));
 console.log(sumA(4,3));

 let sumb = (a,b)=> a+b;

 console.log(sumb(6,5))

 function double(a){
    return 2*a;
 }

 let doublea=a=> 2*a

 console.log(doublea(3));

 function random(){
    return Math.random();

 }

 let randomA = ()=> Math.random();

 console.log(randomA());

//  document.addEventListener('click', function(){
//     console.log("Clicked...")
//  })

 document.addEventListener('click', ()=>
    console.log("Clicked...")
 )


 function tie(){
    console.log(" this is tie")
 }

 function adda(num1,num2,callback){
    console.log(num1+num2)
    callback();
 }

 let a = 20;
 let b = 10;

 adda(a,b, tie)
