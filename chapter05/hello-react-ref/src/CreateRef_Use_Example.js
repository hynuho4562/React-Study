import React, { Component } from 'react';

class CreateRef_Use_Example extends Component {

    // createRef를 사용하여 ref를 만들려면 우선 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아 주어야 한다.
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.input} />
            </div>
        );
    }
}

export default CreateRef_Use_Example;