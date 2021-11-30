import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from "axios";

class Items extends React.Component {

    constructor() {
        super();

    }

    // componentDidUpdate(prevProps){
    //     if(this.props.pid != prevProps.pid){
    //         console.log("there is an update needed")
    //     }
    // }

    buyItem = () =>{
        axios.get("http://localhost:5000/purchase/" + this.props.pid + "/" + this.props.cid + "/" + 1)
            .then(response=>{
                console.log(JSON.stringify(response.data))
            }).catch(error=>{
            console.log(error)
        })

    }


    render() {
        const imgStyle = {
            maxWidth: 250,
            maxHeight: 250
        };

        return (
            <div className="Item">
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 3,
                            width: 500,
                            height: 500,
                        },
                    }}
                >

                    <Paper elevation={3}>
                        <h5> {this.props.item_name}</h5>
                        <img style={imgStyle} src={this.props.url}></img>
                        <h4>${this.props.price}</h4>
                        <h5>stock count: {this.props.stock}</h5>

                        <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} onClick={this.buyItem}> Buy </Button>

                    </Paper>


                </Box>
            </div>
        );
    }

}

export default Items;
