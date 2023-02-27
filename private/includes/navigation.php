<?php
/** @var $dbPrefix  * From function hostident() IN core_functions.php INCLUDE in initialize.php
 * @var $mc_array * from arrays.php INCLUDE in initialize.php
 * @var $trailer_array * from arrays.php INCLUDE in initialize.php
 */
?>

<div style="display: none;"> <!-- This div prevents momentary visibility on page load before mmenu takes over. -->
    <nav id="menu" class="main"> <!-- Note: display: none here stops mmenu from displaying. -->
        <ul>
            <li>
                <span>Graphics Products</span>
                <ul>
                    <li>
                        <a href="/automotive/automotive.php" title="Automotive Graphics" aria-haspopup="true">Automotive Graphics</a>
                        <ul>
                        <?php
                        $vehicle_makes_query = "(SELECT make FROM ".$dbPrefix."Automotive.manufacturers WHERE make != 'Generic' ORDER BY make ASC)";
                        $vehicle_makes = db_query($vehicle_makes_query);
                        while ($makes = mysqli_fetch_assoc($vehicle_makes)) {
                            $make = $makes['make'];
                            echo '<li>';
                                echo "<span>$make Vehicle Graphics</span>";
                                echo '<ul>';
                                $vehicle_models_query = "(SELECT DISTINCT model FROM ".$dbPrefix."Automotive.vehicles WHERE make = '$make' AND available IS NOT NULL ORDER BY model ASC)";
                                $vehicle_models = db_query($vehicle_models_query);
                                while ($models = mysqli_fetch_assoc($vehicle_models)) {
                                    $model = $models['model'];
                                    echo '<li>';
                                    echo "<span>$model</span>";
                                        echo '<ul>';
                                        $vehicle_years_query = "(SELECT year FROM ".$dbPrefix."Automotive.vehicles WHERE model = '$model' AND available IS NOT NULL ORDER BY year DESC)";
                                        $vehicle_years = db_query($vehicle_years_query);
                                        db_disconnect(db_connect());
                                        while ($year =mysqli_fetch_assoc($vehicle_years)) {
                                            $years = $year['year']; $year_start = explode(' ', $years)[0];
                                            $href = "/automotive/vehicle-main.php?make=$make&model=$model&year=$year_start&years=$years";
                                            echo "<li><a href='$href'>$years</a></li>";
                                        }
                                        echo '</ul>';
                                    echo '</li>';
                                } //while Models
                                echo '</ul>';
                            echo '</li>';
                        } //while Makes ?>
                        </ul>
                    </li>

                    <!-- Motorcycle Graphics -->
                    <li>
                        <a href="/motorcycle/motorcycle.php" title="Motorcycle Graphics"  aria-haspopup="true">Motorcycle Graphics</a>
                        <ul>
                            <?php foreach ($mc_array as $mc_item) {
                                $link = str_replace('_', '-', $mc_item);
                                $item = ucwords(str_replace('_', ' ', $mc_item)); ?>
                                <li><a href="/motorcycle/motorcycle.php#<?= $link ?>"><?= $item ?><span> Motorcycle Graphics</span></a></li>
                            <?php } ?>
                        </ul>
                    </li>

                    <!-- Trailer Graphics -->
                    <li><a href="/trailer/trailer.php" title="Trailer" aria-haspopup="true">Trailer Graphics</a>
                        <ul>
                            <?php foreach ($trailer_array as $item) {
                                $link = str_replace('_', '-', $item);
                                $item = ucwords(str_replace('_', ' ', $item)); ?>
                                <li><a href="/trailer/trailer.php#<?= $link ?>"><?= $item ?><span> Trailer Graphics</span></a></li>
                            <?php } ?>
                        </ul>
                    </li>
                </ul>
            </li>

            <!-- Color Charts -->
            <li>
                <span>Materials and Color Charts</span>
                <ul>
                    <li><a href="/support/materials.php" title="Materials Information">Materials Information</a></li>
                    <li><a href="/color-charts/3m-color-charts.php" title="3M Color Charts">3M Color Charts</a></li>
                    <li><a href="/color-charts/avery-color-charts.php" title="Avery Color Charts">Avery Color Charts</a></li>
                    <li><a href="/color-charts/orafol-color-charts.php" title="Orafol Color Charts">Orafol Color Charts</a></li>
