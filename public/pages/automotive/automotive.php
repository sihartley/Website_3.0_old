<?php
require_once /** @lang text */
    dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';
/**
 * @var $_GET
 * values passed in URI after ? (vehicle-main.php?make=foo&model=bar)
 * @var $dbPrefix
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 * @var $rightClickProtect
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 */

$vehicle_makes_query = "(SELECT make FROM ".$dbPrefix."Automotive.manufacturers WHERE make != 'Generic' ORDER BY make ASC)";
$vehicle_makes = db_query($vehicle_makes_query);

$css_file = '/css/graphics.min.css';
$page_title = 'Automotive Graphics';

?>

<!DOCTYPE html>
<html lang="en"<?= $rightClickProtect ?>>

<!-- Head -->
<?php include_once ROOT.'/private/includes/head.php'?>

<body>
<div id="page">
    <div id="content">

        <!-- Header -->
        <?php include ROOT.'/private/includes/header.php'?>

        <!-- Shortcuts -->
            <ul class="shortcuts">
            <?php while ($shortcuts = mysqli_fetch_assoc($vehicle_makes)) { ?>
                <li><a href="#<?= $shortcuts['make'] ?>"><span>Graphics for </span><?= $shortcuts['make'] ?></a></li>
            <?php } ?>
            </ul>

        <!-- Vehicle Graphics -->
        <!-- Makes -->
        <?php mysqli_data_seek($vehicle_makes, 0);
        while ($makes = mysqli_fetch_assoc($vehicle_makes)) {
            $make = $makes['make']; ?>
            <section id="<?= $make ?>" class="all-vehicles">
                <h2>Graphics for <?= $make ?> Vehicles</h2>

            <!-- Models -->
            <?php $vehicle_models_query = "(SELECT make, model, year, image_path, vehicle_250px_image FROM ".$dbPrefix."Automotive.vehicles WHERE make = '$make' AND available IS NOT NULL ORDER BY model ASC)";
            $vehicle_models = db_query($vehicle_models_query);
            while ($models = mysqli_fetch_assoc($vehicle_models)) {
                $make = $models['make']; $model = $models['model']; $years = $models['year']; $year_start = explode(' ', $years)[0];
                $image = $models['image_path'] . $models['vehicle_250px_image']; $image_alt = "BUY $make $model $years Vehicle Graphics";
                $href = "/pages/automotive/vehicle-main.php?make=$make&model=$model&year=$year_start";
                $aria_label = "SHOP $years $make $model Vehicle Graphics"; ?>

                <div class="<?= "vehicle-" //. $vehicle++ ?>">
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
            } //END: while ($models = mysqli_fetch_assoc($vehicle_models)) ?>

            </section>
        <?php db_disconnect(db_connect());
        } //END: while ($makes = mysqli_fetch_assoc($vehicle_makes)) ?>

        <!-- Navigation -->
        <?php include ROOT.'/private/includes/navigation.php'; ?> <!-- Note: Keep inside content div for page anchors to work properly -->
    </div> <!-- #content close -->

    <!-- footer -->
    <?php include_once ROOT.'/private/includes/footer.php' /* Note: Keep here for positioning and scrolling to work correctly */?>

</div> <!-- #page close -->

<!-- LiveReload for activates on local server only -->
<?php if (!empty($liveReload)) { echo $liveReload . '<!-- '.$dbPrefix.' -->'; } ?>
</body>

</html>

    <!-- Simon: Todo: create and move this to include file foot.php -->
<?php ob_end_flush(); ?>