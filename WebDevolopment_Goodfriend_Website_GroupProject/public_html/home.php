<?php session_start();

?>

<!DOCTYPE HTML>
<html lang="en">
	<head>
		<link rel="stylesheet" type="text/css" href="default.css">
		<title>Good Friend</title>
	</head>
	<body>
	<!-- Header stores background img -->
		<header>
			<!-- Navigation Bar -->
			<!-- Nav tag navigation links. For screen readers, etc. -->
			<nav>
				<div class="row">
					<ul class="navbar">
						<li><a href="#">Home</a></li>
						<li><a href="#">Make an Order</a></li>
                        <!-- If user is logged in we display a log out button -->
                        <?php 
                            if(!isset($_SESSION['UserData']['Username']))
                            {
                        ?>
						<li><a href="login.php">Login</a></li>
                        <?php
                            } else {
                        ?>
                        <li><a href="logout.php">Logout</a></li>
                        <?php
                            }
                        ?>
					</ul>
				</div>
			</nav>
			<!-- Main title and button -->
			<div class="title-page-text">
					<h1>Good Friend<br>
					Great taste, friendly prices<br></h1>
					<a class="btn" href="#features">Explore</a>
			</div>
		</header>
		<!-- Restaurant Features -->
		<section id="features" class="restaurant-features">
			<!-- Welcome Message -->
			<div class="row">
				<h2>Welcome to Good friend</h2>
					<p>
					We are Good Friend, your new premium restuarant reservation service. We understand how busy your life can be, why not let us handle the cooking?
					</p>
			</div>
			<!-- Four main features -->
			<div class="row">
                <div class="col oneoffour box">
                    <img src="img/infinitelogo.png"/>
                    <h3>Up to 365 days/year</h3>
                    <p>
                    Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                    </p>
                </div>
                <div class="col oneoffour box">
                    <img src="img/stopwatch.png"/>
                    <h3>Ready in 20 minutes</h3>
                    <p>
                    You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each restaurant to ensure that you're 100% happy.
                    </p>
                </div>
                <div class="col oneoffour box">
                    <img src="img/carrot.png"/>
                    <h3>100% organic</h3>
                    <p>
                    All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
                    </p>
                </div>
                <div class="col oneoffour box">
                    <img src="img/shopping-cart.png"/>
                    <h3>Order anything</h3>
                    <p>
                    We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
                    </p>
                </div>
            </div>    
		</section>

		<section class="meal-section">
            <ul class="meals-list clearfix">
            <li>
                <figure class="meal-photo">
                    <img src="img/1.jpg" alt="Korean bibimbap with egg and vegetables">
                </figure>
            </li>
                <li>
                <figure class="meal-photo">
                    <img src="img/2.jpg" alt="Simple italian pizza with cherry tomatoes">
                </figure>
            </li>
                <li>
                <figure class="meal-photo">
                    <img src="img/3.jpg" alt="Chicken breast steak with vegetables">
                </figure>
            </li>
                <li>
                <figure class="meal-photo">
                    <img src="img/4.jpg" alt="Autumn pumpkin soup">
                </figure>
            </li>
            </ul>
            <ul class="meals-list clearfix">
            <li>
                <figure class="meal-photo">
                    <img src="img/5.jpg" alt="Paleo beef steak with vegetables">
                </figure>
            </li>
                <li>
                <figure class="meal-photo">
                    <img src="img/6.jpg" alt="Healthy baguette with egg and vegetables">
                </figure>
            </li>
                <li>
                <figure class="meal-photo">
                    <img src="img/7.jpg" alt="Burger with cheddar and bacon">
                </figure>
            </li>
                <li>
                <figure class="meal-photo">
                    <img src="img/8.jpg" alt="Granola with cherries and strawberries">
                </figure>
            </li>
            </ul>
        </section>



        <section class="restaurants">
            <div class="row">
                <h2>Your choice of restaurants</h2>
            </div>
            <div class="row">
                <div class="col oneoffour box">
                    <img src="img/n1.jpg" alt="Lisbon">
                    <h3>Greek Athena</h3>
                    <div class="restaurant-message">
                        1600+ happy eaters
                    </div>
                    <div class="restaurant-message">
                        3 top chefs
                    </div>
                    <div class="restaurant-message">
                        <a href="#">@goodfriend_ga</a>
                    </div>
                </div>
                <div class="col oneoffour box">
                    <img src="img/n2.jpg" alt="San Francisco">
                    <h3>Steak House</h3>
                    <div class="restaurant-message">
                        3700+ happy eaters
                    </div>
                    <div class="restaurant-message">
                        4 top chefs
                    </div>
                    <div class="restaurant-message">
                        <a href="#">@goodfriend_sh</a>
                    </div>
                </div>
                <div class="col oneoffour box">
                    <img src="img/n.jpg" alt="Berlin">
                    <h3>Harbour Japanese Restaurant</h3>
                    <div class="restaurant-message">
                        2300+ happy eaters
                    </div>
                    <div class="restaurant-message">
                        5 top chefs
                    </div>
                    <div class="restaurant-message">
                        <a href="#">@goodfriend_jr</a>
                    </div>
                </div>
                <div class="col oneoffour box">
                    <img src="img/n4.jpg" alt="London">
                    <h3>Efes Restaurant Nanaimo</h3>
                    <div class="restaurant-message">
                        3200+ happy eaters
                    </div>
                    <div class="restaurant-message">
                        3 top chefs
                    </div>
                    <div class="restaurant-message">
                        <a href="#">@goodfriend_efes</a>
                    </div>
                </div>
            
            </div>
        </section>
        
        <section class="customer-reviews">
            <div class="row">
                <h2>Our customers can't live without us</h2>
            </div>
            <div class="row">
                <div class="col oneofthree">
                    <blockquote>
                        Good Friend is just awesome! I just launched a startup which leaves me with no time for cooking, so Good Friend is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                        <cite><img src="img/customer-1.jpg">Alberto Duncan</cite>
                    </blockquote>
                </div>
                 <div class="col oneofthree">
                    <blockquote>
                        Inexpensive, healthy and great-tasting meals. We have lots of food delivery here in Nanaimo, but no one comes even close to Good Friend. Me and my family are so in love!
                        <cite><img src="img/customer-2.jpg">Joana Silva</cite>
                    </blockquote>
                </div>
                 <div class="col oneofthree">
                    <blockquote>
                        I was looking for a quick and easy food delivery service in Nanaimo. I tried a lot of them and ended up with Goodfriend. Best restaurant reservation and order meal service in the Bay Area. Keep up the great work!
                        <cite><img src="img/customer-3.jpg">Milton Chapman</cite>
                    </blockquote>
                </div>
            </div> 
        </section>
	</body>
</html>