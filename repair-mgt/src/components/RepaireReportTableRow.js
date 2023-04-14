import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
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
           </tr>
        );
    }
}

export default TableRow;