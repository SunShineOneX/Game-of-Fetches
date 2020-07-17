import React from "react";
import axios from "axios";
const URL = "https://anapioficeandfire.com/api/";

class Question5 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: []
        }
    }

    async getAnswer() {
        try {
            const response = await axios.get(URL + "characters/901")
            console.log(response.data)
            this.setState({
                info: response.data.aliases[1]
            });

        } catch {

        }
    }

    componentDidMount() {
        this.getAnswer()
    }
    render() {
        return (
            <div>
                <h1>What is Robert Baratheon's second alias?</h1>
                <h2>{this.state.info}</h2>
            </div>
        )
    }

}

export default Question5;