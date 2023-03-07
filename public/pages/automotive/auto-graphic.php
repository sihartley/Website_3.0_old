<?php
require_once dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';
/**
 * @var $_GET
 * values passed in URI after ? (vehicle-main.php?make=foo&model=bar)
 * @var $dbPrefix
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 * @var $rightClickProtect
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 */
//$id = $_GET['id'];
$id = 414;

$columns = ['part_number', 'make', 'model', 'year', 'product_name', 'image_path', 'product_image_on', 'design_image', 'price_1', 'unit',' weight_1'];
$graphic_query = "( SELECT part_number, make, model, year, product_name, image_path, product_image_on, design_image, price_1, unit, weight_1 FROM Automotive.graphics WHERE id = $id )";
$graphic = mysqli_fetch_assoc(db_query($graphic_query));
$vehicle_query = "( SELECT year, years, trims FROM Automotive.vehicles WHERE make = '{$graphic['make']}' AND model = '{$graphic['model']}' AND year LIKE '%{$graphic['year']}%' )";
$vehicle = mysqli_fetch_assoc(db_query($vehicle_query));
db_disconnect(db_connect());


$make = $graphic['make'];
$model = $graphic['model'];
$year = $graphic['year'];
$year_range = $vehicle['year'];
$price = ceil($graphic['price_1']);

$css_file = '/css/designs.min.css';
$page_title = "$year_range $make $model {$graphic['product_name']}";
$h2 = "$year_range $model {$graphic['product_name']} Available Designs"

?>

<!DOCTYPE html>
<html lang="en"<?= $rightClickProtect ?>>

<!-- Head -->
<?php include_once ROOT.'/private/includes/head.php'?>

<body>
<div id="page">
    <div id="content">

        <!-- Header -->
        <?php include ROOT.'/private/includes/header.php'?>

        <section class="graphic-look">
            <h2><?= $h2 ?></h2>
            <img src="<?= $graphic['image_path'].$graphic['product_image_on'] ?>" alt="" style="aspect-ratio: <?= image_ratio($graphic['image_path'].$graphic['product_image_on']) ?>">
        </section>


        <section class="graphic-designs">
            <h2><?= $h2 ?></h2>

        <?php
            $design = sprintf('%02s', 1);
            while (file_exists(PUB_PATH.$graphic['image_path'].str_replace ('01', $design, $graphic['design_image']))) {
                $part_number = "{$graphic['part_number']}-$design";
                $name = "{$graphic['product_name']} Design Style - $design";
                $image = $graphic['image_path'].str_replace ('01', $design, $graphic['design_image']);
                $image_alt = $name;
                $lazy = ''; if ($design > 3) { $lazy = "loading='lazy'"; }

            ?>
            <div class="design">
                <h3><?= $name ?></h3>
                <div class="image">
                    <img src="<?= $image ?>" alt="<?= $image_alt ?>" style="aspect-ratio: <?php image_ratio($image); ?>" <?= $lazy ?>>
                    <h3><?= $part_number ?></h3>
                    </a>
                </div>
                <div class="form">
                    <form data-fc-form-code="p<?= $design ?>" action="<?php echo $foxy_cart; ?>" method="post" accept-charset="utf-8">
                        <input type="hidden" name="name" value="2022 Ford Maverick Mach 1 Esque Hood Decal" />
                        <input type="hidden" name="image" value="<?= $image ?>" />
                        <input type="hidden" name="Design" value="Design <?= $design ?>" />
                        <input type="hidden" name="price" value="<?= $price ?>" />
                        <input type="hidden" name="Part" value="<?= $part_number ?>" />
                        <input type="hidden" name="weight" value="2" />
                        <label class="label_left">Color</label>
                        <select name="Main Color" onchange="initDynamicPrice();">
                            <option value="Black">Black</option>
                            <option value="Red{p+10|w+1.2}">Red (+$10)</option>
                            <option value="White">White</option>
                        </select><br>
                        <label class="label_left">Accent</label>
                        <select name="Accent" onchange="initDynamicPrice();">
                            <option value="orange">Orange</option>
                            <option value="yellow{p+10|w+1.2}">Yellow (+$10)</option>
                            <option value="green">Green</option>
                        </select><br>
                        <label class="label_left">Accent 2</label>
                        <select name="Accent 2" onchange="initDynamicPrice();">
                            <option value="pink">Pink</option>
                            <option value="brown{p+10|w+1.2}">Brown (+$10)</option>
                            <option value="blue">Blue</option>
                        </select><br>
                        <label class="label_left">Notes
                            <input type="text" name="Design Notes" value="Design Notes"></label><br>
<!--                        <input type="submit" value="Add to Cart" class="submit add-to-cart" />-->

                        <button class="buy-now-button">
                            <span>Add to Cart</span><br>
                            <span class="p<?= $design ?>_total">From $<?= $price ?> </span>
                        </button>

                    </form>

<!--                    <a href="" class="buy-now-button" aria-label="">-->
<!--                        <div>-->
<!--                            <span>Add to Cart</span><br>-->
<!--                            <span class="p--><?php //= $design ?><!--_total">From $--><?php //= $price ?><!-- </span>-->
<!--                        </div>-->
<!--                    </a>-->

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