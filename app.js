//// challange 3 :::

// 1

// const scoreDolphins = (103 + 108 + 89) / 3;
// const scoreKoalas = (103 + 108 + 89) / 3;

// console.log(
//   "dolphins : ",
//   Math.round(scoreDolphins),
//   "koalas : ",
//   Math.round(scoreKoalas)
// );

//// 2

// if (scoreDolphins > scoreKoalas) {
//     console.log("dolphins win the trophy")
// } else if (scoreDolphins < scoreKoalas){
// console.log("koalas win the trophy")
// } else {
//     console.log("Both teams wins the trophy !!! ")
// }

//// bonus 1 ::

// if (scoreDolphins > scoreKoalas && scoreDolphins > 100) {
//     console.log("dolphins win the trophy")
// } else if (scoreDolphins < scoreKoalas && scoreKoalas > 100){
// console.log("koalas win the trophy")
// }

///// bonus 1 ::

// if (scoreDolphins > scoreKoalas && scoreDolphins > 100) {
//   console.log("dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas && scoreKoalas > 100) {
//   console.log("koalas win the trophy");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both teams wins the trophy !!! ");
// } else {
//   console.log("No one wins the trophy !!! ");
// }

////// coding challange 4 ::

/// 1
// const fatoura = 40;

/////// condition ? true : false ;

// const zyeda = fatoura <= 300 && fatoura >= 50 ? fatoura * 0.15 : fatoura * 0.2;
// console.log("zyeda :", zyeda);

// ///2

// console.log(
//   `the bill was ${fatoura} , the tip was ${zyeda} , and the total value : ${
//     fatoura + zyeda
//   } `
// );


  /// best practice ...
  "use strict"


  //////// functions /////// 

////// generic function :: 
//   function welcome (){                         ////// () ====> parametre ; {}==> function body
//    console.log("hello")
//   }

//////// invocation ///  run the function /// call the function :: 


// welcome()

////// generic function : 
// function fruitProcessor (r ,t){
//  console.log(`${r} apples and ${t} oranges`)
// }


// fruitProcessor(2,5)
// fruitProcessor(20,50)
// fruitProcessor(200,500)

///// function declaration :: 
// function fruit (apples , oranges){
// const juice = `juice with ${apples} apples and ${oranges} oranges`
// return juice

// }

// console.log(fruit(100,300))


///////// function expression  (anonymos function) :: 

// let fruit = function (apples , oranges){  
//  const juice = `juice with ${apples} apples and ${oranges} oranges`
// return juice

// }

// console.log(fruit(5000,4000))




// const now = 2025 ; 

// const calcAge = function (birthtYear){
//  return now - birthtYear
// }


//   console.log( calcAge(1998) ) ;

  ////// arrow function : 
const now = 2025 ; 
//// first syntaxe : 

// const calcAge = birthYear => now - birthYear ;

// console.log(calcAge(2000))


///// second syntaxe : 

// const yearsUntilRetirement = birthYear => {
// const age = now - birthYear
// const yearsUntilRetirement = 60 - age ; 
// return yearsUntilRetirement
// } 


// console.log(yearsUntilRetirement(1995))


///// third syntaxe : 
// const yearsUntilRetirement = (birthYear ,firstName)  => {
//     const age = now - birthYear
// const yearsUntilRetirement = 60 - age ;
// return `${firstName} retires in ${yearsUntilRetirement} years ....`
// }

// console.log(yearsUntilRetirement(1999 , "ali"))




