const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur notre API REST!');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
