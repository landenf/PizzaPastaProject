let pizzaIngredient = ['mozzarellaCheese', 'pepperoni', 'broccoli', 'mushroom','cheeseBread'];
let varibles = ['boughtMeatBalls'];

var Total = 0.00;
var AdddressFinal = "";
//let boughtMeatBalls    = false;
//let boughtextraSauce1        = false;
//let boughtextracheese  = false;
//let boughtextracheese1 = false;
//let boughtextraBasil   = false;
//let boughtPepperoni    = false;
//let boughtTomatoSauce  = false;
//let boughtTomatoSauce1 = false;
//let boughtAlfredoSauce = false;
//let boughtAlfredoSauce1= false;

//functions----------------------
function buyMeatBalls() {
    // let someValue = 6;
        Total = Total + 2;
        document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
        //boughtMeatBalls = true;

}
function buyextracheese() {
    // let someValue = 6;
        Total = Total + .5;
        document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
        //boughtextracheese = true;
}
function buyextracheese1() {
    // let someValue = 6;
    Total = Total + .5;
    document.getElementById("MoneyLeft1").innerHTML = "$" + Total.toString() + " Money Spent";
    //boughtextracheese1 = true;

}
function buyextraBasil() {
    // let someValue = 6;
        Total = Total + 1.00;
        document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
        //boughtextraBasil = true;
    }
function buyTomatoSauce() {
    // let someValue = 6;
        Total = Total + 3.50;
        document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
        //boughtTomatoSauce = true;
}
function buyAlfredoSauce() {
    // let someValue = 6;
        Total = Total + 5;
        document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
        //boughtAlfredoSauce = true;
}
function buyPepperoni() {
    // let someValue = 6;
        Total = Total + 2;
        document.getElementById("MoneyLeft1").innerHTML = "$" + Total.toString() + " Money Spent";
        //boughtPepperoni = true;

}
function buyextraSauce1() {
    // let someValue = 6;
        Total = Total + 1.00;
        document.getElementById("MoneyLeft1").innerHTML = "$" + Total.toString() + " Money Spent";
        //boughtextraSauce1 = true;
}
function buyTomatoSauce1() {
    // let someValue = 6;
        Total = Total + 3.50;
        document.getElementById("MoneyLeft1").innerHTML = "$" + Total.toString() + " Money Spent";
        //boughtTomatoSauce1 = true;
}
function buyAlfredoSauce1() {
    // let someValue = 6;
        Total = Total + 5;
        document.getElementById("MoneyLeft1").innerHTML = "$" + Total.toString() + " Money Spent";
        //boughtAlfredoSauce1 = true;
}

function addressf(address) {
    alert("Thank you for ordering with us! Your pizza/pasta will be deliverd to you at: " + address + "  It should be there soon!  Please be ready to pay when it gets there. Thank you for doing buissness with Online Itailan Restrant.");
    AdddressFinal = address;
}
function getaddress() {
    var address = document.getElementById("namename")["value"];
    addressf(address);
}
function validateForm() {
    var a = document.forms["Form1"]["name"].value;
    var b = document.forms["Form1"]["number"].value;
    var c = document.forms["Form1"]["address"].value;
    if (a == null || a == "", b == null || b == "", c == null || c == "") {
        alert("Please Fill All Required Field");
        return false;
    }
    else {
        getaddress();
        window.location.href = "index.html";

    }
}
var purchasedIngredient = true;
function createPizza() {
    pizzaIngredient
    let ingredient = '';
    let TempVarible;

    for (let i = 0; i <= varibles.length; i++) {
        TempVarible = varibles[i];
        if (TempVarible = true) {
            IngredientContoller(TempVarible);
           }
    }

    for (let i = 0; i <= pizzaIngredient.length; i++) {
        ingredient = pizzaIngredient[i];
        IngredientContoller(ingredient);
    }
}
function IngredientContoller(ingredient) {
    let image = document.getElementById(ingredient);
    image.style.display = (image.style.display == 'none') ? 'inline' : 'none'
}


