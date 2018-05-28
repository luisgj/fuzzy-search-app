import React, {Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap'
import Transaction from './Transaction'
import '../css/Transaction.css'


class TransactionList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="TransactionList-container">
	            <Grid>
				  <Row className="show-grid">
				    <Col xs={4} className="no-padding">
				    	<h4 className="Transaction-header-row">Amount</h4>
				    </Col>
				    <Col xs={4} className="no-padding">
				    	<h4 className="Transaction-header-row">Date</h4>
				    </Col>
				    <Col xs={4} className="no-padding">
				    	<h4 className="Transaction-header-row">Last 4 digits</h4>
				    </Col>
				  </Row>
				</Grid> 
				{this.props.transactions.map((transaction,index) => <Transaction {...transaction} key={index} />)}
        	</div>
        );
    }
}

export default TransactionList;
