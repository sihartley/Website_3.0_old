/* Ajax file for color lists */
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
function formTexts(form) {
    // document.querySelectorAll("input[type=text]")
    form = document.getElementById(form)
    return Array.from(form.querySelectorAll("input[type=text]"))
}
function colorIds(form) {
    return Array.from(document.getElementById(form.closest('form').attr('id'))
        .querySelectorAll('select'))
        .map(a => a.id).filter(id => id.match(/color/i))
}

$(function(){
    /* Select2 Simon: Note: moved from scripts_global.js*/
    $('select').select2({
        minimumResultsForSearch: 20,
        theme: 'classic'
    });

    /* Car Color */
    $('.car-color').on('select2:select', function (e) {
        let container = thisCartContainer($(this))
        let colorHex = '#' + $(this).find(':selected').data('hex')
        let cutouts = $(container).find('.cut-out, .text-cut-out')
        $(container).css('background-color', colorHex).trigger('change')
        $(cutouts).data('cutout', colorHex).trigger('change')
    })

    /* Car Trim */
    $('.trim-level').on('select2:select', function (e) {
        let graphic = thisGraphic($(this))
        let filename = '/graphics/Vehicles/Dodge/Charger/2k15/PBHD/Charger-2k15-Hellcat-Power-Bulge-Hood-Decal-(PBHD01).svg'
        let svg = $(this).find(':selected').data('svg')
        console.log(svg)

        $.get(svg, function(svgfile)
        {
            console.log(filename)
            console.log(svgfile)
            console.log($(graphic).find('svg'))

        });

    })

    /* Material Type Selection (wet/dry install) - Working */
    $('.material').on('select2:select', function (e) {
        let currentForm = thisForm($(this))
        let formSelects = formSels(currentForm)
        let colorSelectIds = formSelects.map(a => a.id).filter(id => id.match(/color/i))
        $(thisForm($(this))).find('.brand>select').prop("disabled", false);
        $(colorSelectIds).each(function() {
            $('#'+this).find('option').not(':first, .standard-opt').remove()
        })
        let dropdown = $(this).find(':selected');
        $.getJSON('/data/material-data.json', function (data) {
            let key = dropdown.val();
            let vals = [];
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
        localStorage.setItem('formId', $(currentForm).attr('id'))
        localStorage.setItem('material', e.params.data.id)
    });

    /* Brand Selection - Working */
    let brands = []
    $('.brand').on({
            'select2:select select2:unselect': function (e) {
                let RequestURL = '/ajax/ajax-colors-automotive.php';
                // let currentForm = thisForm($(this)) //Simon: Remove Me: if not used
                // let formSelects = formSels(currentForm) //Simon: Remove Me: if not used
                let colorSelectIds = colorIds($(this))
                let price = $("input[name='price']").val()
                let weight = $("input[name='weight']").val()
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
                    RequestURL, {
                        graphic: localStorage.getItem('graphicId'), //value sent to RequestURL via $_GET[]
                        form: localStorage.getItem('formId'), //Passed from current graphics page
                        material: localStorage.getItem('material'), //Passed from material selection above
                        brands: brands,
                        selects: querySelects,
                        price: price, //value sent to RequestURL via $_GET[]
                        weight: weight, //value sent to RequestURL via $_GET[]
                        // table : databaseTable, // Simon: Note: Not required, using separate function for auto, mc, trailer
                        //percentage : 10, //value sent to RequestURL via $_GET[]
                        //beforeSend : function(){console.log('Ajax work started for #' + currentForm.id + ' ' + formSelects + ' ' + price +  ' ' + localStorage.getItem('graphicId'))}
                    },

                    function (data) {
            // console.log(data);
                        colorSelectIds.forEach(function (item) {
                            let itemId = '#' + item;
                            let itemData = item.split('_')[0];
                            $.each(data[itemData], function (i, color) {
                                $(itemId).append($('<option>', {
                                    // 'data-icon': 'fas fa-square',
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
                                let originalOption = item.element;
                                let markup =
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

                                let originalOption = item.element;
                                let markup =
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
                                let container = thisCartContainer($(this))
                                let background = $(thisCartContainer($(this))).css('background-color')
                                let cutout = $(this).find(':selected').data('cutout')
                                let color = $(this).find(':selected').data('color')
                                let gradient = $(this).find(':selected').data('gradient')
                                let svgGradient = $(this).find(':selected').data('svg_gradient')


                                if (itemId.includes('maincolor_')) {
                                    let graphic = itemId.replace('maincolor', 'graphic')
                                    let design = graphic.split('_')[1]
                                    let maincolor = $(graphic).children('svg').children('.maincolor')
                                    //Simon: Note: use @var color and $var gradient here to alter colors on .svg files.
                                    $.each(['accentcolor', 'accentcolor2', 'textcolor', 'textcolor2', 'textcolor3'], function (key, option) {
                                        option = itemId.replace('maincolor', option)
                                        $(option).children('.cut-out, .main-same, .text-cut-out, .text-same').data('color', color).data('gradient', gradient).data('svg_gradient', svgGradient).trigger('change')
                                        $(option).children('.cut-out, .text-cut-out').data('cutout', background).trigger('change')

                                    })

                                    if (!color) {
                                        $(graphic).find('#mainGradient_' + design).html(svgGradient)
                                        maincolor.css('fill', 'url(#mainGradient_' + design + ')')
                                    } else {
                                        maincolor.css('fill', color)
                                    }
                                }

                                if (itemId.includes('accentcolor_')) {
                                    let graphic = itemId.replace('accentcolor', 'graphic')
                                    let design = graphic.split('_')[1]
                                    let accentcolor = $(graphic).children('svg').children('.accentcolor')
                                    //Simon: Note: use @var color and $var gradient here to alter colors on .svg files.
                                    $.each(['accentcolor2', 'textcolor', 'textcolor2', 'textcolor3'], function (key, option) {
                                        option = itemId.replace('accentcolor', option)
                                        $(option).children('.accent-same, .text-accent-same').data('color', color).data('gradient', gradient).data('svg_gradient', svgGradient).trigger('change')
                                        $(option).children('.cut-out, .text-cut-out').data('cutout', background).trigger('change')
                                    })

                                    // $(this).find(':selected').data('cutout', background)
                                    // console.log('Cutout: '+$(this).find(':selected').data('cutout'))

                                    if (cutout) {
                                        accentcolor.css('fill', background)
                                    } else if (!color) {
                                        $(graphic).find('#accentGradient_' + design).html(svgGradient)
                                        accentcolor.css('fill', 'url(#accentGradient_' + design + ')')
                                    } else {
                                        accentcolor.css('fill', color)
                                    }
                                }

                                if (itemId.includes('accentcolor2_')) {
                                    let graphic = itemId.replace('accentcolor2', 'graphic')
                                    let design = graphic.split('_')[1]
                                    let accentcolor2 = $(graphic).children('svg').children('.accentcolor2')
                                    //Simon: Note: use @var color and $var gradient here to alter colors on .svg files.
                                    $.each(['textcolor', 'textcolor2', 'textcolor3'], function (key, option) {
                                        option = itemId.replace('accentcolor2', option)
                                        $(option).children('.text-accent2-same').data('color', color).data('gradient', gradient).data('svg_gradient', svgGradient).trigger('change')
                                    })
                                    if (cutout) {
                                        accentcolor2.css('fill', background)
                                    } else if (!color) {
                                        $(graphic).find('#accent2Gradient_' + design).html(svgGradient)
                                        accentcolor2.css('fill', 'url(#accent2Gradient_' + design + ')')
                                    } else {
                                        accentcolor2.css('fill', color)
                                    }
                                }

                                if (itemId.includes('textcolor_')) {
                                    let graphic = itemId.replace('textcolor', 'graphic')
                                    let design = graphic.split('_')[1]
                                    let textcolor = $(graphic).children('svg').children('.textcolor')
                                    //Simon: Note: use @var color and $var gradient here to alter colors on .svg files.
                                    $.each(['textcolor2', 'textcolor3'], function (key, option) {
                                        option = itemId.replace('textcolor', option)
                                        $(option).children('.text-text-same').data('color', color).data('gradient', gradient).data('svg_gradient', svgGradient).trigger('change')
                                    })
                                    if (cutout) {
                                        textcolor.css('fill', background)
                                    } else if (!color) {
                                        $(graphic).find('#textGradient_' + design).html(svgGradient)
                                        textcolor.css('fill', 'url(#textGradient_' + design + ')')
                                    } else {
                                        textcolor.css('fill', color)
                                    }

                                    //get text from input
                                    let textinput = $(this).prev().val()
                                    //text change
                                    $(textcolor).children('tspan').text(textinput)
                                }

                                if (itemId.includes('textcolor2_')) {
                                    let graphic = itemId.replace('textcolor2', 'graphic')
                                    let design = graphic.split('_')[1]
                                    let textcolor2 = $(graphic).children('svg').children('.textcolor2')
                                    //Simon: Note: use @var color and $var gradient here to alter colors on .svg files.
                                    $.each(['textcolor3'], function (key, option) {
                                        option = itemId.replace('textcolor2', option)
                                        $(option).children('.text-text-same').data('color', color).data('gradient', gradient).data('svg_gradient', svgGradient).trigger('change')
                                    })
                                    if (cutout) {
                                        textcolor2.css('fill', background)
                                    } else if (!color) {
                                        $(graphic).find('#text2Gradient_' + design).html(svgGradient)
                                        textcolor2.css('fill', 'url(#text2Gradient_' + design + ')')
                                    } else {
                                        textcolor2.css('fill', color)
                                        // console.log('NO SVG')
                                    }

                                    //get text from input
                                    let textinput2 = $(this).prev().val()
                                    // console.log($(this).prev().val())

                                    //text change
                                    $(textcolor2).find('tspan').text(textinput2)
                                }

                                if (itemId.includes('textcolor3_')) {
                                    let graphic = itemId.replace('textcolor3', 'graphic')
                                    let design = graphic.split('_')[1]
                                    let textcolor3 = $(graphic).children('svg').children('.textcolor3')
                                    //Simon: Note: use @var color and $var gradient here to alter colors on .svg files.
                                    if (cutout) {
                                        textcolor3.css('fill', background)
                                    } else if (!color) {
                                        $(graphic).find('#text3Gradient_' + design).html(svgGradient)
                                        textcolor3.css('fill', 'url(#text3Gradient_' + design + ')')
                                    } else {
                                        textcolor3.css('fill', color)
                                    }
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
                let colorSelectIds = colorIds($(this))
                let optionSwitch = $(this).parent().next() // Main Options Switch
                let textOptions = thisForm($(this)).getElementsByClassName('text-option') // Text Options

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
$('.options-check').click(function(){
    let currentForm = thisForm($(this))
    let textOptions = currentForm.getElementsByClassName('text-option')
    let options = $(this).parent().next('.options')
    if($(this).is(':checked')) {
        $(this).prev().text($(this).prev().attr('data-alt-txt'))
        options.fadeIn()

        $(textOptions).each(function() {
            let originalTxt = $(this).find('label').text()

            $(this).find("input[type='checkbox']").on('change', function () {
                let option = $(this).parent().next('.option')

                if ($(this).is(':checked')) {
                    $(this).prev().text('Specify ' + originalTxt + ' & Color')
                    option.fadeIn()
                    option.children().prop('disabled', false)
                } else {
                    $(this).prev().text(originalTxt)
                    option.fadeOut()
                    option.children().prop('disabled', true).val('').trigger('change') //Clear Selections
                }



                //Simon: Note: Testing

                console.log(this)
                console.log($(this).find("input[type='text']").id)

                function handleTextChange() {
                    // #cartContainer-01

                    // let textinput = document.getElementById('textbox_id').value;
                    // let textinput = $(this).find("input[type='checkbox']").value;
                    // let graphictext = document.getElementById('result');
                    graphictext.innerHTML = textinput;
                }
                //Simon: Note: End Testing


            })
        }) // $(textOptions).each(function()

    } else {
        $(textOptions).each(function() {
            let originalText = $(this).find('label').text().replace('Specify ', '').replace(' & Color', '')
            let option = $(this).find('.option')
            $(this).find("input[type='checkbox']").prop('checked', false)
            $(this).find('label').text(originalText)
            option.children().prop('disabled', true).val('').trigger('change')
            option.fadeOut()
        })

        options.fadeOut()
        $(this).prev().text($(this).prev().attr('data-txt'))
    } // if($(this).is(':checked')) END
});

//Graphics Text Change
function textChange(data) {
    let textInput = data.id.split('_')[0]
    let graphicId = thisGraphic($(data)).id
    let textcolor = '.' + textInput.replace('textinput', 'textcolor')
    let textChange = $('#' + graphicId).children('svg').children(textcolor)
    $(textChange).find('tspan').text(data.value)
}


