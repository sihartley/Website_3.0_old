<?php
include_once '../private/includes/initialize.php';

$page_title = 'Terms and Conditions';
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
        <section id="terms">
            <div class="terms">
                <img src="/images/icons/form.svg" alt="Our Privacy Policy" style="aspect-ratio: <?php svg_ratio('/images/icons/form.svg'); ?>">
                <h2>Effective date: <?php echo date ("F d, Y.", getlastmod()); ?></h2>

<!-- Conditions of Use. -->
                <div class="use">
                    <h3>Conditions of Use:</h3>
                    <p>Welcome to Vinyl Imagination. By visiting or shopping at vinylimagination.com, or its affiliate websites(including our eBay Store), you accept and are subject to these conditions. Please read them carefully.</p>
                    <p>Vinyl Imagination respects the privacy and concerns of our customers. Our primary concern is protecting your privacy and the information collected only to process a purchase transaction on vinylimagination.com or its affiliate websites.</p>
                    <p>Vinyl Imagination will not sell or rent your name, address, email address, credit card information, product selection, or personal information under ANY circumstances.</p>
                    <p>By entering into a business transaction with vinylimagination.com, you are accepting the Terms of Service and our Privacy Policy described below. This Privacy Policy is not intended to and does not create any contractual or other legal rights on behalf of any party, and you can see it <a href="/privacy-policy.php">here</a>.</p>
                </div>

<!-- Disclaimer of Liability. -->
                <div class="liability">
                    <h3>Disclaimer of Liability:</h3>
                    <p>We all make mistakes, so product descriptions, typography, pricing, and photographic errors are unintentional and subject to correction. We regret but are not liable for incorrect photos or typographical errors. Vinyl Imagination may make changes or updates at any time, and if you find any of those mistakes, please tell us!</p>
                    <p>Vinyl Imagination is not affiliated with, sponsored by, or authorized by any copyright or trademark holder unless otherwise noted and is not used here for any commercial or advertising purposes. Their use is on a Fair Use Assumption without intent to compete with or take advantage of the trademark holder. Any reference to any copyright or trademark is for identification purposes only. </p>
                    <p>Most products are offered and designed by Vinyl Imagination for use as decorative accessories. Please be very careful when customizing your vehicle, as the User/Owner assumes all risk and liability when installing any products from Vinyl Imagination. We will not be held liable for injury or damage, including, but not limited to, misuse, abuse, improper installation, road hazard, or modification, resulting from the use of any product purchased from Vinyl Imagination.</p>
                    <p>Pictures of vinyl graphics are a representation only. They may not match in color exactly as shown on your screen due to variations of color, hue, saturation, and temperature setting from screen to screen and device to device.</p>
                </div>

<!-- Note on Installations: -->
                <div class="installations">
                    <h3>Note on Installations:</h3>
                    <p>Before installing any product from Vinyl Imagination, please check to ensure you have the correct item PRIOR to installation!</p>
                    <p>Should you attempt to install any incorrect product. We will not be responsible for the return, replacement, or reimbursement of that product in whole or part thereof.</p>
                    <p>Please get in touch with us immediately if you believe you have received an incorrect product.</p>
                    <!-- Simon: ToDo: Elaborate on this -->
                </div>

                <!-- Note on "BODY SHOP" vinyl graphic installations: -->
                <div class="body-shop">
                    <h3>Note on "BODY SHOP" vinyl graphic installations:</h3>
                    <p>Using a Collision Center, Auto Body Shop, or any such business will void all warranties on any vinyl graphic post-installation because of negligence in installation skills.</p>
                    <p>No "defective" vinyl graphic product will be considered if a Body Shop was used for installation.</p>
                    <p>Please find a skilled installer in your area before installing any vinyl graphic product you purchase.</p>
                </div>

 <!-- Shipping Mistakes: -->
                <div class="ship-errors">
                    <h3>Shipping Mistakes:</h3>
                    <p>Although very rare, shipping mistakes can happen! Please make sure you have the correct item upon receipt. We cannot be held liable for installing an incorrect product on your vehicle.</p>
                    <p>All graphics should be "dry-fit" before installation to ensure product fitment.</p>
                    <p>If you received the wrong item, contact us immediately before installation.</p>
                </div>

<!-- Order Cancellations: -->
                <div class="cancel">
                    <h3>Order Cancellations:</h3>
                    <p>After carefully choosing your product and completing payment to us for your order, work on your order, including the design, processing, and allocation of materials for your order, will begin immediately.<br>
                        Therefore, canceled orders are subject to a cancellation fee similar to restocking charges of 25% of the final price if the order has not shipped.</p>
                    <p>Should your order have already been shipped before the notice of cancellation. Shipping charges will not be refunded. You will need to request a return and obtain an RMA number if the return is allowed, as described under
                        <a href="#returns">"Returns"</a> below.</p>
                    <p>Refused merchandise at the delivery time may incur return freight charges in addition to the cancellation fee.</p>
                    <p>We will process your refund within seven days of authorized cancellation. Once we initiate a refund, it can take 3 to 7 days for your bank to process the refund and for it to appear in your account.</p>
                    <p>Should you fail to wait the time frames above for the refund to complete processing and initiate a false claim with your bank or credit card company. You will incur a $48 administration fee with our merchant processor, which will be passed on to you and charged to your credit card.</p>
                    <p>*Note: Changing any aspect of your order after it is placed (vinyl color, paint code, design, material) will cause changes to the pricing of your order.</p>
                </div>

<!-- Shipping: -->
                <div class="shipping">
                    <h3>Shipping:</h3>
                    <p>Our main shipping carriers are USPS and UPS. Most items ship with 1 - 3 business days. Some items may be processed, packaged and shipped within 5 business days after full payment. Specialty items, custom colors, etc., may take slightly longer. So for all items please allow 10 - 20 business days to receive, although this is very rare. If there is a delay or backorder, you will be contacted. No matter the size, weight, or distance to ship to you, all rates will remain as described in at checkout!
                        We cannot ship to PO Boxes. Because of the size of our products and other factors, we need a physical shipping address.</p>
                </div>

<!-- Returns: -->
                <div id="returns" class="returns">
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
