var index = 0;

var Add_To_Main = [];
var Add_To_Side = [];
var Add_To_Drink = [];
var set_time = setInterval(auto_slide, 1100);
var set_time2 = setInterval(auto_slide2, 1200);
var set_time3 = setInterval(auto_slide3, 1300);

function auto_slide() {
    var temp_image = document.getElementById('slideshow');
    var breakfast_images = ["images/Breakfast1.jpg", "images/Breakfast2.jpg", "images/Breakfast3.jpg"];
    temp_image.setAttribute("src", breakfast_images[index]);
    if (index < 2) {
        index++;
    } else {
        index = 0;
    }
}

function auto_slide2() {
    var temp_image2 = document.getElementById('slideshow2');
    var lunch_images = ["images/Lunch1.jpg", "images/Lunch2.JPG", "images/Lunch3.jpg"];
    temp_image2.setAttribute("src", lunch_images[index]);
    if (index < 2) {
        index++;
    } else {
        index = 0;
    }
}

function auto_slide3() {
    var temp_image3 = document.getElementById('slideshow3');
    var dinner_images = ["images/Dinner1.jpg", "images/Dinner2.jpg", "images/Dinner3.jpg"];
    temp_image3.setAttribute("src", dinner_images[index]);
    if (index < 2) {
        index++;
    } else {
        index = 0;
    }
}

function Main_Price() {
    var Check_Main = document.getElementsByClassName('check_main');
    var Quantity_Main0 = document.getElementById('quantity_main0').value;
    var Quantity_Main1 = document.getElementById('quantity_main1').value;
    var Quantity_Main2 = document.getElementById('quantity_main2').value;

    var order_details = [];


    for (i = 0; i < 4; i++) {
        if (Check_Main[0].checked === false && Check_Main[1].checked === false && Check_Main[2].checked === false && Check_Main[3].checked === false)
        {
            alert("please check at least one item from the 'Main Meals' menu. ");
            return nope;
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
    //Review_Order(main_price);

    return order_details;
}

function Side_Price() {
    var Check_Side = document.getElementsByClassName('check_side');
    var Quantity_Side0 = document.getElementById('quantity_side0').value;
    var Quantity_Side1 = document.getElementById('quantity_side1').value;
    var Quantity_Side2 = document.getElementById('quantity_side2').value;
    var str = '';
    var side_price;
    var order_details = [];
    for (i = 0; i < 4; i++) {
        if (Check_Side[0].checked === false && Check_Side[1].checked === false && Check_Side[2].checked === false && Check_Side[3].checked === false)
        {
            alert("please check at least one item from the 'Side Dishes' menu, or select 'No Side' from the bottom of the column");
            return nope;
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

function Drink_Price() {
    var drink_images = ["images/Drink1.jpg", "images/Drink2.jpg", "images/Drink3.jpg"];
    var Check_Drink = document.getElementsByClassName('check_drink');
    var Quantity_Drink0 = document.getElementById('quantity_drink0').value;
    var Quantity_Drink1 = document.getElementById('quantity_drink1').value;
    var Quantity_Drink2 = document.getElementById('quantity_drink2').value;
    var str = '';
    var drink_price;
    var order_details = [];

    for (i = 0; i < 4; i++) {
        if (Check_Drink[0].checked === false && Check_Drink[1].checked === false && Check_Drink[2].checked === false && Check_Drink[3].checked === false)
        {
            alert("please check at least one item from the 'Drinks' menu, or select 'No Drink' from the bottom of the column");
            return nope;
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
function Direct_User() {

    window.location.href = "newhtml.html";
}


function Custom_Order_alert() {
    var Customer_Custom_Order = custom_order.value;
    alert(" Your Order of: " + Customer_Custom_Order + " have been added succeesfully. PLEASE CONTINUE CHECKOUT PROCESS ");
//    return Customer_Custom_Order;
    close();
}

function Review_Order() {

    var main_order_n = Main_Price()[0];
    if (main_order_n === 'none') {
        main_order_n = Custom_Order_alert();
    }
    var side_order_n = Side_Price()[0];
    var drink_order_n = Drink_Price()[0];


    alert("hiiii");

    document.getElementById("replace_me").innerHTML = ("<h2><u> ORDER CONFIRMATION </u></h2>")
            + ("<br>")
            + ("Ordered Main Course is: ") + main_order_n
            + ("<br>")
            + ("Ordered Side Dish: ") + side_order_n
            + ("<br>")
            + ("Ordered Drink: ") + drink_order_n;





}

function Add_To_Main_Cart() {
    Add_To_Main.push(Main_Price());
    alert(Add_To_Main);
    //alert (Add_To_Main.length);
    alert(Add_To_Main[0][1]);
    // alert (Add_To_Main[1][0])
    return Add_To_Main;
}
function Add_To_Side_Cart() {
    Add_To_Side.push(Side_Price());
    alert(Add_To_Side);
    return (Add_To_Side);
}
function Add_To_Drink_Cart() {
    Add_To_Drink.push(Drink_Price());
    alert(Add_To_Drink);
    return (Add_To_Drink);
}



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
