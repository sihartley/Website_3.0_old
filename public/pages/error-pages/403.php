<?php
/** @var $dbPrefix
 * @var $rightClickProtect
 *  From function hostident() IN core_functions.php INCLUDE in initialize.php
 */
require_once dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';
$requested_url = $_SERVER['REQUEST_URI'];
$lowercase_url = strtolower($requested_url);

if ( $requested_url !== $lowercase_url ) {
    header("Location: $lowercase_url");
    exit();
} else {

    $page_title = 'Error 403: Access Forbidden!';
    $css_file = '/css/error-pages.min.css';
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

            <div class="error-screen">
                <h1>403</h1>
                <div class="cloak__wrapper">
                    <div class="cloak__container">
                        <div class="cloak"></div>
                    </div>
                </div>
                <div class="info">
                    <h2>Access to this Page or Directory is Forbidden!</h2>
                    <p>Something must have gone wrong please return to the home page.</p>
                </div>
            </div>



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

<?php } // if ( $requested_url !== $lowercase_url ) ?>
