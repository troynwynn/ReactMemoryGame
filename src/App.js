import React from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import Footer from "./components/Footer";
import ClickCard from "./components/ClickCard";
import cards from "./cards.json";
import "./style.css";


class App extends React.Component {

  state = { 
    cards: cards,
    score: 0,
    highScore: 0,
    gameOver: false,
    gameStarted: false,
    winner: false
  }

  runGame = () => {
    this.setState({gameOver: false});
  }

  gameWon = () => {
      this.setState({winner: true})
      this.resetGame();

  }
  

  resetGame = (id) => {

    this.state.cards.forEach(card => {
      card.clicks = 0;
    });

    this.setState({score: 0});
    this.setState({gameOver: true });
    this.setState({winner:false})
  }

  setHighScore = () => {
    if (this.state.score >= this.state.highScore) {
      this.setState({highScore: this.state.score});
    }
  }

  addClick = id => {
    //switch for "Click Game To Begin !" => "You guessed (in)correctly"
    this.setState({gameStarted: true})

    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].clicks === 0) {
          this.runGame();
          cards[i].clicks = cards[i].clicks + 1;
          this.setState({score : this.state.score + 1}, function(){
            this.setHighScore();
          });
          if (this.state.score === 12) {
            this.gameWon();
          }
          this.shuffleArray();
          return true; 

        } else {
          this.resetGame();
        }
      }
    });
  }

  shuffleArray = () => {
    this.state.cards.sort(() => 0.5 - Math.random());
  }

  render() {
    return (
      <div>
        <nav className="navbar">
        <ul>
          <li className="brand"><a href="/">React Memory Game</a></li>
          {!this.state.gameStarted ? (
            <li className=""> Click image to begin !</li> 
          ) : (
            <li className={this.state.gameOver ? "shake incorrect" : "correct"}> 
              {this.state.gameOver ? `You guessed incorrectly` : `You guessed correctly`} 
            </li>
          )}

          <Score 
            score={this.state.score} 
            highScore={this.state.highScore} 
            increment={this.handleIncrement}
          />
        </ul>
      </nav>
      <Header/>

        <Wrapper shake={this.state.gameOver}>

          {this.state.cards.map(card => 
            <ClickCard 
              card={card} 
              addClick={this.addClick} 
              resetGame={this.resetGame}
            />
          )}
        </Wrapper>
        <Footer/>
      </div>
    );
  }
}


export default App;