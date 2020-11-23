var numberCircle = 0;
var numberCross = 0;
var nombreTour = 0;

let morpion = [0, 0, 0, 0, 0, 0, 0, 0, 0];


//Initialisation du jeu
function StartGame() {
    playerlist = ['Goku', 'Saitama'];
    player = playerlist[0];
    document.getElementById("currentPlayerName").innerHTML = playerlist[0];
}

function ResetGame() {
    document.location.reload();
}


//Ajout d'un cercle ou d'une croix sur la case sélectionner en fonction du jouer 
function play(cell) {
    //Joueur 1
    if (player === playerlist[0]) {
        document.getElementById("currentPlayerName").innerHTML = playerlist[1];

        if (document.getElementById(cell).childElementCount != 0) {
            alert('Impossible');
        } else {
            createCircle(cell);
            numberCircle++;
            document.getElementById("numberCircle").innerHTML = ' ' + numberCircle;
            player = playerlist[1];
        }
    }

    //Joueur 2
    else if (player === playerlist[1]) {
        document.getElementById("currentPlayerName").innerHTML = playerlist[0];

        if (document.getElementById(cell).childElementCount != 0) {
            alert('Impossible');
        } else {
            createCross(cell);
            numberCross++;
            document.getElementById("numberCross").innerHTML = ' ' + numberCross;
            player = playerlist[0];
        }
    }
    checkCircle();
    checkCross();
    checkLose();
}

function checkCircle() {
    //Ligne 1
    if (morpion[0] == 'circle' && morpion[1] == 'circle' && morpion[2] == 'circle') {
        document.getElementById("Vainqueur").innerHTML = playerlist[0];
    }
    //Ligne 2
    if (morpion[3] == 'circle' && morpion[4] == 'circle' && morpion[5] == 'circle') {
        document.getElementById("Vainqueur").innerHTML = playerlist[0];
    }
    //Ligne 3
    if (morpion[6] == 'circle' && morpion[7] == 'circle' && morpion[8] == 'circle') {
        document.getElementById("Vainqueur").innerHTML = playerlist[0];
    }

    //Collone 1
    if (morpion[0] == 'circle' && morpion[3] == 'circle' && morpion[6] == 'circle') {
        document.getElementById("Vainqueur").innerHTML = playerlist[0];
    }
    //Collone 2
    if (morpion[1] == 'circle' && morpion[4] == 'circle' && morpion[7] == 'circle') {
        document.getElementById("Vainqueur").innerHTML = playerlist[0];
    }
    //Collone 3
    if (morpion[2] == 'circle' && morpion[5] == 'circle' && morpion[8] == 'circle') {
        document.getElementById("Vainqueur").innerHTML = playerlist[0];
    }

    //Diagonale 1
    if (morpion[0] == 'circle' && morpion[4] == 'circle' && morpion[8] == 'circle') {
        document.getElementById("Vainqueur").innerHTML = playerlist[0];
    }
    //Diagonale 2
    if (morpion[2] == 'circle' && morpion[4] == 'circle' && morpion[6] == 'circle') {
        document.getElementById("Vainqueur").innerHTML = playerlist[0];
    }
}

function checkCross() {
    //Ligne 1
    if (morpion[0] == 'cross' && morpion[1] == 'cross' && morpion[2] == 'cross') {
        document.getElementById("Vainqueur").innerHTML = playerlist[1];
    }
    //Ligne 2
    if (morpion[3] == 'cross' && morpion[4] == 'cross' && morpion[5] == 'cross') {
        document.getElementById("Vainqueur").innerHTML = playerlist[1];
    }
    //Ligne 3
    if (morpion[6] == 'cross' && morpion[7] == 'cross' && morpion[8] == 'cross') {
        document.getElementById("Vainqueur").innerHTML = playerlist[1];
    }

    //Collone 1
    if (morpion[0] == 'cross' && morpion[3] == 'cross' && morpion[6] == 'cross') {
        document.getElementById("Vainqueur").innerHTML = playerlist[1];
    }
    //Collone 2
    if (morpion[1] == 'cross' && morpion[4] == 'cross' && morpion[7] == 'cross') {
        document.getElementById("Vainqueur").innerHTML = playerlist[1];
    }
    //Collone 3
    if (morpion[2] == 'cross' && morpion[5] == 'cross' && morpion[8] == 'cross') {
        document.getElementById("Vainqueur").innerHTML = playerlist[1];
    }

    //Diagonale 1
    if (morpion[0] == 'cross' && morpion[4] == 'cross' && morpion[8] == 'cross') {
        document.getElementById("Vainqueur").innerHTML = playerlist[1];
    }
    //Diagonale 2
    if (morpion[2] == 'cross' && morpion[4] == 'cross' && morpion[6] == 'cross') {
        document.getElementById("Vainqueur").innerHTML = playerlist[1];
    }
}

function checkLose() {
    nombreTour++;
    if (nombreTour >= 9) {
        document.getElementById("Vainqueur").innerHTML = ' aucun, recommencez une partie !';
    }
}



//Function creation du rond
function createCircle(cell) {
    let newCircle = document.createElement('span');
    newCircle.setAttribute("class", "circle");
    document.getElementById(cell).appendChild(newCircle);
    morpion[cell] = 'circle';
}
//Function creation de la croix
function createCross(cell) {
    let newCross = document.createElement('span');
    newCross.setAttribute("class", "cross");
    document.getElementById(cell).appendChild(newCross);
    morpion[cell] = 'cross';
}