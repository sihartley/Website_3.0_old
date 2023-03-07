<?php
require_once dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';
/** @var $dbPrefix
 * @var $rightClickProtect
 *  From function hostident() IN core_functions.php INCLUDE in initialize.php
 */
/* CSS Files Specific to this page. */
$css_file = '/css/index.min.css';
$page_title = 'Test Page';


/* Database */
$pop_vehicles_query = '(select make, model, year, image_path, vehicle_250px_image from '.db_escape($dbPrefix).'Automotive.vehicles where id IN (14, 17, 30, 42))';
$new_products_query = '(select product_name, part_number, make, model, year, price_1, image_path, main_page_image from '.db_escape($dbPrefix).'Automotive.graphics where available IS NOT NULL ORDER BY id DESC LIMIT 4)';
$featured_products_query = '(select product_name, part_number, make, model, year, price_1, image_path, main_page_image from '.db_escape($dbPrefix).'Automotive.graphics where available IS NOT NULL ORDER BY RAND() LIMIT 6 OFFSET 4)';
$pop_vehicles = db_query($pop_vehicles_query);
$new_products = db_query($new_products_query);
$featured_products = db_query($featured_products_query);
db_disconnect(db_connect());

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

        <?php

//        echo '<pre>';
//        print_r($files);
//        echo '</pre>';

        $thumbdir = 'thumbs';
        $filename = ROOT.'/public/gallery/vehicles/imageFile.webp';
        $dir = pathinfo($filename, PATHINFO_DIRNAME);
        $name = pathinfo($filename, PATHINFO_FILENAME);
        $thumbpath = implode(DIRECTORY_SEPARATOR, [$dir, $thumbdir]);
        $thumbfile = implode(DIRECTORY_SEPARATOR, [$dir, $thumbdir, $name]) . '_300px.webp';


        echo 'Directory: ' . $dir . '<br>';
        echo 'Filename: ' . $name . '<br>';
        echo 'Thumb Path: ' . $thumbpath . '<br>';
        echo 'Thumb File: ' . $thumbfile . '<br>';

        if (file_exists($thumbpath)) {
            echo 'Exists: YES';
        } else {
            echo 'Exists: NO';
        }

        ?>

        <!-- Navigation -->
        <?php include ROOT.'/private/includes/navigation.php'; ?> <!-- Note: Keep inside content div for page anchors to work properly -->
    </div> <!-- #content close -->

    <!-- footer -->
    <?php include_once ROOT.'/private/includes/footer.php' /* Note: Keep here for positioning and scrolling to work correctly */?>

</div> <!-- #page close -->

<!-- LiveReload activates on local server only -->
<?php if (!empty($liveReload)) { echo $liveReload; } ?>
</body>

</html>

    <!-- Simon: Todo: create and move this to include file foot.php -->
<?php ob_end_flush(); ?>