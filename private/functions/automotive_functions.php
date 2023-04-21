<?php // Functions for Automotive Pages

//Graphics and Vehicle Query
function graphic_vehicle_query($id):array {
    global $dbPrefix;
    $graphic_columns = [
        'part_number', 'make', 'model', 'year', 'years_exclusive', 'trims_exclusive',
        'product_name', 'image_path', 'product_image_on', 'design_image',
        'price_1', 'price_2', 'price_2_styles', 'price_3', 'price_3_styles', 'price_4', 'price_4_styles', 'price_5', 'price_5_styles', 'unit',
        'weight_1', 'weight_2', 'weight_2_styles', 'weight_3', 'weight_3_styles', 'weight_4', 'weight_4_styles', 'weight_5', 'weight_5_styles',
        'color2_perc_adjust', 'text_perc_adjust', 'text2_perc_adjust', 'text3_perc_adjust'
    ];

    $vehicle_columns = [
        'year', 'years', 'trims', 'colors'
    ];

    $select_graphics = implode(', ', $graphic_columns);
    $select_vehicle = implode(', ', $vehicle_columns);
    $graphic_query = "( SELECT $select_graphics FROM {$dbPrefix}Automotive.graphics WHERE id = $id )";
    $graphic = mysqli_fetch_assoc(db_query($graphic_query));
    $vehicle_query = "( SELECT $select_vehicle FROM {$dbPrefix}Automotive.vehicles WHERE make = '{$graphic['make']}' AND model = '{$graphic['model']}' AND year LIKE '%{$graphic['year']}%' )";
    $vehicle = mysqli_fetch_assoc(db_query($vehicle_query));
    db_disconnect(db_connect());
    return [$graphic, $vehicle];
}

// Model Years
function modelYears():void {
    global $graphic, $vehicle;

    if ($graphic['years_exclusive']) {
        $modelYears = explode(', ', $graphic['years_exclusive']);
    } elseif(date('n') >= 8 && stripos($vehicle['year'], 'present')) { // > August, and 'Present'
        $yearSplit = explode(' ', $vehicle['year']); // Puts {$vehicle[year}} parts into array.
        $modelYears = range($yearSplit[0], date('Y') + 1); //Fills in array between year and now.
    } else {
        $modelYears =  explode(', ', $vehicle['years']);
    }

    //output in form
    echo '<div class="model-year"><select data-placeholder="Year" name="Model Year" onchange="initDynamicPrice();" style="width: 100%;" required>';
    echo "<option></option>"; //Required for placeholder to work
    foreach ($modelYears as $year) {
        echo "<option value='$year'>$year</option>";
    }
    echo '</select></div>';
}

// Trim Levels
function trimLevels(array $trimsOverride = null, array $trimsAddon = null, array $trimsPriceMod = null, bool $modelsOverride = null):void {
    global $graphic, $vehicle;  $model = $graphic['model'];

    //Trim Level List Creation
    if ($trimsOverride) { // Takes Precedent Over Automated TrimLevel code below
        $trim_levels = $trimsOverride;
    } elseif ($trimsAddon) {
        if ($graphic['trims_exclusive']) {
            $trim_levels = array_merge(explode(', ', $graphic['trims_exclusive']), $trimsAddon);
        } else if (!empty($graphic['trims_add'])) {
            $trim_levels = array_merge(explode(', ', $vehicle['trims']), explode(', ', $graphic['trims_add']), $trimsAddon);
        } else {
            $trim_levels = array_merge(explode(', ', $vehicle['trims']), $trimsAddon);
        }
    } else if ($graphic['trims_exclusive']) {
        $trim_levels = array_merge(explode(', ', $graphic['trims_exclusive']));
    } else if (!empty($graphic['trims_add'])) {
        $trim_levels = array_merge(explode(', ', $vehicle['trims']), explode(', ', $graphic['trims_add']));
    } else {
        $trim_levels = array_merge(explode(', ', $vehicle['trims']));
    }

    //Output in form
    echo "<div class='trim-level'><select data-placeholder='Trim' name='Trim Level' onchange='initDynamicPrice();' style='width: 100%;' required>";
    echo '<option></option>';
    if (!$trimsPriceMod) {
        foreach ($trim_levels as $trim) {
            $trim = htmlentities("$model $trim", ENT_QUOTES);
            echo "<option data-svg='\images\icon_star.svg' value='$trim'>$trim</option>";
        }
    } else {
        foreach ($trim_levels as $trim) { // Checks Trims with Adjustment.
            if (($key = array_search($trim, array_column($trimsPriceMod, 'trim'), false)) !== false) {
                $trim = htmlentities("$model {$trimsPriceMod[$key]['trim']}", ENT_QUOTES);
                echo "<option data-svg='\images\icon_star.svg' value='$trim{p+{" . ceil($trimsPriceMod[$key]['price_mod']) . "}}'>$trim (+\${$trimsPriceMod[$key]['price_mod']})</option>";
            } else { // Trim Levels without Price Mods.
                $trim = htmlentities("$model $trim", ENT_QUOTES);
                echo "<option data-svg='\images\icon_star.svg' value='$trim'>$trim</option>";
            }
        }
    }
    echo '</select></div>';
}

