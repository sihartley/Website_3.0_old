<!-- New Products -->
<section class="new-products">
    <h2>Latest Automotive Designs</h2>
    <?php $product = 1;
    while ($new_product = mysqli_fetch_assoc($new_products)){
        ?>
        <div class="<?php echo "product-" . $product++; ?>">
            <div class="content">
                <h3><?php echo $new_product['product_name']; ?></h3>
                <img src="<?php echo $new_product['image_path'] . $new_product['main_page_image']; ?>"
                     alt="<?php echo "BUY {$new_product['make']} {$new_product['model']} - {$new_product['product_name']}"; ?>"
                     style="aspect-ratio: <?php image_ratio($new_product['image_path'] . $new_product['main_page_image']); ?>">
                <h3><?php echo "{$new_product['year']} {$new_product['make']} {$new_product['model']}"; ?></h3>
                <a href="#" class="buy-now-button"
                   aria-label="<?php echo "BUY {$new_product['year']} {$new_product['make']} {$new_product['model']} - {$new_product['product_name']} " . ceil($new_product['price_1']); ?>">
                    <div>
                        <span>BUY</span><br>
                        <span>From $<?php echo ceil($new_product['price_1']); ?></span>
                    </div>
                </a>
            </div>
        </div>
        <?php
    }
    ?>
</section>

