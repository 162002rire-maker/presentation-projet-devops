# 🚀 Projet DevOps : Pipeline CI/CD Complet

![CI Status](https://github.com/TON_PSEUDO/TON_NOM_DE_REPO/actions/workflows/ci.yml/badge.svg)
![Docker Publish](https://github.com/TON_PSEUDO/TON_NOM_DE_REPO/actions/workflows/publish.yml/badge.svg)

## 📋 Description
Ce projet est une démonstration pratique de la mise en place d'une chaîne **DevOps** complète (CI/CD) pour une application Web.

L'objectif est d'automatiser le cycle de vie de l'application : du code source jusqu'à la mise en production, sans intervention manuelle.

## 🛠️ Stack Technique
* **Application :** Node.js (API Express)
* **Conteneurisation :** Docker (Image Alpine Linux)
* **CI (Intégration Continue) :** GitHub Actions (Tests unitaires avec Jest)
* **CD (Déploiement Continu) :** Docker Hub & Render

## ⚙️ Architecture du Pipeline

Le pipeline se déclenche automatiquement à chaque `push` sur la branche `main` :

1.  **Build & Test (CI) :**
    * Installation des dépendances (`npm install`)
    * Exécution des tests unitaires (`npm test`)
    * *Si les tests échouent, le pipeline s'arrête.*
2.  **Dockerisation :**
    * Construction de l'image Docker
    * Publication de l'image sur Docker Hub
3.  **Déploiement (CD) :**
    * Render détecte la nouvelle image et met à jour le site en production.

## 💻 Installation Locale (Pour tester)

Si vous souhaitez lancer le projet sur votre machine :

```bash
# Cloner le dépôt
git clone [https://github.com/TON_PSEUDO/TON_NOM_DE_REPO.git](https://github.com/TON_PSEUDO/TON_NOM_DE_REPO.git)

# Installer les dépendances
npm install

# Lancer les tests
npm test

# Lancer le serveur
npm start
