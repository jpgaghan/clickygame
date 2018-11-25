import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron"
import Footer from "./components/Footer";
import Friends from "./friends.json";
import Card from "./components/FriendCard";
import _ from "lodash";
// import Image from "./components/Image"
// import Container from ".components/Container"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    Friends,
    score: 0,
    topscore: 0,
    headline: "Click Away"
  };

  correctGuess = (clickedid, Friends, score, topscore) => {
    Friends = Friends.map(({id, clickstatus, image}) => {if(clickedid === id) { return {id, clickstatus: true, image}} else { return {id, clickstatus, image}}});
    switch(true) {
      case score === 15:
        this.setState({
          Friends,
          score: 0,
          topscore: 0,
          headline: "You Won Congrats!"
        })
        break;
      case score >= topscore:
      console.log(score, topscore)
        this.setState({
          Friends,
          score: score+=1,
          topscore: topscore+=1,
          headline: "Click Away"
        })
        break;
      default:
        this.setState({
          Friends,
          score: score+=1,
          topscore,
          headline: "Click Away"
        })
  };
};

  incorrectGuess = (Friends, score, topscore) => {
    Friends = Friends.map(({id, clickstatus, image}) => {if(clickstatus) { return {id, clickstatus: false, image}} else { return {id, clickstatus, image}}});
    console.log(Friends)
    this.setState({
      Friends,
      score: 0,
      topscore,
      headline: "You Lost. Try Again!"
    })
  };

  cardClick = (id, status) => {
    console.log(status);
    let {Friends, score, topscore} = this.state;
    status ?  this.incorrectGuess(Friends, score, topscore) : this.correctGuess(id, Friends, score, topscore)
  };

  render() {
    return(
      <Wrapper>
        <Header score={this.state.score} topscore={this.state.topscore}/>
        <Jumbotron headline={this.state.headline}/>
          <div class = "container">
            {_.shuffle(this.state.Friends).map(({id, image, clickstatus}) => <Card id={id} image={image} clickstatus ={clickstatus} onClick={() => this.cardClick(id, clickstatus)}/>)}
          </div>
        <Footer />
      </Wrapper>
      )
  } 
}

export default App;

