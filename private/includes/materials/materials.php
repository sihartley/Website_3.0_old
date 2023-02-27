
<section id="cast-v-wrap" class="cast-v-wrap">
    <aside>
        <h2>Vinyl Materials Information</h2>
        <p>We only use the highest quality vinyl films from 3M, Avery, and Orafol, as well as others, for all our graphics products. We offer Premium Cast (Wet-Install) and Premium Wrap (Dry-Install) materials. So, whatever your chosen installation method is, we can produce graphics to suit your needs.
            We do not offer graphics produced in calendared materials, often referred to as intermediate or economy vinyl films, even if requested.</p>
        <h2>Premium Cast vs Premium Wrap</h2>
        <div class="content premium_cast">
            <h3>Premium Cast (Wet-Install) Material & Colors</h3>
            <p>This material is usually installed using the Wet-Installation method. The graphics are applied using an application fluid such as water with a few drops of dish soap in a spray bottle. The application fluid allows the graphic to be moved around during installation without the adhesive taking hold immediately, often preferred by "old-school" installers and tint shops.<br>
            These graphic films are Cast 2mil (50 microns), High-Performance vinyl films with an expected lifetime durability rating of seven to twelve years. There is a wide range of colors available in these materials. However, specific effects colors are unavailable in this material, such as Carbon Fiber, Matte or Satin Finish, Chrome, and Shade-Shift.</p>
        </div>
        <div class="content premium_wrap">
            <h3>Premium Wrap (Dry-Install) Material & Colors</h3>
            <p>This material is usually installed using the Dry-Installation method. The graphics have a special air-release adhesive and are applied dry. This special adhesive allows the graphics to be lifted and repositioned without the adhesive taking hold until squeegeed, often preferred by less experienced installers, and wrap shops.<br>
            These graphic films are Cast 3-4mil (75-100 microns), with an expected lifetime durability rating of seven to twelve years. There is a wide range of colors available in these materials, including specific effects colors such as Carbon Fiber, Matte or Satin Finish, Chrome, and Shade-Shift.</p>
        </div>

    </aside>
</section>

<section id="films" class="films">
    <aside>
        <h2>Graphic Films</h2>
        <p>We only use the highest quality, and highest durability vinyl films for vehicle use. These are the same vinyl films used by many OEM Automakers and dealerships. Using these high-quality films, you can rest assured that the graphics will continue to look amazing on your vehicle for many years.</p>

        <div>
            <a href="/color-charts/3m-color-charts.php">
                <img src="/images/icons/3m-logo.svg" alt="3M Color Film Information" style="<?php svg_ratio('/images/icons/3m-logo.svg'); ?>">
                <h3></h3>
            </a>
            <p></p>
            <ul>
                <?php vinyl_list('3M', 'cast'); ?>
                <?php vinyl_list('3M', 'wrap'); ?>
            </ul>
        </div>
        <div>
            <a href="/color-charts/avery-color-charts.php">
                <img src="/images/icons/avery-logo.svg" alt="Avery Color Film Information" style="<?php svg_ratio('/images/icons/avery-logo.svg'); ?>">
                <h3></h3>
            </a>
            <p></p>
            <ul>
                <?php vinyl_list('Avery', 'cast'); ?>
                <?php vinyl_list('Avery', 'wrap'); ?>
            </ul>
        </div>
        <div>
            <a href="/color-charts/orafol-color-charts.php">
                <img src="/images/icons/orafol-logo.svg" alt="Orafol Color Film Information" style="<?php svg_ratio('/images/icons/orafol-logo.svg'); ?>">
                <h3></h3>
            </a>
            <p></p>
            <ul>
                <?php vinyl_list('Orafol', 'cast'); ?>
                <?php vinyl_list('Orafol', 'wrap'); ?>
            </ul>
        </div>
        <div>
            <a href="/color-charts/vvivid-color-charts.php">
                <img src="/images/icons/vvivid-logo.svg" alt="Vvivid Color Film Information" style="<?php svg_ratio('/images/icons/vvivid-logo.svg'); ?>">
                <h3></h3>
            </a>
            <p></p>
            <ul>
                <?php include ROOT.'/private/includes/colors/vvivid_wrap_list.php'; ?>
            </ul>
        </div>
    </aside>
</section>
