<?php
$siteroot = $_SERVER['DOCUMENT_ROOT'];
require ("$siteroot/includes/MySQL Connections/Connect_Motorcycle.php"); //put connect in "includes" folder, and point to it.
    header ("content-type: text/xml");
    echo '<?xml version="1.0" encoding="ISO-8859-1"?>
    <rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">';?>

<channel>
    <title><?php echo "Vinyl Imagination Motorcycle Graphics Product Google Merchant Feed"; ?></title>
    <link><?php echo "https://www.vinylimagination.com"; ?></link>
    <description><?php echo "Vinyl Imagination High Performance Vinyl Graphics, Stripes, and Decals for Motorcycles."; ?></description>

    <?php
    $graphic_query  = "SELECT * FROM graphics_custom WHERE available IS NOT NULL ";
    $graphics = mysqli_query($db, $graphic_query);
    if (!$graphics) {die("Graphics Database connection failed.");};
        while ($graphic = mysqli_fetch_assoc($graphics)) {
            $product_text = str_replace(array("<strong>", "</strong>"), "", $graphic['product_text']);
                $product_text = htmlentities($product_text);
            $product_name = htmlentities($graphic['product_name']);
            $display_price = ((($graphic['size_min']*$graphic['height_ratio'])*$graphic['size_min'])*$graphic['ppsi_base'])+$graphic['price_base'];
                $display_price = number_format($display_price, 2, '.', '');

            echo "<item>
                    <title>{$product_name} Motorcycle Gas Tank Decals</title>
                    <link>https://www.vinylimagination.com{$graphic['product_page']}</link>
                    <description>$product_text</description>
                    <g:image_link>https://www.vinylimagination.com{$graphic['image_path']}{$graphic['product_image_on']}</g:image_link>
                    <g:additional_image_link>https://vinylimagination.com{$graphic['image_path']}{$graphic['design_image']}</g:additional_image_link>
                    <g:price>{$display_price} USD</g:price>
                    <g:condition>new</g:condition>
                    <g:id>{$graphic['part_number']}</g:id>
                    <g:identifier_exists>FALSE</g:identifier_exists>
                    <g:availability>in stock</g:availability>
                    <g:product_type>Motorcycle Graphics &gt; Gas Tank Decals &gt; Custom Gas Tank Decals</g:product_type>
                    <g:tax>
                       <g:rate>0.00</g:rate>
                    </g:tax>
                    <g:shipping>
                       <g:country>US</g:country>
                       <g:service>USPS Priority Mail</g:service>
                       <g:price>0.00 USD</g:price>
                    </g:shipping>
                </item>";
        };
    $graphic_query  = "SELECT * FROM graphics_flaming_eagles WHERE available IS NOT NULL ";
    $graphics = mysqli_query($db, $graphic_query);
    if (!$graphics) {die("Graphics Database connection failed.");};
    while ($graphic = mysqli_fetch_assoc($graphics)) {
        $product_text = str_replace(array("<strong>", "</strong>"), "", $graphic['product_text']);
        $product_text = htmlentities($product_text);
        $product_name = htmlentities($graphic['product_name']);
        $display_price = ((($graphic['size_min']*$graphic['height_ratio'])*$graphic['size_min'])*$graphic['ppsi_base'])+$graphic['price_base'];
        $display_price = number_format($display_price, 2, '.', '');

        echo "<item>
                        <title>{$product_name} Motorcycle Gas Tank Decals</title>
                        <link>https://www.vinylimagination.com{$graphic['product_page']}</link>
                        <description>$product_text</description>
                        <g:image_link>https://www.vinylimagination.com{$graphic['image_path']}{$graphic['product_image_on']}</g:image_link>
                        <g:additional_image_link>https://vinylimagination.com{$graphic['image_path']}{$graphic['design_image']}</g:additional_image_link>
                        <g:price>{$display_price} USD</g:price>
                        <g:condition>new</g:condition>
                        <g:id>{$graphic['part_number']}</g:id>
                        <g:identifier_exists>FALSE</g:identifier_exists>
                        <g:availability>in stock</g:availability>
                        <g:product_type>Motorcycle Graphics &gt; Gas Tank Decals &gt; Flaming Eagle Gas Tank Decals</g:product_type>
                        <g:tax>
                           <g:rate>0.00</g:rate>
                        </g:tax>
                        <g:shipping>
                           <g:country>US</g:country>
                           <g:service>USPS Priority Mail</g:service>
                           <g:price>0.00 USD</g:price>
                        </g:shipping>
                    </item>";
    };
    $graphic_query  = "SELECT * FROM graphics_flaming_skull WHERE available IS NOT NULL ";
    $graphics = mysqli_query($db, $graphic_query);
    if (!$graphics) {die("Graphics Database connection failed.");};
    while ($graphic = mysqli_fetch_assoc($graphics)) {
        $product_text = str_replace(array("<strong>", "</strong>"), "", $graphic['product_text']);
        $product_text = htmlentities($product_text);
        $product_name = htmlentities($graphic['product_name']);
        $display_price = ((($graphic['size_min']*$graphic['height_ratio'])*$graphic['size_min'])*$graphic['ppsi_base'])+$graphic['price_base'];
        $display_price = number_format($display_price, 2, '.', '');

        echo "<item>
                        <title>{$product_name} Motorcycle Gas Tank Decals</title>
                        <link>https://www.vinylimagination.com{$graphic['product_page']}</link>
                        <description>$product_text</description>
                        <g:image_link>https://www.vinylimagination.com{$graphic['image_path']}{$graphic['product_image_on']}</g:image_link>
                        <g:additional_image_link>https://vinylimagination.com{$graphic['image_path']}{$graphic['design_image']}</g:additional_image_link>
                        <g:price>{$display_price} USD</g:price>
                        <g:condition>new</g:condition>
                        <g:id>{$graphic['part_number']}</g:id>
                        <g:identifier_exists>FALSE</g:identifier_exists>
                        <g:availability>in stock</g:availability>
                        <g:product_type>Motorcycle Graphics &gt; Gas Tank Decals &gt; Flaming Skull Gas Tank Decals</g:product_type>
                        <g:tax>
                           <g:rate>0.00</g:rate>
                        </g:tax>
                        <g:shipping>
                           <g:country>US</g:country>
                           <g:service>USPS Priority Mail</g:service>
                           <g:price>0.00 USD</g:price>
                        </g:shipping>
                    </item>";
    };
    $graphic_query  = "SELECT * FROM graphics_tank_flames WHERE available IS NOT NULL ";
    $graphics = mysqli_query($db, $graphic_query);
    if (!$graphics) {die("Graphics Database connection failed.");};
    while ($graphic = mysqli_fetch_assoc($graphics)) {
        $product_text = str_replace(array("<strong>", "</strong>"), "", $graphic['product_text']);
        $product_text = htmlentities($product_text);
        $product_name = htmlentities($graphic['product_name']);
        $display_price = ((($graphic['size_min']*$graphic['height_ratio'])*$graphic['size_min'])*$graphic['ppsi_base'])+$graphic['price_base'];
        $display_price = number_format($display_price, 2, '.', '');

        echo "<item>
                        <title>{$product_name} Motorcycle Gas Tank Decals</title>
                        <link>https://www.vinylimagination.com{$graphic['product_page']}</link>
                        <description>$product_text</description>
                        <g:image_link>https://www.vinylimagination.com{$graphic['image_path']}{$graphic['product_image_on']}</g:image_link>
                        <g:additional_image_link>https://vinylimagination.com{$graphic['image_path']}{$graphic['design_image']}</g:additional_image_link>
                        <g:price>{$display_price} USD</g:price>
                        <g:condition>new</g:condition>
                        <g:id>{$graphic['part_number']}</g:id>
                        <g:identifier_exists>FALSE</g:identifier_exists>
                        <g:availability>in stock</g:availability>
                        <g:product_type>Motorcycle Graphics &gt; Gas Tank Decals &gt; Gas Tank Flame Decals</g:product_type>
                        <g:tax>
                           <g:rate>0.00</g:rate>
                        </g:tax>
                        <g:shipping>
                           <g:country>US</g:country>
                           <g:service>USPS Priority Mail</g:service>
                           <g:price>0.00 USD</g:price>
                        </g:shipping>
                    </item>";
    };
    ?>
</channel>
</rss>
