class Counter extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleAddOne() {
        alert('handleAddOne');
    }

    handleMinusOne() {
        alert('handleMinusOne');
    }

    handleReset() {
        alert('handleReset');
    }

    render() {
        return (
            <div>
                <h1>Counter: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));