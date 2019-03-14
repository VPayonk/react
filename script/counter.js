const Counter = React.createClass({
    getInitialState() {
        return (
            number: 0
        );
    },

    handlePlus() {
        this.setState({
            number: this.state.number + 1
        });
    },

    handleMinus() {
        this.setState({
            number: this.state.number - 1
        });
    },


    render() {
        return (
            <div>
                <button onClick={this.handleMinus}>-</button>
                <span>{ this.state.number }</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        );
    }
});

ReactDOM.render(
    <Counter />,
document.getElementById('root')
);
