<?php
include_once '../private/includes/initialize.php';

$page_title = 'Return Policy';
$css_file = '/css/policies.min.css';

?>

<!DOCTYPE html>
<html lang="en"<?php echo $rightClickProtect; ?>>

<!-- Head -->
<?php include_once '../private/includes/head.php'?>

<body>

<div id="page">
    <div id="content">
        <!-- Header -->
        <?php include '../private/includes/header.php' ?>

<!-- Page Content -->
        <section id="returns" class="returns">
            <div class="returns">
                <img src="/images/icons/form.svg" alt="Our Privacy Policy" style="aspect-ratio: <?php svg_ratio('/images/icons/form.svg'); ?>">
                <h2>Effective date: <?php echo date ("F d, Y.", getlastmod()); ?></h2>

<!-- Returns: -->
                <div class="returns">
                    <h3>Returns:</h3>
                    <p>We provide High Performance, high-quality Vinyl Graphics and stand by our products. We hope you are delighted with your purchase. So in the unlikely event that a return is requested, please consider these terms: When you receive your order, please be responsible! When you receive your item/s, please open the package and inspect the items immediately upon delivery.</p>
                    <p>Packages that appear damaged should be reported to us and the carrier immediately. You should contact us as soon as possible, keep all packaging, and take evidential pictures. </p>
                    <p>Damage due to shipping is the sole responsibility of the freight carrier. Claims are to be made by the customer immediately by contacting us and the shipping carrier. We nor the Shipping carriers will honor late claims.
                        Shipping damage not reported to us within three business days will not be eligible for replacement due to the increased difficulty of filing a successful claim with the carrier after more extended periods have passed. Acceptance of claims after three business days is at the sole discretion of Vinyl Imagination.</p>
                    <p>All items received should be inspected for defects or damage and "dry fitted" before installation.</p>
                    <p>The installation instructions provided should be followed thoroughly. Although you can do it yourself, professional installation is always an option. Before making a return claim, all reasonable attempts for proper installation should be made.</p>
                    <p>It is our sole discretion to authorize returns for credit or exchange.</p>
                    <p>If you attempt to install graphics without first "dry fitting" them and there is a defect or fitment issue. We WILL NOT REPLACE, REFUND, or REIMBURSE you in any way!</p>
                    <p>Shipping and handling fees are not refundable. The buyer is responsible for shipping costs incurred. We will only accept products for return or exchange with a Return Merchandise Authorization number (RMA). Acceptable Reason(s) for return. We will exchange the product only.</p>
                    <ul>
                        <li>Product Defect. Pictures of the defect are required.</li>
                        <li>Incorrect graphics kit. (Only applies if you went through the Proof and Design Approval Process).</li>
                        <li>What you received only matches what you ordered and is on your receipt if you have agreed to alternate designs, materials, styles, colors, graphics, or any other changes to your initial order.</li>
                    </ul>

                    <h4>Unacceptable Reasons for return.</h4>
                    <ul>
                        <li>You changed your mind.</li>
                        <li>Spouse is Threatening to Leave due to Your Purchase.</li>
                        <li>Don't Like; Product Not What Expected.</li>
                        <li>Color Match.</li>
                        <li>No Longer Have Vehicle, Sold It.</li>
                        <li>The order took too long to Ship.</li>
                    </ul>

                    <h4>Product Return Checklist: -</h4>
                    <ul>
                        <li>All returns must have pre-authorization and an RMA number.</li>
                        <li>Returned items must have an RMA number to be accepted.</li>
                        <li>Returns are not allowed after three days from the delivery date. Please inspect your order immediately upon delivery.</li>
                        <li>Merchandise is returned at the customer's expense.</li>
                        <li>There are NO RETURNS / EXCHANGES for vinyl where installation has been attempted, no exceptions! "Dry-Fit" First! Seek professional installation.</li>
                        <li>Products must be sealed, unopened, and in original packaging to be eligible for return.</li>
                        <li>If approved, refunds apply to the returned graphics kit, not any delivery costs incurred.</li>
                        <li>If your return is accepted, it will be subject to a 35% restocking fee, and original shipping fees will be deducted from your refund</li>
                    </ul>
                </div>

<!-- Warranty: -->
                <div class="warranty">
                    <h3>Warranty:</h3>
                    <p>Technical specifications, recommendations, and all other statements about Vinyl Imagination's vinyl films are based upon tests believed to be factual. However, they do not constitute a guarantee or warranty.</p>
                    <p>All vinyl films sold are with the understanding that the Purchaser will use the vinyl films for the manufacturer's intended purposes, following the given parameters of each product.</p>
                    <p>Should vinyl films sold by Vinyl Imagination fail after the specified proper use and application within one (1) year of shipment date, Vinyl Imagination will replace the defective material.</p>
                    <p>Vinyl Imagination requires a digital picture and an actual sample of any vinyl film.</p>
                    <p>This warranty does not include horizontal vinyl applications (Hood/Roof/Trunk etc.).</p>
                    <p>Vinyl Imagination's liability for a defective product shall not exceed the original price paid by the Purchaser.</p>
                    <p>Under no circumstance shall Vinyl Imagination be responsible for any incidental or other damages outside of Vinyl Imagination's control of the manufactured vinyl films.</p>
                    <p>No additional warranties, otherwise implied or other than those stated above, which are made expressly in place of all other warranties, shall apply to any vinyl films sold by Vinyl Imagination.</p>
                    <p>Vinyl Imagination especially disclaims and excludes all other warranties. Because of the extreme conditions (sun exposure, harsh weather conditions, tree sap, bird droppings, etc.) encountered for horizontal (hood, roof, trunk, etc.) vinyl applications, any horizontal applications (racing stripes, hood stripes, etc.) are not covered under any warranty, unless otherwise specified in each listing. Please get in touch with us with any questions regarding the warranty on any one item.</p>
                </div>

<!-- Trademarks and Copyrights: -->
                <div class="tm-copyright">
                    <h3>Trademarks and Copyrights:</h3>
                    <p>All content included on vinylimagination.com, including photos, text, graphics, and application data, is the property of Vinyl Imagination and is protected by United States and international copyright laws.</p>
                    <p>This site, in part or whole, may not be copied in any way without the expressed written consent from Vinyl Imagination.</p>
                    <p>Vendor's trade names, trademarks, and logos are used with permission, but the owners of those materials retain all rights.</p>
                    <p>Vinyl Imagination is not affiliated with, sponsored by, or authorized by any copyright or trademark holder unless otherwise noted and is not used here for any commercial or advertising purposes.</p>
                    <p>Their use is on a Fair Use Assumption without intent to compete with or take advantage of the trademark holder. Any reference to any copyright or trademark is for identification purposes only.</p>
                </div>

            </div>
        </section>



        <!-- Navigation -->
        <?php include '../private/includes/navigation.php'; ?> <!-- Note: Keep inside content div for page anchors to work properly -->
    </div> <!-- #content close -->

    <!-- footer -->
    <?php include_once '../private/includes/footer.php' /* Note: Keep here for positioning and scrolling to work correctly */?>

</div> <!-- #page close -->

<?php echo $liveReload . '<!-- '.$dbPrefix.' -->'; ?>
</body>

</html>
<!-- Simon: Todo: create and move this to include file foot.php -->
<?php ob_end_flush(); ?>
