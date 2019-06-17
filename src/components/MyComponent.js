import React, {Component} from 'react';
import './MyComponent.css';
import axios from 'axios';
class MyComponent extends Component {
    componentDidMount(){
        this.fetchData();
        };
        fetchData(){
        axios.get("https://jsonplaceholder.typicode.com/todos/"+ this.state.value).then((result) => {
        let elements =[... this.state.elements];
        elements.push(result.data);
        let newState = {elements: elements};
        console.log(elements);
        this.setState(newState);
        });
    }
    state = {
    value: 1,
    elements: []
    };
    incrementValue = () => {
        console.log("increment value clicked");
        let value = this.state.value;
        value = value + 1;
        let newState = {value: value};
        this.setState(newState);
        this.fetchData();
    };

    render(){
        let myStyle = {fontSize: "10px"};
        let rowElements = this.state.elements.map((element,index) => {
            return<tr key={index}>
                <td>{element.id}</td>
                <td>{element.title}</td>
            </tr>;
            });
        return (
            <div className= "MyClass" style={myStyle}>
                this is my component
                {this.props.name}
                and my age is {this.props.age}
                and --- {this.props.children} ---
                and my value is {this.state.value}
                <button onClick={ () => this.incrementValue()}>increment value </button>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    <tbody>
                    {rowElements}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default MyComponent;