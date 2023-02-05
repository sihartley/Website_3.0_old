<?php
/* Core Functions (Functions for ALL Pages NO Exceptions) */
include_once '../private/functions/core_functions.php';
/* Global Functions (Functions for ALL Pages) */
include_once '../private/functions/global_functions.php';

/* Server Detection, Database Prefix, HTML Minification, Right Click Protection, Live Reload, Server ID Dot, Database Credentials*/
[$hostingServer, $dbPrefix, $minifyHTML, $rightClickProtect, $liveReload, $serverDot] = host_ident($_SERVER['SERVER_ADDR']);

/* Database */
$pop_vehicles_query = '(select make, model, year, image_path, vehicle_250px_image from '.$dbPrefix.'Automotive.vehicles where id IN (14, 17, 30, 42))';
$new_products_query = '(select product_name, part_number, make, model, year, price_1, image_path, main_page_image from '.$dbPrefix.'Automotive.graphics where available IS NOT NULL ORDER BY id DESC LIMIT 4)';
$featured_products_query = '(select product_name, part_number, make, model, year, price_1, image_path, main_page_image from '.$dbPrefix.'Automotive.graphics where available IS NOT NULL ORDER BY RAND() LIMIT 6 OFFSET 4)';
$pop_vehicles = db_query($pop_vehicles_query);
$new_products = db_query($new_products_query);
$featured_products = db_query($featured_products_query);
db_disconnect(db_connect());

/* Business Info */
include '../private/includes/business_info.php';

/* CSS Files Specific to this page. */
$css_file = '/css/index.min.css';

/* HTML Minification */
$minifyHTML;
?>

<!DOCTYPE html>
<html lang="en"<?php echo $rightClickProtect; ?>>

<!-- Head -->
<?php include_once '../private/includes/head.php'?>


<body>

<div id="page">
    <div id="content">

        <!-- Header -->
        <?php include '../private/includes/header.php'?>

        <!-- Popular Vehicles -->
        <?php include '../private/includes/index/pop_vehicles.php'?>

        <!-- Main Content -->
        <?php include '../private/includes/index/main_content.php' ?>

        <!-- New Products -->
        <?php include '../private/includes/index/new_products.php'?>

        <!-- Featured Products -->
        <?php include '../private/includes/index/featured_vehicles.php'?>

        <!-- Design -->
        <?php include '../private/includes/about/design.php'?>

        <!-- FOYCART TEST -->
<!--        --><?php //include '../private/includes/foxycart_test.php'?>



        <!--        <section>-->
<!--            <aside>-->
<!--            </aside>-->
<!--            <aside>-->
<!--            </aside>-->
    <!--        <blockquote>-->
    <!--            <p class="quote">Lorem ipsum dolor sit amet conse ctetuer adipiscing elit. Morbi comod sed dolor sit amet consect adipiscing elit.</p>-->
    <!--            <p class="credit"><strong>Author Name</strong><br><em>Business Title</em><br>Company</p>-->
    <!--        </blockquote>-->

<!--        </section>-->


        <!-- Navigation -->
        <?php include '../private/includes/navigation.php'; ?> <!-- Simon: Info: Keep inside content div for page anchors to work properly -->
    </div> <!-- #content close -->

    <!-- footer -->
    <?php include_once '../private/includes/footer.php' /* Simon: Info: Keep here for positioning and scrolling to work correctly */?>

</div> <!-- #page close -->


<?php echo $liveReload . '<!-- '.$dbPrefix.' -->'; ?>
</body>

</html>

<!-- Simon: Todo: create and move this to include file foot.php -->
<?php ob_end_flush(); ?>