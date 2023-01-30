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
/* Simon: ToDo: create and move this to include file (business_info.php) */
$phone_number = '877-558-2335';
$sms_number = '805-910-7072';
$foxy_cart = 'https://vinylimagination.foxycart.com/cart';

/* HTML Minification */
$minifyHTML;
?>

<!DOCTYPE html>
<html lang="en"<?php echo $rightClickProtect; ?>>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="Vinyl Imagination - Automotive Decals and Graphics Main Page">
    <title>Vinyl Imagination v3.0 Responsive, Mobile First Website</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,700;1,800&family=Ubuntu:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap">

    <?php

    echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/index.min.css') . '" type="text/css">' . "\n";
    /* Simon: Info: These are ordered for optimal performance ref. Lighthouse Test. */
    echo '<script src="' . auto_version('https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/9.3.0/mmenu.js') . '" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="' . auto_version('/js/mmenu_config.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    /* JQUERY Simon: Note: Only activate jQuery if jQuery is used. */
    echo '<script src="' . auto_version('https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    /* FOXYCART */
    echo '<script src="' . auto_version('/js/foxycart_dynamin_price_calc.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="' . auto_version('https://cdn.foxycart.com/vinylimagination/loader.js') . '" type="text/javascript" async defer></script>' . "\n" ;
    echo '<script src="' . auto_version('/js/scripts_global.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    ?>
</head>

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