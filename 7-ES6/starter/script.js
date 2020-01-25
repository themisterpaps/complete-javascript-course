//////////////////
//E6
/*
{
    var c=1;
    let b =2;
    const a=3;
}
console.log(c);

(function () {
    var d=1
})();
*/

////////////////////////
// Lecture: Strings
/*
let firstName='Henrique';
let lastName ='Mateus';
const yearOfBirth =2000;
function calcAge(year) {
    return 2020 - year
}
// ES5
console.log('This is '+ firstName +' '+ lastName+'. Hes was born in '+yearOfBirth+'. Today, he is '+calcAge(yearOfBirth)+' year old.');

//ES6 
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth} and today he is ${calcAge(yearOfBirth)} years old.`)
const n=`${firstName} ${lastName}`;
console.log(n.startsWith('H'));
console.log(n.endsWith('s'));
console.log(n.includes('Ma'));
console.log(n.repeat(3));
*/
////////////////////////////////////
///Arrows functions
/*
const years=[1990,2000,1998,2001];

// ES5
var ages5= years.map(function(cunrent, index) {
    return 2020-cunrent;    
});
console.log(ages5);

// ES6 
let ages6 =years.map(current => 2020-current);
console.log(ages6);
 
ages6 = years.map((current,index)=> `Age element ${index+1}: ${2020-current}.`)
console.log(ages6);
ages6 = years.map((current,index)=>{
    const now =new Date().getFullYear();
    const age=now-current;
    return `Age element ${index+1}: ${age}.`
});

console.log(ages6);
*/

//////////////////////////////
// Lecture: Destructuring
/*
// ES5
var paps = ['Papito',18];
//var name= paps[0];
//var age=paps[1];

//ES6
const [name,age]=['Paps',26];
 console.log(name);
 console.log(age);

 const obj={
     firstName:'Paps',
     lastName:0
 };
 const {firstName,lastName}=obj;
 console.log(firstName);
 console.log(lastName);

 const {firstName: a, lastName: b}=obj;
 console.log(a);
 console.log(b);*/

//////////////////////////////////
// Arrays
/*const boxes = document.querySelectorAll('.box');
 
//ES5
var boxesArray=Array.prototype.slice.call(boxes);
boxesArray.forEach(current => {
    current.style.background='blue';
});
 
 */

 ///////////////////////////////
 // The Spread Operator
/*
 function addAges(a,b,c,d) {
     return a+b+c+d 
 }
 var sum1=addAges(18,30,12,21);
 console.log(sum1)

 //ES5
 var ages = [18,30,12,21];
 var sum2 = addAges.apply(null,ages);
 console.log(sum2);
 //ES6
 var sum3=addAges(...ages);
 console.log(sum3);

 const familySmith=['Neo','Jane','Lisbon'];
 const familyMuller=['Lily', 'Robin', 'Muller'];
 const bigFamily=[...familySmith,...familyMuller];
 console.log(bigFamily);
 */
 
 /////////////////////////////////////
 // Rest parametrs
 /*
 //ES5 
 function isFullAge5() {
     var arr=Array.prototype.slice.call(arguments);
     arr.forEach(current => {
         console.log((2020-current)>=18);
     });
 }
 isFullAge5(1998,1999,2000,1997,19970)

//ES6
function isFullAge(...years) {
    years.forEach(current => (
        console.log((2020-current)>=18)))
}
isFullAge(1998,1999,2000,1997,19970)
*/ /*
//ES5 
 function isFullAge5(limit) {
     var arr=Array.prototype.slice.call(arguments,1);
     arr.forEach(current => {
         console.log((2020-current)>=limit);
     });
 }
 isFullAge5(21, 1998,1999,2000,1997,19970)

//ES6
function isFullAge(limit,...years) {
    years.forEach(current => (
        console.log((2020-current)>=limit)))
}
isFullAge(1998,1999,2000,1997,19970)
*/


/////////////////////////////////////////////////////
// Classes
/*
//ES5
var Person5 = function (name, yearOfBith,job) {
    this.name=name;
    this.yearOfBith=yearOfBith
    this.job=job;
}
Person5.prototype.calcAge= function () {
        var age =new Date().getFullYear()-this.yearOfBith;
        console.log(age)
    }
    var john5=new Person5('John',1990,'Teacher');

//ES6
class Person6{
    constructor(name,yearOfBith,job){
        this.name=name;
        this.yearOfBith=yearOfBith;
        this.job=job;
    }
    calcAge(){
        var age =new Date().getFullYear()-this.yearOfBith;
        console.log(age)   
    }
}
var john6=new Person6('John',1990,'Teacher');

*/
//////////////////////////////////////////
// Classes with subclasses
/*
var Person5 = function (name, yearOfBith,job) {
    this.name=name;
    this.yearOfBith=yearOfBith
    this.job=job;
}
Person5.prototype.calcAge= function () {
        var age =new Date().getFullYear()-this.yearOfBith;
        console.log(age)
    }

    var Atthlete5= function (name,yearOfBith, job,olympicGames, medals){
        Person5.call(this, name,yearOfBith ,job, )
        this.olympicGames=olympicGames;
        this.medals=medals;
    } 
    Atthlete5.prototype=Object.create(Person5.prototype);

    //ES6
    var Person6 = function (name, yearOfBith,job) {
        this.name=name;
        this.yearOfBith=yearOfBith
        this.job=job;
    }

    class Atthlete6 extends Person6{
        constructor(name,yearOfBith,job,olympicGames,medals){
            super(name,yearOfBith,job);
            this.medals=medals;
            this.olympicGames-olympicGames
        }
        calcAge = function(){
            return 2020-this.yearOfBith;
        }
    }
    Atthlete6.prototype.add=function () {
        console.log("Is working")
    }

    var paps=new Atthlete6("Paps",2000,`Designer`,`Tokyo`,2);
    console.log(paps.calcAge());
    */