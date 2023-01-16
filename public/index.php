<?php
/* Core Functions (Functions for ALL Pages NO Exceptions) */
include_once '../private/functions/core_functions.php';
/* Global Functions (Functions for ALL Pages) */
include_once '../private/functions/global_functions.php';
/* CSS File Auto Versioning */
const CSS = array( '/css/index_screen.css' );
foreach (CSS as $css) {
    $css_file = '<link rel="stylesheet" media="screen"  href="' . auto_version($css) . '" type="text/css">';
}
/* JS File Auto Versioning */
//const JS = array( '/js/filename.js');
//foreach (JS as $js) {
//    echo '<script src="' . auto_version($js) . '" type="text/javascript"></script>';
//}

/* Server Detection */
[$hostingServer, $dbPrefix] = host_ident($_SERVER['SERVER_ADDR']);

/* HTML Minification */
//ob_start("minifier");

/* Business Info */
/* Simon: ToDo: create and move this to include file (business_info.php) */
$phone_number = '877-558-2335';
$sms_number = '805-910-7072';
$foxy_cart = 'https://vinylimagination.foxycart.com/cart';

?>

<!DOCTYPE html>
<!--<html lang="en" oncontextmenu="return false;">-->
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="Vinyl Imagination - Automotive Decals and Graphics Main Page">
    <title>Vinyl Imagination v3.0 Responsive, Mobile First Website</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preload" href="css/fonts/BickleyScriptLET-Plain.woff2" as="font" type="font/woff2" crossorigin>
    <?php /** @noinspection PhpUndefinedVariableInspection */
    echo $css_file; //CSS File ?>

</head>

<body>

<div id="page">
    <header oncontextmenu="return false;">
        <a class="logo" title="Vinyl Imagination" href="#">
            <svg class="company-logo-name" viewBox="0 0 419 76" xmlns="http://www.w3.org/2000/svg">
                <text x="-10" y="53">Vinyl Imagination</text>
            </svg>
        </a>
        <a class="phone" title="Vinyl Imagination Phone Number" href="#">
            <svg class="company-phone-number" viewBox="0 0 277 36" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="34"><?php echo $phone_number; ?></text>
            </svg>
        </a>

        <div class="hero">
            <h1>Imagine. Design. Create.</h1>
            <p>Vehicle Graphics Done Your Way!</p>
        </div>

    </header>

    <section class="main">
        <aside oncontextmenu="return false;" onclick="window.open('https://google.com', '_blank')">
            <div class="content automotive" ">
                <h2>
                    <a href="#">Automotive Graphics</a>
                </h2>
                <p>Lorem ipsum dolor sit amet, consect etuer adipiscing elit. <a href="#">Morbi commodo</a>, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.</p>
            </div>
        </aside>

        <aside oncontextmenu="return false;" onclick="window.open('https://yahoo.com', '_blank')">
            <div class="content motorcycle">
                <h2>
                    <a href="#">Motorcycle Graphics</a>
                </h2>
                <p>Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Lorem ipsum dolor sit amet, consect.</p>
            </div>
        </aside>

        <aside oncontextmenu="return false;" onclick="window.open('https://bing.com', '_blank')">
            <div class="content trailer">
                <h2>
                    <a href="#">Trailer Graphics</a>
                </h2>
                <p>Nullam sit amet enim. Lorem ipsum dolor sit amet, consect etuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci rhoncus neque, id pulvinar odio.</p>
            </div>
        </aside>

    </section>

    <section class="addtocart">
        <!-- link example -->
        <a href="<?php echo $foxy_cart; ?>?name=Cool%20Example&price=10&color=red&code=sku123">Add a red Cool Example</a>
        <!-- form example -->
        <form data-fc-form-code="p1" action="<?php echo $foxy_cart; ?>" method="post" accept-charset="utf-8">
            <input type="hidden" name="name" value="2022 Ford Maverick Mach 1 Esque Hood Decal" />
            <input type="hidden" name="image" value="https://vinylimagination.com/Graphics/Vehicles/Ford/Maverick/2k22/M1HD/Ford%20Maverick%20Mach-1%20Hood%20Decal%20(M1HD-001).webp" />
            <input type="hidden" name="Design" value="Design 01" />
            <input type="hidden" name="price" value="93.31" />
            <input type="hidden" name="Part" value="FRD-MAVK22-M1HD" />
            <input type="hidden" name="weight" value="2" />
            <label class="label_left">Color</label>
            <select name="Main Color" onchange="initDynamicPrice();">
                <option value="Black">Black</option>
                <option value="Red{p+10|w+1.2}">Red (+$10)</option>
                <option value="White">White</option>
            </select>
            <select name="Accent" onchange="initDynamicPrice();">
                <option value="orange">Orange</option>
                <option value="yellow{p+10|w+1.2}">Yellow (+$10)</option>
                <option value="green">Green</option>
            </select>
            <select name="Accent 2" onchange="initDynamicPrice();">
                <option value="pink">Pink</option>
                <option value="brown{p+10|w+1.2}">Brown (+$10)</option>
                <option value="blue">Blue</option>
            </select>
            <input type="text" name="Design Notes" value="Design Notes">
            <input type="submit" value="Add a Cool Example" class="submit" />
        </form>
        <h4 class="p1_total">$93.31</h4>

        <!--    View Cart Button    -->
        <button onclick="window.open('<?php echo $foxy_cart; ?>?cart=view', '_blank');">
            View Cart
        </button>
    </section>


    <section class="atmosphere">
        <article>
            <h2>Creating a modern atmosphere</h2>
            <p>Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Lorem ipsum dolor sit amet etuer adipiscing elit.  Pulvinar odio lorem non turpis. Nullam sit amet enim lorem.</p>
            <a class="btn" title="Creating a modern atmosphere" href="#">Learn more</a>
        </article>
    </section>