// Car Colors
function carColors():void {
    global $design, $vehicle;
    echo
        "<div class='car-color'>"
        ."<select data-placeholder='Color' name='Car Color' onchange='initDynamicPrice();' style='width: 100%;'>"
        ."<option></option>";
    $color = explode(', ', $vehicle['colors']);
    $car_colors = [];
    for($i=0; $i < count($color); $i++){
        $key_value = explode(':', $color [$i]);
        $car_colors[$key_value [0]] = $key_value [1];
    }
    foreach ($car_colors as $color => $code) {
        echo "<option data-hex='$code'>$color</option>";
    }
    echo
        '</select>'
        .'</div>';
}

// Material & Brand
function materialBrand():void {
    global $design;
    echo
    "<div class='material'>"
        ."<select id='material_$design' data-placeholder='Preferred Install Method' onchange='initDynamicPrice();' style='width: 100%;'>"
            ."<option value=''></option>"
            ."<option value='wet-install'>Wet-Install Premium Cast</option>"
            ."<option value='dry-install'>Dry-Install Premium Wrap</option>"
        .'</select>'
    .'</div>'
    ."<div class='brand'>"
        ."<select id='brand_$design' data-placeholder='Choose Material Brand(s)' onchange='initDynamicPrice();' style='width: 100%; display: none;' multiple required disabled>"
            ."<option value=''></option>"
        .'</select>'
    .'</div>';
}

// Main Color Dropdown
function mainColor():void {
    global $design;
    echo
    "<div class='main-color' style='display: none;'>"
        ."<select id='maincolor_$design' data-placeholder='Main Color' name='Main Color' onchange='initDynamicPrice();' style='width: 100%;' required disabled>"
            ."<option class='standard-opt' value=''></option>"
        .'</select>'
    .'</div>';
}

// Accent Color Dropdown
function accentColor($designs = [], $cut = [], $same = []):void {
    global $design;
    if (in_array($design, $designs)) {
    echo
        "<div class='accent' style='display: none'>"
            ."<select id='accentcolor_$design' data-placeholder='Accent Color' name='Accent' onchange='initDynamicPrice();' style='width: 100%;' required disabled>"
            ."<option class='standard-opt' value=''></option>";

            if (in_array($design, $cut)) {
                echo
                "<option class='standard-opt cut-out'
                        data-classes='cut-out'
                        data-color='#000'
                        data-cutout=''
                        data-specs='Accent will be cut out, and vehicle paint will show through.'
                        data-priceload='0'
                        value='Cut Accent Out'>Cut Accent Out of Main Graphic
                </option>";
            };

            if (in_array($design, $same)) {
                echo
                "<option class='standard-opt main-same'
                        data-classes='main-same'
                        data-color='#000'
                        data-specs='Accent will be the same color as the main graphic'
                        data-priceload='0'
                        value='Accent Same as Main'>Same as Main Graphic
                </option>";
            };

    echo "</select>"
    ."</div>";
}

}

