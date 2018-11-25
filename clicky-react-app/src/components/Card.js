import React from "react";

let imageLinks = ["https://assets.rbl.ms/14609520/980x.jpg",
"https://vignette.wikia.nocookie.net/spongebob-squarepants-and-us/images/a/a5/Toy_store_of_doom.jpg/revision/latest?cb=20130512133304",
"https://vignette.wikia.nocookie.net/spongebob/images/2/2c/Bubble_Poppin_Boys.png/revision/latest?cb=20130105035055",
"https://vignette.wikia.nocookie.net/theadventuresofgarythesnail/images/f/f1/RoundPants.jpg/revision/latest?cb=20130307163747",
"https://vignette.wikia.nocookie.net/spongebob/images/9/9d/Club_SpongeBob_02.png/revision/latest?cb=20130406101422",
"https://img.sharetv.com/shows/episodes/standard/357623.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHr9O_3J7xX6hR-ru65kVQ56ALknYTynTgQdCS-fG3A4JmsEopNQ",
"https://vignette.wikia.nocookie.net/spongebob/images/6/69/512426.jpg/revision/latest?cb=20130709183111",
"https://musingswithspencer.files.wordpress.com/2017/11/7a87f-102mermaidman5.jpg",
"http://1.bp.blogspot.com/-VigKn9TiVMA/UeYMWJJCuNI/AAAAAAAAAJA/J7ln9Qw-Vbg/s1600/Screen-739111.jpg",
"http://www.dvdtalk.com/reviews/images/reviews/190/1268946106_3.jpg",
"https://1.bp.blogspot.com/-5QYbNckwZog/WnA7li05ZeI/AAAAAAAAF9I/5T9lmEvVUgwXVFPjFD9okdekic7CF8aKgCLcBGAs/s1600/du.jpg",
"https://img.sharetv.com/shows/episodes/standard/357627.jpg",
"http://4.bp.blogspot.com/-SrKBi-ju3tE/UNPrkjn7PRI/AAAAAAAAAEE/wFwF5MWkMQ0/s1600/357589.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZog1KcRr49kGERv-629BG5PHhx85lqYbuV1YDhK5RmovgVZ-YVQ"];

const getImage = 

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    Card(array);
  }
  
const Card = (array) => (
    <div role="img" aria-label="click item" class="click-item shake" style="background-image: url(&quot;/assets/images/summer.png&quot;);"></div>
);

export default Card;