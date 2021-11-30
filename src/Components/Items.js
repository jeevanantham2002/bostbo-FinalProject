import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

class Items extends React.Component {

    constructor() {
        super();

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
                        <h2>Item Name</h2>
                        <img style={imgStyle} src={"https://images.unsplash.com/photo-1542838132-92c53300491e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"}></img>
                        <h4>Price</h4>
                        <Button> Buy </Button>

                    </Paper>


                </Box>
            </div>
        );
    }

}

export default Items;
