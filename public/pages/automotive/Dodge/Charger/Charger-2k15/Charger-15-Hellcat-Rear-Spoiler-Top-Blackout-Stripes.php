<?php
require_once /** @lang text */ dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';
require_once PRIV_PATH . '/functions/automotive_functions.php';
/**
 * @var $_GET
 * values passed in URI after ? (vehicle-main.php?make=foo&model=bar)
 * @var $dbPrefix
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 * @var $rightClickProtect
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 * @var $foxy_cart
 * From business_info.php INCLUDE in initialize.php
 */
//$id = $_GET['id'];
$graphicId = 223;
/**
 * Returned by function graphic_vehicle_query()
 * @var $graphic
 * Global variable In INCLUDE automotive_functions.php
 * @var $vehicle
 * Global variable In INCLUDE automotive_functions.php
 */
graphic_vehicle_query($graphicId);
/**
 * variables contained in INCLUDE automotive_variables.php
 * @var $make $graphic['make']
 * @var $model $graphic['model']
 * @var $year $graphic['year']
 * @var $year_range $vehicle['year']
 * @var $price ceil($graphic['price_1'])
 * @var $product_name $graphic['product_name']
 * @var $graphic_installed $graphic['product_image_on']
 * @var $image_path $graphic['image_path']
 * @var $design_image $graphic['design_image']
 * @var $part_number $graphic['part_number']
 * @var $galleryDir = PUB_PATH.$image_path.'gallery';
 */
require_once PRIV_PATH . '/includes/automotive/automotive_variables.php';

/* Simon: ToDo: Automate $gallery status on/off */

/* Gallery Automation */
galleryAutomation ($galleryDir);

/* Graphics Options */
$accentStyles = [2, 3, 4, 5, 6]; //Styles that have an Accent
$accentCut = [2, 4, 5, 6]; //Styles that have the Accent Cut-Out
$accentSame = [3]; //Styles that have the accent Separate which can be the Same Color as Main
$accent2Styles = []; //Styles with a 2nd Accent
$accent2Cut = []; //Styles that have the 2nd Accent Cut-Out
$accent2Same = [];  //Styles that have the 2nd Accent Separate which can be the Same Color as Main
$text = []; $textRef = 'TXT/LOGO'; $textCut = []; $textSame = [];
$text2 = []; $text2Ref = 'SIDE TXT/LOGO'; $text2Cut = []; $text2Same = [];
$text3 = []; $text3Ref = ''; $text3Cut = []; $text3Same = [];
$trimData = null;

/* Page Options */
$css_file = '/css/designs.min.css'; // page css file
$page_title = "$year_range $make $model $product_name"; // page title
?>

<!DOCTYPE html>
<?php require_once PRIV_PATH . '/includes/automotive/localstorage_scripts.php';?>
<html lang="en"<?= $rightClickProtect ?>>

