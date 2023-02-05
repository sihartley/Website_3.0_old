<?php
/* Core Functions (Functions for ALL Pages NO Exceptions) */
include_once '../private/functions/core_functions.php';
/* Global Functions (Functions for ALL Pages) */
include_once '../private/functions/global_functions.php';
/* Server Detection, Database Prefix, HTML Minification, Right Click Protection, Live Reload, Server ID Dot, Database Credentials*/
[$hostingServer, $dbPrefix, $minifyHTML, $rightClickProtect, $liveReload, $serverDot] = host_ident($_SERVER['SERVER_ADDR']);

/* Business Info */
include '../private/includes/business_info.php';

$page_title = 'Privacy Policy';
$css_file = '/css/policies.min.css';
/* HTML Minification */
/** @noinspection DuplicatedCode */
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
        <section id="privacy">
            <div class="privacy">
                <img src="/images/icons/privacy.svg" alt="Our Privacy Policy" style="aspect-ratio: <?php svg_ratio('/images/icons/privacy.svg'); ?>">
                <h2>Effective date: <?php echo date ("F d, Y.", getlastmod()); ?></h2>
                <p>Vinyl Imagination ("us", "we", or "our") operates the https://vinylimagination.com website (the "Service").</p>
                <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
                <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from Vinyl Imagination Terms and Conditions.</p>

<!-- Information Collection And Use -->
                <div class="info-collection">
                    <h3>Information Collection And Use</h3>
                    <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                    <h4>Types of Data Collected</h4>
                    <h5>Personal Data</h5>
                    <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                    <ul class="personal-data">
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone numbers</li>
                        <li>Address, State, Province, ZIP/Postal code, City</li>
                        <li>Cookies and Usage Data</li>
                    </ul>
                    <h5>Usage Data</h5>
                    <p>We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                    <h5>Tracking & Cookies Data</h5>
                    <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                    <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
                    <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                    <p>Examples of Cookies we use:</p>
                    <ul>
                        <li>Session Cookies. We use Session Cookies to operate our Service.</li>
                        <li>Preference Cookies. We use Preference Cookies to remember your preferences and various settings.</li>
                        <li>Security Cookies. We use Security Cookies for security purposes.</li>
                    </ul>
                    <h4>Use of Data</h4>
                    <p>Vinyl Imagination uses the collected data for various purposes:</p>
                    <ul>
                        <li>To provide and maintain the Service</li>
                        <li>To notify you about changes to our Service</li>
                        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                        <li>To provide customer care and support</li>
                        <li>To provide analysis or valuable information so that we can improve the Service</li>
                        <li>To monitor the usage of the Service</li>
                        <li>To detect, prevent and address technical issues</li>
                    </ul>
                </div>

<!-- Transfer Of Data -->
                <div class="data-transfer">
                    <h3>Transfer Of Data</h3>
                    <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                    <p>If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to the United States and process it there.</p>
                    <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                    <p>Vinyl Imagination will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
                </div>

<!-- Disclosure Of Data -->
                <div class="data-disclosure">
                    <h3>Disclosure Of Data</h3>
                    <h4>Legal Requirements</h4>
                    <p>Vinyl Imagination may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                    <ul class="data-disclosure">
                        <li>To comply with a legal obligation</li>
                        <li>To protect and defend the rights or property of Vinyl Imagination</li>
                        <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                        <li>To protect the personal safety of users of the Service or the public</li>
                        <li>To protect against legal liability</li>
                    </ul>
                    <h4>Security Of Data</h4>
                    <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                    <h4>Service Providers</h4>
                    <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
                    <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
                    <h5>Analytics</h5>
                    <ul>
                        <li><h5>Google Analytics</h5>
                            <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
                            <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</p>
                            <p>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy?hl=en</p>
                        </li>
                    </ul>
                </div>

 <!-- Links To Other Sites -->
                <div class="site-links">
                    <h3>Links To Other Sites</h3>
                    <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                    <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                </div>

<!-- Children's Privacy -->
                <div class="child-privacy">
                    <h3>Children's Privacy</h3>
                    <p>Our Service does not address anyone under the age of 18 ("Children").</p>
                    <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
                </div>

<!-- Changes To This Privacy Policy -->
                <div class="changes">
                    <h3>Changes To This Privacy Policy</h3>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
                    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                </div>

<!-- Contact Us -->
                <div class="contact">
                    <h3>Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
                    <p>By email: <a href="mailto:<?php echo $email_admin ?>?subject=Privacy%20Policy"><?php echo $email_admin ?></a></p>
                </div>

            </div>
        </section>



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
