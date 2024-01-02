<?php require_once dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';

  $auto_query = 'SELECT part_number, make, model, year, product_name, product_page, image_path, main_page_image, design_image FROM '.$dbPrefix.'Automotive.graphics WHERE available IS NOT NULL';
  $auto_result = mysqli_query(db_connect(), $auto_query);

  $mc_column_selections = 'part_number, product_name, product_page, image_path, product_image_on, design_image';
  $mc_query = "SELECT {$mc_column_selections} FROM {$dbPrefix}Motorcycle.graphics_custom WHERE available IS NOT NULL 
      UNION SELECT {$mc_column_selections} FROM {$dbPrefix}Motorcycle.graphics_flaming_eagles WHERE available IS NOT NULL 
      UNION SELECT {$mc_column_selections} FROM {$dbPrefix}Motorcycle.graphics_flaming_skull WHERE available IS NOT NULL 
      UNION SELECT {$mc_column_selections} FROM {$dbPrefix}Motorcycle.graphics_tank_flames WHERE available IS NOT NULL ";
  $mc_result = mysqli_query(db_connect(), $mc_query);

  $trailer_mc_query = 'SELECT part_number, product_name, product_page, image_path, product_image_on, design_image FROM '.$dbPrefix.'Trailer.motorcycle WHERE available IS NOT NULL';
  $trailer_mc_result = mysqli_query(db_connect(), $trailer_mc_query);

  $base_url = 'https://vinylimagination.com';

function imageCheck($base_url, $source):string {
    $filesource = PUB_PATH.$source;
    $websource = $base_url.$source;
    $dir = pathinfo($filesource, PATHINFO_DIRNAME);
    $webdir = pathinfo($websource, PATHINFO_DIRNAME);
    $name = pathinfo($filesource, PATHINFO_FILENAME);

    if (file_exists("$dir/$name.webp")) {
        return "<image:loc>$webdir/$name.webp</image:loc>" . PHP_EOL;
    } else {
        return "<image:loc>$websource</image:loc>" . PHP_EOL;
    }
  }

  header('Content-Type: application/xml; charset=utf-8');
  echo '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
  echo '<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
                xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="https://www.sitemaps.org/schemas/sitemap/0.9
                https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">' . PHP_EOL;

//AUTOMOTIVE SECTION
  while ($auto_row = mysqli_fetch_assoc($auto_result)) {
    $product_name = htmlentities($auto_row['product_name']);
    echo '<url>' . PHP_EOL;
      echo "<loc>" . strtolower($base_url . $auto_row['product_page']) . "</loc>" . PHP_EOL;
      echo '<image:image>' . PHP_EOL;

      imageCheck($base_url, $auto_row['image_path'].urldecode($auto_row['main_page_image']));

      echo "<image:title>{$auto_row['year']} {$auto_row['make']} {$auto_row['model']} {$product_name}</image:title>" . PHP_EOL;
      echo "<image:caption>{$product_name} installed on {$auto_row['year']} {$auto_row['make']} {$auto_row['model']}</image:caption>" . PHP_EOL;
      echo '</image:image>' . PHP_EOL;

    $design = sprintf('%02s', 1);
    while (file_exists(PUB_PATH.$auto_row['image_path'].str_replace ('01', $design, $auto_row['design_image']))) {
      $designImage = __DIR__ . $auto_row['image_path'] . str_replace ('01', $design, $auto_row['design_image']);
      $imageLastMod = date ('Y-m-d', filemtime($designImage));
      echo '<image:image>' . PHP_EOL;

        //Simon: ToDo: Get this working in a function
        //Function Start
        $filesource = PUB_PATH.$auto_row['image_path'] . str_replace ('01', $design, $auto_row['design_image']);
        $websource = $base_url.$auto_row['image_path'] . str_replace ('01', $design, $auto_row['design_image']);
        $dir = pathinfo($filesource, PATHINFO_DIRNAME);
        $webdir = pathinfo($websource, PATHINFO_DIRNAME);
        $name = pathinfo($filesource, PATHINFO_FILENAME);

        if (file_exists("$dir/$name.webp")) { echo "<image:loc>$webdir/$name.webp</image:loc>" . PHP_EOL;
        } else { echo "<image:loc>$websource</image:loc>" . PHP_EOL; }
        //Function End

        echo "<image:title>{$auto_row['year']} {$auto_row['make']} {$auto_row['model']} {$product_name} Design Style {$design}</image:title>" . PHP_EOL;
        echo "<image:caption>Design Style {$design} of {$product_name} for the {$auto_row['year']} {$auto_row['make']} {$auto_row['model']}</image:caption>" . PHP_EOL;
      echo '</image:image>' . PHP_EOL;
      $design = sprintf('%02s', ++$design);
    }
    echo "<lastmod>{$imageLastMod}</lastmod>" . PHP_EOL;
    echo '<changefreq>weekly</changefreq>' . PHP_EOL;
    echo '<priority>0.80</priority>' . PHP_EOL;
    echo '</url>' . PHP_EOL;

  } //while ($auto_row = mysqli_fetch_assoc($auto_result)) { END


