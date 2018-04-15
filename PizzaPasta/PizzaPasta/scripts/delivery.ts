window.onload = function start() {
    createPizza();
    TotalAmount();
};


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



let menuItems = [cheeseBread];
let toppings = [pepperoni, ExtraCheese, broccoli, mushroom];

function AddIngredients() {

    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i] == "1") {
            IngredientContoller(toppings[i]);
        }
    }

    function showIngredient(ingredient) {
        let image = document.getElementById(ingredient);
        image.style.display = (image.style.display == 'none') ? 'inline' : 'none'

    }
}
function TotalAmount() {
    document.getElementById("TotalDisplay").innerHTML = '$' + localStorage.getItem("Total")

}
