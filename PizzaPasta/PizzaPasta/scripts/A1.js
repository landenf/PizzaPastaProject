var wallet = 5.00;
var meatballs = false;
var TomatoSause = false;
var AlfredoSause = false;
var Name = "";
var Phone = "";
var AdddressFinal = "";
var Peperoni = false;
var Mushrooms = false;
var Broccoli = false;
function createPizza() {
    if (meatballs, TomatoSause, AlfredoSause) {
    }
}
function buyMeatBalls() {
    // let someValue = 6;
    if (wallet >= 2) {
        wallet = wallet - 2;
        document.getElementById("MoneyLeft").innerHTML = "$" + wallet.toString() + " Left to spend";
        meatballs = true;
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
        meatballs = true;
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
        meatballs = true;
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
        meatballs = true;
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
        meatballs = true;
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
//function outputeverthing() {
//    var x
//    x = document.getElementById("form2");
//    //Name = x.elements["name"].value;
//    //Phone = x.elements["number"].value;
//    Adddress = x.elements["address"].value;
//    //Name = name;
//    //Phone = phone;
//    //Adddress = address;
//    alert("I still know your address..... it is : " + Adddress);
//}
//function displayorder() {
//    //document.getElementById("displayname").innerHTML = Name;
//    //document.getElementById("displayphone").innerHTML = Phone;
//    //document.getElementById("displayaddress").innerHTML = Adddress;
//    alert(Name + Phone + Adddress);
//}
function addressf(address) {
    alert("I totaly dont know your adddress is : " + address);
    AdddressFinal = address;
}
function getaddress() {
    var address = document.getElementById("namename")["value"];
    addressf(address);
}
//# sourceMappingURL=pasta.js.map 
