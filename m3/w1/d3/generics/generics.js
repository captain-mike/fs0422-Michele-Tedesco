"use strict";
function numero(x) {
    return x;
}
numero(5);
function numeroGeneric(x) {
    return x;
}
console.log(numeroGeneric('5'));
console.log(numeroGeneric(5));
console.log(numero(5));
function sommaOConcatena(x, y) {
}
sommaOConcatena(['ciao'], 5);
function prova(carattere1) {
    return typeof carattere1;
}
prova('a'); //string
prova(5); //number
function provaSpread(...caratteri) {
    return caratteri;
}
let obj = {
    prop1: 'prova',
    prop2: 5,
};
class CustomArray {
    constructor() {
        this.arr = [];
    }
    addItem(item) {
        this.arr.push(item);
    }
    getItems() {
        return this.arr;
    }
    removeItem(item) {
        let index = this.arr.indexOf(item);
        this.arr.splice(index, 1);
    }
    removeItemPro(item) {
        this.arr = this.arr.filter((i) => i != item);
    }
}
let arr = new CustomArray();
console.log(arr.getItems());
arr.addItem('ciao');
arr.addItem('ciao2');
arr.addItem('ciao3');
console.log(arr.getItems());
arr.removeItem('ciao');
console.log(arr.getItems());
