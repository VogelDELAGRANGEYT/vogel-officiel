// Liste des pseudos / amis à générer
const listeNoms = [
  "GRG | Gaël",
  "Dylan",
  "Papageï",
  "Vogel",
  "JustUltra (Yacine)",
  "Ztravaa",
  "Didi"
];

// Récupération des éléments HTML
const btnGenerer = document.getElementById("btnGenerer");
const nomAffiche = document.getElementById("nomAffiche");

// Événement au clic
btnGenerer.addEventListener("click", function() {
  const indexAleatoire = Math.floor(Math.random() * listeNoms.length);
  nomAffiche.innerText = listeNoms[indexAleatoire];
});
