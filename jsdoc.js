/* Comments */
/**
*This is the fullname of the user
*@type {string}
*/
cont fullName = "Juan";


/* Array */
/**
* Lista de edades de usuarios
* @type {Array}
*/
const age = [19,32,53,23,12,{}. true];


/* Array */
/**
* Lista de edades de usuarios
* @type {Array<Number|String>}
*/
const age = [19,32,53,23,"12"];


/* Object */
/**
* Person Object
* @type {{id:number|string, firstName:string, lastName:string, age:number|string}}
*/
const persona = {
    id: 1,
    firstName: "Ryan",
    lastName: "Brian",
    age: 25
}


/* Object */
/**
* Person Object
* @type {{id:number, firstName:string, lastName:string, age:number}}
*/
const persona2 = {
    id: 1,
    firstName: "Ryan",
    lastName: "Brian",
    age: 25
}


/* Functions */
/**
* Add two numbers
* @param {number} n2 First Number
* @param {number} n3 Segond Number
* @returns {number} Total sum
*/
function add(n2, n3){
    return n3 + n2;
}


/* Functions */
/**
* Add two numbers
* @param {number} n2 First Number
* @param {number} n3 Segond Number
* @returns {number} Total sum
*/
const addTwo = (n2, n3) => `The result is ${n2 + n3}`;


/* Custom Types */
/**
* User
* @typedef {Object} User
* @property {number} id User Id
* @property {string} name User name
* @property {number|string} [age] User age (optional)
* @property {boolean} isActive User state
*/
const myNewUser = {
    id: 1,
    name: "Laura",
    age: 30,
    isActive: true
}
/**
* @type {User}
*/
const myNewUser2 = {
    id: 2,
    name: "Tatiana",
    age: 20,
    isActive: false
}


/* Clases */
/**
* Class to create a Programmer
* @example
* const newProgrammer = new Programmer({fullName: 'Exmple Name', 'java'})
* newProgrammer.getInfo();
* @see https://google.com
* @todo Implements the rest of the methods please
*/
class Programmer{
    /**
    * @param {User} user User information
    * @param {string} Language to programming
    */
    constructor(user, language){
        this.fullName = user.fullName;
        this.language = language;
    }

    /**
    * get programmer info
    * @returns {void}
    */
    getInfo(){
        console.log("I'm ${this.fullName} and my favorite programming is ${this.language}");
    }
}

/**
* know more in {@link Programmer}
*/
const progOne = new Programmer({fullName: "Constantin Brindusoiu"}, "javascript");
const progTwo = new Programmer({fullName: "Constantin Brindusoiu"}, "php");

progOne.getInfo();
progTwo.getInfo();

/* Modulos */
/**
* My math library - Learn More {@tutorial second-tutorial}
* @module MyMath
*/
/**
* Add two numbers
* @param {number} x First Number
* @param {number} y Second Number
* @returns {number} Sum of x and y
*/
const add = (x, y) => x + y;
/**
* Substract two numbers
* @param {number} x First Number
* @param {number} y Second Number
* @returns {number} Substract of x and y
*/
const substract = (x, y) => x - y;

// exportar el modulo
module.exports = {add, substract}