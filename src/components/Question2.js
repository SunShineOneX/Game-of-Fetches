import React from "react";
import axios from "axios";
const URL = "https://anapioficeandfire.com/api/";

class Question2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: []
        }
    }

    async getAnswer() {
        try {
            const response = await axios.get(URL + "houses/378")
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
                <h1>What region is house Targareyn in?</h1>
                <h2>{this.state.info.region}</h2>
            </div>
                
            
        )
    }
}

export default Question2;