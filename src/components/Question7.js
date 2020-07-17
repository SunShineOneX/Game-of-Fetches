import React from "react";
import axios from "axios";
const URL = "https://anapioficeandfire.com/api/";

class Question7 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: [],
            book1: [],
            book2: [],
            book3: []
        }
    }

    async getAnswer() {
        try {
            const response = await axios.get(URL + "characters/232")
            console.log(response.data)
            const firstBook = await axios.get(response.data.povBooks[0])
            const secondBook = await axios.get(response.data.povBooks[1])
            const thirdBook = await axios.get(response.data.povBooks[2])
            console.log(firstBook);
            this.setState({
                book1: firstBook.data.name,
                book2: secondBook.data.name,
                book3: thirdBook.data.name
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
                <h1>What are the titles of Catelyn Stark's three POV books?</h1>
                <h2>{this.state.book1}, {this.state.book2}, {this.state.book3}</h2>
            </div>
        )
    }

}

export default Question7;