<?php
/** @var $dbPrefix
 * @var $rightClickProtect
 *  From function hostident() IN core_functions.php INCLUDE in initialize.php
 */
require_once dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';

/* Database */
$brand = 'Avery'; $premium = 'SC950'; $wrap = 'SW900'; $reflective = 'HV1200'; $chrome = 'SF100';

$colors_reflective = db_color_query($brand, $reflective, ['High Visibility Reflective']);
$colors_premium = db_color_query($brand, $premium, ['Gloss', 'Matte']);
$colors_wrap_gloss = db_color_query($brand, $wrap, ['Gloss', 'Metallic Gloss']);
$colors_wrap_matte = db_color_query($brand, $wrap, ['Matte', 'Metallic Matte']);
$colors_wrap_satin = db_color_query($brand, $wrap, ['Satin', 'Metallic Satin']);
$colors_wrap_texture = db_color_query($brand, $wrap, ['Carbon Fiber', 'Brushed Metallic']);
$colors_wrap_chrome = db_color_query($brand, $chrome, ['Chrome']);
$colors_wrap_shift = db_color_query($brand, $wrap, ['Metallic Shift Gloss', 'Metallic Shift Satin']);
db_disconnect(db_connect());

$color_items = ['premium cast SC950', 'premium gloss wrap', 'premium matte wrap', 'premium satin wrap', 'premium textured wrap', 'premium chrome wrap', 'premium shift wrap', 'premium reflective HV1200'];


$page_title = "$brand Vinyl Color Charts";
$css_file = '/css/color-charts.min.css';

?>

<!DOCTYPE html>
<html lang="en"<?php echo $rightClickProtect; ?>>

<!-- Head -->
<?php include_once ROOT.'/private/includes/head.php'?>

<body>

<div id="page">
    <div id="content">
        <!-- Header -->
        <?php include ROOT.'/private/includes/header.php' ?>

        <?php include ROOT.'/private/includes/colors/color_type_menu.php' ?>

        <!-- Page Content -->
        <section id="colors">

<!-- Avery SC950 Color Chart -->
            <div id="SC950-cast"  class="colors">
                <h2><?php echo "$brand "; ?>Wet-Install Vinyl Graphic Film Color Charts</h2>

                <div class="colors-premium">
                    <img src="/images/icons/avery-logo.svg" alt="<?php echo "$brand $premium "; ?>Vinyl Graphics Film Color Cart" style="aspect-ratio: <?php svg_ratio('/images/icons/avery-logo.svg'); ?>">
                    <h3><?php echo "$brand $premium "; ?>(Wet-Install) Vinyl Film Colors</h3>
                    <h4>Vinyl Film Information</h4>
                    <ul class="specs">
                        <li><span>High quality, high performance, 2 mil cast.</span></li>
                        <li><span>Up to 7 year outdoor durability.</span></li>
                        <li><span>For permanent, pre-spaced, graphics.</span></li>
                        <li><span>Clear, pressure sensitive adhesive.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_premium)) { ?>
                          <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                        <li>
                            <div style="background-color: <?php echo $color['hex'] ?>" class="color-tile <?php echo $color_class ?>"></div>
                            <div class="color-name"><?php echo "{$color['color_name']} {$color['color_code']}" ?></div>
                        </li>
                        <?php } ?>
                    </ul>
                </div>
            </div>

