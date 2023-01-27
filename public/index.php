<?php
/* Core Functions (Functions for ALL Pages NO Exceptions) */
include_once '../private/functions/core_functions.php';
/* Global Functions (Functions for ALL Pages) */
include_once '../private/functions/global_functions.php';
/* CSS File Auto Versioning Simon: Clean Me: */
//const CSS = array( '.min.css' );
/* JS File Auto Versioning Simon: Clean Me: */
//const JS = array( '.min.js' );

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
<!--    <meta name="viewport" content="width=device-width minimum-scale=1.0 maximum-scale=1.0 user-scalable=no" />-->
<!--    <link rel="preload" href="css/fonts/BickleyScriptLET-Plain.woff2" as="font" type="font/woff2" crossorigin>-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,700;1,800&family=Ubuntu:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

    <?php /** @noinspection PhpUndefinedVariableInspection */

    echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/index_screen.min.css') . '" type="text/css">' . "\n";
    /* Simon: Info: These are ordered for optimal performance ref. Lighthouse Test. */
    echo '<script src="' . auto_version('https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/9.3.0/mmenu.js') . '" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="' . auto_version('/js/mmenu_config.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    /* JQUERY Simon: Note: Only activate jQuery if jQuery is used. */
    echo '<script src="' . auto_version('https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    /* FOXYCART Simon: Remove Me: Remove foxycart scripts from index.php - not required on this page*/
    echo '<script src="' . auto_version('/js/foxycart_dynamin_price_calc.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="' . auto_version('https://cdn.foxycart.com/vinylimagination/loader.js') . '" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="' . auto_version('/js/scripts_global.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    ?>
</head>

<body>

<div id="page">
    <div id="content">

        <header id="header">

            <div>
                <a class="hamburger" aria-label="menu-button" href="#menu">
                    <img src="/images/icons/bars.svg" alt="Menu Icon">
                </a>
                <a class="shopcart" aria-label="menu-button" href="https://vinylimagination.foxycart.com/cartView">
                    <img src="/images/icons/shopping-cart.svg" alt="Menu Icon">
                </a>
            </div>
            <a class="logo" title="Vinyl Imagination" href="#">
            </a>
            <div class="slogan">
                <p>You imagine. We create!</p>
                <h1>Premier Design and Production of Automotive, Vehicle Specific Graphics<span>, Stripes, and Decals.</span></h1>
            </div>
        </header>

        <!-- Popular Vehicles -->
        <section class="pop-vehicles">
            <h4>Popular Vehicles</h4>
        <?php $vehicle = 1;
            while ($pop_vehicle = mysqli_fetch_assoc($pop_vehicles)){
        ?>
            <div class="<?php echo "vehicle_" . $vehicle++; ?>">
                <div class="content">
                    <h5><?php echo "{$pop_vehicle['year']} {$pop_vehicle['make']} {$pop_vehicle['model']}"; ?></h5>
                    <img src="<?php echo $pop_vehicle['image_path'] . $pop_vehicle['vehicle_250px_image']; ?>" alt="<?php echo "BUY {$pop_vehicle['make']} {$pop_vehicle['model']} Vehicle Graphics"; ?>">
                    <a href="#" class="shop-now-button">
                        <div>
                            <span>Shop Now</span><br>
                        </div>
                    </a>
                </div>
            </div>
        <?php
            }
        ?>
        </section>

        <!-- Main Content -->
        <section class="main">
            <div onclick="window.open('https://admin.foxycart.com/admin', '_blank')">
                <div class="content automotive">
                    <a href="#"></a>
                    <div>
                        <h2><a href="#">Automotive Graphics</a></h2>
                        <h3>A custom look for your vehicle.</h3>
                    </div>
                </div>
            </div>

            <div onclick="window.open('https://mmenujs.com/', '_blank')">
                <div class="content motorcycle">
                    <a href="#"></a>
                    <div>
                        <h2><a href="#">Motorcycle Graphics</a></h2>
                        <h3>Personalize your ride.</h3>
                    </div>
                </div>
            </div>

            <div onclick="window.open('https://google.com', '_blank')">
                <div class="content trailer">
                    <a href="#"></a>
                    <div>
                        <h2><a href="#">Trailer Graphics</a></h2>
                        <h3>Some style for your trailer.</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- New Products -->
        <section class="new-products">
            <h4>Latest Automotive Designs</h4>
        <?php $product = 1;
            while ($new_product = mysqli_fetch_assoc($new_products)){
        ?>
            <div class="<?php echo "product_" . $product++; ?>">
                <div class="content">
                    <h5><?php echo $new_product['product_name']; ?></h5>
                    <img src="<?php echo $new_product['image_path'] . $new_product['main_page_image']; ?>" alt="<?php echo "BUY {$new_product['make']} {$new_product['model']} - {$new_product['product_name']}"; ?>">
                    <h5><?php echo "{$new_product['year']} {$new_product['make']} {$new_product['model']}"; ?></h5>
                    <a href="#" class="buy-now-button">
                        <div>
                            <span>BUY NOW<br>From $<?php echo ceil($new_product['price_1']); ?></span>
                        </div>
                    </a>
                </div>
            </div>
        <?php
            }
        ?>
        </section>

        <!-- Featured Products -->
        <section class="featured-products">
            <h4>Featured Automotive Graphics</h4>
        <?php $feature = 1;
            while ($feature_product = mysqli_fetch_assoc($featured_products)){
        ?>
            <div class="<?php echo "feature_" . $feature++; ?>">
                <div class="content">
                    <h5><?php echo $feature_product['product_name']; ?></h5>
                    <img src="<?php echo $feature_product['image_path'] . $feature_product['main_page_image']; ?>" alt="">
                    <h5><?php echo "{$feature_product['year']} {$feature_product['make']} {$feature_product['model']}"; ?></h5>
                    <a href="" class="buy-now-button">
                        <div>
                            <span>BUY NOW<br>From $<?php echo ceil($feature_product['price_1']); ?></span>

                        </div>
                    </a>
                </div>
            </div>
        <?php
            }
        ?>
        </section>

        <!-- Information -->
        <section class="information">
            <aside class="offer">
                <h3>We Offer.</h3>
                <h4>Experience and Knowledge.</h4>
                <p>With 20-plus years of experience in the automotive graphics and wrapping business in the US and Europe, we have a wide range of experience and knowledge in the design and production techniques of automotive graphics. You can be sure you are getting a next-level design service and a premier end product for your vehicle.</p>
                <p>With 20-plus years of experience in the automotive graphics and wrapping business in the US and Europe, we have a wide range of experience and knowledge in the design and production techniques of automotive graphics. You can be sure you are getting a next-level design service and a premier end product for your vehicle.</p>

                <h4>Quality Materials.</h4>
                <p>We only use the highest quality vinyl films from 3M, Avery, and Oracal, as well as others, for all our graphics products. We offer Premium Cast (Wet-Install) and Premium Wrap (Dry-Install) materials. So, whatever your chosen installation method is, we can produce graphics to suit your needs. We do not offer graphics made with calendared materials, often referred to as intermediate or economy vinyl films, even if requested. We only use materials equal to or above these specifications: 3M 7125, 3M 2080, Avery SC950, Avery SW900, Oracal 751, and Oracal 970RA.</p>

                <h4>Free Design.</h4>
                <p>Do you have a unique idea that you would like produced? You have found the right place! We will happily convert your concept into a graphic for your vehicle. Please send us a picture, drawing, or even a sketch on a napkin, and we will use our premier design skills to turn that concept into a reality!
                    We do not charge for design, only for the end product that you purchase from us.</p>

                <h4>Transparency.</h4>
                <p>When you order with us, all the color and material information in your order will be the same as that supplied by the vinyl film manufacturer, be it 3M, Avery, or Oracal, the color information on your order will be the same material series and color code as that from the relevant manufacturer. If you need to reorder that graphic or a different graphic, be it from us or another vendor, you will be able to match your order in the future.</p>

                <h4>Free Design Proof.</h4>
                <p>During the checkout process, you can request a design proof before the production and shipping of your order. If you select this option, we will send you an image of your design as you have configured it to either your email address or via SMS to your cellphone.
                    This option gives you peace of mind with a preview of your graphic(s) and the chance to make adjustments before we go ahead with the production of your order.</p>

                <h4>Installation Insurance.</h4>
                <p>You can add this additional option during the checkout process. This option gives you peace of mind when installing your graphics. Should you run into any issues or mishaps when installing your graphics kit(s), we will replace them up to and including your complete order. Send us a picture of the issue, and we will replace the necessary piece of the kit or order. <a href="#">Details.</a></p>

                <h4>Free Shipping.</h4>
                <p>All orders over $100 include free shipping within the United States via USPS Priority Mail. We also offer a more comprehensive range of shipping methods via USPS and UPS from Standard Ground to Express and Next-Day.</p>
            </aside>


        </section>

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

<!-- FOYCART TEST -->
<?php //include '../private/includes/foxycart_test.php'?>

<!-- Navigation -->
<?php include '../private/includes/navigation.php'; ?> <!-- Simon: Note: -->



    </div> <!-- #content close -->

<!-- Footer Simon: Note: Keep here for positioning and scrolling to work correctly - Move to include file.-->
    <footer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="<?php echo $serverDot; ?>">
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 424c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="secondary"/>
            <path d="M256 432c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="primary"/>
        </svg>
        &copy; Vinyl Imagination
        <div class="content">
            <a href="#" title="Privacy Policy">Privacy Policy</a>
            <a href="#" title="Terms of Service">Terms of Service</a>
        </div>
    </footer>

</div> <!-- #page close -->


<?php echo $liveReload . '<!-- '.$dbPrefix.' -->'; ?>
</body>

</html>

<!-- Simon: Todo: create and move this to include file foot.php -->
<?php
ob_end_flush();
?>