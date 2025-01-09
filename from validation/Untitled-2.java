// Sélection des éléments
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.createElement("input");
password.type = "password";
password.placeholder = "Password";
password.id = "password";
form.appendChild(password);

const confirmPassword = document.createElement("input");
confirmPassword.type = "password";
confirmPassword.placeholder = "Confirm Password";
confirmPassword.id = "confirm_password";
form.appendChild(confirmPassword);

// Création des messages d'erreur
function createErrorMessage(input, message) {
    let errorSpan = input.nextElementSibling;

    if (!errorSpan || !errorSpan.classList.contains("error-message")) {
        errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        input.after(errorSpan);
    }

    errorSpan.textContent = message;
    errorSpan.classList.add("active");
}

function removeErrorMessage(input) {
    const errorSpan = input.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains("error-message")) {
        errorSpan.classList.remove("active");
    }
}

// Validation
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Validation du prénom
    if (!firstName.value || firstName.value.length < 3) {
        isValid = false;
        firstName.classList.add("error");
        createErrorMessage(firstName, "Le prénom doit contenir au moins 3 caractères.");
    } else {
        firstName.classList.remove("error");
        removeErrorMessage(firstName);
    }

    // Validation de l'email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        isValid = false;
        email.classList.add("error");
        createErrorMessage(email, "Veuillez entrer une adresse email valide.");
    } else {
        email.classList.remove("error");
        removeErrorMessage(email);
    }

    // Validation du mot de passe
    if (password.value.length < 8) {
        isValid = false;
        password.classList.add("error");
        createErrorMessage(password, "Le mot de passe doit contenir au moins 8 caractères.");
    } else {
        password.classList.remove("error");
        removeErrorMessage(password);
    }

    // Validation de la confirmation du mot de passe
    if (password.value !== confirmPassword.value) {
        isValid = false;
        confirmPassword.classList.add("error");
        createErrorMessage(confirmPassword, "Les mots de passe ne correspondent pas.");
    } else {
        confirmPassword.classList.remove("error");
        removeErrorMessage(confirmPassword);
    }

    // Soumission si toutes les validations sont correctes
    if (isValid) {
        alert("Formulaire soumis avec succès !");
        console.log({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
        });
    }
});