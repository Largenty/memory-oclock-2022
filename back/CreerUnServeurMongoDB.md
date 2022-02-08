# Comment créer un cluster mongoDB

Vous allez voir c'est super simple !

## Première étape : Créer votre compte

C'est sûrement l'étapge la plus simple.
Pour s'enregistrer c'est par ici :
https://account.mongodb.com/account/login

## Deuxième étape : Déployer votre premier cluster !

Une fois les questionnaires remplies. Vous devriez tomber sur la page :

### Deploy a cloud database

Pour cette exercice nous allons utiliser un cluster gratuit.
Vous pouvez donc sélectionner le cluster 'Shared' et cliqué sur create.

On tombe alors sur la page :

### Create a Shared Cluster

On remarque que MongoDB à déjà sélectionner des choses.

Pour moi, il me recommande un cluster AWS et un cluster localisé à Paris. Personnellement ça me convient parfaitement ! Mais si vous n'aimez pas amazon, vous pouvez sélectionner un autre amis (google ou microsoft).

Si on déploit **Cluster Tier**, on remarque que l'on peut choisir plus de stockage pour X$ en plus. Nous on recherche quelques chose de gratuit et avant de remplir 512 MB de données pour un memory, on a le temps de le voir venir :).

Dans les **additional settings** on remarquera une option que l'on ne peut pas activer. Notre cluster étant un M0 on ne pourra pas accéder à cette option de backup.

Ensuite, on peut définir le nom de notre cluster. Je vous laisse libre court à votre imagination pour cette partie.

Et enfin on clique sur **Create a cluster** !

## Troisième étape : Création de l'administrateur.

MongoDB ne perd pas de temps et vous demande de créer une option d'authentification.
Vous pouvez alors rentrer votre pseudo et votre mot de passe (_plus que secret et à ne jamais perdre_)

On vous demande ensuite de rentrer votre adresse ip, si vous ne la connaissez pas voici un lien pour l'avoir :
https://adresseip.com/
Cette adresse ip sera utile pour établir une connexion entre vous et le cluster. Pour l'instant seul cette adresse sera autorisée à accéder au cluster.

Le cluster va alors se créer (env 3/4min)

## Quatrième étape : Se connecter au Cluster.

Vous pouvez cliquer sur _connect_ et il vous proposera trois options. On va choisir la plus facile, cad la dernière MonDB Compass :) !
Si vous n'avez pas mongoDB Compass, pas de panique, il vous proposera plusieurs liens pour télécharger le logiciel.

Une fois MongoDB compass installé on aura juste à recopier le lien sur le site internet et le rajouter dans MongoDB Compass.
Il faudra juste remplacer `<password>` (dans le lien) par le mot de passe que vous avez créé à l'étape 3.

Si vous êtes arrivés jusqu'ici saint et sauf **félicitation vous venez de créer votre premier cluster mongoDB** !

Si vous souhaitez aller un peu plus loin:
https://www.mongodb.com/developer/how-to/use-atlas-on-heroku/
