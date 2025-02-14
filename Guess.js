let number;
let result;

function askNumber(){
    

    while (isNaN(number)) {
        number = parseInt(prompt('Entrez un nombre entier positif'));
    }

    console.log(number);
}

function didIWin(number){

    if (number < 22){
        result = "Plus grand"
    }
    if (number > 22){
        result = "Plus petit"
    }
    else {
        result = "Bravo ! Vous avez deviné le nombre"
    }

    return result;
}

function gamPlay(){

    do{ askNumber();
        didIWin();
    } while (result != 22)
    }
    
gamPlay()

console.log(result)