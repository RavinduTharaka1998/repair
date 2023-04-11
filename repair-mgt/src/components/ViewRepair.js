import React, {Component} from 'react';
import axios from 'axios'
import RepaireTableRow from './RepaireTableRow';

export default  class AddRepair extends  Component{

    constructor(props) {
        super(props);

        // this.onChangeSearch = this.onChangeSearch.bind(this);
        

        this.state = {
            repaires : [],
            
        }
       
    }

    componentDidMount() {
        //alert('email is ');
        axios.get('http://localhost:4000/repair/getData/')
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({repaires : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.repaires.map(function (object, i){
            return <RepaireTableRow obj = {object} key = {i}/>;
        });
    }



    render() {
        return (
             <div>
                    <br/>
                    <h1 style={{textAlign:'center'}}>Your Repaire History</h1>
                    
                    <table className="table table-striped" style = {{marginTop :5,display:'table',marginLeft:'auto',marginRight:'auto'}}>
                            <thead style={{padding:10,textAlign:'center'}}>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th style={{padding:20}}>_ID</th>
                                    <th style={{padding:20}}>ItemName</th>
                                    <th style={{padding:20}}>RepairPeriod</th>
                                    <th style={{padding:20}}>EstimatedCost</th>
                                    <th style={{padding:20}}>Description</th>
                                    <th style={{padding:20}}>State</th>
                                    <th colSpan="2" style={{padding:20}}>Action</th>
                                </tr>
                            </thead>
                            <tbody style={{padding:20,textAlign:'center'}}>
                                {this.tabRow()}
                            </tbody>
                    </table>

             </div>
        )
    }
}