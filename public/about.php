<?php
/* Core Functions (Functions for ALL Pages NO Exceptions) */
include_once '../private/functions/core_functions.php';
/* Global Functions (Functions for ALL Pages) */
include_once '../private/functions/global_functions.php';
/* Server Detection, Database Prefix, HTML Minification, Right Click Protection, Live Reload, Server ID Dot, Database Credentials*/
[$hostingServer, $dbPrefix, $minifyHTML, $rightClickProtect, $liveReload, $serverDot] = host_ident($_SERVER['SERVER_ADDR']);

/* Business Info */
include '../private/includes/business_info.php';

$page_title = 'About Us';
$css_file = '/css/about.min.css';
/* HTML Minification */
$minifyHTML;
?>

<!DOCTYPE html>
<html lang="en"<?php echo $rightClickProtect; ?>>


<!-- Head -->
<?php include_once '../private/includes/head.php'?>

<body>

<div id="page">
    <div id="content">
        <?php
        include '../private/includes/header.php' ?>

        <!-- What we offer. -->
        <?php echo str_replace(['h3>', 'h4>'], ['h2>', 'h3>'], file_get_contents('../private/includes/about/offer.php')); ?>

        <!-- Graphics -->
        <?php include '../private/includes/about/graphics.php'?>

        <!-- Design -->
        <?php echo str_replace(['h3>', 'h4>'], ['h2>', 'h3>'], file_get_contents('../private/includes/about/design.php')); ?>

        <!-- Materials -->
        <?php include '../private/includes/about/materials.php'?>



        <!-- Navigation -->
        <?php include '../private/includes/navigation.php'; ?> <!-- Simon: Info: Keep inside content div for page anchors to work properly -->
    </div> <!-- #content close -->

    <!-- footer -->
    <?php include_once '../private/includes/footer.php' /* Simon: Info: Keep here for positioning and scrolling to work correctly */?>

</div> <!-- #page close -->

<?php echo $liveReload . '<!-- '.$dbPrefix.' -->'; ?>
</body>

</html>
<!-- Simon: Todo: create and move this to include file foot.php -->
<?php ob_end_flush(); ?>
