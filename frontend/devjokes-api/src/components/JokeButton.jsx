import {JokeButtonStyled} from "../styles/globalStyles.js";
import {useState} from "react";

export default function JokeButton() {

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


    const pickRandomItem = (arr, currentItem) => {
        let newItem
        do {
            const randomIndex = Math.floor(Math.random() * arr.length);
            newItem = arr[randomIndex]
        } while (newItem === currentItem)
        return newItem
    }

    console.log(pickRandomItem(buttonColors));

    const handleClick = () => {
        setButtonColor(pickRandomItem(buttonColors, buttonColor));
        setButtonText(pickRandomItem(buttonTexts, buttonText));

    }

    const [buttonColor, setButtonColor] = useState(pickRandomItem(buttonColors));
    const [buttonText, setButtonText] = useState(pickRandomItem(buttonTexts));


    return (
        <JokeButtonStyled onClick={() => handleClick()} color={buttonColor}>{buttonText}</JokeButtonStyled>
    );
}