jQuery(document).ready(function () {

  $('.przycisk_do_wyslania').click(function () {
    var k = $('#kwota').val();
    var n = $('#ile_rat').val();
    var pr = $('#procent').val();
    var r_m = pr / 12;
    var temp = 1 + r_m;
    var rata = (k * r_m) / (1 - (1 / (Math.pow((temp), n))));
    if (isNaN(rata)) {
      alert('Error occured!\nPlease enter valid values ');
    } else {
      $('#kwota_z_odsetkami').val(rata.toFixed(2));
      $('#rata_miesieczna').val(r_m.toFixed(2));
    }
    $('article').css('background', '#E3E3E3');
    $('th').css("font-weight", "900");
    $('.niebieski').css('background', '#c5dbf9');
  });
});