// Accent 2 Color Dropdown
function accentColor2($designs = [], $cut = [], $same = []):void {
    global $design;
    if (in_array($design, $designs)) {
    echo
        "<div class='accent' style='display: none'>"
            ."<select id='accentcolor2_$design' data-placeholder='Accent 2 Color' name='Accent' onchange='initDynamicPrice();' style='width: 100%;' required disabled>"
                ."<option class='standard-opt' value=''></option>";
                if (in_array($design, $cut)) {
                echo
                "<option class='standard-opt cut-out'
                    data-classes='cut-out'
                    data-color='#000'
                    data-specs='Accent will be cut out, and vehicle paint will show through.'
                    data-priceload='0'
                    value='Cut Accent Out'>Cut Accent Out of Main Graphic
                </option>";
                };
                if (in_array($design, $same)) {
                echo
                "<option class='standard-opt main-same'
                    data-classes='main-same'
                    data-color='#000'
                    data-specs='Accent 2 will be the same color as the main graphic'
                    data-priceload='0.00'
                    value='Accent Same as Main'>Same as Main Graphic
                </option>";
                };

                echo
                "<option class='standard-opt accent-same'
                            data-classes='accent-same'
                            data-color='#000'
                            data-specs='Accent 2 will be the same color as the Accent'
                            data-priceload='0'
                            value='Accent Same as Accent'>Same as Accent
                </option>"
            ."</select>"
        ."</div>";
    }
}

// Text & Color Dropdown
function text($textRef, $textCut, $textSame, $accentStyles, $accent2Styles):void {
    global $design;
    echo
    "<div class='text-option'>"
        ."<div>"
        ."<label for='option-1-$design' data-txt='$textRef'>$textRef</label>"
        ."<input id='option-1-$design' type='checkbox'>"
        ."</div>"
        ."<div class='option' style='display: none'>"
            ."<input id='textinput_$design' type='text'  oninput='textChange(this)'>"
            ."<select id='textcolor_$design' data-placeholder='Text/Logo Color' name='$textRef' onchange='initDynamicPrice();' style='width: 100%;' disabled>"
                ."<option class='standard-opt' value=''></option>";
        if (in_array($design, $textCut)) {
            echo
                "<option class='standard-opt text-cut-out'
                        data-classes='text-cut-out'
                        data-color='#000'
                        data-specs='Text/Logo will be cut out, and vehicle paint will show through.'
                        data-priceload='0'
                        value='Cut Text/Logo Out'>Cut Text/Logo Out of Main Graphic
                </option>";
        };
        if (in_array($design, $textSame)) {
            echo
                "<option class='standard-opt text-same'
                        data-classes='text-same'
                        data-color='#000'
                        data-specs='Text/Logo will be the same color as the main graphic'
                        data-priceload='0'
                        value='Text/Logo Same as Main'>Text/Logo Same Color as Main Graphic
                </option>";
        };
        if (in_array($design, $accentStyles)) {
            echo
                "<option class='standard-opt text-accent-same'
                        data-classes='text-accent-same'
                        data-color='#000'
                        data-specs='Text/Logo will be the same color as the accent'
                        data-priceload='0'
                        value='Text/Logo Same as Accent'>Text/Logo Same Color as accent
                </option>";
        };
        if (in_array($design, $accent2Styles)) {
            echo
                "<option class='standard-opt text-accent2-same'
                        data-classes='text-accent2-same'
                        data-color='#000'
                        data-specs='Text/Logo will be the same color as accent 2'
                        data-priceload='0'
                        value='Text/Logo Same as Accent 2'>Text/Logo Same Color as accent 2
                </option>";
        };
    echo
            "</select>"
        ."</div>"
    ."</div>";
}

