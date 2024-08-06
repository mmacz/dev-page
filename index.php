<!DOCTYPE html>
<html>
<?php require_once("config.php"); ?>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>macznik.eu</title>
    <link rel="icon" href="app/static/images/favicon.ico" type="image/x-icon">
    <link href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="app/static/css/styles.css">
    <script type="text/javascript" src="app/js/datetime.js"></script>
    <script type="text/javascript" src="app/js/quotes.js"></script>
</head>
<body>
    <div class="container">
        <?php require_once(ROOT_PATH . "/app/includes/header.php"); ?>
        <main>
            <ul id="menuList">
                <li class="menuItem"><a href="#about"><i class="fas fa-house-user"></i> About me</a></li>
                <li class="menuItem"><a href="#contact"><i class="fas fa-envelope"></i> Contact</a></li>
                <li class="menuItem"><a href="#blog"><i class="fas fa-blog"></i> Blog</a></li>
            </ul>
            <div class="content">
                <section id="about">
                    <h2>About me</h2>
                    <p>This section is under development</p>
                </section>
                <section id="contact">
                    <h2>Contact</h2>
                    <ul id="menuList">
                        <li class="socialItem"><a href="mailto:marek@macznik.eu"><i class="fas fa-envelope"></i> marek@macznik.eu</a></li>
                        <li class="socialItem"><a href="https://github.com/mmacz"><i class="fab fa-github"></i> Github</a></li>
                        <li class="socialItem"><a href="https://bitbucket.org/m_macznik"><i class="fab fa-bitbucket"></i> Bitbucket</a></li>
                        <li class="socialItem"><a href="https://hub.docker.com/r/mmacz/images"><i class="fab fa-docker"></i> Dockerhub</a></li>
                    </ul>
                </section>
                <section id="blog">
                    <h2>Blog</h2>
                    <p>This section is under development</p>
                </section>
            </div>
            <script type="text/javascript" src="app/js/sections.js"></script>
        </main>
        <footer>
            <!-- Hosted on MIKR.US, zaloz konto z referall'a ;) -->
            Hosted on <a href="https://mikr.us/?r=fd28cce7">MIKR.US</a>
            <p id="datetime"></p>
        </footer>
    </div>
</body>
</html>

