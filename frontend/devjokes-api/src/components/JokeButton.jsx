import {JokeButtonStyled} from "../styles/globalStyles.js";
import {useState} from "react";

export default function JokeButton() {

    const [buttonColor, setButtonColor] = useState();


    const buttonColors = [
        "--color-pink",
        "--color-purple",
        "--color-light-blue",
        "--color-dark-blue",
    ]

    const buttonTexts = [
        "Get a Joke",
        "Another Joke",
        "I need a laugh",
        "Hit me with a joke",
        "Maybe a funny one?",
        "Try a dirty one"
    ]

    const pickRandomItem = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex]
    }

    console.log(pickRandomItem(buttonColors));

    const handleClick = () => {
        let newColor
        do {
            newColor = pickRandomItem(buttonColors)
        } while (newColor === buttonColor)
        setButtonColor(newColor);
    }

    return (
        <JokeButtonStyled onClick={() => handleClick()} color={pickRandomItem(buttonColors)}>Get a Joke</JokeButtonStyled>
    );
}