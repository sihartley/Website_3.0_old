<header id="header">
    <div>
        <a class="hamburger" aria-label="Menu Button" href="#menu">
            <img src="/images/icons/bars.svg" alt="Menu Icon">
        </a>
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

