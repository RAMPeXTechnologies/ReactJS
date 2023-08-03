// Array

const array = [10,20,"KSP", 23.08,Date()]
console.log("Before change :")
for (var ele in array){
    console.log(array[ele])
}
console.log("After change :")
array.push("3rd Years")

for (var ele of array){
    console.log(ele)
}

array.pop()

for (var ele of array){
    console.log(ele)
}

array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
console.log("After Popping all the elements")

if(array.length > 0){
    console.log("Elements are present")
    for (var ele of array){
        console.log(ele)
    }
}
else{
    console.log("No Elements are in the array")
}
array.push(1)
if(array.length > 0){
    console.log("Elements are present")
    for (var ele of array){
        console.log(ele)
    }
}
else{
    console.log("No Elements are in the array")
}

// Objects

a = {
    car: "Audi",
    model: "A8",
    airbags: 8,
    wheels: 5,
    color: "blue"
}

console.log(a['color'])
console.log(a.airbags)
var some = 'model'
console.log(a[some])
console.log(a)
a.car = "BMW"
console.log(a)
a.sunroof = {isPresent: "Yes",Shape: "Rectangle"}
console.log(a)
console.log(a.sunroof.isPresent)
for (var ele in a){
    console.log(ele +":" + a[ele])
    if(typeof a[ele] === "object")
    {
        for (var val in a[ele]){
            console.log(val +":" + a[ele][val])
        }
    }
}

functions

function fun_name(a,b){
    console.log(a+ b+5 + 5+ "KSP" + 5 + 5 )
    return a+ b+5 + 5+ "KSP" + 5 + 5
}

console.log(fun_name(5,5))