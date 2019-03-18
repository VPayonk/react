const Timer = React.createClass({
    getInitialState() {
        return {
           time: 0
        }
    },
    componentDidMount() {
      this.ttimer = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000);
    },

    componentWillUnmount() {
        clearInterval( this.ttimer);
    },
    //
    // tick() {
    //   this.setState({ time: this.state.time + 1 })
    // },

    render() {
        const { time } = this.state;
        return (
            <div>
                {time}
            </div>
        );
    }
});

const Component = React.createClass({
    getInitialState() {
        return {
            mounted: false
        };
    },

    handleMountOrUnmount() {
        this.setState({ mounted: !this.state.mounted });
    },

   render() {
       return (
           <div>
               {
                   this.state.mounted
                       ? <Timer />
                       : false
               }

               <button className="button" onClick={this.handleMountOrUnmount}>
                   {this.state.mounted ? 'Stop Timer' : 'Start Timer'}
               </button>
           </div>
       )
   }
});

ReactDOM.render(
    <Component />,
    document.getElementById('root')
);
