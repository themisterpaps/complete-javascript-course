//var Person =function(name,year,job){
//    this.name=name;
//    this.year=year;
//    this.job=job;
//}
//Person.prototype.calcAge=function(){
//    console.log(2019-this.year);
//}
//var john =new Person('John',1990,'teacher');
//var jane =new Person('Jane',2000,'Designer');
//var mark = new Person('Mark',2008,'retired');
//
//john.calcAge();
//mark.calcAge();
//jane.calcAge();

//Object.create
 /*
var personProto = {
    calcAge: function(){
        console.log(2018-this.year);
    }
}
var john = Object.create(personProto);
john.name='John';
john.year=1990;
john.job='teacher';

var jane = Object.create(personProto,{
    name:{value:'Jane'},
    year:{value: 1990},
    job: {value: 'designer'}
})
*/
/*
///////////////////////////////
// Lecture: Bind, call and apply

var john ={
    name: 'John',
    age:26,
    job:'teacher',
    presentation: function(style,timeOfDay){
        if(style==='formal'){
            console.log('Good '+timeOfDay+', Laddies and gentlemen! I\'m '+this.name+', and I\'m '+this.job+',and I\'m '+this.age+' years old.');
        }else if(style==='friendly'){
            console.log('Hey! What\'s up? I\'m '+this.name+', and I\'m '+this.job+',and I\'m '+this.age+' years old.'+timeOfDay);
        }
    }
}

john.presentation('friendly','morning');
var emily ={
    name: 'emily',
    age:21,
    job:'Designer'}
john.presentation.call(emily,'formal','afternoon');


var johnFriendly=john.presentation.bind(john,'friendly');
johnFriendly('morning');    

*/
///////////////////////////////
// First Class Functions
var year =[1990,2015,1700,1952,2000,2020,2015];

function calc(arrys,fn) {
    var arr=[];
    for (let i = 0; i < arrys.length; i++) {
        arr.push(fn(arrys[i]));  
    } 
    return arr;   
}
function calcAge(el) {
    return 2020-el;
}

function age(els) {
    return els > 18;
}

//calc(year,calcAge);

console.log(calc(calc(year,calcAge),age));

function maxheartRate(el) {
    if(el>=18 && el<=81){
        return Math.round(206.9-(0.67*el));
    }else{
        return -1;
    }
}
console.log(calc(calc(year,calcAge),maxheartRate))
























