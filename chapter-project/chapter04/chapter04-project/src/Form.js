import React, { Component } from 'react';

class Form extends Component {

    state = {
        inputType: 'number',
        numSetValue1: 0,
        numSetValue2: 0
    }

    handleOnChange() {
        this.setState({
            numSetValue1Result: this.state.numSetValue1,
            numSetValue2Result: this.state.numSetValue2
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type={this.state.inputType} 
                        onChange={this.handleOnChange} />

                    <input
                        type={this.state.inputType}
                        onChange={this.handleOnChange} />
                                    
                    <button onClick={ alert( this === 0 ? this.state.numSetValue1 + this.state.numSetValue2 : 0 ) }  />

                </form>            
            </div>
        );
    }
}

export default Form;