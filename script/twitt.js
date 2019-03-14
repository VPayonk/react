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

const Tweet = React.createClass({
    render() {
        const {
            avatar,
            author,
            text,
            img,
            retweet,
            likes,
            key
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
                    // img &&
                    // <img
                    //     src={img}
                    //     alt={text}
                    //     width={500}
                    //     height={250}
                    // />
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
    render() {
        // const tweets = TWEETS.map(tweet =>{
        //     return (
        //         <Tweet
        //             author = {tweet.author}
        //             text = {tweet.text}
        //             img = {tweet.img}
        //             avatar = {tweet.avatar}
        //             likes = {tweet.likes}
        //             retweet = {tweet.retweet}
        //         />
        //     )
        // });
        //
        // console.log(tweets)
        return (
            <div>
                {
                    TWEETS.map(tweet =>
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
