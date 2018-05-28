## Fuzzy search APP

This is a simple React.js application bulit as coding challenge with the following requirements:

Implement a fuzzy search algorithm for transactions with the following requirements:
Have a web page with one input field where a user can enter text, and a displayed list of transactions
Display the full list of transactions when the input field is empty
Update the displayed list of transactions as the user types in the input field (only show transactions that match the fuzzy search criteria)

 - Show the transactions in order by date
 - Fuzzy search must account for all transaction object properties (amount, date, card_last_four)
 - You may use any front-end library (we currently use ReactJS) for the design/architecture of the application, but you may not use a library for the actual search algorithm
 - You can hardcode the transaction data found below and do not need to fetch it from a server
 - Unit tests are encouraged

## What I did

- Bootstrapped a simple create-react-app application to handle build config and transpiling with babel out of the box

- Used styles, logos, fonts and assets from your website at clip.mx

- Implemented a Fuzzy Search module that searches through each object property, and compares each character of a string(needle) to match if the same characters are contained in another for each property value.

- The algorithm separates the date of each object by components to match them separately and tighten the search.

- Created two simple tests that validate the functionality of the fuzzy search module.

## RUN THE PROJECT

 - Install Npm

 - Clone this repository:
 ```
 git clone https://github.com/luisgj/fuzzy-search-app.git
 ```
- Run the project:
```
npm start
```

- Go to localhost:3000

## RUN TESTS

With the project installed. Just run:
```
npm test
```

Check it out!