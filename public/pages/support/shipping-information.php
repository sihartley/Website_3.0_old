<?php
/** @var $dbPrefix *From functions/core_functions.php
 ** @var $rightClickProtect *From functions/core_functions.php
 ** @var $shippingClaim *From includes/business_info.php
 ** @var $freeShipLimit *From includes/business_info.php
 ** @var $shippingCarriers *From includes/business_info.php
 *  From function hostident() IN core_functions.php INCLUDE in initialize.php
 */
require_once dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';

$page_title = 'Shipping Information';
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
                <img src="/images/icons/shipping.svg" alt="Installation Insurance" style="aspect-ratio: <?php svg_ratio('/images/icons/shipping.svg'); ?>">
                <h2>How will orders ship?</h2>
                <p>We offer a variety of shipping methods that you can select at checkout to meet your delivery needs. While domestic Priority Mail is included free of charge for orders over of $<?= $freeShipLimit ?> and greater, alternate shipping methods by <?= $shippingCarriers ?> are also available.</p>

<!-- Domestic -->
                <div class="covered">
                    <img src="/images/icons/ship.svg" alt="Domestic Shipping" style="aspect-ratio: <?php svg_ratio('/images/icons/ship.svg'); ?>">
                    <h3>Shipping within the U.S. (Domestic)</h3>
                    <p>Vinyl Imagination offers several different shipping methods to meet your delivery needs. While domestic
                        Priority Mail is included free of charge for orders of $<?= $freeShipLimit ?> and more, alternate shipping methods by USPS, FedEx, and UPS are available.</p>
                    <p>Shipping costs for methods other than USPS Priority Mail will be calculated based on the type and quantity of
                        items you order.</p>
                    <p>Your shipping and handling charges will be summarized at checkout and your order can be tracked via the
                        respective carrier's website, links for which can be found below.</p>
                    <p>To find out how much shipping is, proceed to checkout with the item(s) in your cart. The shipping cost for the
                        order once you have entered your zip/postal code in the Calculate Shipping section of
                        the cart.</p>
                    <p>Domestic orders are usually shipped within 1 - 3 business days after full payment, and design is approved (if
                        requested). Some items may be produced, packaged and shipped within 5 business days after full payment.
                        Specialty items, custom colors, etc., may take slightly longer so for all items please allow 10 - 20 business
                        days to receive your order, although this is very rare!</p>
                    <p>If there is a delay or back order, you will be contacted at the email address supplied at checkout. You may
                        also check the status of your order at any time using the Order Status Page.</p>
                </div>

<!-- International -->
                <div class="int-shipping">
                    <img src="/images/icons/ship-int.svg" alt="What is Not covered" style="aspect-ratio: <?php svg_ratio('/images/icons/ship-int.svg'); ?>">
                    <h3>International Shipping</h3>
                    <p>We do offer international shipping, and rates are quoted per item at checkout. Of course international
                        shipping takes a little longer, 3 - 5 business days before your item ships, and the cost varies by location.</p>
                    <p>Depending on the type, quantity and weight of items in your order, we may pack and ship them in different
                        packages to ensure they arrive on time and undamaged. You will never be charged more for shipping and handling
                        than what appears at checkout.</p>
                    <p>International orders are usually shipped within 2 - 5 business days after full payment, and design is approved (if
                        requested at checkout). Some items may be produced, packaged and shipped within 7 business days after full payment.
                        Specialty items, custom colors, etc., may take slightly longer so for all items please allow 15 - 30 business
                        days to receive your order, although this is very rare!</p>
                    <p>If there is a delay or back order, you will be contacted at the email address supplied at checkout. You may
                        also check the status of your order at any time using the Order Status Page.</p>
                    <p>We reserve the right to change the shipping carrier for orders, this could happen for numerous reasons,
                        weather, shipping restrictions, time frame etc. Regardless of shipping method, tracking and insurance are always
                        used. This is especially apparent for international orders.</p>
                </div>
<!-- Insurance -->
                <div class="ship-insurance">
                    <img src="/images/icons/ship-ins.svg" alt="Shipping Insurance" style="aspect-ratio: <?php svg_ratio('/images/icons/ship-ins.svg'); ?>">
                    <h3>Shipping Insurance</h3>
                    <p>All orders are fully insured free of charge for loss and damage. Should something happen to your order after we have handed it to the carrier, it is fully covered for loss and damage.</p>
                    <p>Delays: If your order takes longer to arrive than expected, or does not arrive. We as that you first check the tracking using the tracking number you were provided in the shipping notification email. If you require further assistance please contact us, and we will contact the carrier.</p>
                    <p>Damage: If your order arrives damaged, contact us immediately. Please take pictures of the packaging and contents, these pictures will be needed for the claim. DO NOT discard packaging, the carrier or insurance company may want to inspect the packaging when processing the claim.</p>
                </div>

<!-- Insurance -->
                <div class="requirements">
                    <img src="/images/icons/requirements.svg" alt="Installation Insurance Requirements" style="aspect-ratio: <?php svg_ratio('/images/icons/requirements.svg'); ?>">
                    <h3>Shipping Claim Requirements</h3>
                    <p>The requirements to file a shipping insurance claim for your order are as follows.</p>
                    <ol>
                        <li>You must contact us immediately.</li>
                        <li>You must supply pictures of the outer packaging and contents.</li>
                        <li>You must keep all packaging and contents until the claim is complete.</li>
                        <li>You must file a claim using our online claim form.</li>
                        <li>You may be required to complete and online affidavit regarding damage or non-receipt.</li>
                    </ol>
                </div>

<!-- Time-Frame -->
                <div class="claim-time">
                    <img src="/images/icons/claim-time.svg" alt="Claim Time" style="aspect-ratio: <?php svg_ratio('/images/icons/claim-time.svg'); ?>">
                    <h3>How long does a claim take</h3>
                    <p>Claims times vary depending on the carrier and insurance company, but usually take little time to process. As soon as we receive your claim form and pictures we will pass your claim on to the carrier. As soon as the carrier accepts the claim we will replace your order. We resolve 90% of claims within 7 days of claim submission. There are exceptions. This is usually when packages are delayed due to weather etc.</p>
                </div>

<!-- File a Claim -->
                <div class="claim">
                    <img src="/images/icons/form.svg" alt="File an Installation Insurance Claim" style="aspect-ratio: <?php svg_ratio('/images/icons/form.svg'); ?>">
                    <h3>How to File a Claim</h3>
                    <?php shippingClaimRequest($shippingClaim); ?>
                    <p>Contact us immediately if your order arrives damaged, or if you feel delivery is taking an excessive amount of time. We will then open a claim and will contact you for further information. Photographs are required to complete damage claims.</p>
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
