function getPoleIf(pole_id, obiektRegex) {
    var obiektPole = document.getElementById(pole_id);
    if (!obiektRegex.test(obiektPole.value))
        return (undefined);
    else
        return (obiektPole.value);
}

function getChekboxes(input_type) {
    inputs = [];
    var inputElements = document.getElementsByName(input_type);
    for (var i = 0; i < inputElements.length; ++i) {
        if (inputElements[i].checked) {
            inputs.push(inputElements[i].value);
        }
    }
    if (inputs.length == 0) {
        return undefined;
    } else {
        return inputs;
    }
}

function getRadio(radio_tapok) {
    var radios = document.getElementsByName(radio_tapok);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return undefined;
}

function sprawdz() {
    obiektNazw = /^[a-zA-Z]{2,20}$/;
    obiektemail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektWiek = /^[1-9][0-9]{1,2}$/;

    nazw = getPoleIf('nazw', obiektNazw);
    wiek = getPoleIf('wiek', obiektWiek);
    email = getPoleIf('email', obiektemail);
    kraj = document.getElementById('kraj').value;
    jezyki = getChekboxes('jezyk');
    oplata = getRadio('zaplata');

    pola = [nazw, wiek, email, jezyki, oplata];
    temp = false;
    for (i = 0; i < pola.length; i++) {
        if (pola[i] == undefined) {
            document.getElementsByClassName('czerwone')[i].style.visibility = 'visible';
            temp = true;
        } else {
            document.getElementsByClassName('czerwone')[i].style.visibility = 'hidden';
        }
    }
    if (temp == true) {
        return;
    }
    data = "Następujące dane zostaną wysłane:\n";
    data += "Email: " + email + "\n";
    data += "Imię : " + nazw + "\n";
    data += "Państwo: " + kraj + "\n";
    data += "Wiek: " + wiek + "\n";
    data += "Język: " + jezyki + "\n";
    data += "Sposób zapłaty: " + oplata + "\n";

    if (window.confirm(data)) {
        return true;
    } else {
        return false;
    }


}