// Text & Color 2 Dropdown
function text2($text2Ref, $text2Cut, $text2Same, $text1, $accentStyles, $accent2Styles):void {
    global $design;
    echo
    "<div class='text-option'>"
        ."<div>"
            ."<label for='option-2-$design'  data-txt='$text2Ref'>$text2Ref</label>"
            ."<input id='option-2-$design' type='checkbox'>"
        ."</div>"
        ."<div class='option' style='display: none'>"
            ."<input id='textinput2_$design' type='text' oninput='textChange(this)'>"
            ."<select id='textcolor2_$design' data-placeholder='Text/Logo Color' name='$text2Ref' onchange='initDynamicPrice();' style='width: 100%;' disabled>"
                ."<option class='standard-opt' value=''></option>";
        if (in_array($design, $text2Cut)) {
            echo
                "<option class='standard-opt text-cut-out'
                        data-classes='text-cut-out'
                        data-color='#000'
                        data-specs='Text/Logo will be cut out, and vehicle paint will show through.'
                        data-priceload='0'
                        value='Cut Text/Logo Out'>Cut Text/Logo Out of Main Graphic
                </option>";
        };
        if (in_array($design, $text2Same)) {
            echo
                "<option class='standard-opt text-same'
                        data-classes='text-same'
                        data-color='#000'
                        data-specs='Text/Logo will be the same color as the main graphic'
                        data-priceload='0'
                        value='Text/Logo Same as Main'>Text/Logo Same Color as Main Graphic
                </option>";
        };
        if (in_array($design, $accentStyles)) {
            echo
                "<option class='standard-opt text-accent-same'
                        data-classes='text-accent-same'
                        data-color='#000'
                        data-specs='Text/Logo will be the same color as the accent'
                        data-priceload='0'
                        value='Text/Logo Same as Accent'>Text/Logo Same Color as accent
                </option>";
        };
        if (in_array($design, $accent2Styles)) {
            echo
                "<option class='standard-opt text-accent2-same'
                        data-classes='text-accent2-same'
                        data-color='#000'
                        data-specs='Text/Logo will be the same color as accent 2'
                        data-priceload='0'
                        value='Text/Logo Same as Accent 2'>Text/Logo Same Color as accent 2
                </option>";
        };
        if (in_array($design, $text1)) {
            echo
                "<option class='standard-opt text-text-same'
                        data-classes='text-text-same'
                        data-color='#000'
                        data-specs='Text/Logo will be the same color as Text'
                        data-priceload='0'
                        value='Text/Logo Same as Text'>Text/Logo Same Color as Text
                </option>";
        };
        echo
            "</select>"
        ."</div>"
    ."</div>";
}

// Text & Color 3 Dropdown
function text3($text3Ref, $text3Cut, $text3Same, $text1, $text2, $accentStyles, $accent2Styles):void {
    global $design;
    echo
    "<div class='text-option'>"
        ."<div>"
            ."<label for='option-3-$design' data-txt='$text3Ref'>$text3Ref</label>"
            ."<input id='option-3-$design' type='checkbox'>"
        ."</div>"
        ."<div class='option' style='display: none'>"
            ."<input id='textinput_3$design' type='text' oninput='textChange(this)'>"
            ."<select id='textcolor3_$design' data-placeholder='Text/Logo Color' name='$text3Ref' onchange='initDynamicPrice();' style='width: 100%;' disabled>"
                ."<option class='standard-opt' value=''></option>";
        if (in_array($design, $text3Cut)) {
            echo
                "<option class='standard-opt text-cut-out'
                        data-classes='text-cut-out'
                        data-color='#000'
                        data-specs='Text/Logo will be cut out, and vehicle paint will show through.'
                        data-priceload='0'
                        value='Cut Text/Logo Out'>Cut Text/Logo Out of Main Graphic
                </option>";
        };
        if (in_array($design, $text3Cut)) {
            echo
                "<option class='standard-opt text-same'
                        data-classes='text-same'
                        data-color='#000'
                        data-specs='Text/Logo will be the same color as the main graphic'
                        data-priceload='0'
                        value='Text/Logo Same as Main'>Text/Logo Same Color as Main Graphic
                </option>";
        };
        if (in_array($design, $accentStyles)) {
            echo
                "<option class='standard-opt text-accent-same'
                        data-classes='text-accent-same'
                        data-color='#000'
                        data-specs='Text/Logo will be the same color as the accent'
                        data-priceload='0'
                        value='Text/Logo Same as Accent'>Text/Logo Same Color as accent
                </option>";
        };
        if (in_array($design, $accent2Styles)) {
            echo
                "<option class='standard-opt text-accent2-same'
                        data-classes='text-accent2-same'
                        data-color='#000'
                        data-specs='Text/Logo will be the same color as accent 2'
                        data-priceload='0'
                        value='Text/Logo Same as Accent 2'>Text/Logo Same Color as accent 2
                </option>";
        };
        if (in_array($design, $text1)) {
            echo
                "<option class='standard-opt text-text-same'
                        data-classes='text-text-same'
                        data-color='#000'
                        data-specs='Text/Logo will be the same color as Text'
                        data-priceload='0'
                        value='Text/Logo Same as Text'>Text/Logo Same Color as Text
                </option>";
        };
        if (in_array($design, $text2)) {
            echo
                "<option class='standard-opt text-text-same'
                        data-classes='text-text-same'
                        data-color='#000'
                        data-specs='Text/Logo will be the same color as Text 2'
                        data-priceload='0'
                        value='Text/Logo Same as Text 2'>Text/Logo Same Color as Text 2
                </option>";
        };
        echo
            "</select>"
        ."</div>"
    ."</div>";
}

