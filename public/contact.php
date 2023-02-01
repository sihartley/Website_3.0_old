<?php
/* Core Functions (Functions for ALL Pages NO Exceptions) */
include_once '../private/functions/core_functions.php';
/* Global Functions (Functions for ALL Pages) */
include_once '../private/functions/global_functions.php';
/* Server Detection, Database Prefix, HTML Minification, Right Click Protection, Live Reload, Server ID Dot, Database Credentials*/
[$hostingServer, $dbPrefix, $minifyHTML, $rightClickProtect, $liveReload, $serverDot] = host_ident($_SERVER['SERVER_ADDR']);

/* Business Info */
include '../private/includes/business_info.php';

$page_title = 'Contact Us';
$css_file = '/css/contact.min.css';
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
        <!-- Header -->
        <?php include '../private/includes/header.php' ?>

        <!-- Page Content -->
<!-- Simon: ToDo: Add aspect ratios to images.-->
        <section id="contact">
            <div class="contacts">
                <h2>Ways to contact us.</h2>
                <h3><?php echo "Business Hours: {$office_days}, {$office_hours}" ?></h3>

<!-- Text Message -->
                <div class="text">
                    <img src="/images/icons/sms.svg" alt="Send us a text message" style="aspect-ratio: 1/1.2642">
                    <h3>Text Message</h3>
                    <a href="sms:<?php echo $sms_clean; ?>" class="contact-button">
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
                    <img src="/images/icons/email.svg" alt="send us an email" style="aspect-ratio: 1/.522">
                    <h3>Email</h3>
                    <a href="mailto:<?php echo $email_info; ?>" class="contact-button">
                        <div>
                            <span>Email</span><br>
                            <span>General Inquiries</span>
                        </div>
                    </a>
                    <a href="mailto:<?php echo $email_graphics; ?>" class="contact-button">
                        <div>
                            <span>Email</span><br>
                            <span>Custom Graphic Design</span>
                        </div>
                    </a>
                    <a href="mailto:<?php echo $email_orders; ?>" class="contact-button">
                        <div>
                            <span>Email</span><br>
                            <span>Order inquiries</span>
                        </div>
                    </a>
                    <a href="mailto:<?php echo $email_sales; ?>" class="contact-button">
                        <div>
                            <span>Email</span><br>
                            <span>After Sales</span>
                        </div>
                    </a>
                    <p><span>Comprehensive</span><br>Email is the most comprehensive way to contact us, and we do our best to reply to 99% of emails we receive within 12-18 hours. Via email, you can send any question, comment, image, information, etc.</p>
                </div>

<!-- Online Chat -->
                <div class="chat">
                    <img src="/images/icons/chat.svg" alt="Chat with us online" style="aspect-ratio: 1/.7259">
                    <h3>Chat</h3>
                    <a href="#" class="contact-button" aria-label="Online Chat Link"> <!-- Simon: ToDo: Add tawk.to link to href -->
                        <div>
                            <span>Chat with Us</span><br>
                            <span>Online</span>
                        </div>
                    </a>
                    <p><span>Chat with us Live</span><br>Please chat with us online about any questions you may have. We do our best to be online as much as possible. However, we are busy, and if we are not available, you can always leave a message in the chat window, along with your contact information. We will get back to you as soon as we are available.</p>
                </div>

<!-- Phone -->
                <div class="phone">
                    <img src="/images/icons/phone.svg" alt="Call us" style="aspect-ratio: 1/.8927">
                    <h3>Call</h3>
                    <a href="tel:<?php echo $phone_clean; ?>" class="contact-button">
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



        <!-- SMS / MMS -->
        <?php //include '../private/includes/contact/sms.php'?>

        <!-- Info Email -->
        <?php //include '../private/includes/contact/info_email.php'?>

        <!-- Design Email -->
        <?php //include '../private/includes/contact/graphics_email.php'?>

        <!-- Call -->
        <?php //include '../private/includes/contact/call.php'?>



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
