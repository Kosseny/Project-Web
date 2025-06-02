function ajouterElement() {
  var table = document.getElementById("tableau");
  table.style.display = "table";

  var note = document.getElementById("Note").value;
  var nom = document.getElementById("Nom").value;
  var genre = "";

  if (!nom) {
    alert("Veuillez entrer le nom du drama !");
    return;
  }

  var cdramaCheckbox = document.getElementById("cdrama");
  var kdramaCheckbox = document.getElementById("kdrama");
  var jdramaCheckbox = document.getElementById("jdrama");

  var selectedGenres = [];
  if (cdramaCheckbox.checked) {
    selectedGenres.push("C-drama");
  }
  if (kdramaCheckbox.checked) {
    selectedGenres.push("K-drama");
  }
  if (jdramaCheckbox.checked) {
    selectedGenres.push("J-drama");
  }

  if (selectedGenres.length < 1) {
    console.log("Le genre du drama n'a pas été sélectionné.");
    alert("Le genre du drama n'a pas été sélectionné.");
    return;
  }

  genre = selectedGenres[0];

  console.log("Genre du drama : " + genre);
  console.log("Nom du drama : " + nom);
  console.log("Note : " + note);

  var newRow = table.insertRow();
  newRow.classList.add("fade-in");

  var cell1 = newRow.insertCell(0);
  cell1.textContent = genre;

  var cell2 = newRow.insertCell(1);
  cell2.textContent = nom;

  var cell3 = newRow.insertCell(2);
  cell3.textContent = note;

  document.getElementById("Nom").value = "";
  document.getElementById("Note").value = "0";
  shojoCheckbox.checked = false;
  shonenCheckbox.checked = false;
  seinenCheckbox.checked = false;
  newRow.addEventListener('animationend', () => {
    newRow.classList.remove('fade-in');
  });
}

function supprimerDerniereLigne() {
  var table = document.getElementById("tableau");
  var rowCount = table.rows.length;

  if (rowCount > 1) {
    table.deleteRow(rowCount - 1);
  }
}

function supprimer() {
  var res = confirm("Confirmez-vous la suppression de la liste ?");

  if (res) {
    var Tableau = document.getElementById("tableau");

    var rowCount = Tableau.rows.length;

    for (var i = rowCount - 1; i > 0; i--) {
      Tableau.deleteRow(i);
    }
  }
}