// Text & Color Switch
function textColorOptions($text1 = [], $textRef = '', $textCut = [], $textSame = [], $text2 = [], $text2Ref = '', $text2Cut = [], $text2Same = [], $text3 = [], $text3Ref = '', $text3Cut = [], $text3Same = [], $accentStyles = [], $accent2Styles = []):void {
    global $design;
    if (in_array($design, $text1) or in_array($design, $text2) or in_array($design, $text3)) {
        echo
            "<div class='option-switch'>"
            ."<label for='main-options-$design'
                   data-txt='Add Text and Logo Options?'
                   data-alt-txt='Please select which area(s) you would like to customize.'>
                       Add Text and Logo Options?
            </label>"
            ."<input id='main-options-$design' class='options-check' type='checkbox'>"
            ."</div>"
            ."<div class='options' style='display: none'>";

        if (in_array($design, $text1)) {
            text($textRef, $textCut, $textSame, $accentStyles, $accent2Styles);
        };
        if (in_array($design, $text2)) {
            text2($text2Ref, $text2Cut, $text2Same, $text1, $accentStyles, $accent2Styles);
        };
        if (in_array($design, $text3)) {
            text3($text3Ref, $text3Cut, $text3Same, $text1, $text2, $accentStyles, $accent2Styles);
        };

        echo "</div>";
    }
}

// Price
function pricing():string {
    global $design, $graphic, $automotive_sale_discount;
    if (in_array($design, explode(',', $graphic['price_2_styles']), false)) {
        $price = ceil($graphic['price_2'] - ($graphic['price_2'] * $automotive_sale_discount));
    } elseif (in_array($design, explode(',', $graphic['price_3_styles']), false)) {
        $price = $graphic['price_3'] - ($graphic['price_3'] * $automotive_sale_discount);
    } elseif (in_array($design, explode(',', $graphic['price_4_styles']), false)) {
        $price = $graphic['price_4'] - ($graphic['price_4'] * $automotive_sale_discount);
    } elseif (in_array($design, explode(',', $graphic['price_5_styles']), false)) {
        $price = ceil($graphic['price_5'] - ($graphic['price_5'] * $automotive_sale_discount));
    } else {
        $price = ceil($graphic['price_1'] - ($graphic['price_1'] * $automotive_sale_discount));
    }
    return ceil(number_format($price, 2));
}

// Weight
function weight() {
    global $design, $graphic;
    if (in_array($design, explode(',', $graphic['weight_2_styles']), false)) {
        $weight = $graphic['weight_2'];
    } elseif (in_array($design, explode(',', $graphic['weight_3_styles']), false)) {
        $weight = $graphic['weight_3'];
    } elseif (in_array($design, explode(',', $graphic['weight_4_styles']), false)) {
        $weight = $graphic['weight_4'];
    } elseif (in_array($design, explode(',', $graphic['weight_5_styles']), false)) {
        $weight = $graphic['weight_5'];
    } else {
        $weight = $graphic['weight_1'];
    }
    return $weight;
}

// Graphic Image Ratio
function graphicRatio($imagefile):void {
    $extension = pathinfo($imagefile, PATHINFO_EXTENSION);
    if ($extension == 'svg') {
        $file = simplexml_load_string(file_get_contents(PUB_PATH . $imagefile));
        [$x_start, $y_start, $x_end, $y_end] = explode(' ', $file['viewBox']);
        $ratio = $y_end / $x_end;
    } else {
        [$width, $height, $type, $attr] = getimagesize(PUB_PATH . urldecode($imagefile));
        $ratio = $height/$width;

    }
    echo "1/{$ratio}";
}

