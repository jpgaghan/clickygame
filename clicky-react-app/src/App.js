import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron"
import Footer from "./components/Footer";
import Friends from "./friends.json";
import Card from "./components/FriendCard";
// import Image from "./components/Image"
// import Container from ".components/Container"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    Friends,
    score: 0,
    topscore: 0
  };

  // cardClick = () => {
  //   console.log(this.state)
  // };

  correctGuess = (clickedid, Friends, score, topscore) => {
    Friends = Friends.map(({id, clickstatus, image}) => {if(clickedid === id) { clickstatus = true}})
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
    Friends = Friends.map(({id, clickstatus, image}) => {if(clickstatus) { clickstatus = false}})
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
        <Header />
        <Jumbotron />
          <div class = "container">
            {Friends.map(({id, image, clickstatus}) => <Card id={id} image={image} clickstatus ={clickstatus} onClick={() => this.cardClick(id, clickstatus)}/>)}
          </div>
        <Footer />
      </Wrapper>)
  } 
}

export default App;

