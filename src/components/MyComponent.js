import React, {Component} from 'react';
class MyComponent extends Component {
    state = {
    value: 0
    };
    incrementValue = () => {
        console.log("increment value clicked");
        let value = this.state.value;
        value = value + 1;
        let newState = {value: value};
        this.setState(newState);
    };

    render(){
        return (
            <div>
                this is my component
                {this.props.name}
                and my age is {this.props.age}
                and --- {this.props.children} ---
                and my value is {this.state.value}
                <button onClick={ () => this.incrementValue()}>increment value </button>
            </div>
        );
    }
}
export default MyComponent;