<!-- Popular Vehicles -->
<section class="pop-vehicles">
    <h2>Popular Vehicles</h2>
    <?php $vehicle = 1;
    while ($pop_vehicle = mysqli_fetch_assoc($pop_vehicles)){
        ?>
        <div class="<?php echo "vehicle-" . $vehicle++; ?>">
            <div class="content">
                <h3><?php echo "{$pop_vehicle['year']} {$pop_vehicle['make']} {$pop_vehicle['model']}"; ?></h3>

                <img src="<?php echo $pop_vehicle['image_path'] . $pop_vehicle['vehicle_250px_image']; ?>"
                     alt="<?php echo "BUY {$pop_vehicle['make']} {$pop_vehicle['model']} Vehicle Graphics"; ?>"
                     style="aspect-ratio: <?php image_ratio($pop_vehicle['image_path'] . $pop_vehicle['vehicle_250px_image']); ?>">
                <a href="#" class="shop-now-button"
                   aria-label="<?php echo "SHOP {$pop_vehicle['year']} {$pop_vehicle['make']} {$pop_vehicle['model']} Vehicle Graphics"; ?>">
                    <div>
                        <span>Browse</span><br>
                    </div>
                </a>
            </div>
        </div>
        <?php
    }
    ?>
</section>

