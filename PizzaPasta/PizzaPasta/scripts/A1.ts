﻿

let pizzaIngredient = ['ExtraCheese', 'pepperoni', 'broccoli', 'mushroom', 'cheeseBread'];
var Total = 0.00;
var AdddressFinal = "";
function setVaribles() {
    localStorage.setItem("ExtraCheese", "0");
    localStorage.setItem("pepperoni", "0");
    localStorage.setItem("broccoli", "0");
    localStorage.setItem("mushroom", "0");
    localStorage.setItem("cheeseBread","0");

}

function buyMeatBalls() {
    // let someValue = 6;
        Total = Total + 2;
        document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
        localStorage.setItem("MeatBalls", "1");

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
    localStorage.setItem("ExtraCheese", "1");

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
        localStorage.setItem("pepperoni", "1");

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
        localStorage.setItem("mushroom", "1");
}
function buyAlfredoSauce1() {
    // let someValue = 6;
        Total = Total + 5;
        document.getElementById("MoneyLeft1").innerHTML = "$" + Total.toString() + " Money Spent";
        localStorage.setItem("broccoli","1");

}
function buyCheeseBread() {
    // let someValue = 6;
    Total = Total + 5;
    document.getElementById("MoneyLeft1").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("cheeseBread", "1");

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
    if ((a === null || a === "") &&
        (b === null || b === "") &&
        (c === null || c === "")) {
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
    let ingredient = '';

    for (let i = 0; i < pizzaIngredient.length; i++) {
        ingredient = pizzaIngredient[i];
        IngredientContoller(ingredient);
    }
    AddIngredients();
}

function IngredientContoller(ingredient) {
    let image = document.getElementById(ingredient);
    image.style.display = (image.style.display == 'none') ? 'inline' : 'none'
}


let pepperoni = localStorage.getItem("pepperoni");
let Meatballs = localStorage.getItem("Meatballs");
let ExtraCheese = localStorage.getItem("ExtraCheese");
let broccoli = localStorage.getItem("broccoli");
let mushroom = localStorage.getItem("mushroom");
let cheeseBread = localStorage.getItem("cheeseBread");




let varibles = [pepperoni, ExtraCheese, broccoli, mushroom, cheeseBread];
let varibleTexs = ["pepperoni", "ExtraCheese", "broccoli", "mushroom","cheeseBread"];



function AddIngredients() {

    for (let i = 0; i < varibles.length; i++) {
        if (varibles[i] == "1") {
            IngredientContoller(varibleTexs[i]);
        }
    }

    function showIngredient(ingredient) {
        let image = document.getElementById(ingredient);
        image.style.display = (image.style.display == 'none') ? 'inline' : 'none'

    }
}