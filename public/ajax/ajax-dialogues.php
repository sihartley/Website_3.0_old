<?php
/**
 * @var $_GET
 * values passed in URI after ? (vehicle-main.php?make=foo&model=bar)
 * @var $dbPrefix
 * From function hostident() IN core_functions.php INCLUDE in initialize.php
 */
require /** @lang text */
    dirname($_SERVER['DOCUMENT_ROOT']) . '/private/ajax/ajax_initialize.php';

$graphicId = $_GET['graphic'];
//$graphicId = 414;
$graphic = graphic_query($graphicId);
$dialogue = $_GET['dialogue'];
$textRef = $_GET['textRef'];
$text2Ref = $_GET['text2Ref'];
$text3Ref = $_GET['text3Ref'];

switch ($_GET['dialogue']) {
    case 'modelyeardialogue':
        echo "<div id='modelyeardialogue' title='Info - Model Year Selection' style='display: none'>
                Select the correct model year of your {$graphic['make']} {$graphic['model']} from the list. This is so we can adjust the graphic for the year your {$graphic['make']} {$graphic['model']} was manufactured.
            </div>";
        break;
    case 'trimleveldialogue':
        echo "<div id='trimleveldialogue' title='Info - Trim Level Selection' style='display: none'>
                Select the correct trim level of your {$graphic['make']} {$graphic['model']} from the list. This is so we can adjust the graphic for the correct trim level options of your {$graphic['make']} {$graphic['model']}.
            </div>";
        break;
    case 'carcolordialogue':
        echo "<div id='carcolordialogue' title='Info - Car Color Selection' style='display: none'>
                Select the color of your {$graphic['make']} {$graphic['model']} from the list. This will change the background the graphic is displayed on, and will give you a better idea of how this {$graphic['product_name']} may look once installed on your {$graphic['make']} {$graphic['model']}.
            </div>";
        break;
    case 'materialdialogue':
        echo "<div id='materialdialogue' title='Info - Material Type Selection' style='display: none'>
                Select the Material Type you would us to produce your {$graphic['product_name']} with. While both material types have high durability ratings and are for vehicle use, they do offer different features.<br>
                Wet-Install (Premium Cast Material) - Lower cost, thinner material, which gives a paint-like look and feel, as there is less of an edge, install we for a bubble-free install. This material does require a little more technique and experience during installation, and is usually preferred by tint shops, and old school experienced installers.<br> 
                Dry-Install (Premium Wrap Material) - Higher cost, thicker material, has special air-release adhesive for a bubble-free installation. This material is very forgiving during install, can be cleanly removed for upto 3 years, and is usually preferred by less experienced installers and wrap shops.<br>
                We suggest you speak to your installer, to see if which material they are experienced with.
            </div>";
        break;
    case 'branddialogue':
        echo "<div id='branddialogue' title='Info - Material Brand Selection' style='display: none'>
                Select the Material Brand(s) you would like us to produce your {$graphic['product_name']} with. Select one or more brands to see the list of colors available in those brands.<br>
                While all the brands we offer are excellent OEM quality, each brand does offer different colors.<br>
                Many people have a preference, and are used to working with a particular brand of material.<br>
                We suggest you speak to your installer to see if they have a brand preferrence.
            </div>";
        break;
    case 'maincolordialogue':
        echo "<div id='maincolordialogue' title='Info - Main Color Selection' style='display: none'>
                Select the Main Color you would like us to produce your {$graphic['product_name']} in. The Main Color is bulk of the graphic, and is represented by light gray in the design example. If the graphic has interactive features enabled, this will change as you select the colors from the list.<br>
                You can search for colors in the search box at the top of the dropdown list to narrow your search, as well as scrolling through the list to find the color you want.
            </div>";
        break;
    case 'accentcolordialogue':
        echo "<div id='accentcolordialogue' title='Info - Accent Color Selection' style='display: none'>
                Select the Accent Color for your {$graphic['product_name']}. The Accent Color is the secondary color of the graphic (pinstripe etc.), and is represented by Red in the design example. If the graphic has interactive features enabled, this will change as you select the colors from the list.<br>
                You can search for colors in the search box at the top of the dropdown list to narrow your search, as well as scrolling through the list to find the color you want.
            </div>";
        break;
    case 'accent2colordialogue':
        echo "<div id='accent2colordialogue' title='Info - 2nd Accent Color Selection' style='display: none'>
                Select the 2nd Accent Color for your {$graphic['product_name']}. The Secondary Accent Color is the third color of the graphic (additional pinstripe etc.), and is represented by Black in the design example. If the graphic has interactive features enabled, this will change as you select the colors from the list.<br>
                You can search for colors in the search box at the top of the dropdown list to narrow your search, as well as scrolling through the list to find the color you want.
            </div>";
        break;
    case 'textoptiondialogue':
        echo "<div id='textoptiondialogue' title='Info - Select to add Text/Logo' style='display: none'>
                Selecting this option will allow you to add custom text or a logo referenced as $textRef to your {$graphic['product_name']}.
            </div>";
        break;
    case 'textinputdialogue':
        echo "<div id='textinputdialogue' title='Info - Specify Custom Text' style='display: none'>
                Specify Custom Text, or a Logo you would like in place of $textRef when we produce your {$graphic['product_name']}. We can insert any custom text, and most custom logos.<br>
                As you start typing you may see some suggestions. If interactive features are enabled you will see the text you type appear on the graphic.<br>
                If you select one of the suggestions, you will see the name of that selection appear on in the graphic not the selected graphic itself. However, when we produce your graphic, we will produce it with the actual graphic you have selected.
            </div>";
        break;
    case 'textcolordialogue':
        echo "<div id='textcolordialogue' title='Info - Text Color Selection' style='display: none'>
                Select the Color for your custom text or logo to be when we produce you {$graphic['product_name']}. If the graphic has interactive features enabled, This text will change as you select the colors from the list.<br>
                You can search for colors in the search box at the top of the dropdown list to narrow your search, as well as scrolling through the list to find the color you want.
            </div>";
        break;
    case 'text2optiondialogue':
        echo "<div id='text2optiondialogue' title='Info - Select to add Text/Logo' style='display: none'>
                Selecting this option will allow you to add custom text or a logo referenced as $text2Ref to your {$graphic['product_name']}.
            </div>";
        break;
    case 'text2inputdialogue':
        echo "<div id='text2inputdialogue' title='Info - Specify Custom Text' style='display: none'>
                Specify Custom Text, or a Logo you would like in place of $text2Ref when we produce your {$graphic['product_name']}. We can insert any custom text, and most custom logos.<br>
                As you start typing you may see some suggestions. If interactive features are enabled you will see the text you type appear on the graphic.<br>
                If you select one of the suggestions, you will see the name of that selection appear on in the graphic not the selected graphic itself. However, when we produce your graphic, we will produce it with the actual graphic you have selected.
            </div>";
        break;
    case 'text2colordialogue':
        echo "<div id='text2colordialogue' title='Info - Text Color Selection' style='display: none'>
                Select the Color for your custom text or logo to be when we produce you {$graphic['product_name']}. If the graphic has interactive features enabled, This text will change as you select the colors from the list.<br>
                You can search for colors in the search box at the top of the dropdown list to narrow your search, as well as scrolling through the list to find the color you want.
            </div>";
        break;
    case 'text3optiondialogue':
        echo "<div id='text3optiondialogue' title='Info - Select to add Text/Logo' style='display: none'>
                Selecting this option will allow you to add custom text or a logo referenced as $text3Ref to your {$graphic['product_name']}.
            </div>";
        break;
    case 'text3inputdialogue':
        echo "<div id='text3inputdialogue' title='Info - Specify Custom Text' style='display: none'>
                Specify Custom Text, or a Logo you would like in place of $text3Ref when we produce your {$graphic['product_name']}. We can insert any custom text, and most custom logos.<br>
                As you start typing you may see some suggestions. If interactive features are enabled you will see the text you type appear on the graphic.<br>
                If you select one of the suggestions, you will see the name of that selection appear on in the graphic not the selected graphic itself. However, when we produce your graphic, we will produce it with the actual graphic you have selected.
            </div>";
        break;
    case 'text3colordialogue':
        echo "<div id='text3colordialogue' title='Info - Text Color Selection' style='display: none'>
                Select the Color for your custom text or logo to be when we produce you {$graphic['product_name']}. If the graphic has interactive features enabled, This text will change as you select the colors from the list.<br>
                You can search for colors in the search box at the top of the dropdown list to narrow your search, as well as scrolling through the list to find the color you want.
            </div>";
        break;
    case 'mainoptionsdialogue':
        echo "<div id='mainoptionsdialogue' title='Info - Add Text/Logo options' style='display: none'>
                Selecting this option will allow you to add custom text or a logo options to your {$graphic['product_name']}.
            </div>";
        break;
    case 'trimoptiondialogue':
        echo "<div id='trimoptiondialogue' title='Info - Select Trim Option' style='display: none'>
                Select the option(s) that best match your {$graphic['make']} {$graphic['model']}, so that we can correctly produce your {$graphic['product_name']}.
            </div>";
        break;
    case 'notesdialogue':
        echo "<div id='notesdialogue' title='Info - Additional Notes' style='display: none'>
                You can supply any additional notes, information, referrence links etc. Here.<br>
                Anything that you would like us to know, or take into account when producing your custom {$graphic['product_name']}.
            </div>";
        break;


}


