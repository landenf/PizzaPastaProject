window.onload = function start() {
    setVariblesPizza();
};
var pizzaIngredient = ['ExtraCheese', 'pepperoni', 'broccoli', 'mushroom', 'cheeseBread'];
var Total = 5.00; //Starts a 5 for the cost of pizza and pasta.
var AdddressFinal = "";
function setVariblesPizza() {
    localStorage.setItem("ExtraCheese", "0");
    localStorage.setItem("pepperoni", "0");
    localStorage.setItem("broccoli", "0");
    localStorage.setItem("mushroom", "0");
    localStorage.setItem("cheeseBread", "0");
    localStorage.setItem("Total", Total.toString());
}
function buyMeatBalls() {
    // let someValue = 6;
    Total = Total + 2;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("MeatBalls", "1");
    localStorage.setItem("Total", Total.toString());
}
function buyextracheese() {
    // let someValue = 6;
    Total = Total + .5;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("Total", Total.toString());
} //for pasta 
function buyextracheese1() {
    // let someValue = 6;
    Total = Total + .5;
    document.getElementById("MoneyLeft1").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("ExtraCheese", "1");
    localStorage.setItem("Total", Total.toString());
} // for pizza
function buyextraBasil() {
    // let someValue = 6;
    Total = Total + 1.00;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("Total", Total.toString());
}
function buyTomatoSauce() {
    // let someValue = 6;
    Total = Total + 3.50;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("Total", Total.toString());
}
function buyAlfredoSauce() {
    // let someValue = 6;
    Total = Total + 5;
    document.getElementById("MoneyLeft").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("Total", Total.toString());
}
function buyPepperoni() {
    // let someValue = 6;
    Total = Total + 2;
    document.getElementById("MoneyLeft1").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("pepperoni", "1");
    localStorage.setItem("Total", Total.toString());
}
function buyextraSaucePizza() {
    // let someValue = 6;
    Total = Total + 1.00;
    document.getElementById("MoneyLeft1").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("Total", Total.toString());
}
function buyMushrrom() {
    // let someValue = 6;
    Total = Total + 3.50;
    document.getElementById("MoneyLeft1").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("mushroom", "1");
    localStorage.setItem("Total", Total.toString());
}
function buyBroccoli() {
    // let someValue = 6;
    Total = Total + 5;
    document.getElementById("MoneyLeft1").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("broccoli", "1");
    localStorage.setItem("Total", Total.toString());
}
function buyCheeseBread() {
    // let someValue = 6;
    Total = Total + 5;
    document.getElementById("MoneyLeft1").innerHTML = "$" + Total.toString() + " Money Spent";
    localStorage.setItem("cheeseBread", "1");
    localStorage.setItem("Total", Total.toString());
}
//----------------------------------------------DeliverScripts----------------------------------------//
//function addressf(address) {
//    alert("Thank you for ordering with us! Your pizza/pasta will be deliverd to you at: " + address + "  It should be there soon!  Please be ready to pay when it gets there. Thank you for doing buissness with Online Itailan Restrant.");
//    AdddressFinal = address;
//}
//function getaddress() {
//    var address = document.getElementById("namename")["value"];
//    addressf(address);
//}
//function validateForm() {
//    var a = document.forms["Form1"]["name"].value;
//    var b = document.forms["Form1"]["number"].value;
//    var c = document.forms["Form1"]["address"].value;
//    if ((a === null || a === "") &&
//        (b === null || b === "") &&
//        (c === null || c === "")) {
//        alert("Please Fill All Required Field");
//        return false;
//    }
//    else {
//        getaddress();
//        window.location.href = "index.html";
//    }
//}
//var purchasedIngredient = true;
//function createPizza() {
//    let ingredient = '';
//    for (let i = 0; i < pizzaIngredient.length; i++) {
//        ingredient = pizzaIngredient[i];
//        IngredientContoller(ingredient);
//    }
//    AddIngredients();
//}
//function IngredientContoller(ingredient) {
//    let image = document.getElementById(ingredient);
//    image.style.display = (image.style.display == 'none') ? 'inline' : 'none'
//}
//let pepperoni = localStorage.getItem("pepperoni");
//let Meatballs = localStorage.getItem("Meatballs");
//let ExtraCheese = localStorage.getItem("ExtraCheese");
//let broccoli = localStorage.getItem("broccoli");
//let mushroom = localStorage.getItem("mushroom");
//let cheeseBread = localStorage.getItem("cheeseBread");
//let menuItems = [cheeseBread];
//let toppings = [pepperoni, ExtraCheese, broccoli, mushroom];
//function AddIngredients() {
//    for (let i = 0; i < toppings.length; i++) {
//        if (toppings[i] == "1") {
//            IngredientContoller(toppings[i]);
//        }
//    }
//    function showIngredient(ingredient) {
//        let image = document.getElementById(ingredient);
//        image.style.display = (image.style.display == 'none') ? 'inline' : 'none'
//    }
//}
//function TotalAmount() {
//    document.getElementById("TotalDisplay").innerHTML = '$' + localStorage.getItem("Total")
//}
//# sourceMappingURL=pizza.js.map