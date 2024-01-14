<section class="graphic-products">
    <?php $h2 = "Latest $years <span>{$_GET['make']} </span>{$_GET['model']} Graphics<span>, Stripes and Decals</span>"; ?>
    <h2><?= $h2 ?></h2>
    <?php

    if (isset($graphics, $years)) {
        /**
         * @var $automotive_sale_discount * is set in include/business_info.php
         * @var $base_costs_auto * is set in include/business_info.php
         * @var $trans_fee * is set in include/business_info.php
         */
        $product = 1;
        while ($graphic = mysqli_fetch_assoc($graphics)){
            $class = "product-" . $product++; $product_name = $graphic['product_name']; $image = $graphic['image_path'] . $graphic['main_page_image'];
            $make = $_GET['make'];
            $model = $_GET['model'];
//            $years = $_GET['years'];
            $year_start = explode(' ', $years)[0];
            $image_alt = "BUY and CUSTOMIZE {$graphic['make']} {$graphic['model']} - {$graphic['product_name']}";
            $title = "$years {$graphic['make']} {$graphic['model']}";
            $title = " {$graphic['make']} {$graphic['model']}";
            $href = $graphic['product_page'];

            //Simon: ToDo: Adjust this to include Base Costs, $Trans Fees etc.
            $calcPrice = ceil(num: number_format((($base_costs_auto + $graphic['price_1']) * $trans_fee) + ($base_costs_auto + $graphic['price_1']), 2));;
            $price = ceil($calcPrice - ($calcPrice * $automotive_sale_discount));
            $aria_label = "BUY {$graphic['year']} {$graphic['make']} {$graphic['model']} - {$graphic['product_name']} " . $price;
            $lazy = ''; if ($product > 3) { $lazy = "loading='lazy'"; }
            ?>
            <div class="<?= $class ?>">
                <div class="content">
                    <h3><?= $product_name ?></h3>
                    <img src="<?= webpImage($image) ?>" alt="<?= $image_alt ?>" style="aspect-ratio: <?php image_ratio($image); ?>" <?= $lazy ?>>
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

