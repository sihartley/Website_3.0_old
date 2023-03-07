<?php
/** @var $rightClickProtect
 *  From function hostident() IN core_functions.php INCLUDE in initialize.php
 */
require_once dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';

$page_title = 'Contact Us';
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
        <section id="contact">
            <div class="contacts">
                <h2>Ways to contact us.</h2>
                <h3><?php echo "Business Hours: $office_days, $office_hours" ?></h3>

<!-- Text Message -->
                <div class="text">
                    <img src="/images/icons/sms.svg" alt="Send us a text message" style="aspect-ratio: <?php svg_ratio('/images/icons/sms.svg'); ?>">
                    <h3>Text Message</h3>
                    <a href="sms:<?php echo $sms_clean; ?>" class="contact-button" aria-label="Send us a Text Message">
                        <div>
                            <span>Send us a</span><br>
                            <span>Text Message</span>
                        </div>
                    </a>
                    <h4><?php echo $sms; ?></h4>
                    <p><span>Get a rapid response</span><br>Sending us an SMS Text or MMS Multimedia message is often the easiest and fastest way to get a
                        response, as we have access to these messages inside and outside business hours wherever we are.</p>
                    <h5>Please note that this is not a voice number, nor is it monitored for voice calls or voicemails.</h5>
                </div>

<!-- Email -->
                <div class="email">
                    <img src="/images/icons/email.svg" alt="send us an email" style="aspect-ratio: <?php svg_ratio('/images/icons/email.svg'); ?>">
                    <h3>Email</h3>
                    <a href="mailto:<?php echo $email_info; ?>" class="contact-button" aria-label="Email Customer Support">
                        <div>
                            <span>Email</span><br>
                            <span>General Inquiries</span>
                        </div>
                    </a>
                    <a href="mailto:<?php echo $email_graphics; ?>" class="contact-button" aria-label="Email us about Custom Graphics">
                        <div>
                            <span>Email</span><br>
                            <span>Custom Graphic Design</span>
                        </div>
                    </a>
                    <a href="mailto:<?php echo $email_orders; ?>" class="contact-button" aria-label="Inquire about your order.">
                        <div>
                            <span>Email</span><br>
                            <span>Order inquiries</span>
                        </div>
                    </a>
                    <a href="mailto:<?php echo $email_sales; ?>" class="contact-button" aria-label="Email Sales Dept.">
                        <div>
                            <span>Email</span><br>
                            <span>After Sales</span>
                        </div>
                    </a>
                    <p><span>Comprehensive</span><br>Email is the most comprehensive way to contact us, and we do our best to reply to 99% of emails we receive within 12-18 hours. Via email, you can send any question, comment, image, information, etc.</p>
                </div>

<!-- Online Chat -->
                <div class="chat">
                    <img src="/images/icons/chat.svg" alt="Chat with us online" style="aspect-ratio: <?php svg_ratio('/images/icons/chat.svg'); ?>">
                    <h3>Chat</h3>
                    <a href="<?php echo $chat_link; ?>" class="contact-button" aria-label="Online Chat Link">
                        <div>
                            <span>Chat with Us</span><br>
                            <span>Online</span>
                        </div>
                    </a>
                    <p><span>Chat with us Live</span><br>Please chat with us online about any questions you may have. We do our best to be online as much as possible. However, we are busy, and if we are not available, you can always leave a message in the chat window, along with your contact information. We will get back to you as soon as we are available.</p>
                </div>

<!-- Phone -->
                <div class="phone">
                    <img src="/images/icons/phone.svg" alt="Call us" style="aspect-ratio: <?php svg_ratio('/images/icons/phone.svg'); ?>">
                    <h3>Call</h3>
                    <a href="tel:<?php echo $phone_clean; ?>" class="contact-button" aria-label="Call and Speak to Someone">
                        <div>
                            <span>Chat with us</span><br>
                            <span>On the Phone</span>
                        </div>
                    </a>
                    <h4><?php echo $phone; ?></h4>
                    <p><span>Speak to Someone</span><br>If you prefer to speak to someone on the phone, please give us a call. Please understand that we may not pick up if we are in the middle of an installation or dealing with another customer. Please leave us a message, and we will get back to you as soon as we are free.</p>
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
