//////////////////////////////////
//++++++++++++++++++++++++++++++//
// Creating Classes & Factories //
//++++++++++++++++++++++++++++++//
//////////////////////////////////

// // Hamster //
// class Hamster {
//     constructor(name) {
//         this.owner = ""
//         this.name = name
//         this.price = 15
//     }
//     wheelRun() {
//         console.log("squeak squeak")
//     }
//     eatFood() {
//         console.log("nibble nibble")
//     }
//     getPrice() {
//         return this.price
//     }
// }

// // Person //
// class Person {
//     constructor(name) {
//         this.name = name
//         this.age = 0
//         this.height = 0
//         this.weight = 0
//         this.mood = 0
//         this.hamsters = []
//         this.bankAccount = 0
//     }
//     getName() {
//         return this.name
//     }
//     getAge() {
//         return this.age
//     }
//     getWeight() {
//         return this.weight
//     }
//     greet() {
//         console.log(`Hello, I am ${this.name}.`)
//     }
//     eat() {
//         this.weight++
//         this.mood++
//     }
//     exercise() {
//         this.weight--
//     }
//     ageUp() {
//         this.age++
//         this.height++
//         this.weight++
//         this.mood--
//         this.bankAccount += 10
//     }
//     buyHamster(hamster) {
//         this.hamsters.push(hamster)
//         this.mood += 10
//         this.bankAccount -= hamster.getPrice()
//     }
// }

// const timmy = new Person("Timmy")
// for(let i = 0; i < 5; i++) {
//     timmy.ageUp()
// }
// for(let i = 0; i < 5; i++) {
//     timmy.eat()
// }
// for(let i = 0; i < 5; i++) {
//     timmy.exercise()
// }
// for(let i = 0; i < 9; i++) {
//     timmy.ageUp()
// }
// const gus = new Hamster("Gus")
// gus.owner = timmy.name
// timmy.buyHamster(gus)
// for(let i = 0; i < 15; i++) {
//     timmy.ageUp()
// }
// for(let i = 0; i < 2; i++) {
//     timmy.eat()
// }
// for(let i = 0; i < 2; i++) {
//     timmy.exercise()
// }
// console.log(timmy)


// Chef Make Dinners
class Dinner {
    constructor(appetizer,entree,dessert) {
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }
}

class Chef {
    constructor() {
      this.dinners = []  
    }
    makeDinner(x,y,z) {
        const dinner = new Dinner(x,y,z)
        this.dinners.push(dinner)
    }
}
const joe = new Chef()
joe.makeDinner("appetizer1","entree1","dessert1")
joe.makeDinner("appetizer2","entree2","dessert2")
joe.makeDinner("appetizer3","entree3","dessert3")
console.log(joe.dinners)

//++++++++++++++++++++++++++++++//
//   I. VARIABLES & DATATYPES   //
//++++++++++++++++++++++++++++++//

//++++++++++++++++++++++++++++++//
//          II. LOOPS           //
//++++++++++++++++++++++++++++++//

//++++++++++++++++++++++++++++++//
// III. ARRAYS & CONTROLS FLOW  //
//++++++++++++++++++++++++++++++//

//++++++++++++++++++++++++++++++//
//        IV. Functions         //
//++++++++++++++++++++++++++++++//

//++++++++++++++++++++++++++++++//
//         V. OBJECTS           //
//++++++++++++++++++++++++++++++//