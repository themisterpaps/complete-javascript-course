
    let parks=[3],
    streets=[4];

    // Park Object 
    class park{
    constructor(name,parkArea,yearOfcriation,nrTrees) {
        this.name=name;
        this.parkArea=parkArea;
        this.yearOfcriation=yearOfcriation;
        this.nrTrees=nrTrees;
    }
    calcDensity=function() {
        return this.nrTrees/this.parkArea;
    }
    calcAge= function () {
        return 2020 - this.yearOfcriation;
    }
    }
    //
    class street{
        constructor(name,length){
            this.name=name;
            this.length=length;
        }
    }
    
function makeParks() {
    let name,parkArea, yearOfcriation,nrTrees;
    for (let i = 0; i < 2; i++) {
        alert(`introduce Parks data for a ${i}`);
         name= prompt("Name");
         parkArea= parseInt(prompt("Park Area"));
         yearOfcriation= parseInt(prompt("Year of Criation"));
         nrTrees=parseInt(prompt("Nr of trees"));
        parks.push(new park(name,parkArea,yearOfcriation,nrTrees));
    }
}
function makestreet() {
    let name,length;
    for (let i = 0; i < 2; i++) {
        alert(`introduce street data for a ${i}`);
         name= prompt("Name");
         length= parseInt(prompt("Park Area"));
        streets.push(new street(name,length));
    }
}

function run() {
    let sum=0;
    makeParks();
    makestreet();
    parks.forEach((current)=> {
        console.log(`the density of the ${current.name} par is ${current.calcDensity()}`);
        if(current.nrTrees >= 1000){ console.log(`the tree that has 1000 is ${current.name}`)}
        sum+=current.calcAge();
    });
    console.log(`the avarege of the parks is ${sum/2}`);
    console.log(`Street`);
    sum=0;
    street.forEach(element => {
        sum+=element.length;
    });
    console.log(`The total lenth is ${sum} and avg: ${sum/2} `);
}

run();