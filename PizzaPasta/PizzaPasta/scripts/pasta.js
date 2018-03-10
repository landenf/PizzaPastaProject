var pastaIngredient = ['PastaCheese', 'PastaBasil', ' PastaMeatBalls', 'PastaAlfredoSause', 'PastaTomatoSause', 'PastaChefsSecret'];
var Total = 5.00; //Starts a 5 for the cost of pizza and pasta.
var AdddressFinal = "";
function PastasetVaribles() {
    localStorage.setItem("PastaCheese", "0");
    localStorage.setItem("PastaBasil", "0");
    localStorage.setItem("PastaMeatBalls", "0");
    localStorage.setItem("PastaAlfredoSause", "0");
    localStorage.setItem("PastaTomatoSause", "0");
    localStorage.setItem("PastaChefsSecret", "0");
    localStorage.setItem("Total", Total.toString());
}
function Cheese() {
    // let someValue = 6;
    Total = Total + 2;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("MeatBalls", "1");
    localStorage.setItem("Total", Total.toString());
}
function Basil() {
    // let someValue = 6;
    Total = Total + .5;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("Total", Total.toString());
} //for pasta 
function AlfredoSause() {
    // let someValue = 6;
    Total = Total + .5;
    document.getElementById("MoneyLeft1").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("ExtraCheese", "1");
    localStorage.setItem("Total", Total.toString());
} // for pizza
function TomatoSause() {
    // let someValue = 6;
    Total = Total + 1.00;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("Total", Total.toString());
}
function ChefsSecrect() {
    // let someValue = 6;
    Total = Total + 3.50;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("Total", Total.toString());
}
function Pastaaddressf(address) {
    alert("Thank you for ordering with us! Your pizza/pasta will be deliverd to you at: " + address + "  It should be there soon!  Please be ready to pay when it gets there. Thank you for doing buissness with Online Itailan Restrant.");
    AdddressFinal = address;
}
function Pastagetaddress() {
    var address = document.getElementById("namename")["value"];
    addressf(address);
}
var purchasedIngredient = true;
function createPasta() {
    var ingredient = '';
    for (var i = 0; i < pizzaIngredient.length; i++) {
        ingredient = pizzaIngredient[i];
        IngredientContoller(ingredient);
    }
    AddIngredients();
}
function PastaIngredientContoller(ingredient) {
    var image = document.getElementById(ingredient);
    image.style.display = (image.style.display == 'none') ? 'inline' : 'none';
}
var PastaCheese = localStorage.getItem("PastaCheese");
var PastaBasil = localStorage.getItem("PastaBasil");
var PastaMeatBalls = localStorage.getItem("PastaMeatBalls");
var PastaAlfredoSause = localStorage.getItem("PastaAlfredoSause");
var PastaTomatoSause = localStorage.getItem("PastaTomatoSause");
var PastaChefsSecret = localStorage.getItem("PastaChefsSecret");
var Pastavaribles = [PastaCheese, PastaBasil, PastaMeatBalls, PastaAlfredoSause, PastaTomatoSause, PastaChefsSecret];
var PastavaribleTexs = ["PastaCheese", "PastaBasil", "PastaMeatBalls", "PastaAlfredoSause", "PastaTomatoSause", "PastaChefsSecret"];
function PastaAddIngredients() {
    for (var i = 0; i < Pastavaribles.length; i++) {
        if (Pastavaribles[i] == "1") {
            PastaIngredientContoller(PastavaribleTexs[i]);
        }
    }
    function PastashowIngredient(Pastaingredient) {
        var image = document.getElementById(Pastaingredient);
        image.style.display = (image.style.display == 'none') ? 'inline' : 'none';
    }
}
//# sourceMappingURL=pasta.js.map