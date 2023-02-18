import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = () => {
    const [advice, setAdvice] = useState('');

    useEffect(() => {

        //O useEffect é usado para se sincronizar com recursos externos.
        // Aqui estamos usando para buscar um conselho aleatório quando o componente é montado.

        const fetchAdvice = async () => {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            setAdvice(data.slip.advice);
        };
        fetchAdvice();
    }, []);

    //Busca a função "dice" quando o botão é clicado.
    //Busca conselho aleatório e define como o estado do conselho atual do componente.

    const handleDiceClick = async () => {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdvice(data.slip.advice);
    };

    // const date = new Date();
    //const today = date.getDate(); Aqui fiz a opção para pegar o dia atual do mês, se fosse um site diário

    const randomAdviceNumber = Math.floor(Math.random() * 100); //Gera um número aleatório entre 0 e 99 e arredonda para o número inteiro mais próximo. O número resultante é atribuído à variável randomAdviceNumber.
    // Esta é a função de renderização do componente. Ele retorna o JSX que é exibido na página.

    return (<>
        <div className='mySocial'><a href='https://github.com/JhenifferCorreia'>Jhenzaster</a></div>
        <div className="card">
            <p className="advice">ADVICE #{randomAdviceNumber}</p>
            <h1 className="quote">"{advice}"</h1>
            <img className='divisor' src="./images/pattern-divider-desktop.svg" alt="divisor image" />
            <source media="(max-width: 375px)" srcset="./images/pattern-divider-mobile.svg" alt="divisor image"></source>
            <div>
                <button className="dice" onClick={handleDiceClick}>
                    <img src="./images/icon-dice.svg" alt="dice icon" />
                </button>
            </div>
        </div>
    </>
    );
};

export default Card;
