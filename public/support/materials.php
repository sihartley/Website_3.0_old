<?php
/** @var $rightClickProtect
 *  From function hostident() IN core_functions.php INCLUDE in initialize.php
 */

require_once dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';

$page_title = 'Materials We Use';
$css_file = '/css/support.min.css';

?>

<!DOCTYPE html>
<html lang="en"<?php echo $rightClickProtect; ?>>


<!-- Head -->
<?php include_once ROOT.'/private/includes/head.php'?>

<body>

<div id="page">
    <div id="content">
        <?php
        include ROOT.'/private/includes/header.php' ?>

        <!-- Materials -->
        <?php include ROOT.'/private/includes/materials/materials.php'?>


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
