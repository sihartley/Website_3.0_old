<?php
/* Core Functions (Functions for ALL Pages NO Exceptions) */
include_once '../private/functions/core_functions.php';
/* Global Functions (Functions for ALL Pages) */
include_once '../private/functions/global_functions.php';
/* CSS File Auto Versioning */
const CSS = array( '/css/index_screen.min.css');
foreach (CSS as $css) {
    $css_file = '<link rel="stylesheet" media="screen"  href="' . auto_version($css) . '" type="text/css">';
}
/* JS File Auto Versioning */
//const JS = array( '/js/filename.js');
//foreach (JS as $js) {
//    echo '<script src="' . auto_version($js) . '" type="text/javascript"></script>';
//}
/* Server Detection */
[$hostingServer, $dbPrefix] = host_ident($_SERVER['SERVER_ADDR']);

/* Business Info */
$phone_number = '877-558-2335';

/* Test Graphic Style Images */
$svg = file_get_contents('images/Mach 1 Hood Decal (M1HD-001).svg');
preg_match('/<svg.*>(.*?)<\/svg>/s', $svg, $match);
$svgfile = $match[0];
$svg2 = file_get_contents('images/Mach-1 Hood.svg');
preg_match('/<svg.*>(.*?)<\/svg>/s', $svg2, $match2);
$svgfile2 = $match2[0];
?>

<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Vinyl Imagination v3.0 Responsive, Mobile First Website</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preload" href="css/fonts/BickleyScriptLET-Plain.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" type="text/css" media="screen" href="css/screen.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <style>
        .design_image {padding: 2.5%;}
        .design_image_2 { width: 28.33%; padding: 2.5%; float: left;}
        .design_test_image { width: 28.33%; padding: 2.5%; float: left;}
        .maincolor { fill: #a5a5a5; }
        .accentcolor { fill: #ea0000; }
        .accent2color { fill: #02c1fb }
        .textcolor { fill: #7fff00 }
        .text2color { fill: #fbd702 }
    </style>
</head>
<body>
<div id="page">
    <header>
        <a class="logo" title="Vinyl Imagination" href="#">
<!--            --><?php //echo $svgcarlogo ?>
            <svg class="company-logo-name" viewBox="0 0 419 76" xmlns="http://www.w3.org/2000/svg">
                <text x="-10" y="53">Vinyl Imagination</text>
            </svg>
        </a>
        <a class="phone" title="Vinyl Imagination Phone Number" href="#">
            <svg class="company-phone-number" viewBox="0 0 277 36" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="34"><?php echo $phone_number; ?></text>
            </svg>
        </a>

        <div class="hero">
            <h1>Imagine. Design. Create.</h1>
            <p>Vehicle Graphics Done Your Way!</p>
        </div>

    </header>

    <section>
        <div>

        </div>
        <button type="button" class="test">Click Me!</button>
        <div class="design_image">
            <?php
            echo $svgfile;
            ?>
        </div>
        <div class="design_image_2">
            <?php
            echo $svgfile2;
            ?>
        </div>
        <div class="design_image_2">
            <?php
            echo $svgfile2;
            ?>
        </div>
        <div class="design_test_image">
            <object type="image/svg+xml" data="images/svg_test.svg">
                <img src="images/photo_lighting.jpg" alt="No SVG support">
            </object>
        </div>
    </section>
</div>


<!-- Initial jQuery for color change  -->
<script>
  jQuery('.test').on('click', function () {
    console.log('test');
    jQuery('object').contents().find('.graphic-accent').each(function () {
      var color = jQuery(this).css({ fill: '#ff0000' });
      if (color === '#ff0000') {
        jQuery(this).css({ fill: '#ffffff' });
      }
    });
  });
</script>

<!--Grunt-->
<!--LiveReload-->
<?php
if($hostingServer === 'Local') {
echo '<script src="http://localhost:35729/livereload.js"></script>' . PHP_EOL;
}
?>
</body>
</html>