<!-- Avery SW900 Color Chart -->
            <div id="wrap"  class="colors">
                <h2><?php echo "$brand $wrap "; ?>(Dry-Install) Vinyl Wrap Color Chart</h2>

                <div class="colors-wrap">
                    <img src="/images/icons/avery-logo.svg" alt="<?php echo "$brand $wrap "; ?>Wrap Vinyl Graphics Film Color Cart" style="aspect-ratio: <?php svg_ratio('/images/icons/avery-logo.svg'); ?>">
                    <h3><?php echo "$brand $wrap "; ?>(Dry-Install) Vinyl Wrap Film Colors</h3>
                    <h4 id="wrap-gloss"><?php echo "$brand $wrap "; ?>Premium Wrap Gloss Colors</h4>
                    <ul class="specs">
                        <li><span>3.5 Mil Cast Wrap Film.</span></li>
                        <li><span>Up to 7 years durability on vertical applications.</span></li>
                        <li><span>Conformable fit around curves and in channels.</span></li>
                        <li><span>Removable, Pressure Activated Air Release Adhesive.</span></li>
                        <li><span>High Gloss Finish.</span></li>
                        <li><span>Do not wet apply.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_wrap_gloss)) { ?>
                            <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                            <li>
                                <div style="background-color: <?php echo $color['hex'] ?>" class="color-tile <?php echo $color_class ?>"></div>
                                <div class="color-name"><?php echo "{$color['color_name']} {$color['color_code']}" ?></div>
                            </li>
                        <?php } ?>
                    </ul>

                    <h4 id="wrap-matte"><?php echo "$brand $wrap "; ?>Premium Wrap Matte Colors</h4>
                    <ul class="specs">
                        <li><span>3.5 Mil Cast Wrap Film.</span></li>
                        <li><span>Up to 7 years durability on vertical applications.</span></li>
                        <li><span>Conformable fit around curves and in channels.</span></li>
                        <li><span>Removable, Pressure Activated Air Release Adhesive.</span></li>
                        <li><span>Flat Matte, Non-Gloss Finish.</span></li>
                        <li><span>Do not wet apply.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_wrap_matte)) { ?>
                            <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                            <li>
                                <div style="background-color: <?php echo $color['hex'] ?>" class="color-tile <?php echo $color_class ?>"></div>
                                <div class="color-name"><?php echo "{$color['color_name']} {$color['color_code']}" ?></div>
                            </li>
                        <?php } ?>
                    </ul>

                    <h4 id="wrap-satin"><?php echo "$brand $wrap "; ?>Premium Wrap Satin Colors</h4>
                    <ul class="specs">
                        <li><span>3.5 Mil Cast Wrap Film.</span></li>
                        <li><span>Up to 7 years durability on vertical applications.</span></li>
                        <li><span>Conformable fit around curves and in channels.</span></li>
                        <li><span>Removable, Pressure Activated Air Release Adhesive.</span></li>
                        <li><span>Satin/Silky Finish.</span></li>
                        <li><span>Do not wet apply.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_wrap_satin)) { ?>
                            <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                            <li>
                                <div style="background-color: <?php echo $color['hex'] ?>" class="color-tile <?php echo $color_class ?>"></div>
                                <div class="color-name"><?php echo "{$color['color_name']} {$color['color_code']}" ?></div>
                            </li>
                        <?php } ?>
                    </ul>

                    <h4 id="wrap-shift"><?php echo "$brand $wrap "; ?>Premium Wrap Shift Colors</h4>
                    <ul class="specs">
                        <li><span>3.5 Mil Cast Wrap Film.</span></li>
                        <li><span>Up to 7 years durability on vertical applications.</span></li>
                        <li><span>Conformable fit around curves and in channels.</span></li>
                        <li><span>Removable, Pressure Activated Air Release Adhesive.</span></li>
                        <li><span>Shift Colors change color depending on light, or viewing angle.</span></li>
                        <li><span>Do not wet apply.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_wrap_shift)) { ?>
                            <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                            <li>
                                <div style="<?php echo $color['gradient'] ?>" class="color-tile <?php echo $color_class ?>"></div>
                                <div class="color-name"><?php echo "{$color['color_name']} {$color['color_code']}" ?></div>
                            </li>
                        <?php } ?>
                    </ul>

                    <h4 id="wrap-textured"><?php echo "$brand $wrap "; ?>Premium Wrap Textured Colors</h4>
                    <ul class="specs">
                        <li><span>4 Mil Cast Wrap Film.</span></li>
                        <li><span>5 year expected outdoor performance.</span></li>
                        <li><span>Conformable fit around curves and in channels.</span></li>
                        <li><span>Removable, Pressure Activated Air Release Adhesive.</span></li>
                        <li><span>Do not wet apply.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_wrap_texture)) { ?>
                            <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                            <li>
                                <div style="background-color: <?php echo $color['hex'] ?>" class="color-tile <?php echo $color_class ?>"></div>
                                <div class="color-name"><?php echo "{$color['color_name']} {$color['color_code']}" ?></div>
                            </li>
                        <?php } ?>
                    </ul>

                    <h4 id="wrap-chrome"><?php echo "$brand $chrome "; ?>Premium Wrap Chrome Colors</h4>
                    <ul class="specs">
                        <li><span>4 Mil Cast Wrap Film.</span></li>
                        <li><span>5 year expected outdoor performance.</span></li>
                        <li><span>Conformable fit around curves and in channels.</span></li>
                        <li><span>Removable, Pressure Activated Air Release Adhesive.</span></li>
                        <li><span>Do not wet apply.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_wrap_chrome)) { ?>
                            <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                            <li>
                                <div style="background-color: <?php echo $color['hex'] ?>" class="color-tile <?php echo $color_class ?>"></div>
                                <div class="color-name"><?php echo "{$color['color_name']} {$color['color_code']}" ?></div>
                            </li>
                        <?php } ?>
                    </ul>

                </div>
            </div>

<!-- Avery HV1200 Color Chart -->
            <div id="reflective"  class="colors">
                <div class="colors-reflective">
                    <img src="/images/icons/avery-logo.svg" alt="<?php echo "$brand $reflective "; ?>Reflective Vinyl Graphics Film Color Cart" style="aspect-ratio: <?php svg_ratio('/images/icons/avery-logo.svg'); ?>">
                    <h3><?php echo "$brand $reflective "; ?>(Wet-Install) Reflective Vinyl Film Colors</h3>
                    <h4 id="HV1200-reflective">Reflective Material Information</h4>
                    <ul class="specs">
                        <li><span>Premium 7 mil engineering grade Type 1 reflective vinyl.</span></li>
                        <li><span>Up to 9 year durability</span></li>
                        <li><span>Clear removable pressure-activated adhesive with air release.</span></li>
                        <li><span>Do not wet apply.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_reflective)) { ?>
                            <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                            <li>
                                <div style="background-color: <?php echo $color['hex'] ?>" class="color-tile <?php echo $color_class ?>"></div>
                                <div class="color-name"><?php echo "{$color['color_name']} {$color['color_code']}" ?></div>
                            </li>
                        <?php } ?>
                    </ul>
                </div>
            </div>


        </section>

        <!-- Navigation -->
        <?php include ROOT.'/private/includes/navigation.php'; ?> <!-- Note: Keep inside content div for page anchors to work properly -->
    </div> <!-- #content close -->

    <!-- footer -->
    <?php include_once ROOT.'/private/includes/footer.php' /* Note: Keep here for positioning and scrolling to work correctly */?>

</div> <!-- #page close -->

<?php if (!empty($liveReload)) { echo $liveReload . '<!-- '.$dbPrefix.' -->'; } ?>
</body>

</html>
<!-- Simon: Todo: create and move this to include file foot.php -->
<?php ob_end_flush(); ?>
