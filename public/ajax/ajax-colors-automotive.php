<?php
/**
 * @var $_GET
 * values passed in URI after ? (vehicle-main.php?make=foo&model=bar)
 * @var $dbPrefix
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 */
require_once /** @lang text */
    dirname($_SERVER['DOCUMENT_ROOT']) . '/private/ajax/ajax_initialize.php';

// $GET_ Requests
$graphicId = $_GET['graphic']; //single value
//$graphicId = 218; //single value
$material = $_GET['material'];
//$material = 'wet-install';
$brands = $_GET['brands'];
//$brands = ['Orafol'];
$selects = $_GET['selects'];
//$selects = ['maincolor', 'accentcolor', 'accentcolor2', 'textcolor', 'textcolor2', 'textcolor3'];
$price = $_GET['price']; //single value
//$price = 166; //single value
$weight = $_GET['weight']; //single value
//$weight = 1.200; //single value

//Graphic
$graphic = color_graphic_query($graphicId);

//Colors
$colors = color_list_query($material, $brands);

$color2p = $graphic['color2_perc_adjust'];
$color3p = $graphic['color3_perc_adjust'];
$textp = $graphic['text_perc_adjust'];
$text2p = $graphic['text2_perc_adjust'];
$text3p = $graphic['text3_perc_adjust'];

// Simon: Todo: Clean repeated if statements below
while ($color = mysqli_fetch_assoc($colors)){
    $colorBaseLoad = $color['price_load'];
    $mainColorPriceLoad = sprintf('%0.2f',$price * $colorBaseLoad);
    $colorName = implode(' ',array_unique(explode(' ', "{$color['color_name']} {$color['color_type']}")));

    if (in_array('maincolor', $selects, true)) {
        $json_maincolor[] = [
            'optionHEXColor' => (string)$color['hex'],
            'optionValue'=> "{$color['brand']} {$color['series']} $colorName {$color['color_code']}{p+" . ceil(sprintf('%0.2f',$price * $colorBaseLoad)) . "|w+}",
            'optionSpecs'=> "{$color['film_type']}, {$color['film_thickness']} {$color['durability']}",
            'optionText'=> "{$color['brand']} {$color['series']} $colorName {$color['color_code']}",
            'optionPriceLoad'=> ceil(sprintf('%0.2f',$price * $colorBaseLoad)),
            'optionPLPercentage'=> $colorBaseLoad,
            'optionGradient'=> $color['gradient'],
            'optionSVGGradient'=> $color['svg_gradient']
        ]; //$json_mainColors[] = [ END
    } //if (in_array('maincolor', $selects, true)) { END

    if (in_array('accentcolor', $selects, true)) {
        $json_accentcolor[] = [
            'optionHEXColor' => (string)$color['hex'],
            'optionValue'=>"{$color['brand']} {$color['series']} $colorName {$color['color_code']}{p+" . colorPriceLoad($price, $color2p, $colorBaseLoad) . "|w+}",
            'optionSpecs'=> "{$color['film_type']}, {$color['film_thickness']} {$color['durability']}",
            'optionText'=>"{$color['brand']} {$color['series']} $colorName {$color['color_code']}",
            'optionPriceLoad'=> colorPriceLoad($price, $color2p, $colorBaseLoad),
            'optionPLPercentage'=> $color2p,
            'optionGradient'=> $color['gradient'],
            'optionSVGGradient'=> $color['svg_gradient']
        ]; //$json_accentColors[] = [ END
    } //if (in_array('accentcolor', $selects, true)) { END

    if (in_array('accentcolor2', $selects, true)) {
        $json_accentcolor2[] = [
            'optionHEXColor' => (string)$color['hex'],
            'optionValue'=>"{$color['brand']} {$color['series']} $colorName {$color['color_code']}{p+" . colorPriceLoad($price, $color3p, $colorBaseLoad) . "|w+}",
            'optionSpecs'=> "{$color['film_type']}, {$color['film_thickness']} {$color['durability']}",
            'optionText'=>"{$color['brand']} {$color['series']} $colorName {$color['color_code']}",
            'optionPriceLoad'=> colorPriceLoad($price, $color3p, $colorBaseLoad),
            'optionPLPercentage'=> $color3p,
            'optionGradient'=> $color['gradient'],
            'optionSVGGradient'=> $color['svg_gradient']
        ]; //$json_accent2Colors[] = [ END
    } //if (in_array('accent2Colors', $selects, true)) { END

    if (in_array('textcolor', $selects, true)) {
        $json_textcolor[] = [
            'optionHEXColor' => (string)$color['hex'],
            'optionValue'=> "{$color['brand']} {$color['series']} $colorName {$color['color_code']}{p+" . colorPriceLoad($price, $textp, $colorBaseLoad) . "|w+}",
            'optionSpecs'=> "{$color['film_type']}, {$color['film_thickness']} {$color['durability']}",
            'optionText'=>"{$color['brand']} {$color['series']} $colorName {$color['color_code']}",
            'optionPriceLoad'=> colorPriceLoad($price, $textp, $colorBaseLoad),
            'optionPLPercentage'=> $textp,
            'optionGradient'=> $color['gradient'],
            'optionSVGGradient'=> $color['svg_gradient']
        ]; //$json_textColors[] = [ END
    } //if (in_array('textColors', $selects, true)) {

    if (in_array('textcolor2', $selects, true)) {
        $json_textcolor2[] = [
            'optionHEXColor' => (string)$color['hex'],
            'optionValue'=> "{$color['brand']} {$color['series']} $colorName {$color['color_code']}{p+" . colorPriceLoad($price, $text2p, $colorBaseLoad) . "|w+}",
            'optionSpecs'=> "{$color['film_type']}, {$color['film_thickness']} {$color['durability']}",
            'optionText'=>"{$color['brand']} {$color['series']} $colorName {$color['color_code']}",
            'optionPriceLoad'=> colorPriceLoad($price, $text2p, $colorBaseLoad),
            'optionPLPercentage'=> $text2p,
            'optionGradient'=> $color['gradient'],
            'optionSVGGradient'=> $color['svg_gradient']
        ]; //$json_text2Colors[] = [ END
    } //if (in_array('text2Colors', $selects, true)) { END

    if (in_array('textcolor3', $selects, true)) {
        $json_textcolor3[] = [
            'optionHEXColor' => (string)$color['hex'],
            'optionValue'=> "{$color['brand']} {$color['series']} $colorName {$color['color_code']}{p+" . colorPriceLoad($price, $text3p, $colorBaseLoad) . "|w+}",
            'optionSpecs'=> "{$color['film_type']}, {$color['film_thickness']} {$color['durability']}",
            'optionText'=>"{$color['brand']} {$color['series']} $colorName {$color['color_code']}",
            'optionPriceLoad'=> colorPriceLoad($price, $text3p, $colorBaseLoad),
            'optionPLPercentage'=> $text3p,
            'optionGradient'=> $color['gradient'],
            'optionSVGGradient'=> $color['svg_gradient']
        ]; //$json_text3Colors[] = [ END
    } //if (in_array('text3Colors', $selects, true)) { END

}


$jsonArray = array();

foreach ((array) $selects as $select) {
    $jsonArray[htmlentities($select)] = ${'json_' . $select};
}

header('Content-Type: application/json'); //Simon: Note: This is REQUIRED on Godaddy Server to allow ajax return above 1mb.

echo json_encode($jsonArray); //Simon: Note: This short line replaces line above
