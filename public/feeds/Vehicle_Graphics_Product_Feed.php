<?php
require_once dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';

$db = db_connect();
confirm_db_connect();

$siteroot = 'https://vinylimagination.com';

//Vehicle Details to Query
//$Make = "Dodge"; //Make to Query
$manufacturers = ['Dodge', 'Chevy', 'Ford', 'Jeep', 'Hyundai', 'Fiat'];
$makes = implode(', ', $manufacturers);

    header ("content-type: text/xml");
    echo '<?xml version="1.0" encoding="ISO-8859-1"?>
    <rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">';?>

<channel>
    <title><?php echo "Vinyl Imagination Vehicle Graphics, Stripes, and Decals Product Google Merchant Feed"; ?></title>
    <link><?php echo "https://vinylimagination.com"; ?></link>
    <description><?php echo "Vinyl Imagination High Performance Vinyl Graphics, Stripes, and Decals for $makes range of vehicles."; ?></description>

    <?php
    foreach ($manufacturers as $manufacturer) {
      //Vehicle Query
      $vehicle_query = "SELECT * ";
      $vehicle_query .= "FROM Automotive.vehicles ";
      $vehicle_query .= "WHERE make = '$manufacturer' ";
      $vehicle_query .= "AND available IS NOT NULL ";
      $vehicles = mysqli_query($db, $vehicle_query);
      if (!$vehicles) {
        die("Vehicles Database connection failed.");
      }

      while ($vehicle = mysqli_fetch_assoc($vehicles)) {
        $year = substr($vehicle['year'], 0, 4);
        $graphics_query = "SELECT * ";
        $graphics_query .= "FROM Automotive.graphics ";
        $graphics_query .= "WHERE make = '{$vehicle['make']}' ";
        $graphics_query .= "AND year = '$year' ";
        $graphics_query .= "AND model = '{$vehicle['model']}' ";
        $graphics_query .= "AND available IS NOT NULL ";
        $graphics_query .= "ORDER BY id DESC";
        $graphics = mysqli_query($db, $graphics_query);
        if (!$graphics) {
          die("Vehicles Database connection failed.");
        }
        while ($graphic = mysqli_fetch_assoc($graphics)) {
          $product_text = str_replace(array("<strong>", "</strong>"), "", $graphic['product_text']);
          $product_text = htmlentities($product_text);
          $product_name = htmlentities($graphic['product_name']);
          $product_alternate_names =htmlentities($graphic['alternate_names']);
          $sale_price = number_format($graphic['price_1'] - ($graphic['price_1'] * $automotive_sale_discount), 2, '.', ',');


          echo "<item>
                        <title>{$vehicle['make']} {$vehicle['model']} {$vehicle['year']} {$product_name}</title>
                        <link>https://vinylimagination.com{$graphic['product_page']}</link>
                        <description>$product_text Also known as {$product_alternate_names}</description>
                        <g:image_link>https://vinylimagination.com{$graphic['image_path']}{$graphic['product_image_on']}</g:image_link>";
          $Style = sprintf("%02s", $Style + 1);
          while (file_exists($siteroot . $graphic['image_path'] . str_replace("01", $Style, $graphic['design_image'])) && ($Style <= sprintf("%02s", 10))) {
            if (file_exists($siteroot . $graphic['image_path'] . str_replace("01", $Style . "b", $graphic['design_image']))) {
              echo "<g:additional_image_link>https://vinylimagination.com" . $graphic['image_path'] . str_replace("01", $Style . "b", $graphic['design_image']) . "</g:additional_image_link>";
            } else {
              echo "<g:additional_image_link>https://vinylimagination.com" . $graphic['image_path'] . str_replace("01", $Style, $graphic['design_image']) . "</g:additional_image_link>";
            }
            $Style = sprintf("%02s", $Style + 1);
          }
          unset ($Style);
          echo "  <g:price>{$graphic['price_1']} USD</g:price>
                        <g:sale_price>$sale_price USD</g:sale_price>
                        <g:condition>new</g:condition>
                        <g:id>{$graphic['part_number']}</g:id>
                        <g:identifier_exists>FALSE</g:identifier_exists>
                        <g:availability>in stock</g:availability>
                        <g:google_product_category>2722</g:google_product_category>
                        <g:material>Premium Cast Vinyl/Premium Wrap Material</g:material>
                        <g:product_detail>
                            <g:section_name>Premium Cast Vinyl Specifications</g:section_name>
                            <g:attribute_name>Installation Method</g:attribute_name>
                            <g:attribute_value>Can be installed Wet (Preferable) or Dry</g:attribute_value>
                        </g:product_detail>
                        <g:product_detail>
                            <g:section_name>Premium Cast Vinyl Specifications</g:section_name>
                            <g:attribute_name>Durability Rating</g:attribute_name>
                            <g:attribute_value>7+ Years Vertical Surface</g:attribute_value>
                        </g:product_detail>
                        <g:product_detail>
                            <g:section_name>Premium Cast Vinyl Specifications</g:section_name>
                            <g:attribute_name>Material Thickness</g:attribute_name>
                            <g:attribute_value>2 Mil (50 Microns)</g:attribute_value>
                        </g:product_detail>
                        <g:product_detail>
                            <g:section_name>Premium Cast Vinyl Specifications</g:section_name>
                            <g:attribute_name>Features</g:attribute_name>
                            <g:attribute_value>Clear, pressure sensitive adhesive</g:attribute_value>
                        </g:product_detail>
                        <g:product_detail>
                            <g:section_name>Premium Cast Wrap Material Specifications</g:section_name>
                            <g:attribute_name>Installation Method</g:attribute_name>
                            <g:attribute_value>Can only be installed Dry (Air Release Adhesive)</g:attribute_value>
                        </g:product_detail>
                        <g:product_detail>
                            <g:section_name>Premium Cast Wrap Material Specifications</g:section_name>
                            <g:attribute_name>Durability Rating</g:attribute_name>
                            <g:attribute_value>7+ Years Vertical Surface</g:attribute_value>
                        </g:product_detail>
                        <g:product_detail>
                            <g:section_name>Premium Cast Wrap Material Specifications</g:section_name>
                            <g:attribute_name>Material Thickness</g:attribute_name>
                            <g:attribute_value>3.5 Mil (90 Microns)</g:attribute_value>
                        </g:product_detail>
                        <g:product_detail>
                            <g:section_name>Premium Cast Wrap Material Specifications</g:section_name>
                            <g:attribute_name>Features</g:attribute_name>
                            <g:attribute_value>Long-term, Removable, Repositionable, Pressure Activated Adhesive with Non-visible Air Release Channels</g:attribute_value>
                        </g:product_detail>
                        <g:product_highlight>Highest Quality, Perfect Fitting (Contour-Cut), Premium Graphics</g:product_highlight>
                        <g:product_highlight>Choice of Premium Cast Vinyl (3M 7125, Avery SC950, Oracal 751/951)</g:product_highlight>
                        <g:product_highlight>Choice of Premium Wrap (3M 2080, Avery SW900, Oracal 970RA)</g:product_highlight>
                        <g:product_highlight>Over 800 Color and Material Choices</g:product_highlight>
                        <g:product_highlight>Free Graphic Design</g:product_highlight>
                        <g:product_highlight>Fully Customizable Designs</g:product_highlight>
                        <g:product_type>Automotive Graphics &gt; {$vehicle['make']} > {$vehicle['model']} &gt; {$vehicle['year']}</g:product_type>
                        <g:tax>
                           <g:rate>0.00</g:rate>
                        </g:tax>
                        <g:shipping>
                           <g:country>US</g:country>
                           <g:service>USPS Priority Mail</g:service>
                           <g:price>0.00 USD</g:price>
                        </g:shipping>
                    </item>";
        } //While Graphics
      } //While Vehicles
    } //Foreach
    ?>
</channel>
</rss>
