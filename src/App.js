import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import Items from "./Components/Items";
import Midterm_Project from "./Components/Midterm_Project";


class App extends React.Component {

    constructor() {
        super();

    }


    render() {
        return (
            <div className="App">
                <Header></Header>
                <Items></Items>
                {/*<Midterm_Project></Midterm_Project>*/}
            </div>
        );
    }

}

export default App;
