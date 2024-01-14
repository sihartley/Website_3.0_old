<?php
// Part Number
$design_pn = "$part_number-$design";
// Container Title
$name = "$product_name<br>Design Style - $design";
// Image Path and Filename
$image_file = PUB_PATH.$image_path.str_replace ('01', $design, $design_image);
$cart_image = $image_path.str_replace (['01', '.svg'], [$design, '.webp'], $design_image);
// Add lazy loading to webp images
$lazy = ''; if ($design > 3) { $lazy = "loading='lazy'"; }
// SVG Title
$design_title = "$product_name Graphic Design Style $design";
// SVG Description'
$design_desc = "Design $design of the $product_name for the $year_range $make $model"; //SVG Description
// Potential SVG Image Path & Filename
$svg = str_replace(substr($design_image, strpos($design_image, ".") + strlen(".")), "svg", $design_image);

// Check SVG Existence
if (file_exists(PUB_PATH.$image_path.str_replace ('01', $design, $svg))) {
    // SVG image Path and Filename
    $svg_image = $image_path.str_replace ('01', $design, $svg);
    // Graphic Orientation < 1 = w, > = v
    $ratio = graphicRatio($image_path.str_replace ('01', $design, $design_image));
    $orientation = $ratio >= .92 ? 'v' : 'w';;
    // Raw SVG Contents
    $svg_code = file_get_contents(PUB_PATH.$image_path.str_replace ('01', $design, $svg));
    // Cleaned up SVG
    $graphic_design = substr($svg_code, strpos($svg_code, '<svg'));
    // Gradient Definitions
    $gradientDefs = "
            <title>$design_title</title>
            <desc>$design_desc</desc>
            <defs>
				<linearGradient id='mainGradient_$design' y2='1'>
		        </linearGradient>
				<linearGradient id='accentGradient_$design' y2='1'>
		        </linearGradient>
				<linearGradient id='accent2Gradient_$design' y2='1'>
		        </linearGradient>
				<linearGradient id='textGradient_$design' y2='1'>
		        </linearGradient>
				<linearGradient id='text2Gradient_$design' y2='1'>
		        </linearGradient>
				<linearGradient id='text3Gradient_$design' y2='1'>
		        </linearGradient>
		    </defs> 
		    <!--Ratio: 1/$ratio -->";

    // Add title, description, reference texts to SVG images
    $graphic_design =
        str_replace(['$design_title', '$design_desc', '$textRef', '$text2Ref', '$text3Ref', '$design', '$gradientDefs'],
            [$design_title, $design_desc, $textRef, $text2Ref, $text3Ref, $design, $gradientDefs],
            $graphic_design);
} else {
    // Use webp if SVG is not Available
    $webp_image = $image_path.str_replace ('01', $design, $design_image); //webp image Path and Filename
    $orientation = graphicRatio($webp_image) >= .92 ? 'v' : 'w';
    //Simon: ToDo: Possibly add image height and width to img (to stop cls problem 0.
    $graphic_design = "<img src='".webpImage($webp_image)."' class='$orientation' alt='$design_title' style='aspect-ratio: 1/" . graphicRatio($webp_image) ."' $lazy>"; //image tag

};

// Pricing and Weight
$price = pricing();
$weight = weight();