<!--    <section class="how-to">-->
<!--        <aside>-->
<!--            <div class="content">-->
<!--                <img src="images/photo_seating.jpg" alt="Choosing the proper seating">-->
<!--                <h4>How-To: Seating</h4>-->
<!--                <p>Consectetuer adipiscing elit. Morbi commodo ipsum sed gravida orci magna rhoncus pulvinar odio lorem.</p>-->
<!--                <a title="Learn how to choose the proper seating." href="http://codifydesign.com">Learn more</a>-->
<!--            </div>-->
<!--        </aside>-->
<!--        <aside>-->
<!--            <div class="content">-->
<!--                <img src="images/photo_lighting.jpg" alt="Choosing the proper lighting">-->
<!--                <h4>How-To: Lighting</h4>-->
<!--                <p>Morbi commodo, ipsum sed pharetra gravida magna rhoncus neque id pulvinar odio lorem non turpis nullam sit amet.</p>-->
<!--                <a title="Learn how to choose the proper lighting." href="http://codifydesign.com">Learn more</a>-->
<!--            </div>-->
<!--        </aside>-->
<!--        <blockquote>-->
<!--            <p class="quote">Lorem ipsum dolor sit amet conse ctetuer adipiscing elit. Morbi comod sed dolor sit amet consect adipiscing elit.</p>-->
<!--            <p class="credit"><strong>Author Name</strong><br><em>Business Title</em><br>Company</p>-->
<!--        </blockquote>-->
<!---->
<!--    </section>-->

<!-- Navigation -->
<?php include '../private/includes/navigation.php'; ?>


<!-- Footer -->
    <footer>
        &copy; Vinyl Imagination
        <div class="content">
            <a href="#" title="Privacy Policy">Privacy Policy</a>
            <a href="#" title="Terms of Service">Terms of Service</a>
        </div>
    </footer>

</div> <!-- #page close -->


<!--Grunt-->
<!--LiveReload-->
<?php
if($hostingServer === 'Local') {
echo '<script src="http://localhost:35729/livereload.js"></script>' . PHP_EOL;
}
?>


<!--Simon: ToDo: create and move this to include file (before_body_close.php)-->
<!-- FOXYCART -->
<script data-cfasync="false" src="https://cdn.foxycart.com/vinylimagination/loader.js" async defer></script>

