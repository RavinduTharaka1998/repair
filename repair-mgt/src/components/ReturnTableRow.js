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
                   {this.props.obj.RepaireId}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.WarrantyId}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.Note}
               </td>
           </tr>
        );
    }
}

export default TableRow;