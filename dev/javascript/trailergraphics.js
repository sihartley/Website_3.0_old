/* Motorcycle Graphics Details & Color Lists */
// Functions
function thisCartContainer(item) {
    return document.getElementById(item.closest('.cart-container').attr('id'))
}
function thisGraphic(item) {
    return document.getElementById(item.closest('.cart-container').children('.image').attr('id'))
}
function thisForm(item) {
    return document.getElementById(item.closest('form').attr('id'))
}
function formSels(form) {
    return Array.from(form.querySelectorAll('select'))
}
function formTexts(item) {
    // document.querySelectorAll("input[type=text]")
    let form = document.getElementById(item.closest('form').attr('id'))
    return Array.from(form.querySelectorAll("input[type=text]"))
}
function colorIds(form) {
    return Array.from(document.getElementById(form.closest('form').attr('id'))
        .querySelectorAll('select'))
        .map(a => a.id).filter(id => id.match(/color/i))
}
function colorOptions(itemId, colorOption) {
    let
        graphic = itemId.replace(colorOption, 'graphic'),
        design = graphic.split('_')[1],
        option = $(graphic).children('svg')
        option = $(option).find('.' + colorOption)
    return { graphic, design, option }
}
function colorChange (itemId, optionId, cutout, color, background, svgGradient) {
    let
        colorOption = colorOptions(itemId, optionId),
        colorId = '#' + optionId.replace('color', '') + 'Gradient_'
    if (cutout) {
        colorOption.option.css('fill', background)
    } else if (!color) {
        $(colorOption.graphic).find(colorId + colorOption.design).html(svgGradient)
        colorOption.option.css('fill', 'url(' + colorId + colorOption.design + ')')
    } else {
        colorOption.option.css('fill', color)
    }
}

//Graphics Text Change (Called by text inputs on page)
function textChange(data) {
    let
        textInput = data.id.split('_')[0],
        designId = '#' + thisGraphic($(data)).id,
        textcolor = '.' + textInput.replace('textinput', 'textcolor'),
        svgGraphic = '.' + textInput.replace('textinput', 'graphic'),
        textChange = $(designId).children('svg').children(textcolor),
        svgGraphicChange = $(designId).find(svgGraphic)
        // $(svgGraphicChange).empty()
    $(textChange).find('tspan').text(data.value)

}
// Autocomplete Scrolling (maxShowItems:)
;(function($, undefined) {
    'use strict';
    $.widget('ui.autocomplete', $.ui.autocomplete, {
        _resizeMenu: function() {
            let ul, lis, ulW, barW;
            if (isNaN(this.options.maxShowItems)) { return; }
            ul = this.menu.element
                .scrollLeft(0).scrollTop(0) // Reset scroll position
                .css({overflowX: '', overflowY: '', width: '', maxHeight: ''}); // Restore
            lis = ul.children('li').css('whiteSpace', 'nowrap');

            if (lis.length > this.options.maxShowItems) {
                ulW = ul.prop('clientWidth');
                ul.css({overflowX: 'hidden', overflowY: 'auto',
                    maxHeight: lis.eq(0).outerHeight() * this.options.maxShowItems + 1}); // 1px for Firefox
                barW = ulW - ul.prop('clientWidth');
                ul.width('+=' + barW);
            }

            // Original code from jquery.ui.autocomplete.js _resizeMenu()
            ul.outerWidth(Math.max(
                ul.outerWidth() + 1,
                this.element.outerWidth()
            ));
        }
    });

})($);

