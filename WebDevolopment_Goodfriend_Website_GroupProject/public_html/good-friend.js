// Code written By Nawaf Alharbi

var Check_Main = document.getElementsByClassName('check_main');
var Check_Side = document.getElementsByClassName('check_side');
var Check_Drink = document.getElementsByClassName('check_drink');
var Add_To_Main = [];
var Add_To_Side = [];
var Add_To_Drink = [];
var i = 0;


//checks if a checkbox was chosen + gets info for selected item 
function Main_Price() {
    var Quantity_Main0 = document.getElementById('quantity_main0').value;
    var Quantity_Main1 = document.getElementById('quantity_main1').value;
    var Quantity_Main2 = document.getElementById('quantity_main2').value;
    var order_details = [];

    for (i = 0; i < 4; i++) {
        if (Check_Main[0].checked === false && Check_Main[1].checked === false && Check_Main[2].checked === false && Check_Main[3].checked === false)
        {
            alert("please check the checkbox of the order you want to add to your cart");
            return;
        }
    }

    for (i = 0; i < 4; i++) {
        if (Check_Main[i].checked === true)
        {
            order_details [0] = Check_Main[i].id;
            if (i === 0) {
                order_details[1] = Check_Main[i].value * Quantity_Main0;
            } else if (i === 1) {
                order_details[1] = Check_Main[i].value * Quantity_Main1;
            } else if (i === 2) {
                order_details[1] = Check_Main[i].value * Quantity_Main2;
            } else {
                order_details[1] = Check_Main[i].value;
            }
        }
    }
    return order_details;
}

//checks if a checkbox was chosen + gets info for selected item
function Side_Price() {
    var Quantity_Side0 = document.getElementById('quantity_side0').value;
    var Quantity_Side1 = document.getElementById('quantity_side1').value;
    var Quantity_Side2 = document.getElementById('quantity_side2').value;
    var order_details = [];
    for (i = 0; i < 4; i++) {
        if (Check_Side[0].checked === false && Check_Side[1].checked === false && Check_Side[2].checked === false && Check_Side[3].checked === false)
        {
            alert("please check the checkbox of the order you want to add to your cart");
            return;
        }
    }

    for (i = 0; i < 4; i++) {
        if (Check_Side[i].checked === true)
        {
            order_details [0] = Check_Side[i].id;
            if (i === 0) {
                order_details[1] = Check_Side[i].value * Quantity_Side0;
            } else if (i === 1) {
                order_details[1] = Check_Side[i].value * Quantity_Side1;
            } else if (i === 2) {
                order_details[1] = Check_Side[i].value * Quantity_Side2;
            } else {
                order_details[1] = Check_Side[i].value;
            }
        }
    }
    return order_details;
}

//checks if a checkbox was chosen + gets info for selected item
function Drink_Price() {
    var drink_images = ["images/Drink1.jpg", "images/Drink2.jpg", "images/Drink3.jpg"];
    var Quantity_Drink0 = document.getElementById('quantity_drink0').value;
    var Quantity_Drink1 = document.getElementById('quantity_drink1').value;
    var Quantity_Drink2 = document.getElementById('quantity_drink2').value;
    var order_details = [];

    for (i = 0; i < 4; i++) {
        if (Check_Drink[0].checked === false && Check_Drink[1].checked === false && Check_Drink[2].checked === false && Check_Drink[3].checked === false)
        {
            alert("please check the checkbox of the order you want to add to your cart");
            return;
        }
    }

    for (i = 0; i < 4; i++) {
        if (Check_Drink[i].checked === true)
        {
            order_details [0] = Check_Drink[i].id;
            if (i === 0) {
                order_details[1] = Check_Drink[i].value * Quantity_Drink0;
            } else if (i === 1) {
                order_details[1] = Check_Drink[i].value * Quantity_Drink1;
            } else if (i === 2) {
                order_details[1] = Check_Drink[i].value * Quantity_Drink2;
            } else {
                order_details[1] = Check_Drink[i].value;
            }
        }

    }
    return order_details;
}

