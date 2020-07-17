import React from 'react';
import './App.css';
import axios from "axios";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Question6 from "./components/Question6";
import Question7 from "./components/Question7";

let maergery = "characters/16";
let houseTargaryen = "houses/378";
let houseLannister = "houses/229"
let houseBaratheon = "houses/17"
let robertBaratheon = "characters/901"
let houseStark = "houses/362"
let CatelynnBooks = "characters/232"


class App extends React.Component {
  constructor(props) {
    super (props)

    this.state = {
      data: [props],
      Question: [
        {
          Question: "Where was Margaery Tyrell born?",
          Answer: maergery
        },
        {
          Question: "What region is House Targaryen in?",
          Answer: houseTargaryen
        },
        {
          Question: "What's the coat of arms of House Lannister?",
          Answer: houseLannister
        },
        {
          Question: "What is the second seat of House Baratheon?",
          Answer: houseBaratheon
        },
        { 
          Question: "What is Robert Baratheon's second alias?",
          Answer: robertBaratheon
        },
        {
          Question: "What's the name of the founder of House Stark? (You have to chain fetch requests!",
          Answer: houseStark
        },
        {
          Question: "What are the titles of Catelyn Stark's three POV books? (Look into Promise.all to request these simultaniously",
          Answer: CatelynnBooks
        }
        
      ]
    }
  }

  componentDidMount() {
    axios.get(`http://anapioficeandfire.com/api/${maergery}`)
    .then(response => {
      const gotData = response.data.born;
      this.setState({
        data: gotData
      })

    })
.catch(err => console.log(`"there's an error ${err}`))
  }

findInfo = () => {
  if (this.state.data) {
    const info = this.state.data;
    return info;
  }
}


  render() {
    console.log(`this is the data`, this.state.data)
    return (
      <div className="parent">
        <h1>Now selling unparalleled resumes for $10!!!!</h1>
        <h2>
          <Question1 />
          <Question2 />
          <Question3 />
          <Question4 />
          <Question5 />
          <Question6 />
          <Question7 />
        </h2>
      </div>
    )
  }
}



export default App;
