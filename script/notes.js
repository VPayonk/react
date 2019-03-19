const DEFAULT_COLOR = 'yellow';

const Note = React.createClass({
    handleDelete() {
      this.props.onDelete(this.props.id);
    },

    render() {
        const { text, id, onDelete } = this.props;
        return (
            <div style={{backgroundColor: DEFAULT_COLOR, width: 240, marginBottom: 10}}>
                {id}:{text}
                <button onClick={this.handleDelete}>X</button>
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
    },

    handleNoteAdd() {
        const newNote = {
            text: this.state.text,
            id: Date.now(),
            color: DEFAULT_COLOR
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
    componentDidMount() {
        this.msnry = new Masonry(this.grid, {
            columnWidth: 240,
            gutter: 10,
            isFitWidth: true
        })
    },
    componentDidUpdate(prevProps) {
        if(prevProps.notes !== this.props.notes) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },

    render() {
        const { notes, onNoteDelete } = this.props;

        return (
            <div ref={c => this.grid = c}>
                {
                    notes.map(note =>
                        <Note
                            key={note.id}
                            id={note.id}
                            text={note.text}
                            color={note.color}
                            onDelete={onNoteDelete}
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
            notes: []
        }
    },

    componentDidMount() {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));

        if(savedNotes) {
            this.setState({
                notes: savedNotes
            })
        }
    },

    componentDidUpdate(prevProps, prevState) {
        if(prevState.note !== this.state.notes) {
            this.saveToLocalStorage();
        }
    },

    handleNoteAdd(newNote) {
        this.setState({
            notes: [newNote, ... this.state.notes]
        });
    },

    handleNoteDelete(noteId) {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        });
    },

    saveToLocalStorage() {
        const notes = JSON.stringify(this.state.notes);

        localStorage.setItem('notes',notes);
    },

    render() {
        return (
            <div>
                <h2>NoteApp</h2>

                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NoteGrid
                    notes={this.state.notes}
                    onNoteDelete={this.handleNoteDelete}
                />
            </div>
        );
    }
});


ReactDOM.render(
    <NoteApp />,
    document.getElementById('root')
);
