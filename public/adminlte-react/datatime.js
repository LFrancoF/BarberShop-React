$(function () {

    //Date picker
    $('#reservationdate').datetimepicker({
        format: 'L'
    });

    //Date and time picker
    $('#reservationdatetime').datetimepicker({ icons: { time: 'far fa-clock' } });

    //Timepicker
    $('#timepicker').datetimepicker({
      format: 'LT'
    })

})