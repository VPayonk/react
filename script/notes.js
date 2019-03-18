const DEFOLT_COLOR = 'yellow';

const Note = React.createClass({
    render() {
        const { text, id } = this.props;
        return (
            <div>
                {id}:{text}
            </div>
        );
    }
});

const NoteEditor = React.createClass({
    getInitialState() {
        return {
            text: ''
        }
    },

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
        console.log(this.state.text);
    },

    handleNoteAdd() {
        const newNote = {
            text: this.state.text,
            id: Date.now(),
            color: DEFOLT_COLOR
        };

        this.props.onNoteAdd(newNote);

        this.resetState();
    },

    resetState() {
        this.setState({
            text: ''
        });
    },

    render() {
        return (
            <div>
                <textarea rows={5}
                          placeholder='Enter text'
                          value={this.state.text}
                          onChange={this.handleTextChange}
                />
                {
                    this.state.text &&
                    <button onClick={this.handleNoteAdd}>
                        Add
                    </button>
                }

            </div>
        );
    }
});

const NoteGrid = React.createClass({
    render() {
        const { notes } = this.props;

        return (
            <div>
                {
                    notes.map(note =>
                        <Note
                            key={note.id}
                            id={note.id}
                            text={note.text}
                            color={note.color}
                        />
                    )
                }
            </div>
        );
    }
});

const NoteApp = React.createClass({
    getInitialState() {
        return {
            notes: [
                {id: 1, color: 'yellow', text: 'I`m first notes!'},
                {id: 2, color: 'yellow', text: 'I`m first notes!'}
                ],
        }
    },

    handleNoteAdd(newNote) {
        this.setState({
            notes: [newNote, ... this.state.notes]
        })
    },

    render() {
        return (
            <div>
                <h2>NoteApp</h2>

                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NoteGrid notes={this.state.notes}/>
            </div>
        );
    }
});


ReactDOM.render(
    <NoteApp />,
    document.getElementById('root')
);
