<?php
require_once dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';
/**
 * @var $_GET
 * values passed in URI after ? (vehicle-main.php?make=foo&model=bar)
 * @var $dbPrefix
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 * @var $rightClickProtect
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 */

if (isset($_GET['make'], $_GET['model'], $_GET['year'])) {
    $make = $_GET['make']; $model = $_GET['model']; $year = $_GET['year']; $years=''; //$years set
    $graphics_query = "(select product_name, part_number, make, model, year, price_1, image_path, main_page_image, product_page from ".$dbPrefix."Automotive.graphics where make = '".db_escape($make)."' AND model = '".db_escape($model)."' AND year = '".db_escape($year)."' AND available IS NOT NULL ORDER BY id DESC)";

    $years_query = "(SELECT year FROM ".$dbPrefix."Automotive.vehicles WHERE model = '$model' AND year LIKE '%$year%' AND available IS NOT NULL ORDER BY year DESC)";
    $model_years = db_query($years_query);

    while ($modelYear = mysqli_fetch_assoc($model_years)) { $years = $modelYear['year']; }

    $alt_years_query ="(SELECT make, model, year, image_path, vehicle_250px_image FROM ".$dbPrefix."Automotive.vehicles WHERE make = '".db_escape($make)."' AND model = '".db_escape($model)."' AND year != '".db_escape($years)."' AND available IS NOT NULL ORDER BY id ASC)";

    $graphics = db_query($graphics_query);
    $alt_years = db_query($alt_years_query);
    db_disconnect(db_connect());

    $css_file = '/css/graphics.min.css';
    $page_title = "Graphics for the $years $make $model";

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
        <aside>
            <p>Our <?= "$make $model" ?> Graphics Kits.</p>
            <p>We produce all of our <?= "$make $model" ?> graphics, decals, and stripe kits to order in your chosen colors and materials.
            We design our graphics products to contour and fit the <?= "$make $model" ?> perfectly.
            We test-fit to ensure a perfect fit and give the most straightforward installation possible. We add features to prevent lifting and provide a long-lasting installation.</p>
        </aside>

<!-- Alternate Years -->
        <?php include ROOT.'/private/includes/automotive/alternative_years.php'; ?>

<!-- Vehicle Graphics -->
        <?php include ROOT.'/private/includes/automotive/graphic_products.php'; ?>

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
<?php ob_end_flush();
}?>