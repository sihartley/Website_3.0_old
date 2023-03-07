<header id="header">
    <div class="fixed-title">
        <a class="hamburger" aria-label="Menu Button" href="#menu">
            <img src="/images/icons/bars.svg" alt="Menu Icon">
        </a>
        <a class="mini-logo" href="/index.php"><img src="/images/company/vi-logo-simple.svg" alt="Vinyl Imagination Logo" style="aspect-ratio: <?php svg_ratio('/images/company/vi-logo-simple.svg'); ?>"></a>
        <div class="menu-bar">
            <a href="/index.php">Home</a>|<a href="#menu">Menu</a>|<a href="/pages/support/contact.php">Contact</a>|<a href="/pages/support/about.php">About</a>|<a href="https://vinylimagination.foxycart.com/cart?cart=view">Cart</a>

        </div>
        <a class="shopcart" aria-label="Shopping Cart Button" href="https://vinylimagination.foxycart.com/cart?cart=view">
            <img src="/images/icons/shopping-cart.svg" alt="Menu Icon">
        </a>
    </div>
    <a class="logo" aria-label="Vinyl Imagination Logo" title="Vinyl Imagination" href="/index.php">
    </a>
    <div class="slogan">
        <p>You imagine. We create.</p>
        <?php
            if (!isset($page_title)) {
                $page_title = 'Automotive, Vehicle Specific Graphics<span>, Stripes, and Decals</span>';
            }
        ?>

        <h1><?php echo $page_title; ?></h1>
    </div>
</header>

<?php
//if(isset($_COOKIE["LastVisitedSection"])){
//    echo "Recently visited section:  {$_SERVER['HTTP_HOST']}  {$_COOKIE["LastVisitedSection"]}";
//} else{
//    echo "Welcome guest! We encourage you to explore different sections!";
//}

