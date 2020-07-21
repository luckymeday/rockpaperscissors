import React, { Component } from 'react'
import './App.css';
import ChoiceCard from "./components/ChoiceCard";

const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      winnerPerson: true
    }
  }
  callHey = () => {
    this.setState({ winnerPerson: !this.state.winnerPerson })
  }
  render() {
    return (
      <div className="App">
        <ChoiceCard title="You" winner={this.state.winnerPerson} imgURL={choices.rock} />
        <button onClick={() => this.callHey()}>Hey</button>
        <ChoiceCard title="Computer" winner={this.state.winnerPerson} imgURL={choices.paper} />
      </div >
    )
  }
}
