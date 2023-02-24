<?php
include_once '../../private/includes/initialize.php';
/**
 * @var $_GET
 * values passed in URI after ? (vehicle-main.php?make=foo&model=bar)
 * @var $dbPrefix
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 * @var $rightClickProtect
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 */
$databases = ['custom', 'flaming_eagles', 'flaming_skull', 'tank_flames'];


//$vehicle_makes = db_query($vehicle_makes_query);

$css_file = '/css/graphics.min.css';
$page_title = 'Motorcycle Graphics';

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
        <?php foreach ($databases as $shortcut) {
            $link = str_replace('_', '-', $shortcut);
            $shortcut = ucwords(str_replace('_', ' ', $shortcut));
            ?>
                <li><a href="#<?= $link ?>"><?= $shortcut ?><span> Graphics</span></a></li>
        <?php } ?>
            </ul>

        <!-- Motorcycle Graphics -->
        <!-- Graphics Types -->
        <?php foreach ($databases as $database) {
            $motorcycle_db_query = "(SELECT product_name, image_path, product_image_on, price_base, unit FROM ".$dbPrefix."Motorcycle.graphics_$database )";
            $motorcycle_db = db_query($motorcycle_db_query);
            $category = ucwords(str_replace('_', ' ', $database));
            $anchor = str_replace('_', '-', $database);
            ?>
            <section id="<?=  $anchor ?>" class="motorcycle-graphics">
                <h2><?= $category ?> Motorcycle Graphics</h2>

            <!-- Graphics -->
            <?php
            while ($graphics = mysqli_fetch_assoc($motorcycle_db)) {
                $product_name = $graphics['product_name'];
                $image = $graphics['image_path'] . $graphics['product_image_on']; $image_alt = "BUY $product_name Motorcycle Graphics";
//                $href = "/automotive/vehicle-main.php?make=$make&model=$model&year=$year_start&years=$years";
                $price = $graphics['price_base']; $unit = $graphics['unit'];
                $aria_label = "SHOP $product_name Motorcycle Graphics from \$". ceil($price);
                ?>
                <div class="<?php //"vehicle-" //. $vehicle++ ?>">
                    <div class="content">
                        <h3><?= $product_name ?></h3>
                        <img src="<?= $image ?>" alt="<?= $image_alt ?>" style="aspect-ratio: <?php image_ratio($image); ?>">
                        <a href="#" class="buy-now-button"
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
        <?php //db_disconnect(db_connect());
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