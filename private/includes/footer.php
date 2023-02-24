<footer>
    <?php
    /** @var $dbPrefix * from function hostident within initialize.php */
    /** @var $serverDot; * from function hostident within initialize.php */

    $vehicles_list_query = '(select make, model, year from '.$dbPrefix.'Automotive.vehicles where available IS NOT NULL ORDER BY make, model, year ASC)';
    $vehicles_list = db_query($vehicles_list_query);
    db_disconnect(db_connect());
    ?>
    <div class="footer-details">
        <div class="co-info">
            <img src="/images/company/vi-logo.svg" alt="Vinyl Imagination Logo" style="aspect-ratio: <?php svg_ratio('/images/company/vi-logo.svg'); ?>">
            <p><?php echo $address ?></p>
            <p><?php echo $phone ?></p>
            <div class="payments">
                <img src="/images/company/visa.svg" alt="Visa Accepted" style="aspect-ratio: <?php svg_ratio('/images/company/visa.svg'); ?>">
                <img src="/images/company/mastercard.svg" alt="Mastercard Accepted" style="aspect-ratio: <?php svg_ratio('/images/company/mastercard.svg'); ?>">
                <img src="/images/company/amex.svg" alt="American Express Accepted" style="aspect-ratio: <?php svg_ratio('/images/company/amex.svg'); ?>">
                <img src="/images/company/discover.svg" alt="Discover Accepted" style="aspect-ratio: <?php svg_ratio('/images/company/discover.svg'); ?>">
                <img src="/images/company/amazon.svg" alt="Amazon Pay Accepted" style="aspect-ratio: <?php svg_ratio('/images/company/amazon.svg'); ?>">
                <img src="/images/company/google.svg" alt="Google Pay Accepted" style="aspect-ratio: <?php svg_ratio('/images/company/google.svg'); ?>">
                <img src="/images/company/apple.svg" alt="Apple Pay Accepted" style="aspect-ratio: <?php svg_ratio('/images/company/apple.svg'); ?>">
                <img src="/images/company/affirm.svg" alt="Pay Using Affirm" style="aspect-ratio: <?php svg_ratio('/images/company/affirm.svg'); ?>">
                <img src="/images/company/afterpay.svg" alt="Pay Using AfterPay" style="aspect-ratio: <?php svg_ratio('/images/company/afterpay.svg'); ?>">
                <img src="/images/company/klarna.svg" alt="Pay Using Klarna" style="aspect-ratio: <?php svg_ratio('/images/company/klarna.svg'); ?>">
            </div>
        </div>
        <div class="lists">
            <div class="auto-list">
                <h5>Car Graphics, Stripes, and Decals</h5>
                <ul>
                    <?php while ($vehicle = mysqli_fetch_assoc($vehicles_list)) {
                        $make = $vehicle['make']; $model = $vehicle['model']; $years = $vehicle['year']; $year_start = explode(' ', $years)[0];
                        $href = "/automotive/vehicle-main.php?make=$make&model=$model&year=$year_start&years=$years";?>
                        <li><a href="<?= $href ?>"><?= "{$make} {$model} {$years}" ?></a></li>
                    <?php } ?>
                    <li>Universal Fit Graphics</li>
                </ul>
            </div>

            <div class="other-list">
                <h5><a href="/motorcycle/motorcycle.php">Motorcycle Custom Graphics</a></h5>
                <ul class="cycle-list">
                    <!-- Simon: Todo: Automate this by Adding foreach loop here. -->
                    <li>Custom Tank Decals</li>
                    <li>Flaming Eagles</li>
                    <li>Flaming Skulls</li>
                    <li>Gas Tank Flames</li>
                </ul>

                <h5><a href="/trailer/trailer.php">Trailer Graphics</a></h5>
                <ul class="trailer-list">
                    <!-- Simon: Todo: Automate this by Adding foreach loop here. -->
                    <li>Motorcycle Trailer Graphics</li>
                    <li>Horse Trailer Graphics</li>
                    <li>Toy Hauler Graphics</li>
                </ul>
                <h5>Color Charts</h5>
                <ul class="footer-color-list">
                    <li><a href="/color-charts/3m-color-charts.php">3M Color Charts</a>
                        <ul>
                            <li><a href="/color-charts/3m-color-charts.php#7125-cast">3M 7125 Colors</a></li>
                            <?php include ROOT.'/private/includes/colors/3m_wrap_list.php'; ?>
                        </ul>
                    </li>
                    <li><a href="/color-charts/avery-color-charts.php">Avery Color Charts</a>
                        <ul>
                            <li><a href="/color-charts/avery-color-charts.php#SC950-cast">Avery SC950 Colors</a></li>
                            <?php include ROOT.'/private/includes/colors/avery_wrap_list.php'; ?>
                        </ul>
                    </li>
                    <li><a href="/color-charts/oracal-color-charts.php">Oracal Color Charts</a>
                        <ul>
                            <?php include ROOT.'/private/includes/colors/oracal_wrap_list.php'; ?>
                        </ul>
                    </li>
                    <li><a href="/color-charts/vvivid-color-charts.php">Vvivid Color Charts</a>
                        <ul>
                            <?php include ROOT.'/private/includes/colors/vvivid_wrap_list.php'; ?>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="<?= $serverDot ?>">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 424c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="secondary"/>
        <path d="M256 432c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="primary"/>
    </svg>

    &copy; Vinyl Imagination
    <div class="content">
        <a href="/privacy-policy.php#privacy" title="Privacy Policy">Privacy Policy</a>
        <a href="/terms-conditions.php#terms" title="Terms of Service">Terms of Service</a>
        <a href="/return-policy.php#returns" title="Return Policy">Return Policy</a>
        <a href="/sitemap.php" title="SiteMap">SiteMap</a>
    </div>


</footer>

