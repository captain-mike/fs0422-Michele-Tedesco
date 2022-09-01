type StrNum = number | string;

let x:StrNum = '4';
let y:StrNum = 4;

function combina(input1:StrNum, input2:StrNum):StrNum {

    if(typeof input1 === 'number' && typeof input2 === 'number'){
        var result:StrNum = Number(input1) + Number(input2);
    }else{
        var result:StrNum = input1.toString() + String(input2);
    }
    
    return result;
}

let saluto = combina('ciao',' Come stai?')//ciao Come stai?

let somma = combina(5,2)

let combinazione = combina('5',5);//55

//tipi d'intersezione

type Admin = {
    name: string,
    privileges: string[]
}

type Employee = {
    startDate: Date,
    skills: string[]
}

let amministratore:Admin = {
    name:'Rossana',
    privileges:['access']
}

type PromotedEmployee = Admin & Employee;

let superUser:PromotedEmployee = {
    name:'Rossana',
    privileges:['access'],
    startDate: new Date,
    skills: ['HTML','CSS']
}

/** PROMEMORIA */

interface SuperEmployee{
    startDate: Date,
    skills: string[],
    name: string,
    privileges: string[]
}