<?php
/**  @var $dbPrefix  * From function hostident() IN core_functions.php INCLUDE in initialize.php */
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
                                        $vehicle_years_query = "(SELECT year FROM ".$dbPrefix."Automotive.vehicles WHERE model = '$model' AND available IS NOT NULL ORDER BY year ASC)";
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
                    <li>
                        <a href="/motorcycle/motorcycle.php" title="Motorcycle Graphics"  aria-haspopup="true">Motorcycle Graphics</a>
                        <ul>
                            <!-- Simon: Todo: Automate this by Adding foreach loop here. -->
                            <li><a href="#" title="Custom Graphics">Custom Graphics</a></li>
                            <li><a href="#" title="Flame Graphics">Flame Graphics</a></li>
                        </ul>
                    </li>
                    <li><a href="/trailer/trailer.php" title="Trailer" aria-haspopup="true">Trailer Graphics</a>
                        <ul>
                            <!-- Simon: Todo: Automate this by Adding foreach loop here. -->
                            <li><a href="#" title="Motorcycle Trailer">Motorcycle Trailer</a></li>
                            <li><a href="#" title="Horse Trailer">Horse Trailer</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <span>Color Charts</span>
                <ul>
                    <li><a href="/color-charts/3m-color-charts.php" title="3M Color Charts">3M Color Charts</a></li>
                    <li><a href="/color-charts/avery-color-charts.php" title="Avery Color Charts">Avery Color Charts</a></li>
                    <li><a href="/color-charts/oracal-color-charts.php" title="Oracal Color Charts">Oracal Color Charts</a></li>
<!--                    <li><a href="#" title="Hexis Color Charts">Hexis Color Charts</a></li>-->
                    <li><a href="/color-charts/vvivid-color-charts.php" title="Vvivid Color Charts">Vvivid Color Charts</a></li>

                    <li>
                        <span>Premium Cast (Wet-Install)</span>
                        <ul>
                            <li><a href="/color-charts/3m-color-charts.php#7125-cast">3M 7125</a></li>
                            <li><a href="/color-charts/avery-color-charts.php#SC950-cast">Avery SC950</a></li>
                            <li><a href="/color-charts/oracal-color-charts.php#751C-cast">Oracal 751C</a></li>
                        </ul>
                    </li>
                    <li>
                        <span>Premium Wrap (Dry-Install)</span>
                        <ul>
                            <li><a href="/color-charts/3m-color-charts.php#1080-wrap">3M 1080</a></li>
                            <li><a href="/color-charts/3m-color-charts.php#2080-wrap">3M 2080</a>
                                <ul>
                                    <?php include ROOT.'/private/includes/colors/3m_wrap_list.php'; ?>
                                </ul>
                            </li>
                            <li><a href="/color-charts/avery-color-charts.php#wrap">Avery SW900</a>
                                <ul>
                                    <?php include ROOT.'/private/includes/colors/avery_wrap_list.php'; ?>
                                </ul>
                            </li>
                            <li><a href="/color-charts/oracal-color-charts.php#wrap">Oracal 970RA</a>
                                <ul>
                                    <?php include ROOT.'/private/includes/colors/oracal_wrap_list.php'; ?>
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
                            <li><a href="/color-charts/oracal-color-charts.php#5600-reflective" title="Oracal Oralite 5600 Reflective Colors">Oracal Oralite 5600 Reflective Colors</a></li>
                        </ul>

                    </li>
                </ul>

            </li>
            <li><a href="about.php" title="About us">About</a>
                <ul>
                    <li><a href="about.php#offer" title="What We Offer">What We Offer</a></li>
                    <li><a href="about.php#graphics" title="Our Graphics">Our Graphics</a></li>
                    <li><a href="about.php#design" title="Design Process">Custom Design Process</a></li>
                    <li><a href="about.php#materials" title="Materials we use">Materials We Use</a></li>
                </ul>
            </li>
            <li><a href="contact.php" title="Contact us">Contact Us</a></li>
            <li><a href="insurance.php" title="Installation Insurance">Installation Insurance</a></li>
            <li><a href="terms-conditions.php" title="Terms and Conditions">Terms & Conditions</a></li>
            <li><a href="privacy-policy.php" title="Privacy Policy">Privacy Policy</a></li>
            <li><a href="return-policy.php" title="Return Policy">Return Policy</a></li>
        </ul>
    </nav>
</div>