// Colors & Selects
$(function(){
    /* Select2 Initialization */
    $('select').select2({
        minimumResultsForSearch: 20,
        theme: 'classic'
    });

    /* Graphic Options */

    /* Size */
    function sizeOptions(item) {
        let originalOption = item.element;
        return $(
            '<div class="select2-size-result-container">' +
            '<div class="size-info">' +
            '<div class="title">' + item.text + '</div>' +
            '<div class="metric">Metric Dimensions: ' + $(originalOption).data('width_mm') + ' mm(W) x ' + $(originalOption).data('height_mm') + ' mm(H)</div>' +
            '</div>' +
            '<div class="price">$' + $(originalOption).data('price') + ' ' + $(originalOption).data('unit') + '</div>' +
            '</div>'//container
        );
    }

    $('.graphic-size').select2({
        templateResult: sizeOptions
    });

    /* Car Year */
    // $('.model-year').on('select2:select', function (e) {
    //     console.log(formTexts($(this)))
    //
    //     /* Simon: Note: Testing for SVG Image placement. */
    //     // let graphic = thisGraphic($(this))
    //     // console.log(graphic)
    //     // let svg = graphic.querySelector('svg')
    //     // // let rect = document.getElementById('g1_pos')
    //     // let rect = graphic.querySelector('.g1_pos')
    //     // let text = $(graphic).children('svg').children('.textcolor')
    //     // console.log('SVG:')
    //     // console.log(svg)
    //     // console.log(svg.getBoundingClientRect())
    //     // console.log('Rectangle:')
    //     // console.log(rect.getBoundingClientRect())
    //     // console.log(rect.getBBox())
    //     /* Simon: Note: Testing for SVG Image placement. */
    //
    // })

    /* Car Color */
    // $('.car-color').on('select2:select', function (e) {
    //     let
    //         container = thisCartContainer($(this)),
    //         colorHex = '#' + $(this).find(':selected').data('hex'),
    //         cutouts = $(container).find('.cut-out, .text-cut-out')
    //     $(container).css('background-color', colorHex).trigger('change')
    //     $(cutouts).data('cutout', colorHex).trigger('change')
    // })

    /* Car Trim */
    // $('.trim-level').on('select2:select', function (e) {
    //     let
    //         graphic = thisGraphic($(this)),
    //         svgfile = $(this).find(':selected').data('svg')
    //     if (svgfile) {
    //         $(graphic).load(svgfile)
    //     }
    // })

    /* Material Type Selection (wet/dry install) - Working */
    $('.material').on('select2:select', function (e) {
        let
            currentForm = thisForm($(this)),
            formSelects = formSels(currentForm),
            colorSelectIds = formSelects.map(a => a.id).filter(id => id.match(/color/i))
        $(thisForm($(this))).find('.brand>select').prop("disabled", false);
        $(colorSelectIds).each(function() {
            $('#'+this).find('option').not(':first, .standard-opt').remove()
        })
        let dropdown = $(this).find(':selected');
        $.getJSON('/data/material-data.json', function (data) {
            let key = dropdown.val(),
            vals = [];
            switch (key) {
                case 'wet-install':
                    $.each( data['wet-install']['Wet-Install Premium Cast'], function( key ) {
                        vals.push( key );
                    });
                    break;
                case 'dry-install':
                    $.each( data['dry-install']['Dry-Install Premium Wrap'], function( key ) {
                        vals.push( key );
                    });
                    break;
            }
            let brand = $(currentForm).find('.brand>select');
            brand.empty().prop("disabled", false);
            $.each(vals, function (index, value) {
                brand.append("<option value='" + value +"'>" + value + "</option>").trigger('change');
            });
        });
        localStorage.setItem('graphicId', $(currentForm).attr('data-graphic-id'))
        localStorage.setItem('formId', $(currentForm).attr('id'))
        localStorage.setItem('material', e.params.data.id)
    });

    /* Brand Selection - Working */
    let brands = []
    $('.brand').on({
            'select2:select select2:unselect': function (e) {
                let
                    AjaxColorsURL = '/ajax/ajax-colors-trailer.php',
                    currentForm = thisForm($(this)), //Simon: Remove Me: if not used
                    formSelects = formSels(currentForm), //Simon: Remove Me: if not used
                    colorSelectIds = colorIds($(this)),
                    price = $("input[name='price']").val(),
                    weight = $("input[name='weight']").val()
                    brands = []
                // let data = e.params.data; //Simon: Remove Me: if not used
                // let brand = data.id //Simon: Remove Me: if not used

                $(colorSelectIds).each(function() {
                    $('#'+this).find('option').not(':first, .standard-opt').remove()
                }) // Remove Color Options
                $($(this).find(':selected')).each(function (index, label) {
                    brands.push($(label).attr('value')) // Add Selected Brand(s) to brands array
                });

                let querySelects = colorSelectIds.map(id => id.split('_')[0]);

            // console.log(brands)

                $.getJSON(
                    AjaxColorsURL, {
                        table: localStorage.getItem('graphicTable'), //Passed from current graphics page
                        graphic: localStorage.getItem('graphicId'), //value sent to RequestURL via $_GET[]
                        form: localStorage.getItem('formId'), //Passed from current graphics page
                        material: localStorage.getItem('material'), //Passed from material selection above
                        brands: brands,
                        selects: querySelects,
                        price: price, //value sent to RequestURL via $_GET[]
                        weight: weight, //value sent to RequestURL via $_GET[]
                        //percentage : 10, //value sent to RequestURL via $_GET[]
                        // beforeSend : function(){console.log('Ajax work started for #' + currentForm.id + ' ' + localStorage.getItem('graphicTable') + ' ' + price +  ' ' + localStorage.getItem('graphicId'))}
                    },

                    function (data) {
            // console.log(data);
                        colorSelectIds.forEach(function (item) {
                            let
                                itemId = '#' + item,
                                itemData = item.split('_')[0];
                            $.each(data[itemData], function (i, color) {
                                $(itemId).append($('<option>', {
                                    'data-class': color.optionClasses,
                                    'data-color': color.optionHEXColor,
                                    'data-gradient': color.optionGradient,
                                    'data-svg_gradient': color.optionSVGGradient,
                                    'data-specs': color.optionSpecs,
                                    'data-priceload': color.optionPriceLoad,
                                    value: color.optionValue,
                                    text: color.optionText // '\ue905\xa0\xa0\xa0' +
                                })); // $.each(itemData, function (i, color) { END
                            }); // $.each(data.mainColors, function (i, color) { END

                            // console.log('Number of color in ' + itemId + ' list: ' + data[itemData].length); // Number of items in color list.

                            let buildCounter = data[itemData].length + colorSelectIds.length;
                            // let placeholderText = '<img src="/images/icons/ColorSwatch.svg" height="17px" style="float: left; padding-top: 5px;"> ' + $(itemId).data('default-text');

                            //Simon: Todo: Make Selected color more compact (reformat data.priceload etc)
                            function cformatSelection(item) { //format item before / after selection
                                let
                                    originalOption = item.element,
                                    markup =
                                    '<span class="select2-selection__selected">'
                                if (!$(originalOption).data('color') && !$(originalOption).data('gradient')) {
                                    return $('<div>' + item.text + '</div>'); // If nothing is yet selected (fresh)
                                } else if ($(originalOption).data('color')) {
                                    markup +=
                                        '<span class="select2-selection__selected-tile ' + $(originalOption).data('classes') + '" style="background-color:' + $(originalOption).data('color') + '"></span>';
                                } else {
                                    markup +=
                                        '<span class="select2-selection__selected-tile ' + $(originalOption).data('classes') + '" style="' + $(originalOption).data('gradient') + '" data-svg_gradient="'+ $(originalOption).data('svg_gradient') + '"></span>';
                                } //if(!$(originalOption).data('color') && !$(originalOption).data('gradient')) { END
                                markup +=
                                    '<span class="select2-selection__selected-title">' + item.text + '<span> (+$' + $(originalOption).data('priceload') + ')</span></span>' +
                                    '</span>';
                                return $(markup); // Once item is selected.
                            } // function cformatSelection (item) { END*/

                            function cformatResult(item) { //format result drop down list
                                buildCounter--;
                                if (buildCounter === 0) {
                                    setTimeout(function () {
                                        //logic // Use to hide the loader / notification after select2 has built list
                                    }, 800);
                                } //if (buildCounter === 0){ END

                                let
                                    originalOption = item.element,
                                    markup =
                                    '<div class="select2-result-container">';
                                if ($(originalOption).data('color')) {
                                    markup +=
                                        '<div class="select2-result-tile ' + $(originalOption).data('classes') + '" style="background-color: ' + $(originalOption).data('color') + '\;" ></div>'; //container close
                                } else {
                                    markup +=
                                        '<div class="select2-result-tile ' + $(originalOption).data('classes') + '" Style="' + $(originalOption).data('gradient') + '"></div>'; // Formatted drop down list
                                } //if ($(originalOption).data('color')) { END
                                markup +=
                                    '<div class="select2-result-info">' +
                                    '<div class="select2-result-title">' + item.text + '</div>' +
                                    '<div class="select2-result-specs">' + $(originalOption).data('specs') + '</div>' +
                                    '<div class="select2-result-priceload"> Additional Cost $' + $(originalOption).data('priceload') + '</div>' +
                                    '</div>' + // info close
                                    '</div>';
                                return $(markup);

                            } //function cformatResult(item) { END

                            $(itemId).select2({
                                // placeholder: placeholderText,
                                escapeMarkup: function (markup) {
                                    return markup;
                                },
                                templateSelection: cformatSelection,
                                templateResult: cformatResult,
                                allowHtml: true,
                                dropdownCssClass: 'select2-drop-width'

                            }); // $(itemId).select2({ END

                            $(itemId).on('select2:open', function () {
                                // console.log(itemId + ' select open triggered'); // works for select box open.
                                // console.log($(this).select2('data'))
                                $('input.select2-search__field').prop('placeholder', 'Search for color or code here');
                            });

                            // $(itemId).on('select2:opening', function (e) {
                            //   console.log(itemId + ' select opening triggered'); // works for select box opened / being populated.
                            // });

                            // $(itemId).on('select2:closing', function (e) {
                            //   console.log(itemId + ' select  closed');
                            // });

                            // $(itemId).on('select2:selecting', function (e) {
                            //   console.log(itemId + ' select selecting');
                            // });

                            // Selected Color Options
                            $(itemId).on('change', function (e) {
                                let
                                    container = thisCartContainer($(this)),
                                    background = $(thisCartContainer($(this))).css('background-color'),
                                    cutout = $(this).find(':selected').data('cutout'),
                                    color = $(this).find(':selected').data('color'),
                                    gradient = $(this).find(':selected').data('gradient'),
                                    svgGradient = $(this).find(':selected').data('svg_gradient'),
                                    optionId = itemId.replace('#', '').split('_')[0]

                                if (itemId.includes('maincolor_')) {
                                    colorChange(itemId, optionId, cutout, color, background, svgGradient)
                                    $.each(['accentcolor', 'accentcolor2', 'textcolor', 'textcolor2', 'textcolor3'], function (key, option) {
                                        option = itemId.replace(optionId, option)
                                        $(option).children('.cut-out, .main-same, .text-cut-out, .text-same').data('color', color).data('gradient', gradient).data('svg_gradient', svgGradient).trigger('change')
                                        $(option).children('.cut-out, .text-cut-out').data('cutout', background).trigger('change')
                                    })
                                }

                                if (itemId.includes('accentcolor_')) {
                                    colorChange(itemId, optionId, cutout, color, background, svgGradient)
                                    $.each(['accentcolor2', 'textcolor', 'textcolor2', 'textcolor3'], function (key, option) {
                                        option = itemId.replace(optionId, option)
                                        $(option).children('.accent-same, .text-accent-same').data('color', color).data('gradient', gradient).data('svg_gradient', svgGradient).trigger('change')
                                        $(option).children('.cut-out, .text-cut-out').data('cutout', background).trigger('change')
                                    })
                                }

                                if (itemId.includes('accentcolor2_')) {
                                    colorChange(itemId, optionId, cutout, color, background, svgGradient)
                                    $.each(['textcolor', 'textcolor2', 'textcolor3'], function (key, option) {
                                        option = itemId.replace(optionId, option)
                                        $(option).children('.text-accent2-same').data('color', color).data('gradient', gradient).data('svg_gradient', svgGradient).trigger('change')
                                    })
                                }

                                if (itemId.includes('textcolor_')) {
                                    colorChange(itemId, optionId, cutout, color, background, svgGradient)
                                    $.each(['textcolor2', 'textcolor3'], function (key, option) {
                                        option = itemId.replace(optionId, option)
                                        $(option).children('.text-text-same').data('color', color).data('gradient', gradient).data('svg_gradient', svgGradient).trigger('change')
                                    })
                                    // //get text from input
                                    // let textinput = $(this).prev().val()
                                    // //text change
                                    // $(colorOption.option).children('tspan').text(textinput)
                                }

                                if (itemId.includes('textcolor2_')) {
                                    colorChange(itemId, optionId, cutout, color, background, svgGradient)
                                    $.each(['textcolor3'], function (key, option) {
                                        option = itemId.replace(optionId, option)
                                        $(option).children('.text-text-same').data('color', color).data('gradient', gradient).data('svg_gradient', svgGradient).trigger('change')
                                    })
                                    // //get text from input
                                    // let textinput2 = $(this).prev().val()
                                    // // console.log($(this).prev().val())
                                    //
                                    // //text change
                                    // $(colorOption.option).find('tspan').text(textinput2)
                                }

                                if (itemId.includes('textcolor3_')) {
                                    colorChange(itemId, optionId, cutout, color, background, svgGradient)

                                    // //get text from input
                                    // let textinput3 = $(this).prev().val()
                                    // // console.log($(this).prev().val())
                                    //
                                    // //text change
                                    // $(colorOption.option).find('tspan').text(textinput3)
                                }
                            })

                        }); // colorSelectIds.forEach(function (item) { END

                    }) //$.getJSON(

            }, //'select2:select select2:unselect': function (e) { END

            'select2:select': function () {
                $(this).parent().next().fadeIn() // Text Options & Notes
                $(this).nextAll().fadeIn().children().prop("disabled", false) // Color Dropdowns

            }, //'select2:select': function () { END

            'select2:unselect': function () {
                let
                    colorSelectIds = colorIds($(this)),
                    optionSwitch = $(this).parent().next(), // Main Options Switch
                    textOptions = thisForm($(this)).getElementsByClassName('text-option') // Text Options

                $(colorSelectIds).each(function () {
                    let $thisId = $('#' + this)
                    $thisId.val('').trigger('change') //Clear Selections

                    if ($.isEmptyObject(brands)) { //No Brands selected
                        $thisId.prop("disabled", true).parent().fadeOut() //Each Dropdown
                        optionSwitch.fadeOut().find("input[type='checkbox']").prop('checked', false)
                    } //if ($.isEmptyObject(brands)) { END

                }) //$(colorSelectIds).each(function () { END

                $(textOptions).each(function () {
                    let option = $(this).find('.option')
                    $(this).find("input[type='checkbox']").prop('checked', false)
                    option.children().prop('disabled', true).val('').trigger('change')

                }) //$(textOptions).each(function () { END

            }, //'select2:unselect': function () { END

    }) //$('.brand').on({ END

}); //$(function(){

