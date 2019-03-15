const Counter = React.createClass({
    getInitialState() {
        return {
           num: 0
        }
    },

    handlePlus() {
        this.setState({
            num: this.state.num + 2
        });
    },

    handleMinus() {
        this.setState({
            num: this.state.num - 2
        });
    },


    render() {
        const { num } = this.state;
        return (
            <div>
                <button onClick={this.handleMinus}>-</button>
                <span>{num}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        );
    }
});

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
);
