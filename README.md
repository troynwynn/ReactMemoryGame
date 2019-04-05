# REACT MEMORY GAME: MARCH MADNESS EDITION

[Go to app](https://troynwynn.github.io/ReactMemoryGame/)

## Instructions
#### Click each image to raise your score, but DON'T forget which mascots you've clicked or your score will reset

## Game Design
* The application should render different images (of your choice) to the screen. Each image should listen for click events.

* The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

* Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

#### Components

* *Navbar* - holds the following conditional operations:
    1. "Click game to begin" list item that changes to (2) once the *gameStarted* state turns to true
    2. "You guessed correctly" / "You guessed correctly" list item that changes class based on the *gameOver* state
    3. *Score* component changed based on the *gameOver* state toggling between true and false, increments based on *ClickCard* addClick functionality
 
 * *Header* - contains the game header, no state dependencies
 
 * *Wrapper* - contains the *ClickCard* component passed through as its children, changes class to show "shake" animation as the *gameOver* state toggles between true and false
 
 * *ClickCard* - contains the images that rerender as the user chooses an un-clicked images
 
  * *Footer* - contains the game footer, no state dependencies

## Deployment
* This app was deployed using github-pages. The deployed brach can be found [here](https://github.com/troynwynn/ReactMemoryGame/tree/gh-pages)
* Instructions on how to deploy to github-pages can be found [here](https://github.com/gitname/react-gh-pages)

## Required packages
* [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html)

## Folder Tree

```
├── node_modules
├── package-lock.json
├── package.json
├── public
    ├── assets
        ├── favicon.ico
        ├── images
        ├── index.html
        └── manifest.json

├── README.md
└──  src
    ├── App.css
    ├── App.js
    ├── cards.json
    ├── components
        ├── ClickCard
        ├── Footer
        ├── Header
        ├── Navbar
        ├── Score
        ├── Wrapper
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── style.css


```
