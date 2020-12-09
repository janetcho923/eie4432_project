<HTML>
<head>
        <title>Registration finished</title>
    </head>
<body>
    <h1>Registration is finished.</h1>
<?php
$loginID = $_POST["id"];
$role = $_POST["role"];
$password = $_POST["pw"];
$nickname = $_POST["name"];
$email = $_POST["email"];
$proPic = $_POST["proPic"];
$gender = $_POST["gender"];
//$image = $_FILES['img']['tmp_name'];
//$img = file_get_contents($image);

//$course = $_POST["course_number"];

//fetch the profile picture
 include "mysql-connect.php";
 $connect = mysqli_connect($server, $user, $pw, $db);
//check whether teacher or student
//insert into database

if ($role == "teacher"){
   // echo "teacher";
    $course = $_POST["course"];

    // $sql = "INSERT INTO personnel (empID,firstName,lastName,jobTitle,hourlyWage) VALUES ('$empID', '$firstName', '$lastName', '$jobTitle', '$hourlyWage')";

    $sql = "INSERT INTO teacher (loginID, Userpassword, NickName, Email,  Course, Role_of_user) VALUES ('$loginID','$password','$nickname','$email','$course','$role')";

    mysqli_query($connect,$sql);

   if ($connect->query($sql) === TRUE){
         {
            echo "New record created successfully";
          } 
        }
    else
    {
     echo "Error: " . $sql . "<br>" . $connect->error;
   }  
          
}
else if ($role == "student"){
    echo "student";
    $birthday = $_POST["birthday"];
    $sql = "INSERT INTO students (loginID, Userpassword, NickName, Email, Gender, Birthday, Role_user) VALUES ('$loginID','$password','$nickname','$email','$gender','$birthday','$role')";
    mysqli_query($connect,$sql);
    if ($connect->query($sql) === TRUE){
        {
           echo "New record created successfully";
         } 
       }
   else
   {
    echo "Error: " . $sql . "<br>" . $connect->error;
  }  
}



?>
</body>
</HTML>