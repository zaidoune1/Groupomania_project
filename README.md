# Projet7-Groupomania

Bienvenue! Voici mon application:  le réseau social du Groupomania, dans le cadre du projet 7 de la formation Developpeur Web OpenClassrooms.


# Spécifications fonctionnelles
## Page de connexion
* Une page de connexion permettant à l’utilisateur de se connecter, ou bien de créer un compte s’il n’en possède pas. 
 * __Pour la connexion :__
   * l'utlisateur doit renseigner son e-mail et mot de passe
 * __Pour l'inscription:__
   * l'utlisateur doit renseigner sont nom d'utlisateur, e-mail et mot de passe 
* __Détails de la fonctionnalité de connexion__
  * Un utilisateur doit avoir la possibilité de se déconnecter.
  * La session de l’utilisateur persiste pendant qu’il est connecté.
  * Les données de connexion doivent être sécurisées.
  
## Page d’accueil
La page d’accueil doit lister les posts créés par les différents utilisateurs.
les posts sont listés de façon antéchronologique (du plus récent au plus ancien).
 
## Crèation des posts
 * Un utilisateur doit pouvoir créer un post.
 * Un post doit pouvoir contenir du texte et une image.
 * Un utilisateur doit aussi pouvoir modifier et supprimer ses posts.

## Système de commentaire
 * Un utilisateur doit pouvoir ajouter un commentaire sur tous les posts.
 * Un utilisateur doit aussi pouvoir modifier et supprimer ses commentaires.
 * un utilisateur doint pouvoir supprimer les commenatires sur des posts.

## Système de like
Un utilisateur doit pouvoir liker/disliker un post, une seule fois pour chaque post.

## Page profil
Un utilsateur peut ajouter une photo de profil et un bio 

## Rôle administrateur
Dans le but de pouvoir faire de la modération si nécessaire, il faudra créer un utilisateur “administrateur” ; 
celui-ci aura les droits:
* de modification / suppression sur tous les posts du réseau social. 
* de suppression de tous les commentaires du réseau social. 

# Installation
__:triangular_flag_on_post: Avant de commencer, assurez-vous d'avoir :__ 

   >* __nodejs et npm installés sur votre système.__

   >* __Vos ports localhost:3000 et localhost:5000 non utilisés, 
sinon, modifiez les ports selon vos possibilités,dans les fichiers .env présents dans 
groupomania_front/.env et Groupomania_back/config/.env__

-----------------
1- Télécharger les fichiers.

    Au dessus des fichiers présents sur le repository Git, vous pouvez télécharger ou cloner le dossier,
    je vous recommande de télécharger le fichier ZIP et d'extraire son contenu à l'emplacement souhaité sur votre ordinateur.
-----------------
2- Installer l'application Backend.

    Pour installer l'application backend, ouvrez un terminal (Git Bash, par exemple) 
    et rendez-vous à l'aide du terminal dans le dossier (l'emplacementChoisi)/GroupomaniaReact-main/Groupomania_back

    Executez la commande:

    npm install

    L'installation des différentes dépendances devrait s'effectuer automatiquement.
-----------------
3- Lancer l'application Backend.

    Une fois l'application installée, dans votre terminal, toujours dans le dossier

    GroupomaniaReact-main/Groupomania_back

    Executez la commande:

    npm run start

    L'application devrait se lancer, et si les précédentes étapes ont correctement fonctionné, le terminal devrait vous afficher
    les informations suivantes:

   <img width="277" alt="back" src="https://user-images.githubusercontent.com/77368808/179432978-beaf4d92-96fa-411e-8d67-4d6245a0b550.PNG">
 
-----------------
4- Installer l'application Frontend.

    Pour installer l'application frontend, ouvrez un nouveau terminal, cette fois-ci rendez-vous dans le dossier

    (l'emplacementChoisi)/GroupomaniaReact-main/groupomania_front

    Executez la commande:

    npm install

    L'installation des différentes dépendances de l'application frontend s'opèrera.
-----------------
5- Lancer l'application Frontend.

    Comme pour l'application backend, une fois les dépendances installées, dans le dossier 

    GroupomaniaReact-main/groupomania_front

    Executez dans votre terminal la commande

    npm run start

    Si les précédentes étapes ont correctement fonctionné, le terminal affichera le message suivant:

   
   
 <img width="309" alt="front" src="https://user-images.githubusercontent.com/77368808/179433115-840d419a-194d-4cff-832d-48ffbeeb559a.PNG">


.Un onglet devrait s'ouvrir dans votre navigateur, et vous mener directement sur la page d'accueil du site. 
Si vous avez le message dans le terminal, mais qu'aucun onglet ni fenêtre s'ouvre automatiquement,
rendez-vous manuellement à l'adresse http://localhost:3000 dans votre navigateur.

<img width="844" alt="localhost" src="https://user-images.githubusercontent.com/77368808/179433944-b27d956f-f423-4cfa-8755-37766e51961a.png">

-----------------
6- Vous pouvez normalement profiter de l'application dans son ensemble.

    En cas de problèmes rencontrés lors de l'installation ou de la manipulation du site, 
    je suis joignable par mail:moezzaidoun21@gmail.com 


__:copyright: Zaidoun Moez - 2022__
