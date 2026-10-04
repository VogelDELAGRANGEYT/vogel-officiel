// Liste des pseudos / amis à générer
const listeNoms = [
  "GRG | Gaël",
  "Dylan",
  "Papageï",
  "Vogel",
  "JustUltra (Yacine)",
  "Ztravaa"
];

const btnGenerer = document.getElementById("btnGenerer");
const nomAffiche = document.getElementById("nomAffiche");

btnGenerer.addEventListener("click", function() {
  const indexAleatoire = Math.floor(Math.random() * listeNoms.length);
  nomAffiche.innerText = listeNoms[indexAleatoire];
});
