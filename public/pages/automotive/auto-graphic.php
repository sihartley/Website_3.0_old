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
$id = 218;

//Simon: Todo: Incorporate this into graphic_vehicle_query()
[$graphic, $vehicle] = graphic_vehicle_query($id);

$make = $graphic['make'];
$model = $graphic['model'];
$year = $graphic['year'];
$year_range = $vehicle['year'];
$price = ceil($graphic['price_1']);

$accentStyles = [1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 16, 17, 18]; //Styles that have an Accent
$accentCut = [1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 16, 18]; //Styles that have the Accent Cut-Out
$accentSame = [17]; //Styles that have the accent Separate which can be the Same Color as Main
$accent2Styles = []; //Styles with a 2nd Accent
$accent2Cut = []; //Styles that have the 2nd Accent Cut-Out
$accent2Same = [];  //Styles that have the 2nd Accent Separate which can be the Same Color as Main
$text = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 16, 17]; $textRef = 'Front Center Text'; $textCut = [1, 3, 5, 6, 7, 8, 9, 10, 14, 16, 17]; $textSame = [2, 4, 15];
$text2 = [1, 2, 5, 6, 7, 8, 9, 10, 13, 15, 16, 17]; $text2Ref = 'Side Text'; $text2Cut = [1, 2, 5, 6, 7, 8, 9, 10, 13, 15, 16, 17]; $text2Same = [];
$text3 = []; $text3Ref = ''; $text3Cut = []; $text3Same = [];


$css_file = '/css/designs.min.css';
$page_title = "$year_range $make $model {$graphic['product_name']}";
$h2 = "<span>$year_range $model<br></span><span>{$graphic['product_name']}<br></span>Designs Currently Available"
?>

<!DOCTYPE html>
    <script type="text/javascript">
        localStorage.setItem('graphicId', '<?= $id; ?>')
    </script>

<html lang="en"<?= $rightClickProtect ?>>

<!-- Head -->
<?php include_once ROOT.'/private/includes/head.php'?>

<body>
<div id="page">
    <div id="content">

        <!-- Header -->
        <?php include ROOT.'/private/includes/header.php'?>

        <section class="graphic-look">
<!--            <h2>--><?php //?><!--</h2>-->
            <img src="<?= $graphic['image_path'].$graphic['product_image_on'] ?>" alt="" style="aspect-ratio: <?= image_ratio($graphic['image_path'].$graphic['product_image_on']) ?>">
        </section>


        <section class="graphic-designs">
            <h2><?= $h2 ?></h2>

            <?php
            //Simon: Note: Testing Area
            ?>

        <?php
            $design = sprintf('%02s', 1);
            while (file_exists(PUB_PATH.$graphic['image_path'].str_replace ('01', $design, $graphic['design_image']))) {
                $part_number = "{$graphic['part_number']}-$design";
                $name = "{$graphic['product_name']}<br>Design Style - $design";
                $image_file = PUB_PATH.$graphic['image_path'].str_replace ('01', $design, $graphic['design_image']);
                $image_alt = $name;
                $lazy = ''; if ($design > 3) { $lazy = "loading='lazy'"; }

                $svg_image = str_replace(substr($graphic['design_image'], strpos($graphic['design_image'], ".") + strlen(".")), "svg", $graphic['design_image']);

                if (file_exists(PUB_PATH.$graphic['image_path'].str_replace ('01', $design, $svg_image))) {
                    $image = $graphic['image_path'].str_replace ('01', $design, $svg_image);
                    $svg_code = file_get_contents(PUB_PATH.$graphic['image_path'].str_replace ('01', $design, $svg_image));
                    $graphic_design = substr($svg_code, strpos($svg_code, '<svg'));
                    } else {
                    $image = $graphic['image_path'].str_replace ('01', $design, $graphic['design_image']);
                    $graphic_design = "<img src='$image' alt='$image_alt' style='aspect-ratio: php graphicRatio($image);' $lazy>";
                };

                $price = pricing();
                $weight = weight();
            ?>

            <div id="cartContainer-<?= $design ?>" class="design cart-container">
                <h3><?= $name ?></h3>
                <div id="graphic_<?= $design ?>" class="image">
                    <?= $graphic_design ?>
                    <h3><?= $part_number ?></h3>
                    </a>
                </div>
                <div class="form">
                    <form id="form-<?= $design ?>" data-fc-form-code="p<?= $design ?>" action="<?= $foxy_cart; ?>" method="post" accept-charset="utf-8">
                        <input type="hidden" name="name" value="<?= "$year_range $make $model {$graphic['product_name']}" ?>" />
                        <input type="hidden" name="image" value="<?= $image ?>" />
                        <input type="hidden" name="Part #:" value="<?= $part_number ?>" />
                        <input type="hidden" name="Design:" value="Design <?= $design ?>" />
                        <input type="hidden" name="price" value="<?= $price ?>" />
                        <input type="hidden" name="weight" value="<?= $weight ?>" />

                        <div class="vehicle-details">
                            <h4>Vehicle Information</h4>
                            <?php modelYears(); ?>

                            <?php trimLevels(null, null, null, null); ?>

                            <?php carColors(); ?>
                        </div>

                        <div class="graphic-details"> <!-- Main & Accent Colors -->
                            <h4>Graphic Customization</h4>

                            <?php materialBrand(); ?>

                            <?php mainColor(); ?>

                            <?php accentColor($accentStyles, $accentCut, $accentSame); // Accent Styles, Cut Styles, Same Styles ?>

                            <?php accentColor2($accent2Styles, $accent2Cut, $accent2Same); ?>
                        </div>

                        <div class="graphic-details" style="display: none "> <!-- Text Colors & Options -->

                            <?php textColorOptions(
                                $text, $textRef, $textCut, $textSame,
                                $text2, $text2Ref, $text2Cut, $text2Same,
                                $text3, $text3Ref, $text3Cut, $text3Same, $accentStyles, $accent2Styles
                            ); ?>

                            <label class="notes label_left">Notes</label>
                            <textarea class="notes" placeholder="Any other details you would like us to know here..." name="Notes:" rows="3" cols="40"></textarea>

                        </div>

                        <button class="buy-now-button">
                            <span>Add to Cart</span><br>
                            <span class="p<?= $design ?>_total">From $<?= $price ?> </span>
                        </button>

                    </form>
                </div>
            </div>
        <?php $design = sprintf('%02s', ++$design); } ?>
        </section>





        <!-- Navigation -->
        <?php include ROOT.'/private/includes/navigation.php'; ?> <!-- Note: Keep inside content div for page anchors to work properly -->
    </div> <!-- #content close -->

    <!-- footer -->
    <?php include_once ROOT.'/private/includes/footer.php' /* Note: Keep here for positioning and scrolling to work correctly */?>

</div> <!-- #page close -->

<!-- LiveReload for activates on local server only -->
<?php if (!empty($liveReload)) { echo $liveReload . '<!-- '.$dbPrefix.' -->'; } ?>
</body>

    </html>

    <!-- Simon: Todo: create and move this to include file foot.php -->
    <?php ob_end_flush();
?>