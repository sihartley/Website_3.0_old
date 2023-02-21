<?php
include_once '../../private/includes/initialize.php';

/* Database */
$brand = 'Vvivid'; $wrap1 = 'XPO'; $wrap2 = 'VViViD+';
$colors_wrap1_gloss = db_color_query($brand, $wrap1, ['Gloss', 'Metallic Gloss']);
$colors_wrap1_matte = db_color_query($brand, $wrap1, ['Matte', 'Metallic Matte']);
$colors_wrap1_liquid = db_color_query($brand, $wrap1, ['Liquid Metal']);
$colors_wrap1_glow = db_color_query($brand, $wrap1, ['Glow In The Dark']);
$colors_wrap2_gloss = db_color_query($brand, $wrap2, ['Gloss', 'Metallic Gloss']);
$colors_wrap2_matte = db_color_query($brand, $wrap2, ['Matte', 'Metallic Matte']);
$colors_wrap2_shift = db_color_query($brand, $wrap2, ['Metallic Shift Gloss', 'Metallic Shift Matte']);

db_disconnect(db_connect());

$color_items = ['premium gloss XPO', 'premium matte XPO', 'liquid metal XPO ', 'premium glow XPO', 'premium gloss vvivid+', 'premium matte vvivid+', 'premium shift vvivid+'];

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

<!-- Vvivid Color Chart -->

<!-- Vvivid XPO Color Chart -->
            <div id="wrap"  class="colors">
                <h2><?php echo "$brand $wrap1 "; ?>(Dry-Install) Vinyl Wrap Color Chart</h2>

                <div class="colors-wrap">
                    <img src="/images/icons/vvivid-logo.svg" alt="<?php echo "$brand $wrap1 "; ?>Vinyl Graphics Film Color Cart" style="aspect-ratio: <?php svg_ratio('/images/icons/vvivid-logo.svg'); ?>">
                    <h3><?php echo "$brand $wrap1 "; ?>(Dry-Install) Vinyl Wrap Film Colors</h3>
                    <h4 id="XPO-gloss"><?php echo "$brand $wrap1 "; ?>Premium Wrap Gloss Colors</h4>
                    <ul class="specs">
                        <li><span>3.4 mils Cast Wrap Film.</span></li>
                        <li><span>Up to 7 years durability on vertical applications.</span></li>
                        <li><span>Conformable fit around curves and in channels.</span></li>
                        <li><span>VViViD Natural Air release, VViViD Heat fuse.</span></li>
                        <li><span>High Gloss Finish.</span></li>
                        <li><span>Do not wet apply.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_wrap1_gloss)) { ?>
                            <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                            <li>
                                <div style="background-color: <?php echo $color['hex'] ?>" class="color-tile <?php echo $color_class ?>"></div>
                                <div class="color-name"><?php echo "{$color['color_name']} {$color['color_code']}" ?></div>
                            </li>
                        <?php } ?>
                    </ul>

                    <h4 id="XPO-matte"><?php echo "$brand $wrap1 "; ?>Premium Wrap Matte Colors</h4>
                    <ul class="specs">
                        <li><span>3.4 mils Cast Wrap Film.</span></li>
                        <li><span>Up to 7 years durability on vertical applications.</span></li>
                        <li><span>Conformable fit around curves and in channels.</span></li>
                        <li><span>VViViD Natural Air release, VViViD Heat fuse.</span></li>
                        <li><span>High Gloss Finish.</span></li>
                        <li><span>Do not wet apply.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_wrap1_matte)) { ?>
                            <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                            <li>
                                <div style="background-color: <?php echo $color['hex'] ?>" class="color-tile <?php echo $color_class ?>"></div>
                                <div class="color-name"><?php echo "{$color['color_name']} {$color['color_code']}" ?></div>
                            </li>
                        <?php } ?>
                    </ul>

                    <h4 id="XPO-metal"><?php echo "$brand $wrap1 "; ?>Premium Wrap Liquid Metal Colors</h4>
                    <ul class="specs">
                        <li><span>3.9 mils Cast Wrap Film.</span></li>
                        <li><span>Up to 5 year vertical outdoor performance.</span></li>
                        <li><span>Conformable fit around curves and in channels.</span></li>
                        <li><span>Removable, Pressure Activated Air Release Adhesive.</span></li>
                        <li><span>Do not wet apply.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_wrap1_liquid)) { ?>
                            <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                            <li>
                                <div style="background-color: <?php echo $color['hex'] ?>" class="color-tile <?php echo $color_class ?>"></div>
                                <div class="color-name"><?php echo "{$color['color_name']} {$color['color_code']}" ?></div>
                            </li>
                        <?php } ?>
                    </ul>

                    <h4 id="XPO-glow"><?php echo "$brand $wrap1 "; ?>Premium Wrap Glow In The Dark Colors</h4>
                    <ul class="specs">
                        <li><span>4.7 mil Cast Wrap Film.</span></li>
                        <li><span>Up to 7 years durability on vertical applications.</span></li>
                        <li><span>Conformable fit around curves and in channels.</span></li>
                        <li><span>Removable, Pressure Activated Air Release Adhesive.</span></li>
                        <li><span>Do not wet apply.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_wrap1_glow)) { ?>
                            <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                            <li>
                                <div style="background-color: <?php echo $color['hex'] ?>" class="color-tile <?php echo $color_class ?>"></div>
                                <div class="color-name"><?php echo "{$color['color_name']} {$color['color_code']}" ?></div>
                            </li>
                        <?php } ?>
                    </ul>
                </div>
            </div>

