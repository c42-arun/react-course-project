class Counter extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        // initialize internal component state object
        this.state = {
            counter: props.counter
        };
    }

    handleAddOne() {
        // setState updates state with new values and automatically refreshes DOM
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        });
    }

    handleMinusOne() {
        this.setState(prevState => {
            return {
                counter: prevState.counter - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                counter: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    counter: 10
}

ReactDOM.render(<Counter />, document.getElementById('app'));