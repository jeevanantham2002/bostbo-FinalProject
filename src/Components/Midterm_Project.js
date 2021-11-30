import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios'
import {rootShouldForwardProp} from "@mui/material/styles/styled";
class Midterm_Project extends React.Component {

    constructor(props) {
        super(props);

        this.state =
            {
                customers: "",
                id_search: '',
                Post_Name: "",
                Post_Email:"",
                Post_Address: "",
                Post_Phone_Number: "",
                UpdateReqCid: "",
                UpdateReqPost_Name: "",
                UpdateReqPost_Email:"",
                UpdateReqPost_Address: "",
                UpdateReqPost_Phone_Number: "",
                deleteCid:"",
                datequery:"",
                advancedquery1result:"",
                advancedquery2result: ""
            }
    }

    // componentDidMount() {
    //     axios.get("endpoint")
    //         .then(response=>{
    //             this.setState({customers:response.data})
    //         }).catch(error=>{
    //             console.log(error)
    //     })
    // }
    //COmponent Did mount runs this code once when the component is placed

    getReq = () => {

        axios.get("http://localhost:5000/" + this.state.id_search)
            .then(response=>{
                console.log(JSON.stringify(response.data))
                this.setState({customers:JSON.stringify(response.data)}) //handle URL
            }).catch(error=>{
                console.log(error)
        })

    }



    deleteCustomer = () => {
        axios.get("http://localhost:5000/" + this.state.deleteCid + "/BOWWWWW")
            .then(response=>{
                console.log(JSON.stringify(response.data))
            }).catch(error=>{
            console.log(error)
        })
    }

    postReq= ()=>{
        const customer =
            {
                name: this.state.Post_Name,
                email: this.state.Post_Email,
                address: this.state.Post_Address,
                phone_number: this.state.Post_Phone_Number


            };

        axios.get("http://localhost:5000/" + customer.name + "/" + customer.email + "/" + customer.address + '/' + customer.phone_number)
            .then(response=>{
                console.log(JSON.stringify(response.data))
            }).catch(error=>{
            console.log(error)
        })

    }

    postUpdateReq=()=>{
        const customer =
            {
                cid: this.state.UpdateReqCid,
                name: this.state.UpdateReqPost_Name,
                email: this.state.UpdateReqPost_Email,
                address: this.state.UpdateReqPost_Address,
                phone_number: this.state.UpdateReqPost_Phone_Number


            };
        axios.get("http://localhost:5000/" + customer.cid +"/" + customer.name + "/" + customer.email + "/" + customer.address + '/' + customer.phone_number)
            .then(response=>{
                console.log(JSON.stringify(response.data))
            }).catch(error=>{
            console.log(error)
        })
    }

    AdvQuery1 = () => {

        axios.get("http://localhost:5000/" + "1" +"/"+"2"+"/" + this.state.datequery)
            .then(response=>{
                console.log(JSON.stringify(response.data))
                this.setState({advancedquery1result:JSON.stringify(response.data)}) //handle URL
            }).catch(error=>{
            console.log(error)
        })

    }

    AdvQuery2 = () => {

        axios.get("http://localhost:5000/1/1/1/1/1/1")
            .then(response=>{
                console.log(JSON.stringify(response.data))
                this.setState({advancedquery2result:JSON.stringify(response.data)}) //handle URL
            }).catch(error=>{
            console.log(error)
        })

    }





    //https://www.youtube.com/watch?v=NEYrSUM4Umw

    //Get Req
    updateId_Search = (evt) => {
        this.setState({
            id_search: evt.target.value
        });
    }


    //Post Req
    updatePostName = (evt) => {
        this.setState({
            Post_Name: evt.target.value
        });
    }
    updatePostEmail = (evt) => {
        this.setState({
            Post_Email: evt.target.value
        });
    }

    updatePostAddress = (evt) => {
        this.setState({
            Post_Address: evt.target.value
        });
    }
    updatePostNumber = (evt) => {
        this.setState({
            Post_Phone_Number: evt.target.value
        });
    }


    //Update Code

