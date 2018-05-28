import React, { Component } from 'react';
import Header from './components/Header';
import TransactionList from './components/TransactionList'
import Form from './components/Form'
import FuzzySearch from './scripts/FuzzySearch'
import moment from 'moment'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
     initialTransactions: [
      { amount: "1.00", date: '17-02-2018T18:34', card_last_four: '1669' },
      { amount: "45.00", date: '10-02-2018T02:34', card_last_four: '0110' },
      { amount: "4.69", date: '01-02-2018T02:34', card_last_four: '8488' },
      { amount: "112.98", date: '27-01-2018T12:34', card_last_four: '2544' },
      { amount: "2850.70", date: '27-01-2018T12:34', card_last_four: '4444' },
      { amount: "1111.11", date: '15-01-2018T21:34', card_last_four: '9912' },
      { amount: "0.45", date: '01-12-2017T9:36', card_last_four: '4434' },
      { amount: "95.99", date: '23-11-2017T14:34', card_last_four: '3011' },
      { amount: "7774.32", date: '17-07-2017T03:34', card_last_four: '6051' },
      { amount: "1345.98", date: '22-06-2017T10:33', card_last_four: '0059' }
     ],
     transactions: [],
    };
  }

  componentWillMount = () => {
    this.setState({transactions: this.state.initialTransactions});
  }

  restartTransactions = () => {
    this.setState({
      transactions: this.state.initialTransactions
    });
  }

  fuzzySearch = (needle) => {
    this.setState({
      transactions: this.state.initialTransactions.filter((item) => {
        return FuzzySearch.searchThrough(item,needle);
      })
      .sort((a,b) => {
          const date1 = moment(a.date,'DD-MM-YYYY[T]HH:mm');
          const date2 = moment(b.date,'DD-MM-YYYY[T]HH:mm');
          return date1.isAfter(date2) ? -1 : date1.isBefore(date2) ? 1 : 0;
      })
    });
  }

  render = () => {
    return (
      <div>
        <Header />
        <Form nothing={this.restartTransactions} fuzzySearch={this.fuzzySearch} />
        <TransactionList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
