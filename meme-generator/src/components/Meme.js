import React from "react";
import memesData from "./memesData.js"

export default function Meme() {

    const [memeText, setMemeText] = React.useState({topText: "", bottomText: ""})

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function getMeme() {
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        console.log(url)
        setMeme(prevMeme => ({
             ...prevMeme,
             randomImage: url
        }))
    }

    function handleText(event){
        const {name, value} = event.target
        setMemeText(prevText => {
            return {
                ...prevText,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleText}
                    value={memeText.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleText}
                    value={memeText.bottomText}
                />
                <button
                    onClick={getMeme} 
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button >
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt="meme"/>
                <h2 className="meme--text top">{memeText.topText}</h2>
                <h2 className="meme--text bottom">{memeText.bottomText}</h2>
            </div>
        </main>
    )
}