    updateUpdateReqCid = (evt) => {
        this.setState({
            UpdateReqCid: evt.target.value
        });
    }

    updateUpdateReqPostName = (evt) => {
        this.setState({
            UpdateReqPost_Name: evt.target.value
        });
    }
    updateUpdateReqPostEmail = (evt) => {
        this.setState({
            UpdateReqPost_Email: evt.target.value
        });
    }

    updateUpdateReqPostAddress = (evt) => {
        this.setState({
            UpdateReqPost_Address: evt.target.value
        });
    }
    updateUpdateReqPostNumber = (evt) => {
        this.setState({
            UpdateReqPost_Phone_Number: evt.target.value
        });
    }

    //Delete
    updateDelete = (evt) => {
        this.setState({
            deleteCid: evt.target.value
        });
    }

    //Date Query

    updateDate = (evt) => {
        this.setState({
            datequery: evt.target.value
        });
    }




    render() {
        const {customers} = this.state
        return (
            <div className="Midterm_Project">
                <div>
                    <h1>Keyword Search</h1>
                    <input value={this.state.id_search} placeholder={"CID"}  onChange={this.updateId_Search}/>
                    <Button onClick={this.getReq}> Submit </Button>
                    <div>
                        {
                            // customers.length() ? customers.map(customers => <div key={customers.cid}> {customers.name}</div>) : null
                            customers
                            //maps each div elements by the CID and then prints out all the customer name

                        }
                    </div>
                </div>

                <div>

                    <h1>Insert New Customer</h1>
                    <input value={this.state.Post_Name} placeholder={"Name"} value = {this.state.Post_Name} onChange={this.updatePostName}/>
                    <input value={this.state.Post_Email} placeholder={"Email"} value = {this.state.Post_Email} onChange={this.updatePostEmail}/>
                    <input value={this.state.Post_Address} placeholder={"Address"} value = {this.state.Post_Address} onChange={this.updatePostAddress}/>
                    <input value={this.state.Post_Phone_Number} placeholder={"Phone Number"} value = {this.state.Post_Phone_Number} onChange={this.updatePostNumber}/>
                    <Button onClick={this.postReq}> Submit </Button>
                </div>

                <div>

                    <h1>Update Customer</h1>
                    <input value={this.state.UpdateReqCid} placeholder={"CID"} value = {this.state.UpdateReqCid} onChange={this.updateUpdateReqCid}/>
                    <input value={this.state.UpdateReqPost_Name} placeholder={"Name"} value = {this.state.UpdateReqPost_Name} onChange={this.updateUpdateReqPostName}/>
                    <input value={this.state.UpdateReqPost_Email} placeholder={"Email"} value = {this.state.UpdateReqPost_Email} onChange={this.updateUpdateReqPostEmail}/>
                    <input value={this.state.UpdateReqPost_Address} placeholder={"Address"} value = {this.state.UpdateReqPost_Address} onChange={this.updateUpdateReqPostAddress}/>
                    <input value={this.state.UpdateReqPost_Phone_Number} placeholder={"Phone Number"} value = {this.state.UpdateReqPost_Phone_Number} onChange={this.updateUpdateReqPostNumber}/>
                    <Button onClick={this.postUpdateReq}> Submit </Button>
                </div>

                <div>
                    <h1>Delete</h1>
                    <input value={this.state.deleteCid} placeholder={"CID"}  onChange={this.updateDelete}/>
                    <Button onClick={this.deleteCustomer}> Submit </Button>

                </div>

                <div>
                    <h1>Advanced Query 1-> Date Query</h1>
                    <input value={this.state.datequery} placeholder={"Date"}  onChange={this.updateDate}/>
                    <Button onClick={this.AdvQuery1}> Submit </Button>

                    {this.state.advancedquery1result}

                </div>

                <div>
                    <h1>Advanced Query 2 ->  Average Query</h1>
                    <Button onClick={this.AdvQuery2}> Submit </Button>

                    {this.state.advancedquery2result}

                </div>

            </div>
        );
    }

}

export default Midterm_Project;
