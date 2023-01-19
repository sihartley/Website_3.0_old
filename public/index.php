<?php
/* Core Functions (Functions for ALL Pages NO Exceptions) */
include_once '../private/functions/core_functions.php';
/* Global Functions (Functions for ALL Pages) */
include_once '../private/functions/global_functions.php';
/* CSS File Auto Versioning */
const CSS = array( '/css/index_screen.css', '/css/print.css' );
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
        echo '<link rel="stylesheet" media="screen"  href="' . auto_version($css) . '" type="text/css">' . "\n    ";
    }?>
</head>

<body>

<div id="page">
    <div id="content">

    <header id="header">

        <a class="logo" title="Vinyl Imagination" href="#">
<!--        <a class="phone" title="Vinyl Imagination Phone Number" href="#">-->
<!--            <svg class="company-phone-number" viewBox="0 0 277 36" xmlns="http://www.w3.org/2000/svg">-->
<!--                <text x="0" y="34">--><?php //echo $phone_number; ?><!--</text>-->
<!--            </svg>-->
        </a>

        <div class="hero">
            <p>Vehicle Graphics Done Your Way!</p>
        </div>
        <a href="#menu">
            <div class="hamburger">
                <p>MENU</p>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </a>
    </header>

    <section class="main">
        <aside onclick="window.open('https://https://admin.foxycart.com/admin', '_blank')">
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

    <section class="addtocart">
        <!-- link example -->

<!--        <a href="--><?php //echo $foxy_cart; ?><!--?name=Cool%20Example&price=10&color=red&code=sku123">Add a red Cool Example</a>-->
        <!-- form example -->
<!--        <form data-fc-form-code="p1" action="--><?php //echo $foxy_cart; ?><!--" method="post" accept-charset="utf-8">-->
<!--            <input type="hidden" name="name" value="2022 Ford Maverick Mach 1 Esque Hood Decal" />-->
<!--            <input type="hidden" name="image" value="https://vinylimagination.com/Graphics/Vehicles/Ford/Maverick/2k22/M1HD/Ford%20Maverick%20Mach-1%20Hood%20Decal%20(M1HD-001).webp" />-->
<!--            <input type="hidden" name="Design" value="Design 01" />-->
<!--            <input type="hidden" name="price" value="93.31" />-->
<!--            <input type="hidden" name="Part" value="FRD-MAVK22-M1HD" />-->
<!--            <input type="hidden" name="weight" value="2" />-->
<!--            <label class="label_left">Color</label>-->
<!--            <select name="Main Color" onchange="initDynamicPrice();">-->
<!--                <option value="Black">Black</option>-->
<!--                <option value="Red{p+10|w+1.2}">Red (+$10)</option>-->
<!--                <option value="White">White</option>-->
<!--            </select><br>-->
<!--            <label class="label_left">Accent</label>-->
<!--            <select name="Accent" onchange="initDynamicPrice();">-->
<!--                <option value="orange">Orange</option>-->
<!--                <option value="yellow{p+10|w+1.2}">Yellow (+$10)</option>-->
<!--                <option value="green">Green</option>-->
<!--            </select><br>-->
<!--            <label class="label_left">Accent 2</label>-->
<!--            <select name="Accent 2" onchange="initDynamicPrice();">-->
<!--                <option value="pink">Pink</option>-->
<!--                <option value="brown{p+10|w+1.2}">Brown (+$10)</option>-->
<!--                <option value="blue">Blue</option>-->
<!--            </select><br>-->
<!--            <input type="text" name="Design Notes" value="Design Notes"><br>-->
<!--            <input type="submit" value="Add a Cool Example" class="submit" />-->
<!--        </form>-->
<!--        <h4 class="p1_total">$93.31</h4>-->

        <!--    View Cart Buttons   -->
<!--        <form action="--><?php //echo $foxy_cart; ?><!--?cart=view" method="get" target="_blank">-->
<!--            <button type="submit">View Cart</button>-->
<!--        </form>-->
<!--        <button  onclick="window.open('--><?php //echo $foxy_cart; ?><!--?cart=view', '_blank')">-->
<!--            View Cart-->
<!--        </button>-->
    </section>



    <section class="atmosphere">
        <article>
            <h2>Creating a modern atmosphere</h2>
            <p>Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Lorem ipsum dolor sit amet etuer adipiscing elit.  Pulvinar odio lorem non turpis. Nullam sit amet enim lorem.</p>
            <a class="btn" title="Creating a modern atmosphere" href="#">Learn more</a>
        </article>
    </section>

    <section class="how-to">
        <aside>
            <div class="content">
                <img src="images/photo_seating.jpg" alt="Choosing the proper seating">
                <h4>How-To: Seating</h4>
                <p>Consectetuer adipiscing elit. Morbi commodo ipsum sed gravida orci magna rhoncus pulvinar odio lorem.</p>
            </div>
        </aside>
        <aside>
            <div class="content">
                <img src="images/photo_lighting.jpg" alt="Choosing the proper lighting">
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


<!-- Footer -->
    <footer>
        &copy; Vinyl Imagination
        <div class="content">
            <a href="#" title="Privacy Policy">Privacy Policy</a>
            <a href="#" title="Terms of Service">Terms of Service</a>
        </div>
    </footer>

    </div> <!-- #content close -->
</div> <!-- #page close -->





<!--Simon: ToDo: create and move this to include file (before_body_close.php)-->
<!-- Mmenu and FoxyCart Scripts -->
<?php
const JS = array (
  'https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/9.3.0/mmenu.js',
  '/js/mmenu_config.min.js',
  '/js/foxycart_dynamin_price_calc.min.js' //Simon: Remove Me: Remove this from index.php - not required on this page
);
foreach (JS as $js) {
    echo '<script src="' . auto_version($js) . '" type="text/javascript"></script>' . "\n" ;
    /* https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/9.3.0/mmenu.js */
    /* js/mmenu_config.min.js */
    /* js/foxycart_dynamin_price_calc.min.js */ //Simon: Remove Me: Remove this from index.php - not required on this page
}
?>

<!-- FOXYCART Simon: Remove Me: Remove this from index.php - not required on this page -->
<!--<script data-cfasync="false" src="https://cdn.foxycart.com/vinylimagination/loader.js" async defer></script>-->

<?php
/* Grunt LiveReload */
if($hostingServer === 'Local') {
    echo '<!--LiveReload-->';
    echo '<script src="http://localhost:35729/livereload.js"></script>' . PHP_EOL;
}
?>
</body>
</html>

<!-- Simon: Todo: create and move this to include file foot.php -->
<?php
ob_end_flush();
?>