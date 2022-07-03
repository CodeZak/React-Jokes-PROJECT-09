import { useState } from "react";

export default function Joke(props) {
    const [isShown, setIsShown] = useState(false);

    function toggleShown() {
        setIsShown((prevShown) => !prevShown);
    }

    return (
        <div>
            {/*  <h3 style={{display : props.setup ? "block" : "none"}}> setup : {props.setup} </h3> */}
            {props.setup && <h3>setup : {props.setup}</h3>}
            {isShown && <p>Punchline: {props.punchline}</p>}
            <button onClick={toggleShown}> {isShown ? "Hide" : "Show"}  Punchline</button>
            <hr />
        </div>
    );
}
