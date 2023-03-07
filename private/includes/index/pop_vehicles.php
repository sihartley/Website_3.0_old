<!-- Popular Vehicles -->
<section class="pop-vehicles">
    <h2>Popular Vehicles</h2>
    <?php
    /** @var $pop_vehicles
     *  Populated from SQL Query on index.php
     */
    $vehicle = 1;
    if (isset($pop_vehicles)) {
        while ($pop_vehicle = mysqli_fetch_assoc($pop_vehicles)){
            $make = $pop_vehicle['make'];
            $model = $pop_vehicle['model'];
            $years = $pop_vehicle['year'];
            $year_start = explode(' ', $years)[0];
            $image = $pop_vehicle['image_path'] . $pop_vehicle['vehicle_250px_image']; $image_alt = "BUY $make $model $years Vehicle Graphics";
            $href = "/pages/automotive/vehicle-main.php?make=$make&model=$model&year=$year_start&years=$years";
            $aria_label = "SHOP $years $make $model Vehicle Graphics";
            ?>
            <div class="<?= "vehicle-" . $vehicle++ ?>">
                <div class="content">
                    <h3><?= "$years $make $model" ?></h3>
                    <img src="<?= webpImage($image) ?>" alt="<?= $image_alt ?>" style="aspect-ratio: <?php image_ratio($image); ?>">
                    <a href="<?= $href ?>" class="shop-now-button"
                       aria-label="<?= $aria_label ?>">
                        <div>
                            <span>Browse</span><br>
                        </div>
                    </a>
                </div>
            </div>
            <?php
        } //END: While Loop
    } // Simon: Todo: Add a contingency if this database fails ?>
</section>

