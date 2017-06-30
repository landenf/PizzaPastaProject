//Typscript for this project:
//Varibles------------------------
var wallet = 5.00;
var AdddressFinal = "";
//functions----------------------
function buyMeatBalls() {
    // let someValue = 6;
    if (wallet >= 2) {
        wallet = wallet - 2;
        document.getElementById("MoneyLeft").innerHTML = "$" + wallet.toString() + " Left to spend";

    }
    else {
        alert("Your broke!");
        document.getElementById("MoneyLeft").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
}
function buyextracheese() {
    // let someValue = 6;
    if (wallet >= .5) {
        wallet = wallet - .5;
        document.getElementById("MoneyLeft").innerHTML = "$" + wallet.toString() + " Left to spend";

    }
    else {
        alert("Your broke!");
        document.getElementById("MoneyLeft").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
}
function buyextraBasil() {
    // let someValue = 6;
    if (wallet >= 1.00) {
        wallet = wallet - 1.00;
        document.getElementById("MoneyLeft").innerHTML = "$" + wallet.toString() + " Left to spend";

    }
    else {
        alert("Your broke!");
        document.getElementById("MoneyLeft").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
}
function buyTomatoSauce() {
    // let someValue = 6;
    if (wallet >= 3.50) {
        wallet = wallet - 3.50;
        document.getElementById("MoneyLeft").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
    else {
        alert("Your broke!");
        document.getElementById("MoneyLeft").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
}
function buyAlfredoSauce() {
    // let someValue = 6;
    if (wallet >= 5) {
        wallet = wallet - 5;
        document.getElementById("MoneyLeft").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
    else {
        alert("Your broke!");
        document.getElementById("MoneyLeft").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
}
//.
function buyMeatBalls1() {
    // let someValue = 6;
    if (wallet >= 2) {
        wallet = wallet - 2;
        document.getElementById("MoneyLeft1").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
    else {
        alert("Your broke!");
        document.getElementById("MoneyLeft1").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
}
function buyextracheese1() {
    // let someValue = 6;
    if (wallet >= .5) {
        wallet = wallet - .5;
        document.getElementById("MoneyLeft1").innerHTML = "$" + wallet.toString() + " Left to spend";

    }
    else {
        alert("Your broke!");
        document.getElementById("MoneyLeft").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
}
function buyextraSauce1() {
    // let someValue = 6;
    if (wallet >= 1.00) {
        wallet = wallet - 1.00;
        document.getElementById("MoneyLeft1").innerHTML = "$" + wallet.toString() + " Left to spend";

    }
    else {
        alert("Your broke!");
        document.getElementById("MoneyLeft").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
}
function buyTomatoSauce1() {
    // let someValue = 6;
    if (wallet >= 3.50) {
        wallet = wallet - 3.50;
        document.getElementById("MoneyLeft1").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
    else {
        alert("Your broke!");
        document.getElementById("MoneyLeft1").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
}
function buyAlfredoSauce1() {
    // let someValue = 6;
    if (wallet >= 5) {
        wallet = wallet - 5;
        document.getElementById("MoneyLeft1").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
    else {
        alert("Your broke!");
        document.getElementById("MoneyLeft1").innerHTML = "$" + wallet.toString() + " Left to spend";
    }
}

function addressf(address) {
    alert("Thank you for ordering with us! Your pizza/pasta will be deliverd to you at: " + address + "  It should be there soon!  Please be ready to pay when it gets there.");
    AdddressFinal = address;
}
function getaddress() {
    var address = document.getElementById("namename")["value"];
    addressf(address);
}