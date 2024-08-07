<?php
function getRandomQuote() {
    global $conn;
    $query = "SELECT * from blogapp.quotes ORDER BY RAND() LIMIT 1";
    $result = mysqli_query($conn, $query);
    $quote = mysqli_fetch_row($result);
    return $quote;
}
?>

