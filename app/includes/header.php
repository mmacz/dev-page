<header>
<h1>Welcome to my homepage</h1><br>
<?php require_once(ROOT_PATH . "/app/includes/quote.php"); ?>
<?php $quote = getRandomQuote(); ?> 
<p id="quote"><?php echo $quote[1]; ?></p>
<p id="author"><?php echo "~" . $quote[2]; ?></p>
</header>

