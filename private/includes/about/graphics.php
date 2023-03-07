<section id="graphics" class="graphics">
    <aside>
        <h2>Our Graphics</h2>
        <p>Our graphics are precision-fit, measured to follow surface contours, and every product on our website can be adapted or customized to your vision. We offer graphics for
            <a href="/pages/automotive/automotive.php">cars</a>, <a href="/pages/motorcycle/motorcycle.php">motorcycles</a>, and <a href="/pages/trailer/trailer.php">trailers</a>. This precision fit allows for the easiest installation with minimal material manipulation. Using the correct material, and avoiding manipulation of the material, creates a long-lasting look.
        For trailers and motorcycles, we use the same high-quality materials and design methods for a unique look. We can also apply your own logos to advertise your business, suit a toy hauler, or reflect equestrian life.
        </p>
        <div>
            <img src="/images/icon_automotive.svg" alt="Automotive Graphics Gallery" style="aspect-ratio: <?php svg_ratio('/images/icon_automotive.svg'); ?>">
            <h3>Automotive Gallery</h3>
            <!-- Simon: Todo: Insert Picture & Gallery Link -->
            <div class="auto-gallery">
                <ul>
            <?php
                $thumbdir = 'thumbs';
                $gallerydir = '/gallery/Vehicles/';

                $files = scandir(PUB_PATH . $gallerydir); $pics =[];
                foreach ($files as $file) {
                    if (is_file(PUB_PATH . $gallerydir . $file)) {
                        $pics[] = $gallerydir . $file;
                    }
                }
                $size = 250;
                foreach (array_rand($pics, 10) as $pic) {
                        imageThumbs($pics[$pic], $size, $size, 100, false);
                        $dir = pathinfo($pics[$pic], PATHINFO_DIRNAME);
                        $name = pathinfo($pics[$pic], PATHINFO_FILENAME) . "_{$size}px.";
                        $ext = pathinfo($pics[$pic],  PATHINFO_EXTENSION);
                        $image = $pics[$pic];
                        $thumb = implode(DIRECTORY_SEPARATOR, [$dir, $thumbdir, $name]).$ext;
                        ?>
                    <li>
                        <img  src="<?= $thumb ?>" data-image="<?= $image ?>" alt="" data-description="Customer Automotive Graphics Gallery" loading="lazy">
                    </li>
            <?php
                }
            ?>
                </ul>
            </div>
        </div>
        <div>
            <img src="/images/icon_motorcycle.svg" alt="Motorcycle Graphics Gallery" style="aspect-ratio: <?php svg_ratio('/images/icon_motorcycle.svg'); ?>">
            <h3>Motorcycle Gallery</h3>
            <!-- Simon: Todo: Insert Picture & Gallery Link -->
            <div class="mc-gallery">
                <ul>
                    <?php
                    $gallerydir = '/gallery/Motorcycle/';

                    $files = scandir(PUB_PATH . $gallerydir); $pics =[];
                    foreach ($files as $file) {
                        if (is_file(PUB_PATH . $gallerydir . $file)) {
                            $pics[] = $gallerydir . $file;
                        }
                    }
//                    $size = 400;
                    foreach (array_rand($pics, 2) as $pic) {
                        imageThumbs(webpImage($pics[$pic]), $size, $size, 100, false);
                        $dir = pathinfo($pics[$pic], PATHINFO_DIRNAME);
                        $name = pathinfo($pics[$pic], PATHINFO_FILENAME) . "_{$size}px.webp";
                        $ext = pathinfo($pics[$pic],  PATHINFO_EXTENSION);
                        $image = $pics[$pic];
                        $thumb = implode(DIRECTORY_SEPARATOR, [$dir, $thumbdir, $name]);
                        ?>
                        <li>
                            <img  src="<?= $thumb ?>" data-image="<?= $image ?>" alt="" data-description="Customer Motorcycle Graphics Gallery" loading="lazy">
                        </li>
                        <?php
                    }
                    ?>
                </ul>
            </div>
        </div>
        <div>
            <img src="/images/icon_trailer.svg" alt="Trailer Graphics Gallery" style="aspect-ratio: <?php svg_ratio('/images/icon_trailer.svg'); ?>">
            <h3>Trailer Gallery</h3>
            <!-- Simon: Todo: Insert Picture & Gallery Link -->
            <div class="trailer-gallery">

            </div>
        </div>
    </aside>
</section>
