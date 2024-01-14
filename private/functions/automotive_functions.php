<?php // Functions for Automotive Pages

// Automotive Globals
global $graphic, $vehicle;

// Graphic Installed on Car
function graphic_on_car($image_path, $graphic_installed, $page_title):void {
    echo "<img src='". webpImage($image_path.$graphic_installed) ."' alt='$page_title .  Installed on Car' style='aspect-ratio: 1/"
        . graphicRatio($image_path.$graphic_installed)
        . "'>";
};

// Gallery Automation
function galleryAutomation($galleryDir):void {
    global $gallery;
    if (file_exists($galleryDir)) {
        $gallery = 'on'; // page gallery
    }
}

// Graphic on Vehicle / Gallery
function graphicOnVehicle($galleryDir, $image_path, $graphic_installed, $page_title):void {
    if (file_exists($galleryDir)) {
        echo "<section class='graphic-look' style='aspect-ratio: 1/0.4464285714'>";
        echo "<div id='gallery' style='display:none;'>";
        foreach (scandir($galleryDir) as $galleryItem) {
            if (is_file($galleryDir.'/'.$galleryItem)) { /* Selects only Files NOT Directories (. ..) */
                $galleryThumb = pathinfo($galleryItem)['filename'] . '_thumb.' . pathinfo($galleryItem)['extension'];
                echo "<img src='{$image_path}gallery/thumbs/{$galleryThumb}' 
                                  alt='Picture of 2015 to Present Dodge Charger SRT Rally Racing Dual Stripes Kit Installed By Customer' 
                                  data-image='{$image_path}gallery/{$galleryItem}' 
                                  data-description='image description' >";
            }
        }
        echo '</div>';
    } else {
        echo "<section class='graphic-look'>";
        graphic_on_car($image_path, $graphic_installed, $page_title); /* Main Installed Graphic Picture (automotive_functions.php) */
    }
    echo '</section>';
}

// Graphics Block Heading
function graphic_block_heading($year_range, $model, $product_name):void {
    echo "<section class='graphic-designs'>";
    echo '<h2>'
            . "<span>$year_range $model<br></span>"
            . "<span>$product_name<br></span>"
            . "Designs Currently Available"
       . '</h2>';
}

// Container Start (Graphic Design Image)
function containerStart($name, $design, $graphic_design):void {
    global $orientation;
    echo "<div id='cartContainer-$design' class='design cart-container'>"
        . "<h3>$name</h3>"
        . "<div id='graphic_$design' class='image $orientation'>"
        . $graphic_design /* Result from auto_graphic_while_start.php */
        . '</div>';
}

// Form Start
function formStart($design, $foxy_cart):void {
    echo "<div class='form'>"
        . "<form id='form-$design' data-fc-form-code='p$design' action='$foxy_cart' method='post' accept-charset='utf-8'>";
}

// Vehicle Information Section Start
function vehicleInformationStart():void {
    echo "<div class='vehicle-details'>"
            ."<h4>Vehicle Information</h4>";
}

