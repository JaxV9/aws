# Fonctionnalités développées

1. Création d'un utilisateur (utilisation de Cognito dans le front et d'un trigger Lambda createUser)
2. Connexion (utilisation de Cognito)
3. Accès à la page /user
    1. Affichage du nom et prénom (Utilisation d'API getUser pour récupérer les infos dans DynamoDb)
    2. Affichage des adresses (Utilisation d'API getAdresses pour récupérer les infos dans DynamoDb)
    3. Formulaire pour ajouter des adresses (Utilisation d'API createAdress pour en ajouter dans DynamoDb)
    4. Affichage de la photo de profil (Récupération dans le S3 lié à l'utilisateur)
    5. Formulaire pour ajouter ou modifier sa photo de profil (Ajout dans le S3 lié à l'utilisateur)



# vue-aws
dynamo
cognito
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
