<section class="graphic-products">
    <?php $h2 = "Latest {$_GET['years']} <span>{$_GET['make']} </span>{$_GET['model']} Graphics<span>, Stripes and Decals</span>"; ?>
    <h2><?= $h2 ?></h2>
    <?php
    if (isset($graphics, $years)) {
        $product = 1;
        while ($graphic = mysqli_fetch_assoc($graphics)){
            $class = "product-" . $product++; $product_name = $graphic['product_name']; $image = $graphic['image_path'] . $graphic['main_page_image'];
            $make = $_GET['make'];
            $model = $_GET['model'];
            $years = $_GET['years'];
            $year_start = explode(' ', $years)[0];
            $image_alt = "BUY and CUSTOMIZE {$graphic['make']} {$graphic['model']} - {$graphic['product_name']}";
            $title = "$years {$graphic['make']} {$graphic['model']}";
            $href = '#';
            $aria_label = "BUY {$graphic['year']} {$graphic['make']} {$graphic['model']} - {$graphic['product_name']} " . ceil($graphic['price_1']);
            $price = ceil($graphic['price_1']);
            $lazy = ''; if ($product > 3) { $lazy = "loading='lazy'"; }
            ?>
            <div class="<?= $class ?>">
                <div class="content">
                    <h3><?= $product_name ?></h3>
                    <img src="<?= $image ?>" alt="<?= $image_alt ?>" style="aspect-ratio: <?php image_ratio($image); ?>" <?= $lazy ?>>
                    <h3><?= $title ?></h3>
                    <a href="<?= $href ?>" class="buy-now-button"
                       aria-label="<?= $aria_label ?>">
                        <div>
                            <span>Customize</span><br>
                            <span>From $<?= $price ?></span>
                        </div>
                    </a>
                </div>
            </div>
            <?php
        }
    } //END: if (isset($graphics, $years))
    ?>
</section>

