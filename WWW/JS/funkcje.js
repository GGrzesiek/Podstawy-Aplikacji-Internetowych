jQuery(document).ready(function () {

$('.przycisk_do_wyslania').click(function () {
  var k = $('#kwota').val();
  var n = $('#lrat').val();
  var pr = $('#oproczne').val();
  var r_m = pr / 12;
  var temp = 1 + r_m;
  var rata = (k * r_m) / (1 - (1 / (Math.pow((temp), n))));
  if(isNaN(rata)) 
  {
    alert('Niepoprawna wartość!!!');
  }
  else 
  {
    $('#odsetki').val(rata.toFixed(2));
    $('#opmiesieczne').val(r_m.toFixed(2));
  }
  $('article').css('background', '#E3E3E3');
  $('th').css("font-weight", "bold");
  $('.zielony').css('background', '#90EE90');
  });
});
