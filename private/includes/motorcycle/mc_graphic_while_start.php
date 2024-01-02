<?php
// Container Title
$name = "$product_name<br>Design Style - $design";
// Image Path and Filename
$image_file = PUB_PATH.$image_path.$design_image;
$cart_image = $image_path.str_replace ('.svg', '.webp', $design_image);
// Add lazy loading to webp images
$lazy = ''; if ($design > 3) { $lazy = "loading='lazy'"; }
// SVG Title
$design_title = "$product_name Graphic Design Style $design";
// SVG Description'
$design_desc = "Design $design of the $product_name for the "; //SVG Description
// Potential SVG Image Path & Filename
$svg = str_replace(substr($design_image, strpos($design_image, ".") + strlen(".")), "svg", $design_image);

// Check SVG Existence
if (file_exists(PUB_PATH.$image_path.$svg)) {
    // SVG image Path and Filename
    $svg_image = $image_path.$svg;
    // Raw SVG Contents
    $svg_code = file_get_contents(PUB_PATH.$image_path.$svg);
    // Cleaned up SVG
    $graphic_design = substr($svg_code, strpos($svg_code, '<svg'));
    // Add title, description, reference texts to SVG images
    $graphic_design =
        str_replace(['$design_title', '$design_desc', '$textRef', '$text2Ref', '$text3Ref'],
            [$design_title, $design_desc, $textRef, $text2Ref, $text3Ref],
            $graphic_design);
} else {
    // Use webp if SVG is not Available
    $webp_image = $image_path.$design_image; //webp image Path and Filename
    $orientation = graphicRatio($webp_image) >= 1 ? 'v' : 'w';
    //Simon: ToDo: Possibly add image height and width to img (to stop cls problem 0.
    $graphic_design = "<img src='".webpImage($webp_image)."' class='$orientation' alt='$design_title' style='aspect-ratio: 1/" . graphicRatio($webp_image) ."' $lazy>"; //image tag

};

// Pricing and Weight
$price = pricing();
//$weight = weight(); Simon: Fix Me: May not be required, or code weight calculation.
