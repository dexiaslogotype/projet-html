let eleve = {
  nom: "Jean",
  age: 65,
  cours: []
};

// Modifier l'âge et ajouter une nouvelle propriété
eleve.age = 65;
eleve.note = "A+";

// Ajouter des cours dans le tableau
eleve.cours.push("Histoire", "Biologie", "Informatique");

// Trouver l'index de "Biologie"
let indexBiologie = eleve.cours.indexOf("Biologie");

// Obtenir les deux premiers cours
let deuxPremiersCours = eleve.cours.slice(0, 2);

console.log("Objet élève complet :", eleve);
console.log("Index de 'Biologie' :", indexBiologie);
console.log("Nouveau tableau avec slice :", deuxPremiersCours);  