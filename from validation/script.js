// Objet pour stocker les données utilisateur
const formData = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  checkPassword: null,
};

// Récupérer les éléments HTML
const form = document.getElementById("mon_form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const checkPassword = document.getElementById("check_password");

const errorFirstName = document.getElementById("error_first_name");
const errorLastName = document.getElementById("error_last_name");
const errorEmail = document.getElementById("error_email");
const errorPassword = document.getElementById("error_password");
const errorCheckPassword = document.getElementById("error_check_password");

// Mise à jour des données en temps réel
firstName.addEventListener("input", (e) => {
  formData.firstName = e.target.value.trim();
});

lastName.addEventListener("input", (e) => {
  formData.lastName = e.target.value.trim();
});

email.addEventListener("input", (e) => {
  formData.email = e.target.value.trim();
});

password.addEventListener("input", (e) => {
  formData.password = e.target.value;
});

checkPassword.addEventListener("input", (e) => {
  formData.checkPassword = e.target.value;
});

// Validation lors de la soumission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Empêche le rechargement de la page

  let isValid = true;

  // Vérifie le prénom
  if (!formData.firstName) {
    errorFirstName.style.display = "block";
    firstName.classList.add("error");
    isValid = false;
  } else {
    errorFirstName.style.display = "none";
    firstName.classList.remove("error");
  }

  // Vérifie le nom
  if (!formData.lastName) {
    errorLastName.style.display = "block";
    lastName.classList.add("error");
    isValid = false;
  } else {
    errorLastName.style.display = "none";
    lastName.classList.remove("error");
  }

  // Vérifie l'email
  if (!formData.email || !formData.email.includes("@")) {
    errorEmail.style.display = "block";
    email.classList.add("error");
    isValid = false;
  } else {
    errorEmail.style.display = "none";
    email.classList.remove("error");
  }

  // Vérifie le mot de passe
  if (!formData.password) {
    errorPassword.style.display = "block";
    password.classList.add("error");
    isValid = false;
  } else {
    errorPassword.style.display = "none";
    password.classList.remove("error");
  }

  // Vérifie la confirmation du mot de passe
  if (formData.password !== formData.checkPassword) {
    errorCheckPassword.style.display = "block";
    checkPassword.classList.add("error");
    isValid = false;
  } else {
    errorCheckPassword.style.display = "none";
    checkPassword.classList.remove("error");
  }

  // Si tout est valide, soumettre les données
  if (isValid) {
    console.log("Données soumises :", formData);
    alert("Formulaire soumis avec succès !");
  }
});
