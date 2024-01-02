<?php
require_once /** @lang text */ dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';
require_once PRIV_PATH . '/functions/motorcycle_functions.php';
/**
 * @var $dbPrefix
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 * @var $rightClickProtect
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 * @var $foxy_cart
 * From business_info.php INCLUDE in initialize.php
 */
$table = 'flaming_skull';
graphic_motorcycle_query($table);

/* Graphics Options */
$accentStyles = []; //Styles that have an Accent
$accentCut = []; //Styles that have the Accent Cut-Out
$accentSame = []; //Styles that have the accent Separate which can be the Same Color as Main
$accent2Styles = []; //Styles with a 2nd Accent
$accent2Cut = []; //Styles that have the 2nd Accent Cut-Out
$accent2Same = [];  //Styles that have the 2nd Accent Separate which can be the Same Color as Main
$text = ['FS1', 'FS2', 'FS3', 'FS4', 'FS5', 'FS6', 'FS7', 'FS8', 'FS9', 'FS10', 'FS11']; $textRef = 'Custom Text Here'; $textCut = [];
    $textSame = ['FS1', 'FS2', 'FS3', 'FS4', 'FS5', 'FS6', 'FS7', 'FS8', 'FS9', 'FS10', 'FS11'];
$text2 = []; $text2Ref = 'Custom Lower Text'; $text2Cut = []; $text2Same = [];
$text3 = []; $text3Ref = ''; $text3Cut = []; $text3Same = [];

/* Page Options */
$css_file = '/css/designs.min.css'; // page css file
$page_title = "Flaming Skull Motorcycle Gas Tank Graphics."; // page title
?>

<!DOCTYPE html>
    <script type="text/javascript">
        localStorage.setItem('graphicTable', '<?= $table; ?>');
    </script>

<html lang="en"<?= $rightClickProtect ?>>

<!-- Head -->
<?php include_once ROOT.'/private/includes/head.php'; /* includes page title, meta, prefetch, css sheets, js scripts etc. */?>
<body>
<div id="page">
    <div id="content">

    <!-- Header -->
        <?php include ROOT.'/private/includes/header.php'?>

        <!-- Graphic Designs Section -->
        <?php graphic_block_heading('Currently Available ' . $page_title); /* h2 Graphic Block Heading (automotive_functions.php) */ ?>

<?php
/**
 * Returned by function graphic_motorcycle_query()
 * @var $graphics
 * Global variable In INCLUDE motorcycle_functions.php
 */

while ($graphic = mysqli_fetch_assoc($graphics)) {
    require PRIV_PATH . '/includes/motorcycle/motorcycle_variables.php';
    /**
     * variables contained in INCLUDE automotive_variables.php
     * @var $graphic_id $graphic['id']
     * @var $part_number $graphic['part_number']
     * @var $product_name $graphic['product_name']
     * @var $image_path $graphic['image_path']
     * @var $image_on $graphic['product_image_on']
     * @var $design_image $graphic['design_image']
     * @var $width_ratio $graphic['width_ratio']
     * @var $height_ratio $graphic['height_ratio']
     * @var $size_min $graphic['size_min']
     * @var $size_max $graphic['size_max']
     * @var $price_base $graphic['price_base']
     * @var $ppsi_base $graphic['ppsi_base']
     * @var $weight $graphic['weight_base']
     * @var $design $graphic['part_graphic']
     * @var $unit $graphic['unit']
     */

    require ROOT.'/private/includes/motorcycle/mc_graphic_while_start.php';
    /** require ROOT.'/private/includes/motorcycle/mc_graphic_while_start.php' contains code for part number, container title, image work, selection etc.
     * @var $name
     * @var $graphic_design
     * @var $cart_image
     * @var $svg_image
     * @var $price
     * @var $weight
     */
    ?>

    <!-- Container Start -->
        <?php containerStart($product_name, $design, $graphic_design); ?>

            <!-- Form Start -->
                <?php formStart($design, $graphic_id, $foxy_cart); ?>

                <!-- Initial (main) Product Inputs -->
                    <?php require ROOT.'/private/includes/motorcycle/mc_graphic_form_initial_inputs.php' ?>

                <!-- Size Information -->
                    <?php sizeInformationStart(); ?>

                        <?php graphicSize(); ?>

                <!-- Graphic Section (material, color, accent, cutout options (trimOptions)) -->
                    <?php graphicInformationStart(); /* Closing </div> in textColorOptions */?>

                        <?php materialBrand($design); ?>

                        <?php mainColor($design); ?>

                        <?php accentColor($design, $accentStyles, $accentCut, $accentSame); // Accent Styles, Cut Styles, Same Styles ?>

                        <?php accentColor2($design, $accent2Styles, $accent2Cut, $accent2Same); ?>

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

                    <?php cartButton($design, $price, $unit) //Add to Cart Button ?>

                    <?php graphicInfoRequest($design, $part_number); //Form Button ?>

                <?php formClose(); ?>

            <?php containerFooter($part_number); ?>

        <?php containerEnd(); /* Container End (containerStart() function) */ ?>

    <?php
    }  // While Loop Close ?>

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