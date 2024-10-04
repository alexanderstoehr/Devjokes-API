import {JokeButtonStyled} from "../styles/globalStyles.js";
import {useState} from "react";

export default function JokeButton({joke}) {

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

    /*console.log(pickRandomItem(buttonColors));*/

    const handleClick = () => {
        setButtonColor(pickRandomItem(buttonColors, buttonColor));
        setButtonText(pickRandomItem(buttonTexts, buttonText));
        joke();

    }

    const [buttonColor, setButtonColor] = useState("--color-purple");
    const [buttonText, setButtonText] = useState("Get a Joke");


    return (
        <JokeButtonStyled onClick={() => handleClick()} color={buttonColor}>{buttonText}</JokeButtonStyled>
    );
}