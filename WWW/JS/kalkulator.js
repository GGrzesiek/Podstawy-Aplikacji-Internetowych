function oblicz() 
{
  var tab = document.getElementsByName("operacja");
  var op;
  for(let i=0; i < tab.length; i++) 
  {
    if(tab[i].checked) op = tab[i].value;
  }
  var x = parseFloat(document.getElementById('pierwsza').value);
  var y = parseFloat(document.getElementById('druga').value);
  var temp;
  
  switch (op) {
    case 'dodawanie':
      temp = x + y;
      document.getElementById('wynik').value = temp;
      break;
    case 'odejmowanie':
      temp = x - y;
      document.getElementById('wynik').value = temp;
      break;
    case 'mnożenie':
      temp = x * y;
      document.getElementById('wynik').value = temp;
      break;
    case 'dzielenie':
      temp = x / y;
      if(isFinite(temp)) {
        document.getElementById('wynik').value = temp;
      }
      else {
        alert('Dzielisz przez zero!');
      }
      break;
    default:
      break;
    }
}
  