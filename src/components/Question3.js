import React from "react";
import axios from "axios";
const URL = "https://anapioficeandfire.com/api/";

class Question3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: []
        }
    }

    async getAnswer() {
        try {
            const response = await axios.get(URL + "houses/229")
            console.log(response.data)
            this.setState({
                info: response.data
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
                <h1>What is the coat of arms for House Lannister?</h1>
                <h2>{this.state.info.coatOfArms}</h2>
            </div>
        )
    }

}

export default Question3;