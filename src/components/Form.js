import React, {Component} from 'react';
import '../css/Form.css'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
    		inputText : ""
        };
    }

    handleChange = (e) => {
    	const value = e.target.value;
    	this.setState({inputText: value});
		if(value === "") {
			this.props.nothing();
		} else {
			this.props.fuzzySearch(value);
		}
    }

    render = () => {
        return (
            <div className="container Form-container">
            	<h1 className="Form-title">Transaction list</h1>
            	<h3 className="Form-label">Filter: </h3>
            	<input value={this.state.inputText} type="text" placeholder="search by amount, date or card digits" className="Form-input" onChange={this.handleChange} />
            </div>
        );
    }
}

export default Form;
