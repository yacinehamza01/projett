# Guide de Démarrage - Projet Backend

Ce guide fournit des instructions pour cloner et démarrer le projet backend, ainsi qu'une brève explication des concepts clés tels que les modèles, les contrôleurs et les routes.

## Clonage du Projet

Pour cloner le projet backend, suivez ces étapes :

1. Ouvrez votre terminal.
2. Utilisez la commande suivante pour cloner le projet depuis GitHub :

   ```bash
   git clone <lien-du-projet-backend>
   ```

## Installation des Dépendances

Une fois le projet cloné, suivez ces étapes pour installer les dépendances :

1. Accédez au répertoire du projet backend en utilisant la commande suivante :

```bash
cd Back-end
```

2. Utilisez la commande suivante pour installer les modules nécessaires :

```bash
npm install
```

## Démarrage du Serveur

Après avoir installé les dépendances, vous pouvez démarrer le serveur en suivant ces étapes :

1. Assurez-vous d'être toujours dans le répertoire du projet backend.

2. Utilisez la commande suivante pour démarrer le serveur en mode de développement :

```bash
npm run dev
```

## Comprendre les Concepts

### Modèles

Les modèles sont des représentations de données dans notre application. Ils définissent la structure et les schémas des données stockées dans la base de données. Dans ce projet, les modèles sont généralement définis dans le dossier models.

### Contrôleurs

Les contrôleurs sont des fonctions qui contiennent la logique métier de notre application. Ils manipulent les données en fonction des requêtes reçues des routes et interagissent souvent avec les modèles pour récupérer ou modifier les données. Dans ce projet, les contrôleurs sont généralement définis dans le dossier controllers.

### Routes

Les routes définissent les points de terminaison de l'API et spécifient comment les requêtes HTTP doivent être traitées. Chaque route est associée à un ou plusieurs contrôleurs, qui sont responsables de la logique d'exécution de la route. Dans ce projet, les routes sont généralement définies dans le dossier routes.

### Fichier Index des Routes

Dans le dossier routes, vous trouverez un fichier nommé index.js. Ce fichier regroupe toutes les routes de l'application. Lorsque nous importons les routes dans le fichier principal index.js, nous n'avons besoin que d'une seule instruction d'importation.
