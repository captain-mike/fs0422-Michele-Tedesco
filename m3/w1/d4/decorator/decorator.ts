function Logger(f:Function){
    console.log('...loading');
    console.log(f)    
}

@Logger
class Person{
    name:string = 'Mario';

    constructor(){
        console.log('Istanziato');
    }
}

let person = new Person();
console.log(person);



function AggiungiMetodo(f:Function){
    console.log(f)

    f.prototype.mostraNome = function(){
        console.log('Margherita')
    }
}

@AggiungiMetodo
class Pizza{
    gusto:string = 'Margherita';
}


let margherita:any = new Pizza();

margherita.mostraNome()