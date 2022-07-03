import Joke from "./joke";

function App() {
    return (
        <div className="container mt-5">
            <Joke
                punchline="Here's a joke without a setup"
            />
            <Joke setup="I invented a new word!" punchline="Plagiarism" />
            <Joke
                setup="Did you hear about the mathematician who’s afraid of negative numbers?"
                punchline="He’ll stop at nothing to avoid them."
            />
            <Joke
                setup="Why do we tell actors to “break a leg?”"
                punchline="Because every play has a cast."
            />
            <Joke
                setup="Helvetica and Times New Roman walk into a bar."
                punchline="“Get out of here!” shouts the bartender. “We don’t serve your type.”"
            />
        </div>
    );
}

export default App;
