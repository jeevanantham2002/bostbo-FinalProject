import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import Items from "./Components/Items";
import Midterm_Project from "./Components/Midterm_Project";
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [],
            doneRendering: false,
            searchTerm: "",
            cid:""
        }

    }

    componentDidMount() {
        console.log("hello")
        var json_data = {}
        var temp_array = []
        axios.get("http://127.0.0.1:5000/products")
            .then(response => {
                // json_data = response.data
                console.log(response.data)
                json_data = response.data
                for (var i in json_data) {
                    temp_array.push([json_data [i]]);
                }
                this.setState({items: temp_array})
                console.log(this.state.items)
                this.setState({doneRendering: true})
            }).catch(error => {
            console.log(error)
        })
    }

    // get_data = () => {
    //     console.log("hello")
    //     var json_data = {}
    //     var temp_array = []
    //     axios.get("http://127.0.0.1:5000/products/")
    //         .then(response => {
    //             // json_data = response.data
    //             console.log(response.data)
    //             json_data = response.data
    //             for (var i in json_data) {
    //                 temp_array.push([json_data [i]]);
    //                 if (i == 5) {
    //                     break;
    //                 }
    //             }
    //             this.setState({items: temp_array})
    //
    //             console.log(this.state.items)
    //         }).catch(error => {
    //         console.log(error)
    //     })
    //
    //     return this.state.items.map(item => <Items key={item.pid} item_name={item.name} price={item.price}
    //                                                       stock={item.stock}></Items>)
    // }


    purchaseCart = () => {
        axios.get("http://localhost:5000/purchase/" + this.props.pid + "/" + this.props.cid + "/" + 1)
            .then(response=>{
                console.log(JSON.stringify(response.data))
            }).catch(error=>{
            console.log(error)
        })
    }




    render() {

        if (this.state.doneRendering){
            return (
                <div className="App">
                    <Header></Header>
                    <div>
                        <h1>Customer CID Login</h1>

                        <input  type = "text"
                                placeholder="cid..."
                                onChange={(event)=>{
                                    this.setState({cid:event.target.value})
                                }}
                        >

                        </input>
                    </div>

                    <div>
                        <h1>Item Lookup</h1>
                        <input  type = "text"
                                placeholder="search item..."
                                onChange={(event)=>{
                                    this.setState({searchTerm:event.target.value})
                                }}
                        >

                        </input>

                        <div>

                            <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', margin: "30px"}} onClick={this.AddToCart}> Purchase Cart </Button>

                        </div>

                        <Grid container spacing={2} style={{ marginLeft : '90px'}}>
                            {this.state.items.filter((value)=>{
                                if(this.state.searchTerm == ""){
                                    return value
                                }else if(value[0].name.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
                                    return value
                                }
                            }).map(item => <Grid item xs={4}> <Items key={item[0].name} url={item[0].url} item_name={item[0].name} price={item[0].price}
                                                                     stock={item[0].stock} pid={item[0].pid} cid={this.state.cid} ></Items> </Grid>)}
                        </Grid>
                        {/*<Items></Items>*/}
                        {/*<Midterm_Project></Midterm_Project>*/}

                    </div>

                </div>
            );
        } else return(<div></div>);

    }
}
export default App;