<!--                    <li><a href="#" title="Hexis Color Charts">Hexis Color Charts</a></li>-->
                    <li><a href="/color-charts/vvivid-color-charts.php" title="Vvivid Color Charts">Vvivid Color Charts</a></li>

                    <li>
                        <span>Premium Cast (Wet-Install)</span>
                        <ul>
                            <?php vinyl_list('3M', 'cast'); ?>
                            <?php vinyl_list('Avery', 'cast'); ?>
                            <?php vinyl_list('Orafol', 'cast'); ?>
                        </ul>
                    </li>
                    <li>
                        <span>Premium Wrap (Dry-Install)</span>
                        <ul>
                            <li><a href="/color-charts/3m-color-charts.php#1080-wrap">3M 1080</a></li>
                            <li><a href="/color-charts/3m-color-charts.php#2080-wrap">3M 2080</a>
                                <ul>
                                    <?php vinyl_list('3M', 'wrap'); ?>
                                </ul>
                            </li>
                            <li><a href="/color-charts/avery-color-charts.php#wrap">Avery SW900</a>
                                <ul>
                                    <?php vinyl_list('Avery', 'wrap'); ?>
                                </ul>
                            </li>
                            <li><a href="/color-charts/orafol-color-charts.php#wrap">Orafol 970RA</a>
                                <ul>
                                    <?php vinyl_list('Orafol', 'wrap'); ?>
                                </ul>
                            </li>
                            <li><a href="/color-charts/vvivid-color-charts.php#wrap">Vvivid Wrap</a>
                                <ul>
                                    <?php include ROOT.'/private/includes/colors/vvivid_wrap_list.php'; ?>
                                </ul>
                            </li>
<!--                            <li><a href="#">Hexis HX20000</a></li>-->
<!--                            <li><a href="#">Hexis HX30000</a></li>-->
                        </ul>
                    </li>
                    <li>
                        <span>Reflective Colors</span>
                        <ul>
                            <li><a href="/color-charts/3m-color-charts.php#680CR-reflective" title="3M 680CR Reflective Colors">3M 680CR Reflective Colors</a></li>
                            <li><a href="/color-charts/avery-color-charts.php#HV1200-reflective" title="Avery HV1200 Reflective Colors">Avery HV1200 Reflective Colors</a></li>
                            <li><a href="/color-charts/orafol-color-charts.php#5600-reflective" title="Orafol Oralite 5600 Reflective Colors">Orafol Oralite 5600 Reflective Colors</a></li>
                        </ul>

                    </li>
                </ul>

            </li>
            <li><a href="/support/about.php" title="About Vinyl Imagination">About</a>
                <ul>
                    <li><a href="/support/about.php#graphics" title="Our Graphics">Our Graphics</a></li>
                    <li><a href="/support/about.php#design" title="Design Process">Custom Design Process</a></li>
                    <li><a href="/support/about.php#offer" title="What We Offer">What We Offer</a></li>
                </ul>
            </li>
            <li><a href="/support/contact.php" title="Contact us">Contact Us</a></li>
            <li><a href="/support/insurance.php" title="Installation Insurance">Installation Insurance</a></li>
            <li><a href="/support/terms-conditions.php" title="Terms and Conditions">Terms & Conditions</a></li>
            <li><a href="/support/privacy-policy.php" title="Privacy Policy">Privacy Policy</a></li>
            <li><a href="/support/return-policy.php" title="Return Policy">Return Policy</a></li>
        </ul>
    </nav>
</div>
