import React, { useState } from "react";
import './Roll.css';

function Roll() {
    // CRIAÇÃO DE ESTADOS
    const [imagem, setImagem] = useState('Clique aqui'); // Função setImagem para atualizar a imagem
    const [usadas, setUsadas] = useState([]);  // Adiciona o estado para as imagens usadas
    const [imagensDisponiveis, setImagensDisponiveis] = useState([
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-0563.png', // Imagem 1
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-2784.png', // Imagem 2
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-1403.png', // Imagem 3
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-3258.png', // Imagem 3
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-0156.png', // Imagem 3
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-1154.png', // Imagem 3
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-2873.png', // Imagem 3
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-1184.png', 
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-3048.png',
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-2938.png',
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-0112.png',
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-3385.png',
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-3468.png',
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-2764.png', 
        'https://www.imagenspng.com.br/wp-content/uploads/2022/11/emoji-png-0850.png'  // Imagem 4
    ]); // Array com as URLs das imagens para sorteio

    function sortear() {
        if (imagensDisponiveis.length === 0) {
            alert('Todas as imagens foram sorteadas!');
            return; // Não faz nada se todas as imagens já foram sorteadas
        }

        // FUNÇÃO SORTEAR
        let n = Math.floor(Math.random() * imagensDisponiveis.length); // Gerar um número aleatório no comprimento do array 
        const imagemSorteada = imagensDisponiveis[n]; // Valor da imagem é atualizado com um valor do array imagensDisponiveis
        setImagem(imagemSorteada); // Atualiza o estado imagem com a nova imagem sorteada

        // Remove a imagem sorteada do array de imagens disponíveis
        const novasImagensDisponiveis = imagensDisponiveis.filter((img, index) => index !== n);
        setImagensDisponiveis(novasImagensDisponiveis); // Atualiza as imagens disponíveis

        setUsadas([...usadas, imagemSorteada]); // Adiciona a imagem sorteada à lista de usadas
    }

    return (
        <div className="container-Roll">
            <button onClick={sortear}>
                <img src={imagem} alt="Imagem sorteada" />
            </button>

            <div className="container-Sorteados">
                {/* Exibe todas as imagens sorteadas */}
                {usadas.map((img, index) => (
                    <img key={index} src={img} alt={`Imagem sorteada ${index}`} className="imagem" />
                ))}
            </div>
        </div>
    );
}

export default Roll;