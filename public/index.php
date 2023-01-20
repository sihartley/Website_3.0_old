<?php
/* Core Functions (Functions for ALL Pages NO Exceptions) */
include_once '../private/functions/core_functions.php';
/* Global Functions (Functions for ALL Pages) */
include_once '../private/functions/global_functions.php';
/* CSS File Auto Versioning */
const CSS = array( '/css/index_screen.css');
/* JS File Auto Versioning */

/* Server Detection */
[$hostingServer, $dbPrefix] = host_ident($_SERVER['SERVER_ADDR']);

/* HTML Minification & Right Click Protection */
if ( $hostingServer !== 'Local' ) {
    ob_start("minifier" );
    $right_click_protect = ' oncontextmenu="return false;"';
//    $right_click_protect = '';
} else {
    $right_click_protect = '';
}

/* Business Info */
/* Simon: ToDo: create and move this to include file (business_info.php) */
$phone_number = '877-558-2335';
$sms_number = '805-910-7072';
$foxy_cart = 'https://vinylimagination.foxycart.com/cart';

?>

<!DOCTYPE html>
<html lang="en"<?php echo $right_click_protect; ?>>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="Vinyl Imagination - Automotive Decals and Graphics Main Page">
    <title>Vinyl Imagination v3.0 Responsive, Mobile First Website</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
<!--    <meta name="viewport" content="width=device-width minimum-scale=1.0 maximum-scale=1.0 user-scalable=no" />-->
    <link rel="preload" href="css/fonts/BickleyScriptLET-Plain.woff2" as="font" type="font/woff2" crossorigin>
    <?php /** @noinspection PhpUndefinedVariableInspection */

    foreach (CSS as $css) {
        echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version($css) . '" type="text/css">' . "\n    ";
    }?>
    <?php
    /* Simon: Info: These are ordered for optimal performance ref. Lighthouse Test. */
    echo '<script src="' . auto_version('https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/9.3.0/mmenu.js') . '" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="' . auto_version('/js/mmenu_config.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    /* JQUERY Simon: Note: Only activate jQuery if jQuery is used. */
    echo '<script src="' . auto_version('https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js') . '" type="text/javascript"></script>' . "\n" ;
    /* FOXYCART Simon: Remove Me: Remove foxycart scripts from index.php - not required on this page*/
    echo '<script src="' . auto_version('/js/foxycart_dynamin_price_calc.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="' . auto_version('https://cdn.foxycart.com/vinylimagination/loader.js') . '" type="text/javascript" defer></script>' . "\n" ;
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
<!--                <text x="0" y="34">--><?php //echo $phone_number; ?><!--</text>-->
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

    <section class="main">
        <aside onclick="window.open('https://admin.foxycart.com/admin', '_blank')">
            <div class="content automotive">
                <h2>
                    <a href="#">Automotive Graphics</a>
                </h2>
                <p>Lorem ipsum dolor sit amet, consect etuer adipiscing elit. Ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.</p>
            </div>
        </aside>

        <aside onclick="window.open('https://mmenujs.com/', '_blank')">
            <div class="content motorcycle">
                <h2>
                    <a href="#">Motorcycle Graphics</a>
                </h2>
                <p>Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Lorem ipsum dolor sit amet, consect.</p>
            </div>
        </aside>

        <aside onclick="window.open('https://google.com', '_blank')">
            <div class="content trailer">
                <h2>
                    <a href="#">Trailer Graphics</a>
                </h2>
                <p>Nullam sit amet enim. Lorem ipsum dolor sit amet, consect etuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci rhoncus neque, id pulvinar odio.</p>
            </div>
        </aside>
    </section>


<?php include '../private/includes/foxycart_test.php'?>


<!--    <section class="atmosphere">
        <article>
            <h2>Creating a modern atmosphere</h2>
            <p>Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Lorem ipsum dolor sit amet etuer adipiscing elit.  Pulvinar odio lorem non turpis. Nullam sit amet enim lorem.</p>
        </article>
    </section>
-->
    <section class="how-to">
        <aside>
            <div class="content">
                <img src="images/icon_star.svg" width="100" height="100" alt="Choosing the proper seating">
                <h4>How-To: Seating</h4>
                <p>Consectetuer adipiscing elit. Morbi commodo ipsum sed gravida orci magna rhoncus pulvinar odio lorem.</p>
            </div>
        </aside>
        <aside>
            <div class="content">
                <img src="images/icon_gear.svg" width="100" height="100" alt="Choosing the proper lighting">
                <h4>How-To: Lighting</h4>
                <p>Morbi commodo, ipsum sed pharetra gravida magna rhoncus neque id pulvinar odio lorem non turpis nullam sit amet.</p>
            </div>
        </aside>
        <blockquote>
            <p class="quote">Lorem ipsum dolor sit amet conse ctetuer adipiscing elit. Morbi comod sed dolor sit amet consect adipiscing elit.</p>
            <p class="credit"><strong>Author Name</strong><br><em>Business Title</em><br>Company</p>
        </blockquote>

    </section>



<!-- Navigation -->
<?php include '../private/includes/navigation.php'; ?> <!-- Simon: Note: -->



    </div> <!-- #content close -->

<!-- Footer Simon: Note: Keep here for positioning and scrolling to work correctly -->
    <footer>
        &copy; Vinyl Imagination
        <div class="content">
            <a href="#" title="Privacy Policy">Privacy Policy</a>
            <a href="#" title="Terms of Service">Terms of Service</a>
        </div>
    </footer>

</div> <!-- #page close -->





<?php
/* Grunt LiveReload */
if($hostingServer === 'Local') {
    echo '<!--LiveReload-->';
    echo '<script src="http://localhost:35729/livereload.js"></script>' . PHP_EOL;
}

?>
<?php  ?>
</body>

</html>

<!-- Simon: Todo: create and move this to include file foot.php -->
<?php
ob_end_flush();
?>