//MOTORCYCLE SECTION
  echo '<url>' . PHP_EOL;
    echo "<loc>" . $base_url . '/pages/motorcycle/motorcycle.php' . "</loc>" . PHP_EOL;
  echo '</url>' . PHP_EOL;

/* Simon: Fix Me: This Section */
  $mc_num_results = mysqli_num_rows($mc_result);
  $mc_counter = 0; $mc_previous = NULL;
  while ($mc_row = mysqli_fetch_assoc($mc_result)) {
    $product_name = htmlentities($mc_row['product_name']);
    if($mc_previous !== $mc_row['product_page']){
      if ($mc_previous !== NULL) {
        $designImage = __DIR__ . $mc_row['image_path'] . $mc_row['product_image_on'];
        $imageLastMod = date ('Y-m-d', filemtime($designImage));
        echo "<lastmod>{$imageLastMod}</lastmod>" . PHP_EOL;
        echo '<changefreq>weekly</changefreq>' . PHP_EOL;
        echo '<priority>0.80</priority>' . PHP_EOL;
      echo '</url>' . PHP_EOL;
      }

      echo '<url>' . PHP_EOL;
        echo "<loc>" . strtolower($base_url . $mc_row['product_page']) . "</loc>" . PHP_EOL;
        echo '<image:image>' . PHP_EOL;
          echo "<image:loc>{$base_url}{$mc_row['image_path']}{$mc_row['product_image_on']}</image:loc>" . PHP_EOL;
          echo "<image:title>Motorcycle Gas Tank {$product_name} Decals</image:title>" . PHP_EOL;
          echo "<image:caption>{$product_name} graphic installed on Motorcycle Gas Tank</image:caption>" . PHP_EOL;
        echo '</image:image>' . PHP_EOL;
    } else {
        echo '<image:image>' . PHP_EOL;
          echo "<image:loc>{$base_url}{$mc_row['image_path']}{$mc_row['product_image_on']}</image:loc>" . PHP_EOL;
          echo "<image:title>Motorcycle Gas Tank {$product_name} Decals</image:title>" . PHP_EOL;
          echo "<image:caption>{$product_name} graphic installed on Motorcycle Gas Tank</image:caption>" . PHP_EOL;
        echo '</image:image>' . PHP_EOL;
    } //if($previous !== $mc_row['product_page']){ END

    if (++$mc_counter === $mc_num_results) {
      $designImage = __DIR__ . $mc_row['image_path'] . $mc_row['product_image_on'];
      $imageLastMod = date ('Y-m-d', filemtime($designImage));
        echo "<lastmod>{$imageLastMod}</lastmod>" . PHP_EOL;
        echo '<changefreq>weekly</changefreq>' . PHP_EOL;
        echo '<priority>0.80</priority>' . PHP_EOL;
      echo '</url>' . PHP_EOL;
    }
    $mc_previous = $mc_row['product_page'];
  } //while ($mc_row = mysqli_fetch_assoc($mc_result)) { END

//TRAILER SECTION
  echo '<url>' . PHP_EOL;
    echo "<loc>" . $base_url . '/pages/trailer/trailer.php' . "</loc>" . PHP_EOL;
  echo '</url>' . PHP_EOL;

