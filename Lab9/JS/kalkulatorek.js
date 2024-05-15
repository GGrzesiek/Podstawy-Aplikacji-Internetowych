function oblicz() {
    var tab = document.getElementsByName("operator");
    var op;
    for(let i=0; i < tab.length; i++) {
      if(tab[i].checked) op = tab[i].value;
    }
    var x = parseFloat(document.getElementById('first').value);
    var y = parseFloat(document.getElementById('second').value);
    var temp;
  
    switch (op) {
      case 'add':
        temp = x + y;
        document.getElementById('resault').value = temp.toFixed(2);
        break;
      case 'sub':
        temp = x - y;
        document.getElementById('resault').value = temp.toFixed(2);
        break;
      case 'div':
        temp = x * y;
        document.getElementById('resault').value = temp.toFixed(2);
        break;
      case 'mull':
        temp = x / y;
        if(isFinite(temp)) {
          document.getElementById('resault').value = temp.toFixed(2);
        }
        else {
          alert('Error occured!\n Please enter valid values!');
        }
        break;
      default:
        break;
    }
  }
  