// Graphics and Vehicle Query
function graphic_vehicle_query($id):array {
    global $dbPrefix, $graphic, $vehicle;
    $graphic_columns = [
        'part_number', 'make', 'model', 'year', 'years_exclusive', 'trims_add', 'trims_exclusive',
        'product_name', 'image_path', 'product_image_on', 'design_image',
        'price_1', 'price_2', 'price_2_styles', 'price_3', 'price_3_styles', 'price_4', 'price_4_styles', 'price_5', 'price_5_styles', 'unit',
        'weight_1', 'weight_2', 'weight_2_styles', 'weight_3', 'weight_3_styles', 'weight_4', 'weight_4_styles', 'weight_5', 'weight_5_styles',
        'color2_perc_adjust', 'text_perc_adjust', 'text2_perc_adjust', 'text3_perc_adjust'
    ];

    $vehicle_columns = [
        'id', 'year', 'years', 'trims', 'colors'
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
function modelYears($graphic, $vehicle, ?array $yearsMod):void {
    global $design;
    if ($graphic['years_exclusive']) {
        $modelYears = explode(', ', $graphic['years_exclusive']);
    } elseif(date('n') >= 8 && stripos($vehicle['year'], 'present')) { // > August, and 'Present'
        $yearSplit = explode(' ', $vehicle['year']); // Puts {$vehicle[year}} parts into array.
        $modelYears = range($yearSplit[0], date('Y') + 1); //Fills in array between year and now.
    } else {
        $modelYears =  explode(', ', $vehicle['years']);
    }

    //output in form
    echo "<div class='model-year'><select id='modelyear_$design' data-placeholder='Year' name='Model Year:' onchange='initDynamicPrice();' style='width: 100%;' required>";
    echo "<option></option>"; //Required for placeholder to work

    if (!$yearsMod) {
        foreach ($modelYears as $year) {
            echo "<option value='$year'>$year</option>";
        }
    } else {
        foreach ($modelYears as $year) {
            if (($key = array_search($year, array_column($yearsMod, 'trim'), false)) !== false) {
                $year = htmlentities("{$yearsMod[$key]['year']}", ENT_QUOTES);
                $priceMod = ceil($yearsMod[$key]['price_mod']);

                $svgMod = preg_split('/\./', $svg_image)[0].$yearsMod[$key]['image_mod'].'.svg';

                echo "<option data-svg='$svgMod' value='$year{p+{$priceMod}}'>$year (+\${$priceMod})</option>";
            } else { // Trim Levels without Price Mods.
                $svg = $svg_image;
                $year = htmlentities("$year", ENT_QUOTES);
                echo "<option data-svg='$svg' value='$year'>$year</option>";
            }
        }
    }


    echo '</select></div>';
}

// Trim Levels
function trimLevels($graphic, $vehicle, ?array $trimsOverride, ?array $trimsAddon, ?array $trimsMod, ?bool $modelsOverride):void {
    global $design, $svg_image; $model = $modelsOverride === true ? '' : $graphic['model'];

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
    echo "<div class='trim-level'>
            <select id='trimlevel_$design' data-placeholder='Trim' name='Trim Level:' onchange='initDynamicPrice();' style='width: 100%;' required>";
    echo '<option></option>';

    if (!$trimsMod) {
        foreach ($trim_levels as $trim) {
            $trim = htmlentities("$model $trim", ENT_QUOTES);
            echo "<option value='$trim'>$trim</option>";
        }
    } else {
        foreach ($trim_levels as $trim) { // Checks Trims with Adjustment.

            if (($key = array_search($trim, array_column($trimsMod, 'trim'), false)) !== false) {
                $trim = htmlentities("$model {$trimsMod[$key]['trim']}", ENT_QUOTES);
                $priceMod = ceil($trimsMod[$key]['price_mod']);

                $svgMod = preg_split('/\./', $svg_image)[0].$trimsMod[$key]['image_mod'].'.svg';

                echo "<option data-svg='$svgMod' value='$trim{p+{$priceMod}}'>$trim (+\${$priceMod})</option>";
            } else { // Trim Levels without Price Mods.
                $svg = $svg_image;
                $trim = htmlentities("$model $trim", ENT_QUOTES);
                echo "<option data-svg='$svg' value='$trim'>$trim</option>";
            }
        }
    }
    echo '</select></div>';
}

// Car Colors
function carColors($vehicle):void {
    global $design;
    echo
        "<div class='car-color'>"
        ."<select id='carpaint_$design' data-placeholder='Color' name='Car Color:' onchange='initDynamicPrice();' style='width: 100%;'>"
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

//Graphic Section Start
function graphicInformationStart():void {
    echo '</div>'; /* Vehicle Information Close */
    echo "<div class='graphic-details'>" /* Main & Accent Colors */
            ."<h4>Graphic Customization</h4>";
}

// Material & Brand
function materialBrand($design):void {
    echo
    "<div class='material'>"
        ."<select id='material_$design' data-placeholder='Preferred Install Method' name='Install' onchange='initDynamicPrice();' style='width: 100%;' required>"
            ."<option value=''></option>"
            ."<option value='wet-install'>Wet-Install Premium Cast</option>"
            ."<option value='dry-install'>Dry-Install Premium Wrap</option>"
        .'</select>'
    .'</div>'
    ."<div class='brand'>"
        ."<select id='brand_$design' data-placeholder='Choose Material Brand(s)' name='Brand' onchange='initDynamicPrice();' style='width: 100%; display: none;' multiple required disabled>"
            ."<option value=''></option>"
        .'</select>'
    .'</div>';
}

// Main Color Dropdown
function mainColor($design, $textOption = null, $placeholder = null):void {
    echo "<div class='main-color' style='display: none;'>";

    if (isset($textOption) and in_array($design, $textOption)) {
        echo
            "<div class='text-option' style=''>"
                ."<input id='textinput_$design' type='text' name='$placeholder:' placeholder='$placeholder'  oninput='textChange(this)'>"
            ."</div>"
            ."<select id='maincolor_$design' data-placeholder='$placeholder Color' name='$placeholder Color:' onchange='initDynamicPrice();' style='width: 100%;' required disabled>"
                ."<option class='standard-opt' value=''></option>"
            .'</select>';
    } else {
        echo "<select id='maincolor_$design' data-placeholder='Main Color' name='Main Color:' onchange='initDynamicPrice();' style='width: 100%;' required disabled>"
                ."<option class='standard-opt' value=''></option>"
            .'</select>';

    }
    echo '</div>';
}

// Accent Color Dropdown
function accentColor($design, $designs = [], $cut = [], $same = [], $textOption = null, $placeholder = null):void {
    if (in_array($design, $designs) or (isset($textOption) and in_array($design, $textOption))) {
    echo "<div class='accent' style='display: none'>";
        if (isset($textOption) and in_array($design, $textOption)) {
            echo
            "<div class='text-option' style=''>"
            ."<input id='textinput_$design' type='text' name='$placeholder:' placeholder='$placeholder'  oninput='textChange(this)'>"
            ."</div>"
            ."<select id='accentcolor_$design' data-placeholder='$placeholder Color' name='$placeholder Color:' onchange='initDynamicPrice();' style='width: 100%;' required disabled>"
                ."<option class='standard-opt' value=''></option>";
        } else {
            echo "<select id='accentcolor_$design' data-placeholder='Accent Color' name='Accent:' onchange='initDynamicPrice();' style='width: 100%;' required disabled>"
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
        }

        echo "</select>"; //Common to both statements
    echo "</div>";
}

}

// Accent 2 Color Dropdown
function accentColor2($design, $designs = [], $cut = [], $same = []):void {
    if (in_array($design, $designs)) {
    echo
        "<div class='accent' style='display: none'>"
            ."<select id='accentcolor2_$design' data-placeholder='Accent 2 Color' name='Accent 2:' onchange='initDynamicPrice();' style='width: 100%;' required disabled>"
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
            ."<input id='textinput_$design' placeholder='$textRef Text/Logo' type='text' name='$textRef:'  oninput='textChange(this)'\>"
            ."<select id='textcolor_$design' data-placeholder='Text/Logo Color' name='$textRef Color:' onchange='initDynamicPrice();' style='width: 100%;' disabled>"
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
            ."<input id='textinput2_$design' type='text' placeholder='$text2Ref Text/Logo' name='$text2Ref:' oninput='textChange(this)'>"
            ."<select id='textcolor2_$design' data-placeholder='Text/Logo Color' name='$text2Ref Color:' onchange='initDynamicPrice();' style='width: 100%;' disabled>"
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
            ."<input id='textinput_3$design' type='text' placeholder='$text3Ref Text/Logo' name='$text3Ref:' oninput='textChange(this)'>"
            ."<select id='textcolor3_$design' data-placeholder='Text/Logo Color' name='$text3Ref Color:' onchange='initDynamicPrice();' style='width: 100%;' disabled>"
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
        if (in_array($design, $text3Same)) {
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

//Graphic Section Close
function graphicInformationClose():void {
    echo "</div>"; /* Graphic Section (material, color, accent, cutout options (trimOptions)) */
}

//Text, Logos, Notes Section Start
function textLogoNotesStart():void {
    echo "<div class='graphic-details' style='display: none '>";
}

// Text & Color Switch
function textColorOptions($design, $text1 = [], $textRef = '', $textCut = [], $textSame = [], $text2 = [], $text2Ref = '', $text2Cut = [], $text2Same = [], $text3 = [], $text3Ref = '', $text3Cut = [], $text3Same = [], $accentStyles = [], $accent2Styles = []):void {
    if (in_array($design, $text1) or in_array($design, $text2) or in_array($design, $text3)) {
        echo
        "<div class='option-switch'>"
            ."<label for='main-options-$design'
                   data-txt='Add Text and Logo Options?'
                   data-alt-txt='Select area(s) to customize.'>
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

// Trim Options (Sunroof, Antenna, Hood etc.)
function trimOptions ($design, ?array $trimDataArray):void {
    if(isset($trimDataArray)) {
        foreach ($trimDataArray as $trimData) {
            $name = $trimData['select']['name']; $id = strtolower($name); $placeholder = $trimData['select']['placeholder'];
            echo "<div class='trim-option' style='display: none;'>";
            echo "<select class='trim-spec' id='{$id}_$design' name='{$name}:' data-placeholder='$placeholder' onchange='initDynamicPrice();' style='width: 100%;' required>"
                ."<option value=''></option>";
            foreach ($trimData['options'] as $option) {
                $text = $option['text']; $specs = $option['specs']; $image = $option['image']; $pricemod = ceil($option['percentage'] * pricing($design)); $addsub = $option['add sub'];
                echo "<option data-image='$image' data-specs='$specs' value='$text{p$addsub$pricemod|w+}'>$text</option>";
            }
            echo "</select>"
                . "</div>";
        }
    }
}

// Notes
function notes($rows = 3, $cols = 40):void {
    echo
    "<label class='notes label_left'>Notes</label>"
    ."<textarea class='notes' placeholder='Any other details you would like us to know here...' name='Notes:' rows='$rows' cols='$cols'></textarea>";
}

// Text, Logos, Notes Section Close
function textLogoNotesClose():void {
    echo '</div>';
}

// Add to Cart Button
function cartButton($design, $price):void {
    echo
    "<button class='buy-now-button'>"
        ."<span>Add to Cart</span><br>"
        ."<span class='p{$design}_total'>From \${$price} </span>"
    ."</button>";
}

// Graphic Information Request
function graphicInfoRequest($design, $design_pn):void {
    echo "<a class=\"info-button\" href=\"javascript:void( window.open( 'https://form.jotform.com/232556466911057?"
    ."designStyle=Design%20Style%20$design"
    ."&partNumber=$design_pn"
    ."&graphicPage={$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) \">"
    ."Request<br>Information</a>";
}

// Form Close
function formClose():void {
    echo "</form>" /* Form End (formStart() function) */
    . "</div>"; /* Form End (formStart() function) */
}

// Container Footer (Part Number)
function containerFooter($design_pn):void {
    echo "<h3>Part #: $design_pn </h3>";
}

// Container End
function containerEnd():void {
    echo "</div>"; /* Container End (containerStart() function) */
}

// Graphic Designs Section Close
function graphicDesignsSectionClose():void {
   echo '</section>';
}

// Price
function priceCalc($price, $base_costs, $trans_fee, $automotive_sale_discount):float {
    $calcPrice = ceil(num: number_format((($base_costs + $price) * $trans_fee) + ($base_costs + $price), 2));
    return ceil($calcPrice - ($calcPrice * $automotive_sale_discount));
}

function pricing():string {
    global $design, $graphic, $base_costs_auto, $hr_rate, $trans_fee, $automotive_sale_discount;
    if (in_array($design, explode(',', $graphic['price_2_styles']), false)) {
        $price = priceCalc($graphic['price_2'], $base_costs_auto, $trans_fee, $automotive_sale_discount);
    } elseif (in_array($design, explode(',', $graphic['price_3_styles']), false)) {
        $price = priceCalc($graphic['price_3'], $base_costs_auto, $trans_fee, $automotive_sale_discount);
    } elseif (in_array($design, explode(',', $graphic['price_4_styles']), false)) {
        $price = priceCalc($graphic['price_4'], $base_costs_auto, $trans_fee, $automotive_sale_discount);
    } elseif (in_array($design, explode(',', $graphic['price_5_styles']), false)) {
        $price = priceCalc($graphic['price_5'], $base_costs_auto, $trans_fee, $automotive_sale_discount);
    } else {
        $price = priceCalc($graphic['price_1'], $base_costs_auto, $trans_fee, $automotive_sale_discount);
    }
    return ceil(num: $price);
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
function graphicRatio($imagefile):string {
    $extension = pathinfo($imagefile, PATHINFO_EXTENSION);
    if ($extension == 'svg') {
        $file = simplexml_load_string(file_get_contents(PUB_PATH . $imagefile));
        [$x_start, $y_start, $x_end, $y_end] = explode(' ', $file['viewBox']);
        $ratio = $y_end / $x_end;
    } else {
        [$width, $height, $type, $attr] = getimagesize(PUB_PATH . urldecode($imagefile));
        $ratio = $height/$width;
    }
    return $ratio;
}

