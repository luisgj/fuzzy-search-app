import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap'

const Transaction = (props) => {
    return (
        <Grid>
		  <Row className="show-grid Transaction-row">
		    <Col xs={4} className="no-padding">
		    	<h4 className="Transaction-column">{props.amount}</h4>
		    </Col>
		    <Col xs={4} className="no-padding">
		    	<h4 className="Transaction-column">{props.date}</h4>
		    </Col>
		    <Col xs={4} className="no-padding">
		    	<h4 className="Transaction-column">{props.card_last_four}</h4>
		    </Col>
		  </Row>
		</Grid> 
    );
};

export default Transaction;
