import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
        this.status = this.status.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/repair/deleteRepair/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert("Your Repair Successfully Deleted....")
        window.location.replace('/view');
    }
    status(){
        //alert("Change calling")
        axios.get('http://localhost:4000/repair/changeRepair/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        //alert("Your Repair Successfully Deleted....")
        window.location.replace('/view');
    }
    render() {
        return (
           <tr>
               <td style={{padding:20}}>
                   {this.props.obj._id}
               </td>
                <td style={{padding:20}}>
                   {this.props.obj.HId}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.ItemName}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.RepairPeriod}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.EstimatedCost}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.Description}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.status}
               </td>
               <td style={{padding:20, gap:20}}>
                   <Link to={"/editRepaire"}  style={{background:'green',textDecoration:'none',padding: 5,color:'white'}}>Edit</Link>
                   <br/><br/>
                   <button onClick={this.deletesss}  style={{background:'red',textDecoration:'none',padding: 5,color:'white',border:'none'}}>Delete</button>
                   <br/><br/>
                   <button onClick={this.status} style={{background:'yellow',textDecoration:'none',padding: 5,color:'black',border:'none'}}>Change Status</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;