//Text Option Switches
/* Main Options Switch */
$('.options-check').click(function(){
    let
        currentForm = thisForm($(this)),
        textOptions = currentForm.getElementsByClassName('text-option'),
        options = $(this).parent().next('.options'),
        phrases;

    if($(this).is(':checked')) {
        $(this).prev().text($(this).prev().attr('data-alt-txt'))
        options.fadeIn()

        //Simon: ToDo: Change for Motorcycle Autocomplete
        /* Ajax Call for Autocomplete */
        // $.ajax({
        //     url: '/ajax/ajax-autocomplete-automotive.php',
        //     data: {
        //         vehicle: localStorage.getItem('vehicleId'),
        //         vColumns: 'autocomplete_phrases, image_path'
        //     },
        //     dataType: 'json',
        //     async: false,
        //     success: function(data) {
        //         phrases = data;
        //     }
        // }) // $.ajax({ END

        /* Text/Logo Option Switches */
        $(textOptions).each(function() {
            let originalTxt = $(this).find('label').text()

            $(this).find("input[type='checkbox']").on('change', function () {
                let
                    option = $(this).parent().next('.option'),
                    textId = option.children('input').attr('id').split('_')[0],
                    textInputId = '#' + option.find('input:text').attr('id'),
                    svgText = '.' + textId.replace('textinput', 'textcolor'),
                    svgGraphic = '.' + textId.replace('textinput', 'graphic'),
                    designId = '#' + thisGraphic($(this)).id, // graphic_01
                    svgTextChange = $(designId).children('svg').children(svgText),
                    svgGraphicChange = $(designId).find(svgGraphic)

                if ($(this).is(':checked')) {
                    $(this).prev().text('Specify ' + originalTxt + ' & Color')
                    option.fadeIn()
                    option.children().prop('disabled', false)

                    /* Autocomplete for Each Text Input */
                    $(textInputId).autocomplete({
                        minLength: 0,
                        source: phrases,
                        // multiselect: true,
                        maxShowItems: 8,
                        focus: function( event, ui ) {
                            // console.log ('FOCUS EVENT')
                            // console.log (event)
                            // console.log(ui)
                        },
                        open: function( event, ui ) {
                            // console.log ('OPEN EVENT')
                            // console.log (event)
                            // console.log(ui)
                        },
                        response: function( event, ui ) {
                            // console.log ('RESPONSE EVENT')
                            // console.log (event)
                            // console.log(ui)
                            if (ui.content.length === 0) {
                                // console.log('RESPONSE EMPTY')
                                // $(svgGraphicChange).empty() // 9/13/2023
                            } 
                        },
                        select: function (event, ui) {
                            event.preventDefault();
                            // console.log ('SELECT EVENT')
                            // console.log (event)
                            console.log(ui)
                            let selected = ui.item.value,
                                phrase = ui.item.phrase,
                                phrase_svg = ui.item.phrase_svg

                            $(textInputId).val(selected).trigger('change')

                            // SVG Text Change
                            $(svgTextChange).find('tspan').text(selected) //Change Text to autocomplete value (text not graphic)
                            // $(svgTextChange).find('tspan').text('') //Remove text when graphic selected

                            /* Ajax call for logo svg paths etc. */
                            $.ajax({
                                url: phrase_svg,
                                dataType: 'html',
                                type: 'GET',
                                success: function(data){
                                    let
                                        svgContent = $(data).children().unwrap(),
                                        viewBox = $(data).attr('viewBox')
                                    /* Simon: Fix Me: Problem with text/logo after 1st */
                                    //$(svgGraphicChange).empty().attr('viewBox', viewBox).append(svgContent)
                                }
                            }); // $.ajax({ END
                        },
                        change: function( event, ui ) {
                            // console.log ('CHANGE EVENT')
                            // console.log (event)
                            // console.log(ui)
                        },
                        close: function( event, ui ) {
                            // console.log ('CLOSE EVENT')
                            // console.log (event)
                            // console.log(ui)
                        }
                    }).on('focus', function () {
                        $(this).autocomplete('search', '')

                    }).data("ui-autocomplete")._renderItem = function( ul, item ) {
                        // console.log(item)
                        return $( "<li class='ui-autocomplete-row'></li>" )
                            .data( "item.autocomplete", item )
                            .append( item.label )
                            .appendTo( ul );
                    }

                } else {
                    // Text
                    $(this).prev().text(originalTxt)
                    option.fadeOut()
                    option.children().prop('disabled', true).val('').trigger('change') //Clear Inputs and Dropdowns
                    $(svgTextChange).find('tspan').text('') //Clear text in svg specifically shift colors

                }
            }) // $(this).find("input[type='checkbox']").on('change', function () { END
        }) // $(textOptions).each(function() END


    } else {
        $(textOptions).each(function() {
            let
                originalText = $(this).find('label').text().replace('Specify ', '').replace(' & Color', ''),
                option = $(this).find('.option')
            $(this).find("input[type='checkbox']").prop('checked', false)
            $(this).find('label').text(originalText)
            option.children().prop('disabled', true).val('').trigger('change')
            option.fadeOut()
        })

        options.fadeOut()
        $(this).prev().text($(this).prev().attr('data-txt'))
    } // if($(this).is(':checked')) END
});

/* Created SVG to webp cart image */
$('.buy-now-button').click(function() {
    let currentForm = thisForm($(this)),
        cartImage = currentForm.querySelector('input[name=image]'),
        imageVal = cartImage.value,
        currentGraphic = thisGraphic($(this)),
        currentSVG = document.getElementById(currentGraphic.id).children[0],
        {width, height} = currentSVG.getBBox()

    console.log('Add to Cart Button Clicked')
        console.log(currentForm.id)
    console.log('Cart Image')
        console.log(cartImage)
        console.log(imageVal)
    console.log('Current Graphic')
        console.log(currentGraphic.id)
    console.log('Current SVG')
        console.log(currentSVG)
        console.log('width: ' + width)
        console.log('height: ' + height)

    /* Simon: Note: Use this to convert the dataurl to an actual file for the cart */
    // let dataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjOHLkyH8AB+gDTOQq89IAAAAASUVORK5CYII="
    // fetch(dataUrl)
    //     .then(response => response.blob())
    //     .then(blob => {
    //         let file = new File([blob], "sample.png", {type: blob.type})
    //         console.log(file)    //File object
    //         cartImage.setAttribute('value', file.name)
    //         console.log(imageVal)
    //     })

})