/* Simon: Fix Me: This Section */
  $trailer_mc_num_results = mysqli_num_rows($trailer_mc_result);
  $trailer_mc_counter = 0; $trailer_mc_previous = NULL;
  while($trailer_mc_row = mysqli_fetch_assoc($trailer_mc_result)) {
    $product_name = htmlentities($trailer_mc_row['product_name']);
    if($trailer_mc_previous !== $trailer_mc_row['product_page']){
      if ($trailer_mc_previous !== NULL) {
        $designImage = __DIR__ . $trailer_mc_row['image_path'] . $trailer_mc_row['product_image_on'];
        $imageLastMod = date ('Y-m-d', filemtime($designImage));
        echo "<lastmod>{$imageLastMod}</lastmod>" . PHP_EOL;
        echo '<changefreq>weekly</changefreq>' . PHP_EOL;
        echo '<priority>0.80</priority>' . PHP_EOL;
        echo '</url>' . PHP_EOL;
      }
      echo '<url>' . PHP_EOL;
        echo "<loc>" . strtolower($base_url . $trailer_mc_row['product_page']) . "</loc>" . PHP_EOL;
          echo '<image:image>' . PHP_EOL;
            echo "<image:loc>{$base_url}{$trailer_mc_row['image_path']}{$trailer_mc_row['product_image_on']}</image:loc>" . PHP_EOL;
            echo "<image:title>Motorcycle Trailer {$product_name} Decals</image:title>" . PHP_EOL;
            echo "<image:caption>{$product_name} graphic installed on Motorcycle Trailer</image:caption>" . PHP_EOL;
          echo '</image:image>' . PHP_EOL;
    } else {
          echo '<image:image>' . PHP_EOL;
            echo "<image:loc>{$base_url}{$trailer_mc_row['image_path']}{$trailer_mc_row['product_image_on']}</image:loc>" . PHP_EOL;
            echo "<image:title>Motorcycle Trailer {$product_name} Decals</image:title>" . PHP_EOL;
            echo "<image:caption>{$product_name} graphic installed on Motorcycle Trailer</image:caption>" . PHP_EOL;
          echo '</image:image>' . PHP_EOL;
    } //if($previous !== $mc_row['product_page']){ END

    if (++$trailer_mc_counter === $trailer_mc_num_results) {
      $designImage = __DIR__ . $trailer_mc_row['image_path'] . $trailer_mc_row['product_image_on'];
      $imageLastMod = date ('Y-m-d', filemtime($designImage));
        echo "<lastmod>{$imageLastMod}</lastmod>" . PHP_EOL;
        echo '<changefreq>weekly</changefreq>' . PHP_EOL;
        echo '<priority>0.80</priority>' . PHP_EOL;
      echo '</url>' . PHP_EOL;
    }
    $trailer_mc_previous = $trailer_mc_row['product_page'];

  } //while($trailer_mc_row = mysqli_fetch_assoc($trailer_mc_result)) { END

//OTHER PAGES
$pageArray = ['/Pages/FAQ/FAQ-Main.php', '/Pages/FAQ/FAQ-General.php', '/Pages/FAQ/FAQ-Vinyl-Material.php', '/Pages/FAQ/FAQ-Custom-Designs.php', '/Pages/FAQ/FAQ-Ordering.php', '/Pages/FAQ/FAQ-Shipping.php', '/Pages/FAQ/FAQ-Returns.php', '/Pages/FAQ/FAQ-Installation.php', '/Pages/Support/Contact-Us.php', '/Pages/Support/Shipping-Information.php', '/Pages/Support/Installation-Insurance.php', '/Pages/Support/Installation-Insurance.php', '/Pages/Support/Installation-Insurance.php', '/Pages/Support/Installation-Insurance.php', '/Pages/Support/Graphic-Proof-Emails.php', '/Pages/Support/Terms-Conditions.php', '/Pages/Support/About-Us.php'];

foreach ($pageArray as $page) {
    echo '<url>'.
            '<loc>' . strtolower($base_url . $page) . '</loc>'.
         '</url>';
}
echo '</urlset>';
