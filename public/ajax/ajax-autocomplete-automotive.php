<?php
/**
 * @var $_GET
 * values passed in URI after ? (vehicle-main.php?make=foo&model=bar)
 * @var $dbPrefix
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 */
require_once /** @lang text */
    dirname($_SERVER['DOCUMENT_ROOT']) . '/private/ajax/ajax_initialize.php';

//Values passed from Ajax getJSON() request.
$vColumns = db_escape($_GET['vColumns'] ?? '*');
//$vColumns = 'autocomplete_phrases, image_path';
$vehicleId = db_escape($_GET['vehicle']);
//$vehicleId = 17;

$phrases = autocomplete_query($vColumns, $vehicleId);
$autocompleteData = [];
$phrase_list = explode(', ', $phrases['autocomplete_phrases']);
foreach ($phrase_list as $phrase_item) {

    $svg = $phrases['image_path'] . str_replace(['.', ' ', '/'], ['_', '-', ''], $phrase_item) . '.svg';

    $data['phrase'] = $phrase_item;
    $data['phrase_svg'] = $svg;
    $data['label'] = "<div class='ac-item'><div class='ac-image'><img src='$svg'/></div><div class='ac-phrase'>$phrase_item</div></div>";
    $data['value'] = $phrase_item;

    $autocompleteData[] = $data;
}



//echo '<pre>';
//print_r($phrases['autocomplete_phrases']);
//echo '</pre>';

echo json_encode($autocompleteData);