<!-- Vvivid+ Color Chart -->
            <div id="vvivid+"  class="colors">
                <div class="colors-wrap">
                    <img src="/images/icons/vvivid-logo.svg" alt="<?php echo "$brand $wrap2 "; ?>Vinyl Graphics Film Color Cart" style="aspect-ratio: <?php svg_ratio('/images/icons/vvivid-logo.svg'); ?>">
                    <h3><?php echo "$brand $wrap2 "; ?>(Dry-Install) Premium Vinyl Film Colors</h3>
                    <h4 id="vvivid+-gloss"><?php echo "$brand $wrap2 "; ?> Premium Wrap Gloss Colors</h4>
                    <ul class="specs">
                        <li><span>3.4 mil Cast Wrap Film.</span></li>
                        <li><span>Up to 7 years durability on vertical applications.</span></li>
                        <li><span>Conformable fit around curves and in channels.</span></li>
                        <li><span>Removable, Pressure Activated Air Release Adhesive.</span></li>
                        <li><span>Do not wet apply.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_wrap2_gloss)) { ?>
                            <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                            <li>
                                <div style="background-color: <?php echo $color['hex'] ?>" class="color-tile <?php echo $color_class ?>"></div>
                                <div class="color-name"><?php echo "{$color['color_name']} {$color['color_code']}" ?></div>
                            </li>
                        <?php } ?>
                    </ul>

                    <h4 id="vvivid+-matte"><?php echo "$brand $wrap2 "; ?>Premium Wrap Matte Colors</h4>
                    <ul class="specs">
                        <li><span>3.4 mil Cast Wrap Film.</span></li>
                        <li><span>Up to 7 years durability on vertical applications.</span></li>
                        <li><span>Conformable fit around curves and in channels.</span></li>
                        <li><span>Removable, Pressure Activated Air Release Adhesive.</span></li>
                        <li><span>Do not wet apply.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_wrap2_matte)) { ?>
                            <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                            <li>
                                <div style="background-color: <?php echo $color['hex'] ?>" class="color-tile <?php echo $color_class ?>"></div>
                                <div class="color-name"><?php echo "{$color['color_name']} {$color['color_code']}" ?></div>
                            </li>
                        <?php } ?>
                    </ul>

                    <h4 id="vvivid+-shift"><?php echo "$brand $wrap2 "; ?>Premium Wrap Shift Colors</h4>
                    <ul class="specs">
                        <li><span>3.4 mil Cast Wrap Film.</span></li>
                        <li><span>Up to 7 years durability on vertical applications.</span></li>
                        <li><span>Conformable fit around curves and in channels.</span></li>
                        <li><span>Removable, Pressure Activated Air Release Adhesive.</span></li>
                        <li><span>Shift Colors change color depending on light, or viewing angle.</span></li>
                        <li><span>Do not wet apply.</span></li>
                    </ul>
                    <h5>Please note: The appearance of these colors may appear differently depending on the individual screen/monitor settings, and the device they are viewed on, and are for reference only.</h5>
                    <ul>
                        <?php while ($color = mysqli_fetch_assoc($colors_wrap2_shift)) { ?>
                            <?php $color_class = strtolower(str_replace(' ', '-', $color['color_type'])) ?>
                            <li>
                                <div style="<?php echo $color['gradient'] ?>" class="color-tile <?php echo $color_class ?>"></div>
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
