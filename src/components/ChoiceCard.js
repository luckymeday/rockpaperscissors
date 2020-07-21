import React from 'react'
const DEFAULT_IMG =
    "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";

export default function ChoiceCard(props) {

    // props.result 는 상황에 따라 값이 바뀐다
    //1. 카드가 컴퓨터 카드일때, 결과값에 반대로 보여주기
    let result = ''
    if (props.title === "Computer") {
        if (props.result === "Tie game") {
            result = "Tie game!"
        } else if (props.result === "Victory") {
            result = "Defeat"
        } else if (props.result === "Defeat") {
            result = "Victory"
        }
    }
    //2. 카드가 유저면 그냥 보여줘도 댐 
    else {
        result = props.result
    }

    console.log('props:', props)
    return (
        <div className={`choice-card ${result}`}>
            <h1>{props.title}</h1>
            <img src={props.imgURL || DEFAULT_IMG} alt={props.title} />
            <h3>{result}</h3>
        </div>
    )
}

