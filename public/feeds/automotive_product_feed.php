<?php
require_once /** @lang text */
    dirname($_SERVER['DOCUMENT_ROOT']) . '/private/includes/initialize.php';
/**
 * @var $dbPrefix * From function hostident() IN core_functions.php INCLUDE in initialize.php
 * @var $rightClickProtect * From function hostident() IN core_functions.php INCLUDE in initialize.php
 * @var $automotive_sale_discount * FROM includes/business_info.php
 * @var $base_costs_auto * FROM includes/business_info.php
 * @var $trans_fee * FROM includes/business_info.php
 */

$siteroot = 'https://vinylimagination.com';

//Vehicle Details to Query
//$Make = "Dodge"; //Make to Query
$manufacturers = ['Dodge', 'Chevy', 'Ford', 'Jeep', 'Hyundai', 'Fiat'];
$makes = implode(', ', $manufacturers);


header ("content-type: text/xml");
echo '<?xml version="1.0" encoding="ISO-8859-1"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">'; ?>

    <channel>
        <title><?= "Vinyl Imagination Vehicle Graphics, Stripes, and Decals Product Google Merchant Feed"; ?></title>
        <link><?= "https://vinylimagination.com"; ?></link>
        <description><?= "Vinyl Imagination High Performance Vinyl Graphics, Stripes, and Decals for $makes range of vehicles."; ?></description>

        <?php
        foreach ($manufacturers as $manufacturer) {
            $columns = 'make, model, year';
            $vehicle_query = "(SELECT $columns FROM {$dbPrefix}Automotive.vehicles WHERE make = '$manufacturer' ORDER BY make ASC)";
            $vehicles = db_query($vehicle_query);

            while ($vehicle = mysqli_fetch_assoc($vehicles)) {
                $year = substr($vehicle['year'], 0, 4);
                $columns = 'product_page, product_text, product_name, alternate_names, price_1, image_path, product_image_on, design_image, part_number';
                $graphics_query = "(SELECT $columns FROM {$dbPrefix}Automotive.graphics WHERE make = '{$vehicle['make']}' AND year = '$year' AND model = '{$vehicle['model']}' AND available IS NOT NULL ORDER BY id DESC)";
                $graphics = db_query($graphics_query);

                while ($graphic = mysqli_fetch_assoc($graphics)) {
                    $product_page = strtolower($graphic['product_page']);
                    $product_text = htmlspecialchars(htmlentities(str_replace(array("<strong>", "</strong>"), "", $graphic['product_text'])));
                    $product_name = htmlentities($graphic['product_name']);
                    $product_alternate_names =htmlentities($graphic['alternate_names']);
                    $price = ceil(num: number_format((($base_costs_auto + $graphic['price_1']) * $trans_fee) + ($base_costs_auto + $graphic['price_1']), 2));
                    $sale_price = ceil($price - ($price * $automotive_sale_discount));

                    echo "
                    <item>
                        <title>{$vehicle['make']} {$vehicle['model']} {$vehicle['year']} {$product_name}</title>
                        <link>{$siteroot}{$product_page}</link>
                        <description>$product_text Also known as {$product_alternate_names}</description>
                        <g:image_link>{$siteroot}{$graphic['image_path']}{$graphic['product_image_on']}</g:image_link>";


                    $style = 0; $style = sprintf("%02s", $style + 1);
                    while (file_exists($siteroot . $graphic['image_path'] . str_replace("01", $style, $graphic['design_image'])) && ($style <= sprintf("%02s", 10))) {
                        if (file_exists($siteroot . $graphic['image_path'] . str_replace("01", $style . "b", $graphic['design_image']))) {
                            echo "<g:additional_image_link>$siteroot" . $graphic['image_path'] . str_replace("01", $style . "b", $graphic['design_image']) . "</g:additional_image_link>";
                        } else {
                            echo "<g:additional_image_link>$siteroot" . $graphic['image_path'] . str_replace("01", $style, $graphic['design_image']) . "</g:additional_image_link>";
                        }
                        $style = sprintf("%02s", $style + 1);
                    }
                    unset ($style);

                    echo "
                        <g:price>{$price} USD</g:price>
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
                    </item>
                    ";
                } //while graphics
            } //while vehicles
        } //foreach
        ?>

    </channel>
</rss>