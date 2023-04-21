/* Switch Work */
$('.options-check').click(function(){
    let currentForm = document.getElementById($(this).closest('form').attr('id'))
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
