# QDSO

## Quick Draw Shoot Out

QDSO is a experiment in gaming using blockchains, smart contracts & [ERC-721’s](https://eips.ethereum.org/EIPS/eip-721).



## Rules
It’s pretty simple, kind of like a virtual pictionary. It goes like this:

Six players ante up in to the pot (deposit funds in game contract) where it’s stays until a winner is selected. 

  1. The game starts when six players ante up and sit down. Each player will take a turn drawing. The game will randomly select a word using Chainlinks VRF and give it only to that rounds drawer. 
  2. Guessers will have 20 seconds to guess the drawing, the first to guess wins the round.
  3. After six rounds the player with the most correct guesses wins.

Bounty:
The winner gets their drawing minted into their very own NFTrophy paid for from the pot. Alternatively the winning player could also select one of the other players drawings to mint. This could ruffle some feathers so the game should allow for a duel mode that let's a player challenge another for any of their NFTrophies where both players are given 6 words to draw while the other 4 players divided into two guessing teams for the dueling drawers.

## Concept Design
see [Figma file](https://www.figma.com/file/FUBlKL9Vjra4EqmmfFzZJNg8/qdso?node-id=289%3A81)

[demo](https://qdso.surge.sh/)

[Quick Video of QDSO](https://www.youtube.com/watch?v=QOlD4uq862Q)

Architecture diagram

## Setup and running project
required: Node, Yarn and Git

clone project and terminal into the project directory and run the following commands:
```
yarn install
yarn start
```
in a second terminal window:
```
yarn chain
```
in a third terminal window:
```
yarn deploy
```
