const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: "Projet validé !" });
});

if (require.main === module) {
  app.listen(3000, () => console.log('Serveur prêt'));
}

module.exports = app;
