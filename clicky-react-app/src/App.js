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
    topscore: 0
  };

  correctGuess = (clickedid, Friends, score, topscore) => {
    console.log(Friends)
    Friends = Friends.map(({id, clickstatus, image}) => {if(clickedid === id) { return {id, clickstatus: true, image}} else { return {id, clickstatus, image}}});
    console.log(Friends)
    if (topscore <= score) {
    this.setState({
      Friends,
      score: score+=1,
      topscore: topscore+=1
    })
  } else {
    this.setState({
      Friends,
      score: score+=1,
      topscore
    })
  }
  };

  incorrectGuess = (Friends, score, topscore) => {
    Friends = Friends.map(({id, clickstatus, image}) => {if(clickstatus) { return {id, clickstatus: false, image}} else { return {id, clickstatus, image}}});
    console.log(Friends)
    this.setState({
      Friends,
      score: 0,
      topscore
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
        <Header score={this.state.score} topscore={this.state.topscore} />
        <Jumbotron />
          <div class = "container">
            {_.shuffle(this.state.Friends).map(({id, image, clickstatus}) => <Card id={id} image={image} clickstatus ={clickstatus} onClick={() => this.cardClick(id, clickstatus)}/>)}
          </div>
        <Footer />
      </Wrapper>
      )
  } 
}

export default App;

