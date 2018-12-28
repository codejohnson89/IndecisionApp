import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    
    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.option.value = "";
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p className="error">{this.state.error}</p>}
            <form className="add-option" onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button className="btn button">Add Option</button>
            </form>
            </div>
        )
    }
}