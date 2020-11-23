var numberCircle = 0;
var numberCross = 0;

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
        }

        else {
            createCircle(cell);
            numberCircle++;
            document.getElementById("numberCircle").innerHTML = ' ' +numberCircle;
            player = playerlist[1];
        }
    }

    //Joueur 2
    else if (player === playerlist[1]) {
        document.getElementById("currentPlayerName").innerHTML = playerlist[0];

        if (document.getElementById(cell).childElementCount != 0) {
            alert('Impossible');
        }

        else {
            createCross(cell);
            numberCross++;
            document.getElementById("numberCross").innerHTML = ' ' +numberCross;
            player = playerlist[0]; 
        }
    }
    Victoire();
}

function Victoire() {
    var a1 = document.getElementById("1a").childNodes;
    var b1 = document.getElementById("1b").childNodes;
    var c1 = document.getElementById("1c").childNodes;

    var a2 = document.getElementById("2a").childNodes;
    var b2 = document.getElementById("2b").childNodes;
    var c2 = document.getElementById("2c").childNodes;

    var a3 = document.getElementById("3a").childNodes;
    var b3 = document.getElementById("3b").childNodes;
    var c3 = document.getElementById("3c").childNodes;



    if (a1[0]["className"] === b1[0]["className"] && b1[0]["className"] === c1[0]["className"]) {
        if (player === playerlist[0]) {
            alert('Vainqueur ' + playerlist[1]);
            document.getElementById("Vainqueur").innerHTML = playerlist[1];
        } else if (player === playerlist[1]) {
            alert('Vainqueur ' + playerlist[0]);
            document.getElementById("Vainqueur").innerHTML = playerlist[0];         
        }
    }

}




//Function creation du rond
function createCircle(cell) {
    let newCircle = document.createElement('span');
    newCircle.setAttribute("class", "circle");
    document.getElementById(cell).appendChild(newCircle);
}
//Function creation de la croix
function createCross(cell) {
    let newCross = document.createElement('span');
    newCross.setAttribute("class", "cross");
    document.getElementById(cell).appendChild(newCross);
}