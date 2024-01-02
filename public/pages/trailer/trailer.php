<?php
require_once dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';
/**
 * @var $_GET
 * values passed in URI after ? (vehicle-main.php?make=foo&model=bar)
 * @var $dbPrefix
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 * @var $rightClickProtect
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 * @var $trailer_array
 * From databases.php INCLUDE in initialize.php */

$css_file = '/css/graphics.min.css';
$page_title = 'Trailer Graphics';

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
        <?php foreach ($trailer_array as $shortcut) {
            $link = str_replace('_', '-', $shortcut);
            $shortcut = ucwords(str_replace('_', ' ', $shortcut));
            ?>
                <li><a href="#<?= $link ?>"><?= $shortcut ?><span> Trailer Graphics</span></a></li>
        <?php } ?>
            </ul>

        <!-- Motorcycle Graphics -->
        <!-- Graphics Types -->
        <?php foreach ($trailer_array as $database) {
            $trailer_db_query = "(SELECT product_name, image_path, product_image_on, price_base, unit, part_graphic, product_page FROM ".$dbPrefix."Trailer.$database )";
            $trailer_db = db_query($trailer_db_query);
            $category = ucwords(str_replace('_', ' ', $database));
            $anchor = str_replace('_', '-', $database);
            ?>
            <section id="<?=  $anchor ?>" class="trailer-graphics">
                <h2><?= $category ?> Trailer Graphics</h2>

            <!-- Graphics -->
            <?php
            while ($graphics = mysqli_fetch_assoc($trailer_db)) {
                $product_name = $graphics['product_name'];
                $image = $graphics['image_path'] . $graphics['product_image_on']; $image_alt = "BUY $product_name Trailer Graphics";
                $href = strtolower($graphics['product_page']) . "#cartContainer-" . $graphics['part_graphic'];
                $price = $graphics['price_base']; $unit = $graphics['unit'];
                $aria_label = "SHOP $product_name Trailer Graphics from \$". ceil($price);
                ?>
                <div class="<?php //"vehicle-" //. $vehicle++ ?>">
                    <div class="content">
                        <h3><?= $product_name ?></h3>
                        <img src="<?= webpImage($image) ?>" alt="<?= $image_alt ?>" style="aspect-ratio: <?php //image_ratio($image); ?>">
                        <a href="<?= $href ?>" class="buy-now-button"
                           aria-label="<?= $aria_label ?>">
                            <div>
                                <span>Customize</span><br>
                                <span>From $<?= ceil($price) . " ($unit)" ?></span>
                            </div>
                        </a>
                    </div>
                </div>
            <?php
            } //END: foreach ($database as $databases) ?>

            </section>
        <?php //END: while ($makes = mysqli_fetch_assoc($vehicle_makes))
        }  db_disconnect(db_connect()); ?>

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