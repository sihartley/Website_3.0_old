<!-- Featured Products -->
<section class="featured-products">
    <h2>Featured Automotive Graphics</h2>
    <?php $feature = 1;
    while ($feature_product = mysqli_fetch_assoc($featured_products)){
    ?>
        <div class="<?php echo "feature-" . $feature++; ?>">
            <div class="content">
                <h3><?php echo $feature_product['product_name']; ?></h3>
                <img src="<?php echo $feature_product['image_path'] . $feature_product['main_page_image']; ?>"
                     alt="<?php echo "BUY {$feature_product['make']} {$feature_product['model']} - {$feature_product['product_name']}"; ?>"
                     style="aspect-ratio: <?php image_ratio($feature_product['image_path'] . $feature_product['main_page_image']); ?>">
                <h3><?php echo "{$feature_product['year']} {$feature_product['make']} {$feature_product['model']}"; ?></h3>
                <a href="" class="buy-now-button" aria-label="<?php echo "BUY {$feature_product['year']} {$feature_product['make']} {$feature_product['model']} - {$feature_product['product_name']} " . ceil($feature_product['price_1']); ?>">
                    <div>
                        <span>BUY NOW</span><br>
                        <span>From $<?php echo ceil($feature_product['price_1']); ?></span>

                    </div>
                </a>
            </div>
        </div>
        <?php
    }
    ?>
</section>

