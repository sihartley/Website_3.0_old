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
//            echo '<pre>';
//            echo $vehicle['trims'];
//            print_r(explode(', ', $vehicle['trims']));
//            echo '</pre>';
            ?>

        <?php
            $design = sprintf('%02s', 1);
            while (file_exists(PUB_PATH.$graphic['image_path'].str_replace ('01', $design, $graphic['design_image']))) {
                $part_number = "{$graphic['part_number']}-$design";
                $name = "{$graphic['product_name']}<br>Design Style - $design";
                $image = $graphic['image_path'].str_replace ('01', $design, $graphic['design_image']);
                $image_alt = $name;
                $lazy = ''; if ($design > 3) { $lazy = "loading='lazy'"; }

            ?>
            <div id="cartContainer-<?= $design ?>" class="design cart-container">
                <h3><?= $name ?></h3>
                <div class="image">
                    <img src="<?= $image ?>" alt="<?= $image_alt ?>" style="aspect-ratio: <?php image_ratio($image); ?>" <?= $lazy ?>>
                    <h3><?= $part_number ?></h3>
                    </a>
                </div>
                <div class="form">
                    <form id="form-<?= $design ?>" data-fc-form-code="p<?= $design ?>" action="<?php echo $foxy_cart; ?>" method="post" accept-charset="utf-8">
                        <input type="hidden" name="name" value="<?= "$year_range $make $model {$graphic['product_name']}" ?>" />
                        <input type="hidden" name="image" value="<?= $image ?>" />
                        <input type="hidden" name="Part #:" value="<?= $part_number ?>" />
                        <input type="hidden" name="Design:" value="Design <?= $design ?>" />
                        <input type="hidden" name="price" value="<?= $price ?>" />
                        <input type="hidden" name="weight" value="<?= $graphic['weight_1'] ?>" />

                        <div class="vehicle-details">
                            <h4>Vehicle Information</h4>
                            <?php modelYears(); ?>
                            <?php trimLevels(); ?>
                        </div>

                        <div class="graphic-details">
                            <h4>Graphic Customization</h4>
                            <?php materialBrand(); ?>

                            <div class="main-color">
                                <select id="maincolor_<?= $design ?>" data-placeholder="Main Color" name="Main Color" onchange="initDynamicPrice();" style="width: 100%;" required disabled>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div class="accent">
                                <select id="accentcolor_<?= $design ?>" data-placeholder="Accent Color" name="Accent" onchange="initDynamicPrice();" style="width: 100%;" required disabled>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div class="accent2">
                                <select id="accentcolor2_<?= $design ?>" data-placeholder="Accent 2 Color" name="Accent 2" onchange="initDynamicPrice();" style="width: 100%;" required disabled>
                                    <option value=""></option>
                                </select><br>
                            </div>
                        </div>

                        <div class="graphic-details">
                            <div class="option-switch">
                                <label for="main-options-<?= $design ?>"
                                       data-txt="Add Text and Logo Options?"
                                       data-alt-txt="Please select which area(s) you would like to customize.">
                                    Add Text and Logo Options?
                                </label>
                                <input id="main-options-<?= $design ?>" class="options-check" type="checkbox">
                            </div>
                            <div class="options" style="display: none">
                                <div class="text-option">
                                    <div>
                                        <label for="option-1-<?= $design ?>"
                                               data-txt="Front & Center Text/Logo"
                                               data-alt-txt="Specify Text/Logo and Color Options">
                                            Front & Center Text/Logo
                                        </label>
                                        <input id="option-1-<?= $design ?>" type="checkbox">
                                    </div>
                                    <div class="option" style="display: none">
                                        <input type="text">
                                        <select id="textcolor_<?= $design ?>" data-placeholder="Text/Logo Color" name="Text1" onchange="initDynamicPrice();" style="width: 100%;" disabled>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>
                                <div class="text-option">
                                    <div>
                                        <label for="option-2-<?= $design ?>">Side Text/Logo</label>
                                        <input id="option-2-<?= $design ?>" type="checkbox">
                                    </div>
                                    <div class="option" style="display: none">
                                        <input type="text">
                                        <select id="textcolor2_<?= $design ?>" data-placeholder="Text/Logo Color" name="Text2" onchange="initDynamicPrice();" style="width: 100%;" disabled>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>
                                <div class="text-option">
                                    <div>
                                        <label for="option-3-<?= $design ?>">Side Text/Logo</label>
                                        <input id="option-3-<?= $design ?>" type="checkbox">
                                    </div>
                                    <div class="option" style="display: none">
                                        <input type="text">
                                        <select id="textcolor3_<?= $design ?>" data-placeholder="Text/Logo Color" name="Text3" onchange="initDynamicPrice();" style="width: 100%;" disabled>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>
                            </div>

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