<!-- FOXYCART Automatic price update-->
<script>
  // Dynamic Price Calculation v3.1
  var pricemod_regex=/[{\|]p([+\-:])([\d\.]+)(?:\D{3})?(?=[\|}])/,id_regex=/^(\d+):/,FC=FC||{};FC.onLoad=function(){FC.client.on("ready.done",initDynamicPrice)};
  function initDynamicPrice(){ADJUST={};$("input,select").off("change.foxy-dynamic-price");$('form[action*="'+FC.settings.storedomain+'"]').each(function(){var b=$(this),d="",g={products:{}};$(this).find("[name='name'],[name^='name||'],[name$=':name'],[name*=':name||']").each(function(){var k=getId(this.name),c=k?k+":":"",e=parseFloat(b.find("[name='"+c+"price'],[name^='"+c+"price||']").first().val());e={id:k,code:"",base_price:isNaN(e)?0:e,quantity:1,attributes:{},has_quantity:!1};var h=b.find("[name='"+
      c+"quantity'],[name^='"+c+"quantity||']");c=b.find("[name='"+c+"code'],[name^='"+c+"code||']");0<c.length&&(e.code=clearHash(c.first().val()),""===d&&(d=e.code));if(0<h.length){c=0;var l=getElementType(h);-1<["select","text"].indexOf(l)?(e.has_quantity=!0,c=parseFloat(clearHash(h.val()))):-1<["radio","checkbox"].indexOf(l)&&(e.has_quantity=!0,1==h.filter(":checked").length&&(c=parseFloat(clearHash(h.filter(":checked").val()))));isNaN(c)&&(c=0);e.quantity=c}g.products[k]=e});b.attr("data-fc-form-code")&&
  (d=b.attr("data-fc-form-code"));""!==d&&($(this).find("input,select").each(function(){var b=getId(this.name),c=getName(this.name),e=getElementType($(this));if("quantity"==c)$(this).data("fc-adjust-for",d).on("change.foxy-dynamic-price",function(){var c=0;if(-1<["select","text"].indexOf(e)||-1<["radio","checkbox"].indexOf(e)&&$(this).is(":checked"))c=parseFloat(clearHash(this.value));isNaN(c)&&(c=0);ADJUST[$(this).data("fc-adjust-for")].products[b].quantity=c;recalcTotal()});else if("price"==c&&"hidden"!=
      e)$(this).data("fc-adjust-for",d).on("change.foxy-dynamic-price",function(){var c=0;if(-1<["select","text"].indexOf(e)||-1<["radio","checkbox"].indexOf(e)&&$(this).is(":checked"))c=parseFloat(clearHash(this.value));isNaN(c)&&(c=0);ADJUST[$(this).data("fc-adjust-for")].products[b].base_price=c;recalcTotal()});else if("SELECT"==this.tagName){var h=!1;$(this).children("option").each(function(){-1<this.value.search(pricemod_regex)&&(h=!0)});h&&($(this).data("fc-adjust-for",d),g.products[b].attributes[clearHash(this.name)]=
      clearHash(this.value),$(this).on("change.foxy-dynamic-price",function(){ADJUST[$(this).data("fc-adjust-for")].products[b].attributes[clearHash(this.name)]=clearHash(this.value);recalcTotal()}))}else if(-1<this.value.search(pricemod_regex))switch($(this).data("fc-adjust-for",d),$(this).attr("type")){case "checkbox":$(this).is(":checked")?g.products[b].attributes[clearHash(this.name)]=clearHash(this.value):g.products[b].attributes[clearHash(this.name)]="";$(this).on("change.foxy-dynamic-price",function(){$(this).is(":checked")?
      ADJUST[$(this).data("fc-adjust-for")].products[b].attributes[clearHash(this.name)]=clearHash(this.value):ADJUST[$(this).data("fc-adjust-for")].products[b].attributes[clearHash(this.name)]="";recalcTotal()});break;case "radio":g.products[b].attributes.hasOwnProperty(clearHash(this.name))||(g.products[b].attributes[clearHash(this.name)]=""),$(this).is(":checked")&&(g.products[b].attributes[clearHash(this.name)]=clearHash(this.value)),$("[name='"+this.name+"']").data("fc-adjust-for",d).on("change.foxy-dynamic-price",
      function(){ADJUST[$(this).data("fc-adjust-for")].products[b].attributes[clearHash(this.name)]=clearHash(this.value);recalcTotal()})}}),ADJUST[d]=g)});recalcTotal()}function clearHash(b){return b.replace(/\|\|[\d\w]+(?:\|\|open)?$/,"")}function getNameParts(b){b=clearHash(b);return b.match(/(?:(\d+):)?(.*)/)}function getId(b){b=getNameParts(b);id_regex.test(this.name)&&(prefix=parseInt(this.name.match(id_regex)[0]));return void 0===b[1]?0:parseInt(b[1])}
  function getName(b){return getNameParts(b)[2]}function getElementType(b){if("SELECT"==b[0].tagName)return"select";if("INPUT"==b[0].tagName)switch(b.attr("type").toLowerCase()){case "text":case "number":case "tel":return"text";default:return b.attr("type").toLowerCase()}}
  function recalcTotal(){for(f in ADJUST){var b=0,d=0;for(p in ADJUST[f].products){var g=ADJUST[f].products[p].base_price,k=0;for(a in ADJUST[f].products[p].attributes){var c=ADJUST[f].products[p].attributes[a].match(pricemod_regex);if(c)switch(c[1]){case ":":g=parseFloat(c[2]);break;case "+":k+=parseFloat(c[2]);break;case "-":k-=parseFloat(c[2])}}g+=k;g*=ADJUST[f].products[p].quantity;b+=g;d+=ADJUST[f].products[p].quantity}"function"===typeof fcFormatPrice&&(b=fcFormatPrice(b,f));"function"===typeof fcFormatQuantity&&
  (d=fcFormatQuantity(d,f));b="object"==typeof FC&&FC.hasOwnProperty("json")&&FC.json.config.hasOwnProperty("currency_format")?jQuery.trim(FC.util.money_format(FC.json.config.currency_format,b)):b.formatMoney(2);$("."+f+"_total").html(b);$("."+f+"_total_quantity").html(d)}}
  Number.prototype.formatMoney=function(b,d,g){var k=this;b=isNaN(b=Math.abs(b))?2:b;d=void 0==d?".":d;g=void 0==g?",":g;var c=0>k?"-":"",e=parseInt(k=Math.abs(+k||0).toFixed(b))+"",h=3<(h=e.length)?h%3:0;return c+(h?e.substr(0,h)+g:"")+e.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+g)+(b?d+Math.abs(k-e).toFixed(b).slice(2):"")};
</script>
<!-- /FOXYCART -->

</body>
</html>

<!-- Simon: Todo: create and move this to include file foot.php -->
<?php
ob_end_flush();
?>