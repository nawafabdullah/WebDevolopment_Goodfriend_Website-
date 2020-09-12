var index = 0; 
var set_time = setInterval(auto_slide,1100);
var set_time2 = setInterval(auto_slide2,1200);
var set_time3 = setInterval(auto_slide3,1300);
var a = []; 
    function auto_slide() {
        var temp_image = document.getElementById('slideshow');
        var breakfast_images = ["images/Breakfast1.jpg", "images/Breakfast2.jpg", "images/Breakfast3.jpg"];
        temp_image.setAttribute("src", breakfast_images[index]);
        if (index < 2) {
            index ++;
	} else {index =0;} 		 
    }          

    function auto_slide2() {
        var temp_image2 = document.getElementById('slideshow2');
        var lunch_images = ["images/Lunch1.jpg", "images/Lunch2.JPG", "images/Lunch3.jpg"];
        temp_image2.setAttribute("src", lunch_images[index]);
        if (index < 2) {
            index ++;
	} else {index =0;} 		 
    }          

    function auto_slide3() {
        var temp_image3 = document.getElementById('slideshow3');
        var dinner_images = ["images/Dinner1.jpg", "images/Dinner2.jpg", "images/Dinner3.jpg"];
        temp_image3.setAttribute("src", dinner_images[index]);
        if (index < 2) {
            index ++;
	} else {index =0;} 		 
    }          

    function Main_Price (){
        var Check_Main = document.getElementsByClassName('check_main');
        var Check_Main = document.getElementsByClassName('check_main').id;
        var str = document.getElementsById('Pancakes_Main');
        var main_price;
        
        for (i=0; i<4; i++) {
            if (Check_Main[0].checked === false && Check_Main[1].checked === false && Check_Main[2].checked === false && Check_Main[3].checked === false )
            {
                alert ("please check at least one item from the 'Main Meals' menu. ");
                return faslse;
            } 
        }

        for (i=0; i<4; i++) {
            if (Check_Main[i].checked === true)
            {
                main_price= Check_Main[i].value;
            }   
        }      
        return (main_price);
    }

    function Side_Price (){
        var Check_Side = document.getElementsByClassName('check_side');
        var str = '';
        var main_price;

        for (i=0; i<4; i++) {
            if (Check_Side[0].checked === false && Check_Side[1].checked === false && Check_Side[2].checked === false && Check_Side[3].checked === false )
            {
                alert ("please check at least one item from the 'Side Dishes' menu, or select 'No Side'");
                return faslse;
            }             
        }
        
        for (i=0; i<4; i++) {
            if (Check_Side[i].checked === true)
            {
                main_price= Check_Side[i].value;
            } 
        }
        return (main_price);
    }
    
    function Drink_Price (){
        var drink_images = ["images/Drink1.jpg", "images/Drink2.jpg", "images/Drink3.jpg"];
        var Check_Drink = document.getElementsByClassName('check_drink');
        var str = '';
        var main_price;
        
        for (i=0; i<4; i++) {
            if (Check_Drink[0].checked === false && Check_Drink[1].checked === false && Check_Drink[2].checked === false && Check_Drink[3].checked === false )
            {
                alert ("please check at least one item from the 'Drinks' menu, or select 'No Side'");
                return faslse;
            } 
            
        }

        for (i=0; i<4; i++) {
            if (Check_Drink[i].checked === true)
            {
                main_price= Check_Drink[i].value;
            } 
            
        } 
        return (main_price);
    }

    function Custom_Order_alert (){
        var Customer_Custom_Order = custom_order.value;    
        alert (" Your Order of: " + Customer_Custom_Order + " have been added succeesfully. PLEASE CONTINUE TO CHECKOUT ");
        return Customer_Custom_Order;
        close();
       
    }
    
    function Review_Order () {
        
       
       a = [Main_Price()];
        
        
    }
    
    function Calculate (){     
    var main_course = Number (Main_Price());
    var side_course = Number (Side_Price());
    var drink_course = Number (Drink_Price());    
    var total = Number (main_course + side_course + drink_course);
    var tax = Number(total * 0.12);
    var delivery = Number(5);
    var Total = Number (total + tax + delivery);
    var Order_Num = Math.floor((Math.random()*1000) + 1);        
   
    document.write ("<h2><u> ORDER RECIPT </u></h2>");
 
    
    document.write ("Price for the Main Course: " + main_course.toFixed(2) +"$");
    document.write ("<br>");
    
    document.write ("Price for the Side Dish: " + side_course.toFixed(2) +"$");
    document.write ("<br>");
    
    document.write ("Price for the Drink: " + drink_course.toFixed(2) +"$");
    document.write ("<br>");
    
    document.write ("Tax: " + tax.toFixed(2) +"$");
    document.write ("<br>");
    
    document.write ("Dilevery Charges: " + delivery.toFixed(2) +"$");
    document.write ("<br>");
    
    document.write ("<b> Your Total: " + Total.toFixed(2) +"$ </b>");
    document.write ("<br>");
    
    document.write (" Your Order Number: " + Order_Num);
    document.write ("<br>");
    }