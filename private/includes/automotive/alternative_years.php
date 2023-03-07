<?php
if (isset($alt_years) && (mysqli_num_rows($alt_years) !== 0)) { ?>
<section class="alt-years">
    <?php $h2 = "Other<span> {$_GET['make']} {$_GET['model']}</span> Model Years"; ?>
    <h2><?= $h2 ?></h2>
    <?php
        $vehicle = 1;
        while ($alt_year = mysqli_fetch_assoc($alt_years)) {
            $make = $alt_year['make'];
            $model = $alt_year['model'];
            $years = $alt_year['year'];
            $year_start = explode(' ', $years)[0];
            $image = $alt_year['image_path'] . $alt_year['vehicle_250px_image'];
            $image_alt = "BUY $make $model $years Vehicle Graphics";
            $href = "/automotive/vehicle-main.php?make=$make&model=$model&year=$year_start&years=$years";
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
        } ?>
</section>
<?php } //END: if (isset($alt_years))
?>

