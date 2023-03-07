<?php
/** @var $rightClickProtect
 *  From function hostident() IN core_functions.php INCLUDE in initialize.php
 */
require_once dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';

$page_title = 'Installation Insurance';
$css_file = '/css/support.min.css';

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

<!-- Page Content -->
        <section id="insurance">
            <div class="insurance">
                <img src="/images/icons/insurance.svg" alt="Installation Insurance" style="aspect-ratio: <?php svg_ratio('/images/icons/insurance.svg'); ?>">
                <h2>What is installation insurance?</h2>
                <p>Graphics Installation Insurance is optional and offered at checkout for a small cost added to your total. For some, this is preferable to purchasing a complete replacement kit if something goes wrong during installation! If you select to buy this insurance, your graphics kit will be covered against any mishaps while installing your graphics kit. Installation insurance gives you peace of mind and removes pressure while installing your graphics.</p>

<!-- What is covered -->
                <div class="covered">
                    <img src="/images/icons/covered.svg" alt="What is Covered" style="aspect-ratio: <?php svg_ratio('/images/icons/covered.svg'); ?>">
                    <h3>What is Covered</h3>
                    <p>You covered your graphics kit under our installation insurance policy by selecting and paying for installation insurance at checkout. Should anything go wrong during installation, we will replace the required sections up to a complete replacement kit one time. Covered mishaps include, but are not limited to, tears, contamination, folds, incorrect positioning, the vinyl sticking to itself, dropping the vinyl. Any problem that you are unable to repair after installation reasonably.</p>
                    <p>Note on bubbles: Bubbles can often be removed using a needle and allowing the air/water out. We will recommend and ask that you attempt this before replacing any part of your kit.</p>
                </div>

<!-- Not Covered -->
                <div class="not-covered">
                    <img src="/images/icons/not-covered.svg" alt="What is Not covered" style="aspect-ratio: <?php svg_ratio('/images/icons/not-covered.svg'); ?>">
                    <h3>What is Not Covered</h3>
                    <p>Installation insurance does not cover changes of color, modifications of design style, changes to the graphic kit purchased initially at checkout, or anything that happens post-installation. It also does not cover installations that take place over 30 days after receiving your graphics. Once your graphics kit is delivered, you have 30 days to install them; after that time, your graphics installation insurance policy will expire. Installation insurance does not include shipping for replacement kits or parts thereof under the policy. We will only replace items with identical items purchased at checkout after completing payment for shipping.</p>
                </div>

<!-- Not Covered -->
                <div class="requirements">
                    <img src="/images/icons/requirements.svg" alt="Installation Insurance Requirements" style="aspect-ratio: <?php svg_ratio('/images/icons/requirements.svg'); ?>">
                    <h3>Claim Requirements</h3>
                    <p>The requirements to file an installation insurance claim for your order are as follows.</p>
                    <ol>
                        <li>You must have purchased installation insurance at the same time as your graphics order or before your order is shipped if there is an issue at checkout.</li>
                        <li>Per the carrier delivery scan, you must be within the 30-day coverage period from the delivery date.</li>
                        <li>You must supply pictures of the installation issue to be able to claim. We will only honor your installation insurance claim if you provide us with a picture of the installation issue.</li>
                        <li>You must include payment for shipping your graphics kit's replacement section(s) with your claim.</li>
                        <li>You must file a claim using our online claim form.</li>
                    </ol>
                </div>

                <!-- Time-Frame -->
                <div class="claim-time">
                    <img src="/images/icons/claim-time.svg" alt="Claim Time" style="aspect-ratio: <?php svg_ratio('/images/icons/claim-time.svg'); ?>">
                    <h3>How long does a claim take</h3>
                    <p>Claims take little time to process. As soon as we receive your claim form, pictures, and payment for shipping the replacement section(s), your replacement section(s) will be on the way. We resolve 90% of claims within 24 hours of claim submission. There are exceptions. We will sometimes have to order exotic materials we usually don't keep in stock before we can produce the replacement section(s) you need.</p>
                </div>

<!-- File a Claim -->
                <div class="claim">
                    <img src="/images/icons/form.svg" alt="File an Installation Insurance Claim" style="aspect-ratio: <?php svg_ratio('/images/icons/form.svg'); ?>">
                    <h3>How to File a Claim</h3>
                    <a href="#" class="claim-button" aria-label="File an Installation Insurance Claim">
                        <div>
                            <span>File Installation</span><br>
                            <span>Insurance Claim</span>
                        </div>
                    </a>
                    <p>Contact us immediately if you have a problem during installation using the links below. We will then open a claim and will contact you for further information. Photographs are required to complete your claim.</p>
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
