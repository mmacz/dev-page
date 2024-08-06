<!DOCTYPE html>
<html>
<?php require_once("config.php"); ?>
<?php require_once(ROOT_PATH . "/app/includes/header.php"); ?>
<body>
    <div class="container">
        <header>
        <?php require_once(ROOT_PATH . "/app/includes/quotes.php"); ?>
        </header>
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
        <?php require_once(ROOT_PATH . "/app/includes/footer.php"); ?>
    </div>
</body>
</html>

