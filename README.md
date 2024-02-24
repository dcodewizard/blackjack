# Blackjack Front-End - Next

This is a Next application that allows users to play the blackjack game. It is built using Next, a TypeScript library for building user interfaces.

## Rules

With the Blackjack Game, you can perform the following actions:

1. The game consists of two players: You vs The House (the computer), where the goal is to beat the House’s hand, without going over 21.
2. A card contains a “point” value equivalent to it’s number (the 3 of club is worth 3 points...the 9 of spades is worth 9 points...etc etc). Face cards (Jack, Queen, King) are worth TEN points, and the Ace card is either worth 1 or 11, whichever is most helpful for the player’s hand. For example:

- If the player has a Jack and a Queen, and then draws an Ace, the Ace will be worth 1 point to add up to 21
- If the player has a Queen and an Ace, the Ace will be worth 11 points to add up to 21
- If the player has a 2 and an Ace, the Ace will be worth 11 points to get closer to 21
- If the player has a 2 and a 5, and then draws an Ace, the Ace will be worth 11 points to get closer to 21. If the player then draws a 10, the Ace will now be worth 1 point

3. The House is initially dealt TWO face up cards and no more! This isn’t part of the regular rules for Blackjack, but it is for us. In other words, the House will always only have 2 cards.
4. You are also initially dealt two face up cards, but you have one of the following options:

- Hit: You are dealt one more card to add to your point value. For this project, the player may hit as many times as they like, until their card value exceeds 21, at which point the game ends in an automatic loss
- Stand: Ends the round (for the purposes of this project, this will end the game)

## How to Start

#### ( **Important** : React Version should be 18.2.0)

To get started with the Blackjack game, please follow the instructions below:

1. Clone the project or download the zip file
2. Navigate to the project directory using your command prompt or terminal.
3. Run the command `npm install` to install all necessary dependencies.

```ssh
npm install
```

or

```ssh
npm i
```

4. Run the command npm start to start the server.

```ssh
npm run dev
```

5. Once the server is running, you can access the application by navigating to http://localhost:3000 in your web browser.

## Tech stack

The tech stack used to build the React Frontend is:

1. Next - a JavaScript/Typescript library for building user interfaces
2. TailwindCSS - a CSS library for styling components
3. Axios - a library for fetching data from APIs
4. React Toastify - a library to show toaster messages
5. Lucide React - a library for icons
