// QUESTION 1
// function new1(a){
//    return function(b){
//     console.log(a+b)
//    }
// }

// new2 = new1(5)
// new2(10)


// QUESTION 2
// array=[9,7,3,8,1,0]
// function searchingarr(arr , val){
//     if (arr.length === 0){
//         return false
//     }
//     else if (arr[0] === val) {
//        return true
//     }
//     else{
//         return searchingarr(arr.slice(1) , val)
//     }
    
    
// }
// console.log(searchingarr(array,7))


// QUESTION 3


// function addpara(text){
//     let new1 = document.createElement("p")
//     new1.textContent = text
//     document.body.appendChild(new1)
// }
// addpara("here is the parag")

// QUESTION 4


// function addlist(text){
//     let new1 = document.createElement("li")
//     new1.textContent = text
//     document.body.appendChild(new1)
// }
// addlist("here it is")

// QUESTION 5
function changeColor(ele,bgcolor,color){
    ele.style.backgroundColor = bgcolor
    ele.style.color= color

}

ele = document.getElementById("myPara")
changeColor( ele,"purple", "cyan")

// QUESTION 6
//   function createobj (key , obj){
//     localStorage.setItem(key , JSON.stringify(obj))
// }

// new1 = {
//     jordan1 : "chicago",
//     jordan6 : "travis scott",
// }
//  createobj("new1" , new1)


// QUESTION 7


// function obj (key ){
//  new2 = localStorage.getItem(key)
//  return JSON.parse(new2)
// }
  
// new1 ={
//     jordan1 : "high tye dye",
//     jordan4 : "uni blue",
            
// }
//  new1 = obj ("new1")
// console.log(new1)

// QUESTION 8

// Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.


pushing = []
function newobj (){
  new1 = {
    name:"asim",
    sem:"5th",
    age:21
  }
}

pushing.push(new1)
console.log(pushing)
