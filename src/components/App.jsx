import React, {Component} from "react";
import "./App.css"
import TitleBar from "./TitleBar/TitleBar";

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            { title: "To Die For The People", author: "Toni Morrison" },
            { title: "The Spook Who Sat By The Door", author: "Sam GreenLee" },
            { title: "Rabbit", author: "Patricia"}
        ]
        this.state = {
            bookNumber: 1
        };
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }


    render(){
        return(
         <div className="container-fluid">
             <TitleBar />
             <div className="row"> 
             <div className="col-md-4">
                 {/*Button here to move to the previous book viewed*/}
             </div>
             <div className="col-md-4">
                 {/*Display book with cover here*/}
                 <h1>{this.books[this.state.bookNumber].title}</h1>
                 <h4>{this.books[this.state.bookNumber].author}</h4>
             </div>
             <div className="col-md-4">
                 {/*Button here to move to the previous book viewed*/}
                 <button onClick={this.goToNextBook}>Next Book</button>
             </div>
         </div>   
         </div>
        )
    }
}

export default App;