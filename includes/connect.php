<?php
$host = "localhost";
$user = "root";
$password = "root";
$db = "db_bubblestats";

$conn = mysqli_connect($host, $user, $password, $db);

if(!conn){
    echo "something broke... connection isn't working";
    exit;
}

//echo "connected!";

//go and get all data from the database
//$myQuery = "SELECT * FROM mainmodel";
//$result = mysqli_query($conn, $myQuery);
//$rows = array();

//fill the array with the result set and send it to the browser
//while($row = mysqli_fetch_assoc($result)) {
 //   $rows[] = $row;
//}

//get one item from the database
if (isset($_GET["percent"])) {
    $car = $_GET["percent"];

    $myQuery = "SELECT * FROM tbl_stats WHERE percent='$car'";

    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    //fill the array with the result set and send it to the browser
    while($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
    }
}

echo json_encode($rows);
?>