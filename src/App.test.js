import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FuzzySearch from './scripts/FuzzySearch'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should return search match', () => {
	const transaction = { amount: "1.00", date: '17-02-2018T18:34', card_last_four: '1669' };
	const needle = ":34";
	expect(FuzzySearch.searchThrough(transaction,needle)).toBe(true);
});

it('should not return search match', () => {
	const transaction = { amount: "1.00", date: '17-02-2018T18:34', card_last_four: '1669' };
	const needle = "99";
	expect(FuzzySearch.searchThrough(transaction,needle)).toBe(false);
});