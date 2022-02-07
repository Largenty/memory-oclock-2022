# Memoxy !

## Description du jeu :

Memoxy est une copie d'un jeu appelé mémory. Pour gagner il suffit de trouver toutes les paires dans un temps imparti.

## Installation :

Ouvrez votre terminal et entrer les commandes ci-dessous.

### Aller dans le dossier front : (`cd front/`)

Utiliser les commandes suivantes :

- `npm install`
- `npm run start`

Un nouvel onglet devrait s'ouvrir avec l'adresse : `http://localhost:8000/`

### Allez dans le dossier back : (`cd back/`)

Utiliser les commandes suivantes :

- `npm install`
- `touch .env && cp .env.test .env` _(on crée un fichier .env et on copie ce qu'il y a dans .env.test dans notre nouveau fichier .env)_
- `npm run start`

## Fonctionnalité du jeu :

- Dans cette version de mémory, vous pouvez créer un pseudo et l'utiliser pour sauvegarder votre score.
- S'il n'y a pas de pseudo d'entrée, l'application vous en choissira un.
- Cliquez sur le button **start** pour commencer une partie de **60sec**.
- Vous pouvez à tout moment recommencer le jeu en appuyant sur le button **reset** _(le jeu sera alors mélangé, vos mouvements remis à 0 et le timer remis à 60sec)_.
- Seul les dix meilleurs scores apparaîtront dans le tableau
- Le score est calculé suivant le nombre de mouvement (clique sur une carte) _ le temps que vous avez mis. _(move _ time)_
- Que la force soit avec vous !
- Have Fun !

## Technologie utilisées :

### Front :

- parcel
- @parcel/transformer-sass (pour compiler le scss)
- sass / scss
- vanilla js

### Back :

- nodejs
- nodemon
- express
- mongoose
- dotenv
- cors

## Pour aller plus loin :

Si vous le souhaitez, vous pouvez essayer d'incorporer deux trois fonctionnalités en plus :
- ajouter un boutton 'cancel' pour changer de pseudo
- ajouter des bouttons pour choisir le nombre de paires à découvrir (ex: 4x4, 8x8, 12x12)
- afficher la position du joueur même s'il n'est pas dans le top 10 ;)
- rajouter le nombre de coups à côté du temps.
- rajouter un boutton pour changer la limite de temps.