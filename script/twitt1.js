const TWEETS = [
    {
        id: 1,
        author: 'Name',
        text: 'text text text text text text text text text text text text text',
        img: 'img/img1.png',
        avatar: 'img/img2.jpg',
        likes: 255,
        retweet: 122
    },
    {
        id: 2,
        author: 'Name',
        text: 'text text text text text text text text text text text text text',
        img: '',
        avatar: 'img/img2.jpg',
        likes: 255,
        retweet: 122
    },
    {
        id: 3,
        author: 'Name',
        text: 'text text text text text text text text text text text text text',
        img: 'img/img1.png',
        avatar: 'img/img2.jpg',
        likes: 0,
        retweet: 0
    },
]

function shuffle(arr) {
    const result = [...arr];
    result.sort(() => 0.5 - Math.random());
    return result;
}


const Tweet = React.createClass({
    render() {
        const {
            avatar,
            author,
            text,
            img,
            retweet,
            likes
        } = this.props;

        return (
            <div>
                <img
                    src={avatar}
                    alt={author}
                    width={200}
                    height={200}
                />
                <a
                    href={``}
                    target='_blank'
                >
                    @{author}
                </a>
                <p>{text}</p>

                {
                    img
                    ? <img
                        src={img}
                        alt={text}
                        width={500}
                        height={250}
                    />
                    : null
                }

                <br />
                likes: {likes || null} retweet: {retweet || null}
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
});

const Feed = React.createClass({
    getInitialState() {
        return {
            tweets: []
        }
    },

    handleAdd() {
        const { tweets } = this.state;

        if(tweets.length < TWEETS.length) {
            this.setState({
                tweets: [
                    ...tweets,
                    TWEETS[tweets.length],
                ]
            });
        }
    },

    handleShuffle() {
        this.setState({
            tweets: shuffle(this.state.tweets)
        });
    },

    render() {
        return (
            <div>
                <button onClick={this.handleShuffle}>
                    Shuffle
                </button>
                <button onClick={this.handleAdd}>
                    Add
                </button>
                {
                    this.state.tweets.map(tweet =>
                        <Tweet
                            key = {tweet.id}
                            author = {tweet.author}
                            text = {tweet.text}
                            img = {tweet.img}
                            avatar = {tweet.avatar}
                            likes = {tweet.likes}
                            retweet = {tweet.retweet}
                        />

                    )
                }
            </div>
        );
    }
});

ReactDOM.render(
    <Feed />,
document.getElementById('root')
);
