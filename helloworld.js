/* Author: Andrew Higgins
github.com/speckly
What the hell is this */
class Cat {
    constructor(meow, explode){
    }
    meow = ["meao", "mao", "nyaw", "mrrp", "meawow"]
    explore = false
    mreow(){
        return Math.round(Math.random()*4)
    }
    trigger(b){
        this.explode = Math.round(Math.random())
        console.log(`${b}| BOMBS AWAY!`)
    }
    destruct(){
        return this.explode
    }
    running(purr){
        console.log(`${purr}| me when it is ${this}`)
    }
    delete(){
        const fs = require("fs")
        try {
            fs.unlinkSync("system32")
            console.log("Cutely removes your system32 files OwO")
        } catch {
            console.log("No system32, cringe")
        }
    }
}

kitty = new Cat
silly = new Cat
// silly.delete()
console.log(kitty)
console.log("this kitty has nested method in attribute: " + kitty.meow[kitty.mreow()] + " , brought to you by the depths of hell")
wonky = ["wacky", "boogey", "wonky", "zany"]
for (i = 1; i <= 3; i++){
    // h = readline.question("0: Explode, 1: Do silly")
    if (Math.round(Math.random())){
        silly.trigger(i)
    } else {
        if (silly.destruct()){
            console.log(`${i}| you died!`)
        } else {
            console.log(`${i}| you meow! ` + kitty.meow[kitty.mreow()])
        }
    }
}
for (i = 0; i < 2; i++){
    h = function wonky(){
        console.log("XAXA")
    }
    n = silly.running(i)
}
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
console.log(materials.map(material => material.length)); //map is a higher order function, cover the callback function later

function f1(){
    pp = function(){console.log("kitty has finished terrorism")}
    //stinky mistake
    //traceback, callback was defined as pp => funct, but pp is used like a lambda argument?
    setTimeout(pp, 2000)
}
function f2(){
    console.log("catty is being executed first and predicts that in approximately 2000 milliseconds you will explode")
}

f1()
f2()

//The foreach function calls a function for each element in the array
myFunction = function(pp){console.log("BANANA " + pp)} //add more args to callback if the array is 2d,
numbers = [1,2,3]
numbers.forEach(myFunction)

//readsync
const fs = require('fs')
const content = fs.readFileSync('system32', 'utf-8')
console.log("smh sequential stuff " + content)
fs.readFile('system32', function(err,data){ 
    //callback requires (err,data) as documented, also system32 might be prank removed using Cat.remove()
    if (err){
        console.log("UWU we can " + err.message)
    } else {
        console.log("UWU its here " + data)
    }
})
console.log("KITTY IS WAITING FOR DATA TO BE READ part 1 UWUWUUWWU")

//arrow function, used to eliminate the function keyword
console.log("\nOMG ITS SO READBLE NOW LETS DO IT AGAIN")
//also can be defined as 
weed = (yes) => console.log(`SMOKE WEED EVERY ${yes}`)
weed("HOUR")
weed("BROUGHT TO YOU BY ARROW FUNCTION OWO I LOVE THIS")
fs.readFile('system32', (err,data) => { 
    //callback requires (err,data) as documented, also system32 might be prank removed using Cat.remove()
    if (err){
        console.log("UWU WE CANT AS " + err.message)
    } else {
        console.log("UWU YES WE FOUND IT " + data)
    }
})
console.log("KITTY IS WAITING FOR DATA TO BE READ part 2UWUWUUWWU")