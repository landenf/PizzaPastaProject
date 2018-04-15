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
    var ingredient = '';
    for (var i = 0; i < pizzaIngredient.length; i++) {
        ingredient = pizzaIngredient[i];
        IngredientContoller(ingredient);
    }
    AddIngredients();
}
function IngredientContoller(ingredient) {
    var image = document.getElementById(ingredient);
    image.style.display = (image.style.display == 'none') ? 'inline' : 'none';
}
var pepperoni = localStorage.getItem("pepperoni");
var Meatballs = localStorage.getItem("Meatballs");
var ExtraCheese = localStorage.getItem("ExtraCheese");
var broccoli = localStorage.getItem("broccoli");
var mushroom = localStorage.getItem("mushroom");
var cheeseBread = localStorage.getItem("cheeseBread");
var menuItems = [cheeseBread];
var toppings = [pepperoni, ExtraCheese, broccoli, mushroom];
function AddIngredients() {
    for (var i = 0; i < toppings.length; i++) {
        if (toppings[i] == "1") {
            IngredientContoller(toppings[i]);
        }
    }
    function showIngredient(ingredient) {
        var image = document.getElementById(ingredient);
        image.style.display = (image.style.display == 'none') ? 'inline' : 'none';
    }
}
function TotalAmount() {
    document.getElementById("TotalDisplay").innerHTML = '$' + localStorage.getItem("Total");
}
//# sourceMappingURL=delivery.js.map