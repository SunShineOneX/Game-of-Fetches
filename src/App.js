import React from 'react';
import './App.css';
import axios from "axios";

let maergery = "characters/16";
let houseTargaryen = "houses/378";
let houseLannister = "houses/229"
let houseBaratheon = "houses/17"
let robertBaratheon = "characters/901"
let houseStark = "houses/362"
let CatelynnBooks = "characters/232"


class App extends React.Component {
  constructor() {
    super ()

    this.state = {
      data: [],
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
    axios.get(`http://anapioficeandfire.com/api/${Question[0].maergery}`)
    .then(response => {
      const gotData = response.data.born;
      this.setState({
        data: gotData
      })
      return gotData
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
      <div>
        <h1>Lord of the north</h1>
        <h2>{this.componentDidMount()}</h2>
      </div>
    )
  }
}



export default App;
