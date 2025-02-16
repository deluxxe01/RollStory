import React from "react";
import { useState } from "react";
import './Roll.css'

function Roll() {
    const [emoji, setEmoji] = useState('Clique aqui')
    const emojis = ['🤣', '❤', '😍', '😜'];

    function sortear() {
        let n = Math.floor(Math.random()* emojis.length )
        setEmoji(emojis[n])

        setUsados([...usados, atual])

    }

    return (
        <div className="container-Roll">
            <button onClick={sortear}> {emoji}</button>
            
        </div>
    )
}

export default Roll