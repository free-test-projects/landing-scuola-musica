var indice = 0;

function vai(n) {
  var voci = document.getElementsByClassName("voce");
  var pallini = document.getElementsByClassName("pallino");

  for (var i = 0; i < voci.length; i++) {
    voci[i].className = "voce";
    pallini[i].className = "pallino";
  }

  voci[n].className = "voce attiva";
  pallini[n].className = "pallino on";
  indice = n;
}

document.getElementById("richiesta").addEventListener("submit", function (e) {
  e.preventDefault();

  var nome = document.getElementById("f_nome").value;
  var mail = document.getElementById("f_mail").value;
  var eta = document.getElementById("f_eta").value;
  var risposta = document.getElementById("risposta");

  if (nome == "" || mail == "") {
    risposta.innerHTML = "Compila nome e email";
    return;
  }

  if (eta != "" && isNaN(eta) == true) {
    risposta.innerHTML = "L'età deve essere un numero";
    return;
  }

  risposta.innerHTML = "Grazie, ti scriviamo per fissare la lezione.";
});
