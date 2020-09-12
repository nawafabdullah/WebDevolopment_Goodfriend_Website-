<?php session_start();
require 'dbinfo.inc';
$msg;
$err = false;
if (isset($_POST['Submit']))
{
    $email;
    $pass1;
    $pass2;
    $fname;
    $lname;
    if (isset($_POST['email']))
    {
        //it is most essential to validate the email, password and names are not as important.
        //  User can pick any sort of name or pass
        $email = $_POST['email'];
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL))
        {
            $err = true;
        }
        if ($email === "")
        {
            $err = true;
        }
    } else {
        $err = true;
    }

    if (isset($_POST['password1']))
    {
        $pass1 = $_POST['password1'];
        if ($pass1 === "")
        {
            $err = true;
        }
    } else {
        $err = true;
    }

    if (isset($_POST['password2']))
    {
        $pass2 = $_POST['password2'];
        if ($pass2 === "")
        {
            $err = true;
        }
    } else {
        $err = true;
    }

    if (isset($_POST['firstname']))
    {
        $fname = $_POST['firstname'];
        if ($fname === "")
        {
            $err = true;
        }
    } else {
        $err = true;
    }

    if (isset($_POST['lastname']))
    {
        $lname = $_POST['lastname'];
        if ($lname === "")
        {
            $err = true;
        }
    } else {
        $err = true;
    }

    if ($err)
    {
        $msg = "One or more fields incorrectly filled";
    } else {
        if ($pass1 !== $pass2)
        {
            $msg = "Passwords do not match";
        } else {
            try {
                $dbh = new PDO("mysql:host=$host;dbname=$user", $user, $password);
                $stmt = $dbh->prepare("SELECT * FROM Users WHERE Users.email = :email");
                $stmt->bindParam(':email', $email);
                $stmt->execute();
                $resultset = $stmt->fetchAll();
                if ($resultset['email'] == $email)
                {
                    $msg = "Unable to register with this email";
                } else {
                    $stmt = $dbh->prepare("INSERT INTO Users (email, password, fname, lname) VALUES (:email, :password, :fname, :lname)");
                    $stmt->bindParam(':email', $email);
                    $stmt->bindParam(':password', $pass1);
                    $stmt->bindParam(':fname', $fname);
                    $stmt->bindParam(':lname', $lname);
                    if ($stmt->execute() == 1)
                    {
                        $_SESSION['UserData']['Username'] = $email;
                        header("location:home.php");
                        exit;
                    } else {
                        $msg = "Error: Something went wrong";
                    }
                }
                $dbh = null;
            } catch (PDOException $e)
            {
                print "Error!" . $e->getMessage() . "<br />";
            }
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Animated login form</title>
    <link rel="stylesheet" href="default.css">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    
    <style>
        /* NOTE: The styles were added inline because Prefixfree needs access to your styles and they must be inlined if they are on local disk! */
        body {
            font-family: "Open Sans", sans-serif;
            height: 100vh;
            background: url("img/hero.jpg") 50% fixed;
            background-size: cover;
        }

        * {
            box-sizing: border-box;
        }

        .wrapper {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            min-height: 100%;
            padding: 0px;
	    margin: 0px;
            background: rgba(4, 40, 68, 0.85);
        }

        .login {
            border-radius: 2px 2px 5px 5px;
            padding: 10px 20px 20px 20px;
            width: 90%;
            height: 55%;
            max-width: 320px;
            background: #ffffff;
            position: center;
            padding-bottom: 0px;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
        }

            .login.loading button {
                max-height: 100%;
                padding-top: 50px;
            }

                .login.loading button .spinner {
                    opacity: 1;
                    top: 40%;
                }

            .login.ok button {
                background-color: #8bc34a;
            }

                .login.ok button .spinner {
                    border-radius: 0;
                    border-top-color: transparent;
                    border-right-color: transparent;
                    height: 20px;
                    animation: none;
                    transform: rotateZ(-45deg);
                }

            .login input {
                display: block;
                padding: 15px 10px;
                margin-bottom: 10px;
                width: 100%;
                border: 1px solid #ddd;
                transition: border-width 0.2s ease;
                border-radius: 2px;
                color: #ccc;
            }

                .login input + i.fa {
                    color: #fff;
                    font-size: 1em;
                    position: absolute;
                    margin-top: -47px;
                    opacity: 0;
                    left: 0;
                    transition: all 0.1s ease-in;
                }

                .login input:focus {
                    outline: none;
                    color: #444;
                    border-color: #2196F3;
                    border-left-width: 35px;
                }

                    .login input:focus + i.fa {
                        opacity: 1;
                        left: 30px;
                        transition: all 0.25s ease-out;
                    }

            .login a {
                font-size: 0.8em;
                color: #2196F3;
                text-decoration: none;
            }

            .login .title {
                color: #444;
                font-size: 1.2em;
                font-weight: bold;
                margin: 10px 0 30px 0;
                border-bottom: 1px solid #eee;
                padding-bottom: 20px;
            }

            .login button {
                width: 100%;
                height: 100%;
                padding: 10px 10px;
                background: #2196F3;
                color: #fff;
                display: block;
                border: none;
                margin-top: 20px;
                position: absolute;
                left: 0;
                bottom: 0;
                max-height: 60px;
                border: 0px solid rgba(0, 0, 0, 0.1);
                border-radius: 0 0 2px 2px;
                transform: rotateZ(0deg);
                transition: all 0.1s ease-out;
                border-bottom-width: 7px;
            }

                .login button .spinner {
                    display: block;
                    width: 40px;
                    height: 20px;
                    position: absolute;
                    border: 4px solid #ffffff;
                    border-top-color: rgba(255, 255, 255, 0.3);
                    border-radius: 100%;
                    left: 50%;
                    top: 0;
                    opacity: 0;
                    margin-left: -20px;
                    margin-top: -20px;
                    animation: spinner 0.6s infinite linear;
                    transition: top 0.3s 0.3s ease, opacity 0.3s 0.3s ease, border-radius 0.3s ease;
                    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
                }

            .login:not(.loading) button:hover {
                box-shadow: 0px 1px 3px #2196F3;
            }

            .login:not(.loading) button:focus {
                border-bottom-width: 4px;
            }
    </style>

</head>
<body>
    <div class="wrapper">
        <form class="login" method="post" action="signup.php" id="signupform">
            <p class="title">Sign up</p>
            <input type="text" placeholder="E-mail" name="email" autofocus />
            <i class="fa fa-user"></i>
            <input type="password" placeholder="Password" name="password1" />
            <i class="fa fa-key"></i>
            <input type="password" placeholder="Re-enter password" name="password2" />
            <i class="fa fa-key"></i>
            <input type="text" placeholder="First Name" name="firstname"/>
            <i class="fa fa-user"></i>
            <input type="text" placeholder="Last Name" name="lastname" />
            <i class="fa fa-user"></i>
	        <button type="submit" form="signupform" name="Submit">
                <i class="spinner"></i>
                <span class="state">Submit</span>
            </button>
            <?php 
            if(isset($msg)){
                echo $msg;
            } 
            ?>
             
        </form>
        
    </div>
    <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    <script src="js/index.js"></script>


</body>
</html>
