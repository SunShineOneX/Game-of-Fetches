import React from "react";
import axios from "axios";
const URL = "https://anapioficeandfire.com/api/";


class Question1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    }

    async getAnswer () {
        try {
        const response = await axios.get(URL + "characters/16")
        console.log(response.data)
        this.setState({info: response.data});

    } catch {

    }
}

componentDidMount() {
    this.getAnswer();
}

    render() {
        return (
            <div>
                <h1>Where was Margaery Tyrell born?</h1>
                <h2>{this.state.info.born}</h2>
            </div>
        )
    }
} 

export default Question1;