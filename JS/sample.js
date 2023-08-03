var a = 120
console.log("This is the value declared in var type before altering : " + " " + a)
{
    var a = 7
    console.log("This is the value declared in var type after altering : " + " " + a)
}
console.log("This is the value declared in var type after block altering : " + " " + a)
let e = 120
console.log("This is the value declared in let type before altering : " + " " + e)
{
    let e = 7
    var b =10
    console.log("This is the value declared in let type after altering : " + " " + e)
    console.log("This is the value of b : " + " " + b)
}
console.log("This is the value of b : " + " " + b)
console.log("This is the value declared in let type after block altering : " + " " + e)
const c = 5
console.log("This is the value declared in const type : " + " " + c)

// IF...ELSE

let ab = 0
console.log(ab)
if (ab === 0){
    console.log("The number is 0 and adding 1 to it to make it positive")
    ab = ab + 1
    
}
console.log(ab)
if(ab > 0){
    console.log("The number is Positive")
}
else{
    console.log("The number is Negative")
}

// looping, for, foreach, forin, forof while, do.. while
d = 5
// For Loop

for(i = 0; i< d;i++){
    console.log(i)
}

// While Loop

i=0
while(i <= d){
    console.log(i)
    i++
}
array = [10,20]
array.forEach(element => console.log(element));
