const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Projet DevOps Réussi</title>
        <style>
          body { font-family: sans-serif; background-color: #282c34; color: white; text-align: center; padding-top: 50px; }
          h1 { color: #61dafb; }
          .card { background: #333; padding: 20px; border-radius: 10px; display: inline-block; box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 Mission Accomplie !</h1>
          <p>Le pipeline CI/CD fonctionne à la perfection.</p>
          <p>Code versionné sur <strong>GitHub</strong></p>
          <p>Testé par <strong>GitHub Actions</strong></p>
          <p>Déployé sur <strong>Render</strong></p>
        </div>
      </body>
    </html>
  `);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
  });
}

module.exports = app;
