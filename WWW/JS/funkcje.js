function oblicz() {
  var k = parseFloat(document.getElementById('kwota').value);
  var n = parseInt(document.getElementById('lrat').value);
  var pr = parseFloat(document.getElementById('oproczne').value);
  var pr_mc = pr / 12.0;
  var rata = ((k*pr_mc))/(1-(1/(Math.pow((1 + pr_mc),n))));
  if(isNaN(rata)) 
  {
    alert('Niepoprawna wartość!!!');
  }
  else 
  {
    document.getElementById('opmiesieczne').value = pr_mc.toFixed(3);
    document.getElementById('odsetki').value = rata.toFixed(3);
  }
}
