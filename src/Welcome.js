import React, { Component } from 'react';

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            count : 0
        }
    }

    addOne() {
        this.setState({
            count: this.state.count + 1
        })
    }
    removeOne() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.props.name} !</h1>
                <p>Mon compteur : {this.state.count}</p>
                <button onClick={() => this.addOne()}> + 1 </button>
                <button onClick={this.removeOne.bind(this)}> - 1 </button>
            </div>
        );
    }

}

export default Welcome;