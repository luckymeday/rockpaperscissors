import React, { useState } from 'react';
import './App.css';
import ChoiceCard from "./components/ChoiceCard";

const CHOICES = {
    rock: {
        name: 'rock',
        url: "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
    },
    paper: {
        name: 'paper',
        url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
    },
    scissors: {
        name: 'scissors',
        url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
    }
}

export const getRoundOutcome = (user, computer) => {
    let result;
    // console.log(user, computer)
    if (user === "rock") {
        result = computer === "Scissor" ? "Victory" : "Defeat"
    }
    if (user === "paper") {
        result = computer === "rock" ? "Victory" : "Defeat"
    }
    if (user === "scissors") {
        result = computer === "paper" ? "Victory" : "Defeat"
    }
    if (user === computer) result = "Tie game";
    return result;
}

export const getRandomChoice = () => {
    let choiceNames = Object.keys(CHOICES);//  오브젝트 키값만 떼다가 어레이로 만들어 준다 
    //console.log("what?", choiceNames)

    let randomIndex = Math.floor(Math.random() * 3);
    //console.log(randomIndex)

    let final = choiceNames[randomIndex]// 인덱스번호와 어레이아이템 매치 
    //console.log("ffff", final)

    return CHOICES[final]// return 이 있는 함수는 거의 반드시 변수를 할당 해준다 
};

function App() {
    // let [prompt, setGamePromt] = useState('Start')
    const [userChoice, setPlayerChoice] = useState(null);
    const [comChoice, setComputerChoice] = useState(null);
    const [previousWinner, setPreviousWinner] = useState(null);
    const [gameHistory, setGameHistory] = useState([]);

    const onPlayerChoose = playerChoice => {
        console.log('playerChoice:', playerChoice)
        //1. 유저가 뭘 선택했는지 안다 
        let userChoice = CHOICES[playerChoice]

        //2. 컴퓨터가 뭘 선택했는지 안다
        let comChoice = getRandomChoice()
        // console.log("user:", userChocie, "computer", comChoice)

        //3. 누가 이겼는지 안다
        let finalResult = getRoundOutcome(userChoice.name, comChoice.name)

        //4. 유저가 선택한 아이템을 보여준다 (to show which item user chose)
        // console.log("user choice", userChoice)
        setPlayerChoice(userChoice);

        //5. 컴퓨터 선택한 아이템을 보여준다 (to show which item computer chose)
        setComputerChoice(comChoice);

        //6. 결과를 보여준다 (result)
        setPreviousWinner(finalResult);
        // setGamePrompt(finalResult);
        gameHistory.push(finalResult);
        setGameHistory(gameHistory);
    };

    return (
        <div className="App">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-8 themed-grid-col">
                        <ChoiceCard title="Computer" result={previousWinner} imgURL={comChoice && comChoice.url} />
                        <h1>{prompt}</h1>
                        <div className="container">
                            <button className="btn btn-success btn-lg" onClick={() => onPlayerChoose("rock")}>
                                Rock</button>
                            <button className="btn btn-success btn-lg" onClick={() => onPlayerChoose("paper")}>
                                Paper</button>
                            <button className="btn btn-success btn-lg" onClick={() => onPlayerChoose("scissors")}>
                                Scissors</button>
                        </div>
                        <ChoiceCard title="You" result={previousWinner} imgURL={userChoice && userChoice.url} />
                    </div >
                    <div className="col-md-4 themed-grid-col">
                        <h3>History</h3>
                        <ul>
                            {gameHistory.map(result => {
                                return <li>{result}</li>;
                            })}
                        </ul>
                    </div>
                </div >
            </div>
        </div >
    );
}


export default App;


