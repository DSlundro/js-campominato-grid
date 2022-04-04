// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro

// assegno le costanti agli elementi
const selectedLevel = document.getElementById(`level`);
const button = document.getElementById(`play`);
const box = document.querySelector(`.box`);

// assegno un array con i livelli
let typeOfLevel = [100, 81, 49]

// aggiunto l'evento al bottone
button.addEventListener(`click`,startGame)

// al click del tasto play verra generato la griglia di caselle in base alla difficolta scelta
function startGame() {
    box.innerHTML = '';
    // scelgo il livello
    const selLevel = parseInt(level.value);
//console.log(`selLevel`, selLevel);
    //stabilisco il numero di celle in base al livello
    const cellCount = typeOfLevel[selLevel];
//console.log(`cellCount`, cellCount);
    // calcolo le celle
    const boxCell = Math.sqrt(cellCount);
    // stampo le celle
    for ( let cellNum = 1; cellNum <= cellCount; cellNum++){

        const cellElement = document.createElement(`div`);
        cellElement.classList.add(`cell`);
        cellElement.innerHTML = cellNum;
        cellElement.style.width = `calc(100% / ${boxCell})`;
        cellElement.style.height = `calc(100% / ${boxCell})`;
        cellElement.addEventListener(`click`, () => {
// cambio colore al click
        cellElement.classList.toggle(`bg_box`);
        });
        box.append(cellElement);
//console.log(cellNum);
    }
}







