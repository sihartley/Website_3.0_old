<?php
/* Core Functions (Functions for ALL Pages NO Exceptions) */
include_once '../private/functions/core_functions.php';
/* Global Functions (Functions for ALL Pages) */
include_once '../private/functions/global_functions.php';
/* CSS File Auto Versioning */
//const CSS = array( '.min.css' );
/* JS File Auto Versioning */
//const JS = array( '.min.js' );

/* Server Detection, Database Prefix, HTML Minification, Right Click Protection, Live Reload, Server ID Dot */
[$hostingServer, $dbPrefix, $minifyHTML, $rightClickProtect, $liveReload, $serverDot] = host_ident($_SERVER['SERVER_ADDR']);

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
    <link rel="preload" href="css/fonts/BickleyScriptLET-Plain.woff2" as="font" type="font/woff2" crossorigin>

    <?php /** @noinspection PhpUndefinedVariableInspection */

    echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/index_screen.min.css') . '" type="text/css">' . "\n";
    /* Simon: Info: These are ordered for optimal performance ref. Lighthouse Test. */
    echo '<script src="' . auto_version('https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/9.3.0/mmenu.js') . '" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="' . auto_version('/js/mmenu_config.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    /* JQUERY Simon: Note: Only activate jQuery if jQuery is used. */
    echo '<script src="' . auto_version('https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    /* FOXYCART Simon: Remove Me: Remove foxycart scripts from index.php - not required on this page*/
/*    echo '<script src="' . auto_version('/js/foxycart_dynamin_price_calc.min.js') . '" type="text/javascript" defer></script>' . "\n" ;*/
/*    echo '<script src="' . auto_version('https://cdn.foxycart.com/vinylimagination/loader.js') . '" type="text/javascript" defer></script>' . "\n" ;*/
    ?>
</head>

<body>

<div id="page">
    <div id="content">

        <header id="header">

            <a class="logo" title="Vinyl Imagination" href="#">
                <!-- Simon: Note: Remove of not being used. -->
    <!--        <a class="phone" title="Vinyl Imagination Phone Number" href="#">-->
    <!--            <svg class="company-phone-number" viewBox="0 0 277 36" xmlns="http://www.w3.org/2000/svg">-->
    <!--                <text x="0" y="34"><?php /*echo $phone_number; */?></text>-->
    <!--            </svg>-->
            </a>

            <div class="hero">
                <p>Vehicle Graphics Done Your Way!</p>
            </div>
            <a aria-label="menu-button" href="#menu">
                <div class="hamburger">
                    <p>MENU</p>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </a>
        </header>

        <section class="new-products">
            reserved for new products carousel

        </section>

        <section class="main">
            <div onclick="window.open('https://admin.foxycart.com/admin', '_blank')">
                <div class="content automotive">
                    <h2>
                        <a href="#">Automotive Graphics</a>
                    </h2>
                    <h3>A custom look for your vehicle Here.</h3>
                    Precision Fit, Premium Quality Materials, and Custom Graphics equal a great, unique, long-lasting look for your vehicle at a very reasonable cost.</p>
                </div>
            </div>

            <div onclick="window.open('https://mmenujs.com/', '_blank')">
                <div class="content motorcycle">
                    <h2>
                        <a href="#">Motorcycle Graphics</a>
                    </h2>
                    <h3>Customize your ride Here.</h3>
                    <p>Various Sizes. Lots of Designs. Add our custom graphic decals to your motorcycle gas tank. Give that hog a unique look to match your wild side!</p>
                </div>
            </div>

            <div onclick="window.open('https://google.com', '_blank')">
                <div class="content trailer">
                    <h2>
                        <a href="#">Trailer Graphics</a>
                    </h2>
                    <h3>Add some style to your trailer Here.</h3>
                    <p>Horse Trailer. Toy Hauler. Work Trailer. Customize your trailer for work or leisure style, stand out from the crowd, or advertise your business.</p>
                </div>
            </div>
        </section>

<!--    <section>-->
<!--        -->
<!--    </section>-->


        <section class="information">
            <aside class="automotive">
                <h3>Graphics Information</h3>
                <h4>Automotive</h4>
                <p>Our automotive graphics are precision measured to contour-fit the vehicle we design them to fit. Our precision vehicle graphics only require minor manipulation when installing them on your car and will follow the contours and curves of the vehicle where they are applied. We produce automotive graphics from the highest quality materials for the most straightforward installation with the most durability possible. Our products allow you to achieve a unique look for your vehicle at a very reasonable cost.</p>

                <h4>Motorcycle</h4>
                <p>We offer graphic designs in several sizes to suit your motorcycle graphics needs, provided in the same high-quality materials as our automotive graphics. Our motorcycle graphics can give your motorcycle a new, custom, unique, personalized look.</p>

                <h4>Trailer</h4>
                <p>If you have a work trailer, we can create a graphic including your logo to advertise your business. If you have a toy hauler, we can create a graphic that will reflect your personality or the toys you haul. We can create graphics to reflect equestrian life if you have a horse trailer. We offer various sizes and use the same high-quality graphic films and materials you would expect.</p>
            </aside>


            <aside class="oolors">
                <h3>Vinyl Materials Information</h3>
                <p>We only use the highest quality vinyl films from 3M, Avery, and Oracal, as well as others, for all our graphics products. We offer Premium Cast (Wet-Install) and Premium Wrap (Dry-Install) materials. So, whatever your chosen installation method is, we can produce graphics to suit your needs.
                    We do not offer graphics produced in calendared materials, often referred to as intermediate or economy vinyl films, even if requested.</p>
                <div class="content premium_cast">
                    <!--                <img src="images/icon_star.svg" width="100" height="100" alt="Choosing the proper seating">-->
                    <h4>Premium Cast (Wet-Install) Material & Colors</h4>
                    <p>This material is usually installed using the Wet-Installation method. The graphics are applied using an application fluid such as water with a few drops of dish soap in a spray bottle. The application fluid allows the graphic to be moved around during installation without the adhesive taking hold immediately, often preferred by "old-school" installers and tint shops.</p>
                    <p>These graphic films are Cast 2mil (50 microns), High-Performance vinyl films with an expected lifetime durability rating of seven to twelve years. There is a wide range of colors available in these materials. However, specific effects colors are unavailable in this material, such as Carbon Fiber, Matte or Satin Finish, Chrome, and Shade-Shift.</p>
                </div>
                <div class="content premium_wrap">
                    <!--                <img src="images/icon_gear.svg" width="100" height="100" alt="Choosing the proper lighting">-->
                    <h4>Premium Wrap (Dry-Install) Material & Colors</h4>
                    <p>This material is usually installed using the Dry-Installation method. The graphics have a special air-release adhesive and are applied dry. This special adhesive allows the graphics to be lifted and repositioned without the adhesive taking hold until squeegeed, often preferred by less experienced installers, and wrap shops.</p>
                    <p>These graphic films are Cast 3-4mil (75-100 microns), with an expected lifetime durability rating of seven to twelve years. There is a wide range of colors available in these materials, including specific effects colors such as Carbon Fiber, Matte or Satin Finish, Chrome, and Shade-Shift.</p>
                </div>

                <p>We only use the highest quality, longest durability vinyl films for vehicle use. These are the same vinyl films used by many OEM Auto Makers and dealerships. Using these high-quality films, you can rest assured that the graphics will continue to look amazing on your vehicle for many years.</p>
            </aside>
        </section>

        <section>
            <aside>
            </aside>
            <aside>
            </aside>
    <!--        <blockquote>-->
    <!--            <p class="quote">Lorem ipsum dolor sit amet conse ctetuer adipiscing elit. Morbi comod sed dolor sit amet consect adipiscing elit.</p>-->
    <!--            <p class="credit"><strong>Author Name</strong><br><em>Business Title</em><br>Company</p>-->
    <!--        </blockquote>-->

        </section>

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