import React, {Component} from 'react';
import axios from 'axios'
import ReturnTableRow from './ReturnTableRow';

export default  class ViewReturnItem extends  Component{

    constructor(props) {
        super(props);

        // this.onChangeSearch = this.onChangeSearch.bind(this);
        

        this.state = {
            return : [],
            
        }
       
    }

    componentDidMount() {
        //alert('email is ');
        axios.get('http://localhost:4000/repair/getReturnitem/')
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({return : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.return.map(function (object, i){
            return <ReturnTableRow obj = {object} key = {i}/>;
        });
    }



    render() {
        return (
             <div>
                    <br/>
                    <h1 style={{textAlign:'center'}}>Your Return History</h1>
                    
                    <table className="table table-striped" style = {{marginTop :5,display:'table',marginLeft:'auto',marginRight:'auto'}}>
                            <thead style={{padding:10,textAlign:'center'}}>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th style={{padding:20}}>_ID</th>
                                    <th style={{padding:20}}>Repaire Id</th>
                                    <th style={{padding:20}}>Warrenty Id</th>
                                    <th style={{padding:20}}>Note</th>
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