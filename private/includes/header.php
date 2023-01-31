<header id="header">
    <div class="fixed-title">
        <a class="hamburger" aria-label="Menu Button" href="#menu">
            <img src="/images/icons/bars.svg" alt="Menu Icon">
        </a>
        <img class="mini-logo" src="/images/company/vinyl-imagination-logo.svg" alt="Vinyl Imagination Logo">
        <div class="menu-bar">
            <a href="index.php">Home</a>|<a href="#menu">Menu</a>|<a href="contact.php">Contact</a>|<a href="about.php">About</a>

        </div>
        <a class="shopcart" aria-label="Shopping Cart Button" href="https://vinylimagination.foxycart.com/cart?cart=view">
            <img src="/images/icons/shopping-cart.svg" alt="Menu Icon">
        </a>
    </div>
    <a class="logo" aria-label="Vinyl Imagination Logo" title="Vinyl Imagination" href="index.php">
    </a>
    <div class="slogan">
        <p>You imagine. We create.</p>
        <?php
            if (!isset($page_title)) {
                $page_title = 'Premier Design and Production of Automotive, Vehicle Specific Graphics<span>, Stripes, and Decals.</span>';
            }
        ?>

        <h1><?php echo $page_title; ?></h1>
    </div>
</header>

