import React from "react";
import axios from "axios";
const URL = "https://anapioficeandfire.com/api/";

class Question6 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: []
        }
    }

    async getAnswer() {
        try {
            const firstResponse = await axios.get(URL + "houses/362")
            console.log(firstResponse.data.founder);
            const secResponse = await axios.get(firstResponse.data.founder)
            console.log(secResponse)
            console.log(secResponse.data.name)
            this.setState({
                info: secResponse.data.name
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
                <h1>What's the name of the founder of House Stark?</h1>
                <h2>{this.state.info}</h2>
            </div>
        )
    }

}

export default Question6;