<!-- Head -->
<?php include_once ROOT.'/private/includes/head.php'; /* includes page title, meta, prefetch, css sheets, js scripts etc. */?>
<body>
<div id="page">
    <div id="content">

        <!-- Header -->
        <?php include ROOT.'/private/includes/header.php'?>

        <!-- Main Image Graphic on Vehicle / Gallery -->
            <?php graphicOnVehicle($galleryDir, $image_path, $graphic_installed, $page_title); ?>

        <!-- Graphic Designs Section -->
            <?php graphic_block_heading($year_range, $model, $product_name); /* h2 Graphic Block Heading (automotive_functions.php) */ ?>

            <?php
            /* While Loop (Based on Design Images in Folder) */
                $design = sprintf('%02s', 1); /* Design Number Formatting */
                while (file_exists(PUB_PATH.$image_path.str_replace ('01', $design, $design_image))) {
                    require ROOT.'/private/includes/automotive/auto_graphic_while_start.php';
                    /** require ROOT.'/private/includes/automotive/auto_graphic_while_start.php' contains code for part number, container title, image work, selection etc.
                     * @var $name
                     * @var $graphic_design
                     * @var $cart_image
                     * @var $svg_image
                     * @var $design_pn
                     * @var $price
                     * @var $weight
                     */
                ?>

        <!-- Container Start -->
                <?php containerStart($name, $design, $graphic_design); ?>

            <!-- Form Start -->
                <?php formStart($design, $foxy_cart); ?>

                    <!-- Initial (main) Product Inputs -->
                        <?php require ROOT.'/private/includes/automotive/auto_graphic_form_initial_inputs.php' ?>

                    <!-- Vehicle Information Section (Year, Trim, Color) -->
                        <?php vehicleInformationStart(); ?>

                            <?php
                            /**
                             * @var array $yearsMod ['year' => 'year to modify', 'price_mod' => 'price modification', 'image_mod' => 'b']
                             * image_mod is appended to filename before file type
                             */
                            $yearsMod = null;
                            modelYears($graphic, $vehicle,null);

                             /**
                             * @var array $trimsOverride ['new trim 1', 'new trim 2', 'new trim 3']
                             * @var array $trimsAddon ['add trim 1', 'add trim 2', 'add trim 3']
                             * @var array $trimMods ['trim' => 'trim to modify', 'price_mod' => 'price modification', 'image_mod' => 'b']
                              * image_mod is appended to filename before file type
                             * @var bool $modelsOverride if set to TRUE model will prefix trim
                             */
                            $trimModPrice = ceil(.0489 * pricing($design));
                            $trimSVGMod = 'b';
                            $trimMods = array(
                                ['trim' => 'SRT Hellcat Redeye Widebody', 'price_mod' => $trimModPrice, 'image_mod' => $trimSVGMod]
                            ); ?>
                            <?php trimLevels($graphic, $vehicle, null, null, null, false); ?>

                            <?php carColors($vehicle); ?>

                    <!-- Graphic Section (material, color, accent, cutout options (trimOptions)) -->
                        <?php graphicInformationStart(); /* Closing </div> in textColorOptions */?>

                            <?php materialBrand($design); ?>

                            <?php mainColor($design); ?>

                            <?php accentColor($design, $accentStyles, $accentCut, $accentSame); // Accent Styles, Cut Styles, Same Styles ?>

                            <?php accentColor2($design, $accent2Styles, $accent2Cut, $accent2Same); ?>

                            <?php trimOptions($design, $trimData); ?>

                        <?php graphicInformationClose(); ?>

                    <!-- Text & Logo Options, Notes -->
                        <?php textLogoNotesStart(); ?>

                            <?php textColorOptions($design,
                                $text, $textRef, $textCut, $textSame,
                                $text2, $text2Ref, $text2Cut, $text2Same,
                                $text3, $text3Ref, $text3Cut, $text3Same, $accentStyles, $accent2Styles
                            ); ?>

                            <?php notes(); ?>

                        <?php textLogoNotesClose(); ?>

                        <?php cartButton($design, $price) //Add to Cart Button ?>

                        <?php graphicInfoRequest($design, $design_pn); //Form Button ?>

                    <?php formClose(); ?>

                <?php containerFooter($design_pn); ?>

            <?php containerEnd(); /* Container End (containerStart() function) */ ?>

        <?php $design = sprintf('%02s', ++$design);
            } // While Loop Close
        ?>

    <?php graphicInformationClose(); ?>

    <!-- Navigation -->
        <?php include ROOT.'/private/includes/navigation.php'; ?> <!-- Note: Keep inside content div for page anchors to work properly -->
    </div> <!-- #content close -->

    <!-- footer -->
        <?php include_once ROOT.'/private/includes/footer.php' /* Note: Keep here for positioning and scrolling to work correctly */?>

</div> <!-- #page close -->

<!-- LiveReload for activates on local server only -->
    <?php live_reload(); /* core_functions.php */?>

</body> <!-- Page body close -->

</html> <!-- html close -->

<?php ob_end_flush(); /* SEE: https://www.php.net/manual/en/function.ob-end-flush.php */ ?>