//take the custom 
function Custom_Order_alert() {

    var Customer_Custom_Order = custom_order.value;
    alert(" Your Order of: " + Customer_Custom_Order + " have been added succeesfully. PLEASE CONTINUE CHECKOUT PROCESS ");
     
        if (Check_Main[0].checked === false && Check_Main[1].checked === false && Check_Main[2].checked === false && Check_Main[3].checked === false)
        
    {
        Check_Main[3] = true;
    }      
        
    
     close();
     }


//adds main menu item and expand the array 
function Add_To_Main_Cart() {
    Add_To_Main.push(Main_Price());
    return Add_To_Main;
}

//adds side menu item and expand the array 
function Add_To_Side_Cart() {
    Add_To_Side.push(Side_Price());
    return (Add_To_Side);
}

//adds drinks menu item and expand the array 
function Add_To_Drink_Cart() {
    Add_To_Drink.push(Drink_Price());
    return (Add_To_Drink);
}

function Confirm() {

    for (i = 0; i < 4; i++) {
        if (Check_Main[0].checked === false && Check_Main[1].checked === false && Check_Main[2].checked === false && Check_Main[3].checked === false)
        {
            alert("please check at least one item from the 'Main Meals' menu and ADD IT TO YOUR CART");
            return;
        }
    }

    for (i = 0; i < 4; i++) {
        if (Check_Side[0].checked === false && Check_Side[1].checked === false && Check_Side[2].checked === false && Check_Side[3].checked === false)
        {
            alert("please check at least one item from the 'Side Dishes' menu and ADD IT TO YOUR CART, or select 'No Side' from the bottom of the column");
            return;
        }
    }

    for (i = 0; i < 4; i++) {
        if (Check_Drink[0].checked === false && Check_Drink[1].checked === false && Check_Drink[2].checked === false && Check_Drink[3].checked === false)
        {
            alert("please check at least one item from the 'Drinks' menu and ADD IT TO YOUR CART, or select 'No Drink' from the bottom of the column");
            return;
        }
    }

    var confirm_ = confirm("By clicking yes I confirm my order, please print my recipt");
    if (confirm_ === true) {
        Calculate();
    } else {
        alert("You have canceled, please add what you like");
        return;
    }
}

//gets all info from previous functions, pulls out the price of the meals and does calculations  
function Calculate() {
    var total_main_price = 0;
    var total_side_price = 0;
    var total_drink_price = 0;

    for (i = 0; i < Add_To_Main.length; i++) {
        total_main_price += Number(Add_To_Main[i][1]);
    }

    for (i = 0; i < Add_To_Side.length; i++) {
        total_side_price += Number(Add_To_Side[i][1]);
    }

    for (i = 0; i < Add_To_Drink.length; i++) {
        total_drink_price += Number(Add_To_Drink[i][1]);
    }

    var TOTAL = Number(total_main_price + total_side_price + total_drink_price);
    var TAX = Number(TOTAL * 0.12);
    var DELIVERY = Number(5);
    var Total = Number(TOTAL + TAX + DELIVERY);
    var Order_Num = Math.floor((Math.random() * 100) + 1);

    document.write("<h2><u> ORDER RECIPT </u></h2>");
    document.write("Price for the Main Course(s): " + total_main_price.toFixed(2) + "$");
    document.write("<br>");
    document.write("Price for the Side Dish(s): " + total_side_price.toFixed(2) + "$");
    document.write("<br>");
    document.write("Price for the Drink(s): " + total_drink_price.toFixed(2) + "$");
    document.write("<br>");
    document.write("Tax: " + TAX.toFixed(2) + "$");
    document.write("<br>");
    document.write("Dilevery Charges: " + DELIVERY + "$");
    document.write("<br>");
    document.write("<b> Your Total: " + Total.toFixed(2) + "$ </b>");
    document.write("<br>");
    document.write(" Your Order Number: " + Order_Num);
    document.write("<br>");
}
