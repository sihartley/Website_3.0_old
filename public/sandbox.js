$.ajax({
    url: '/ajax/ajax-vehicle.php',
    data: {
        vehicle: vehicleId,
        vColumns : 'autocomplete_phrases, image_path'
    },
    dataType: "json",
    success: function (data) {
        // console.log(data);
        let phrases = data.autocomplete_phrases.split(', '),
            imagePath = data.image_path,
            switches = document.querySelectorAll('.itemSwitch');

        // console.log(phrases);
        switches.forEach(function(item){
            let itemSwitch = item.lastChild.firstChild,
                itemInput = item.nextSibling.firstChild.firstChild,
                itemColors = item.nextSibling.lastChild.firstChild,
                itemHiddenInput = item.nextSibling.firstChild.firstChild.nextSibling;

            $(itemSwitch).on('click', function(){
                console.log(this);

                if(this.checked){
                    // console.clear();
                    console.log('Box is checked');
                    console.log(switches);

                    $('.itemOption').select2({
                        templateSelection: itemSelect,
                        templateResult: itemResult,
                        width: '100%'
                    }).on('change', function(e) {
                        // Access to full data
                        // console.log($(this).select2('data'));
                    }); //$('.itemOption').select2({ END

                    function split( val ) {
                        return val.split( /,\s*/ );
                    }
                    function extractLast( term ) {
                        return split( term ).pop();
                    }

                    $(itemInput).autocomplete({
                        minLength: 0,
                        source: phrases,
                        multiselect: true
                    }).on('focus', function () {
//Simon: Note: Possibly put image check here for it to work? along with imageFile variable setting.

                        $(this).autocomplete('search', '');
                    }).autocomplete('instance')._renderItem = function (ul, item) {
                        console.log(item);
                        let imageFile = item.label.replace(/\s/g, '-').replace(/\//, '').replace(/\./g, '_');

                        //IMage Check???
                        // $.get(imageFile)
                        //     .done(function() {
                        //       // Do something now you know the image exists.
                        //       console.log('image file found')
                        //     }).fail(function() {
                        //       // Image doesn't exist - do something else.
                        //       console.log('no image file')
                        //     });
                        //Image Check ??

                        return $("<li>").append("<div>" +
                            "<img class='acImage' src='" + imagePath + imageFile + ".svg'/>" +
                            "<div class='acName'>" + item.value + "</div>" +
                            "</div>")
                            .qtip({ // Grab some elements to apply the tooltip to
                                content: {
                                    title: item.value,
                                    text: `<img class='qtip-acimage' src='${imagePath}${imageFile}.svg'>`
                                },
                                position: {
                                    my: 'bottom center',
                                    at: 'top center'
                                },
                                style: {
                                    classes: 'qtip-light qtip-shadow qtip-rounded qtip-autocomplete'
                                }
                            })
                            .appendTo(ul);
                    };

                    // $(itemInput)
                    // // don't navigate away from the field on tab when selecting an item
                    //     .on('keydown', function(event) {
                    //       if (event.keyCode === $.ui.keyCode.TAB &&
                    //           $(this).autocomplete('instance').menu.active ) {
                    //         event.preventDefault();
                    //       }
                    //     })
                    //     .autocomplete({
                    //       delay: 0,
                    //       minLength: 0,
                    //       source: function( request, response ) {
                    //         // delegate back to autocomplete, but extract the last term
                    //         response( $.ui.autocomplete.filter(
                    //             phrases, extractLast( request.term ) ) );
                    //       },
                    //       focus: function() {
                    //         // prevent value inserted on focus
                    //         return false;
                    //       },
                    //       select: function( event, ui ) {
                    //         let terms = split( this.value );
                    //         // remove the current input
                    //         terms.pop();
                    //         // add the selected item
                    //         terms.push( ui.item.value );
                    //         // add placeholder to get the comma-and-space at the end
                    //         terms.push('');
                    //         this.value = terms.join(' ');
                    //         return false;
                    //       }
                    //       }).autocomplete("instance")._renderItem = function (ul, item) {
                    //         console.log(item);
                    //         let imageFile = item.label.replace(/\s/g, '-').replace(/\//, '').replace(/\./g, '_');
                    //         return $("<li>").append("<div>" +
                    //             "<img class='acImage' src='" + imagePath + imageFile + ".svg'/>" +
                    //             "<div class='acName'>" + item.value + "</div>" +
                    //             "</div>")
                    //             // .append("<p class='ac2Name'>" + item.label + "</p>")
                    //             .appendTo(ul);
                    //       };


                } //if(this.checked){ END
            });//$(item.lastElementChild.firstElementChild).on('click', function(){ END
        }); //matches.forEach(function(item){ END

    }//success: function (data) { END
}); //$.ajax({ END
