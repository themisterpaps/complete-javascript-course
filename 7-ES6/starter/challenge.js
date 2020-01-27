class Element{
    constructor(name,build){
        this.name=name;
        this.build=build;
    }
}
class Park extends Element{
    constructor(name,build,nrTrees,area){
        super(name,build);
        this.nrTrees=nrTrees;
        this.area=area;
    }
    desnsity= function() {
        console.log(`the Density of the ${this.name} park is ${this.nrTrees/this.area}`);
    }
}
class Street extends Element{
    constructor(name,build,length,size){
        super(name,build);
        this.length=length;
        this.size=size;
    }
    theSize(){
        let classification =new Map(); 
        classification.set(1,"Normal");
        classification.set(2,"tiny");
        classification.set(3,"default");
        classification.set(4,"hight");
        console.log(`the size of the park is ${this.classification.get(this.size)}`);
        
    }
}