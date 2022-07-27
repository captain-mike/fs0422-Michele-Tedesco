let memory = document.querySelector('#memory');
let start = document.querySelector('#start')

start.addEventListener('click',initMemory)

function createCard(icona){
    //<div class="icon"><div>🐱</div></div>
    let card = document.createElement('div');//<div></div>
    card.classList.add('icon','show');//<div class="icon"></div>

    let content = document.createElement('div');//<div></div>
    content.innerHTML = icona//<div>🐱</div>

    card.addEventListener('click',checkCard)

    card.append(content)
    memory.append(card)
}

function shuffle(a){
    let i = 0;
    let newA = []
    while (i < a.length){
        let rand = Math.floor(Math.random() * a.length);//affidiamo a rand un numero randomico che va da 0 alla lunghezza di a
        newA.push(a[rand])//utilizzando il numero randomico, pesco un valore dall'array a, e lo inserisco nell'array newA
        a.splice(rand,1)//elimino l'elemento pescato
    }
    return newA;
}

function checkCard(){
    
}

function initMemory(){

    let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];

    memory.innerHTML = ''//svuoto l'html eliminando tutte le card

    let shuffleArray = shuffle(arrayAnimali)

    for(let icon of shuffleArray){
        createCard(icon)
    }

}

