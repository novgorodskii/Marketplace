let dateFormat = "mm/dd/yy",
    from = $( "#from" ) // находим инпут с id from
        .datepicker({
            defaultDate: '+1w',
            changeMonth: true,
            numberOfMonths: 1
        })
        .on( "change", function() {
            to.datepicker( "option", "minDate", getDate( this ) );
        }),
    to = $( "#to" )// находим инпут с id to
        .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
    })
        .on( "change", function() {
            from.datepicker( "option", "maxDate", getDate( this ) );
        });

function getDate( element ) {
    let date;
    try {
        date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
        date = null;
    }

    return date;
}

// определете элемент который открывает дропдаун
// у него в атрибуте data-dropdown забираете id дропдауна
// добавляете класс open на дропдаун
// toggleClass