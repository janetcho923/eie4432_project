<?php
        include "mysql-connect.php";
        $connect = mysqli_connect($server, $user, $pw, $db);
        
        $userQuery = "SELECT empID FROM personnel";
        $result = mysqli_query($connect, $userQuery);
        while ( $row = mysqli_fetch_assoc($result) ){
            print ("<option>". $row['empID'] ."</option>" );
           }
        ?>