const HelloComponent = React.createClass({
    getInitialState() {
        return {
            name: 'Noname'
        }
    },

    handleChange(e) {
        this.setState({
            name: e.target.value,
        })
    },

    render() {
        return (
            <div>
                <input
                    placeholder='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <h1>Hello {this.state.name}!</h1>
            </div>
        );
    }
});


ReactDOM.render(
    <HelloComponent />,
    document.getElementById('root')
);
