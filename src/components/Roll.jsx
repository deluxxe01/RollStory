import React, { useState } from "react"; //usar a sintaxe JSX 
import './Roll.css'

function Roll() {
    //CRIAÇÃO DE ESTADOS
    const [emoji, setEmoji] = useState('Clique aqui'); //função setEmoji para atualizar o valor do emoji
    const [usados, setUsados] = useState([]);  // Adiciona o estado para os usados
    const emojis = ['🤣', '❤', '😍', '😜']; // arrey para sortear emoji

    function sortear() {
        //FUNÇÃO SORTEAR
        let n = Math.floor(Math.random() * emojis.length); //Gerar um numero aleatorio no comprimento do arrey 
        const emojiSorteado = emojis[n];// valor do emoji é atualizado com um valor do arrey emojis 
        setEmoji(emojiSorteado); // atualizar estado emoji com o novo valor do emojiSorteado fazendo com que mude a interface dobotão

        setUsados([...usados, emojiSorteado]); //adiciona o emoji sorteado à lista de usados
    }

    return (
        <div className="container-Roll">
            <button onClick={sortear}>{emoji}</button>
        </div>
    );
}

export default Roll;