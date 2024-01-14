<?php // Functions for Motorcycle Pages

// Motorcycle Globals
global $graphic;

// Graphics Query
function graphic_motorcycle_query($table):array { //Simon: Clean Me: Move to motorcycle_functions.php
    global $dbPrefix, $graphics;
    $graphic_columns = [
        'id', 'part_number', 'product_name', 'image_path', /*'product_image_on',*/ 'design_image', 'width_ratio', 'height_ratio', 'size_min', 'size_max', 'price_base', 'ppsi_base', 'unit', 'weight_base', 'part_graphic'
    ];
    $select_graphics = implode(', ', $graphic_columns);
    $graphic_query = "( SELECT $select_graphics FROM {$dbPrefix}Motorcycle.graphics_$table WHERE available IS NOT NULL )";
    $graphics = db_query($graphic_query);
    db_disconnect(db_connect());
    return [$graphics];
}

// Graphics Block Heading
function graphic_block_heading($product_name):void {
    echo "<section class='graphic-designs'>";
    echo '<h2>'
        . "<span>$product_name<br></span>"
        . '</h2>';
}

// Container Start (Graphic Design Image)
function containerStart($product_name, $design, $graphic_design):void {
    echo "<div id='cartContainer-$design' class='design cart-container'>"
        . "<h3>$product_name Motorcycle Gas Tank Graphics</h3>"
        . "<div id='graphic_$design' class='image'>"
        . $graphic_design /* Result from mc_graphic_while_start.php */
        . '</div>';
}

// Form Start
function formStart($design, $graphic_id, $foxy_cart):void {
    echo "<div class='form'>"
        . "<form id='form-$design' data-graphic-id='$graphic_id' data-fc-form-code='p$design' action='$foxy_cart' method='post' accept-charset='utf-8'>";
}

// Size Information Section Start
function sizeInformationStart():void {
    echo "<div class='size-details'>"
        ."<h4>Available Graphic Sizes</h4>";
}


//Simon: ToDo: Size Dropdown
// Size
function graphicSize():void {
    global $graphic, $motorcycle_sale_discount;
    echo "<div class='size-option'>
            <select class='graphic-size' data-placeholder='{$graphic['product_name']} Gas Tank Graphic Size?' name='Graphic Size:' onchange='initDynamicPrice();' style='width: 100%;' required>";
    echo '<option></option>';
    foreach (range($graphic['size_min'], $graphic['size_max'], 1) as $width) {

        $height = number_format($width * $graphic['height_ratio'], 2);

        $price = number_format(((($width * $graphic['height_ratio']) *
                    $width) * $graphic['ppsi_base']) + $graphic['price_base'], 2);
        $price = number_format($price - ($price * $motorcycle_sale_discount), 2);
        $base_price = number_format(((($graphic['size_min'] * $graphic['height_ratio']) * $graphic['size_min']) * $graphic['ppsi_base']) + $graphic['price_base'], 2);
        $price_adj = number_format($price - $base_price, 2);

        $weight = number_format($graphic['weight_base'] *
            ((($width * $graphic['height_ratio']) * $width) /
                ($graphic['size_min'] * ($graphic['size_min'] * $graphic['height_ratio']))), 4);

        $mmHeight = number_format($height * 25.4, 2);
        $mmWidth = number_format($width * 25.4, 2);

        echo "<option 
                    data-width_mm='{$mmWidth}' 
                    data-height_mm='{$mmHeight}'
                    data-price='{$price}' 
                    data-unit='{$graphic['unit']}'
                    value='{$width} ins(W) x {$height} ins(H) Gas Tank Graphic.{p+{$price_adj}|w+{$weight}}'>
                        {$width} ins(W) x {$height} ins(H) Gas Tank Graphic 
            </option>";
    }
    echo '</select></div>';
}


// Graphic Section Start
function graphicInformationStart():void {
    echo '</div>'; /* Size Information Close */
    echo "<div class='graphic-details'>" /* Main & Accent Colors */
        ."<h4>Graphic Customization</h4>";
}

// Material & Brand
function materialBrand($design):void {
    echo
        "<div class='material'>"
        ."<select id='material_$design' data-placeholder='Preferred Install Method' onchange='initDynamicPrice();' style='width: 100%;'>"
        ."<option value=''></option>"
        ."<option value='wet-install'>Wet-Install Premium Cast</option>"
        ."<option value='dry-install' disabled>Dry-Install Premium Wrap</option>"
        .'</select>'
        .'</div>'
        ."<div class='brand'>"
        ."<select id='brand_$design' data-placeholder='Choose Material Brand(s)' onchange='initDynamicPrice();' style='width: 100%; display: none;' multiple required disabled>"
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
        ."<input id='textinput_$design' type='text' name='$textRef:'  oninput='textChange(this)'>"
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
        ."<input id='textinput2_$design' type='text' name='$text2Ref:' oninput='textChange(this)'>"
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
        ."<input id='textinput_3$design' type='text' name='$text3Ref:' oninput='textChange(this)'>"
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
function cartButton($design, $price, $unit):void {
    echo
        "<button class='buy-now-button'>"
        ."<span>Add to Cart</span><br>"
        ."<span class='p{$design}_total'>From \${$price} </span> ({$unit})"
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

// Price
function pricing ():string {
    global $graphic, $motorcycle_sale_discount;
    $price = ((($graphic['size_min']*$graphic['height_ratio'])*$graphic['size_min'])*$graphic['ppsi_base'])+$graphic['price_base'];
    return number_format($price - ($price * $motorcycle_sale_discount), 2);
}

//Weight Simon: Fix Me: May not be required, or code weight calculation.
function weight():string {

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
