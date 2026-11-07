# Pokédex React

## Présentation du projet

Cadre : Formation DWWM. Ce projet a été réalisé dans le cadre d'un apprentissage de React avec TypeScript.

L'objectif est de créer un petit Pokédex permettant d'afficher différents Pokémon et de choisir lequel afficher grâce à des boutons.

Le projet a été construit petit à petit, en ajoutant progressivement de nouvelles notions : création de composants, props, state, affichage avec `map()`, partage du state entre composants, événements et CSS Modules.

Pour cela, il a été nécessaire d'avancer étape par étape à travers différentes branches : main, components.1, components.2, props.1, props.2, state.1, rendering-list.1, css, state.2 et enfin events.1.

## Objectifs pédagogiques

Ce projet permet de travailler les notions suivantes :

- démarrer un projet React avec Vite;
- créer plusieurs composants React;
- utiliser des props pour transmettre des données;
- utiliser `useState` pour modifier l'affichage;
- afficher une liste d'éléments avec `map()`;
- comprendre l'utilité de `key` dans une liste rendue;
- partager un state entre `App` et un composant enfant;
- transmettre une fonction comme `setPokemonName` dans les props;
- utiliser les événements comme `onClick`;
- comprendre quand utiliser ou ne pas utiliser `useEffect`;
- utiliser TypeScript avec React;
- utiliser les CSS Modules;
- appliquer un style différent selon le Pokémon affiché.

## Fonctionnalités

L'application permet :

- d'afficher un Pokémon ;
- d'afficher son nom et son image lorsqu'elle est disponible;
- d'afficher `???` lorsqu'aucune image n'est disponible;
- de choisir entre Bulbasaur, Charmander, Squirtle, Pikachu et Mew;
- de générer les boutons automatiquement grâce à `map()`;
- de changer le Pokémon affiché grâce à `useState`;
- d'utiliser un composant `NavBar` séparé pour la navigation;
- de transmettre `pokemonList` et `setPokemonName` à `NavBar` avec les props;
- d'afficher une alerte `"pika pikachu !!!"` lorsqu'on clique sur Pikachu;
- d'afficher une carte avec une couleur différente selon le Pokémon sélectionné;
- d'utiliser un fichier `PokemonCard.module.css` pour le style de la carte.

## Technologies utilisées

- React
- TypeScript
- Vite
- CSS
- CSS Modules
- npm

## Problèmes ou difficultés rencontrés

- Conversion du JS en TS !
- Erreur de syntaxe entre le `return()` et l'écriture d'une condition ternaire : je mettais encore des `{}` alors qu'elles n'étaient pas nécessaires.
- Difficulté avec la déclaration des props dans une fonction, notamment avec la déstructuration `{ pokemon }`.
- `useState` n'était pas très clair au début, mais le live-coding a beaucoup aidé.
- Au début, je ne comprenais pas vraiment ce qu'était une "rendered list" ni à quoi servait `key`.
- Difficulté à comprendre pourquoi `pokemonList` et `setPokemonName` n'étaient plus accessibles une fois les boutons déplacés dans `NavBar`.
- Oubli de récupérer les props dans `NavBar` alors que leur interface TypeScript avait bien été créée.
- Tentative d'utiliser `useEffect` pour afficher l'alerte de Pikachu alors qu'il suffisait de gérer directement l'événement dans `onClick`.
- Difficulté à limiter la largeur de la carte tout en la gardant centrée, réglée avec une largeur fixe et `margin: 1rem auto`.
