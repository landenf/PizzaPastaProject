var pastaIngredient = ['PastaCheese', 'PastaBasil', ' PastaMeatBalls', 'PastaAlfredoSauce', 'PastaTomatoSauce', 'PastaChefsSecret'];
var Total = 5.00; //Starts a 5 for the cost of pizza and pasta.
var AdddressFinal = "";
window.onload = function start() {
    setVariblesPasta();
};
function setVariblesPasta() {
    localStorage.setItem("PastaCheese", "0");
    localStorage.setItem("PastaBasil", "0");
    localStorage.setItem("PastaMeatBalls", "0");
    localStorage.setItem("PastaAlfredoSauce", "0");
    localStorage.setItem("PastaTomatoSauce", "0");
    localStorage.setItem("PastaChefsSecret", "0");
    localStorage.setItem("Total", Total.toString());
}
function Cheese() {
    // let someValue = 6;
    Total = Total + .5;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("PastaCheese", "1");
    localStorage.setItem("Total", Total.toString());
}
function MeatBalls() {
    Total = Total + 2;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("PastaMeatBalls", "1");
    localStorage.setItem("Total", Total.toString());
}
function Basil() {
    // let someValue = 6;
    Total = Total + 1;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("PastaBasil", "1");
    localStorage.setItem("Total", Total.toString());
} //for pasta 
function AlfredoSauce() {
    // let someValue = 6;
    Total = Total + 5;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("PastaAlfredoSauce", "1");
    localStorage.setItem("Total", Total.toString());
} // for pasta
function TomatoSauce() {
    // let someValue = 6;
    Total = Total + 3.5;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("PastaTomatoSauce", "1");
    localStorage.setItem("Total", Total.toString());
}
function ChefsSecret() {
    // let someValue = 6;
    Total = Total + 5;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("PastaChefsSecret", "1");
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
var PastaAlfredoSauce = localStorage.getItem("PastaAlfredoSauce");
var PastaTomatoSauce = localStorage.getItem("PastaTomatoSauce");
var PastaChefsSecret = localStorage.getItem("PastaChefsSecret");
var Pastavariables = [PastaCheese, PastaBasil, PastaMeatBalls, PastaAlfredoSauce, PastaTomatoSauce, PastaChefsSecret];
function PastaAddIngredients() {
    for (var i = 0; i < Pastavariables.length; i++) {
        if (Pastavariables[i] == "1") {
            PastaIngredientContoller(Pastavariables[i]);
        }
    }
    function PastashowIngredient(Pastaingredient) {
        var image = document.getElementById(Pastaingredient);
        image.style.display = (image.style.display == 'none') ? 'inline' : 'none';
    }
}
//# sourceMappingURL=pasta.js.map