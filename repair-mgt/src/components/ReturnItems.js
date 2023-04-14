import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material";
import React, { Component } from 'react';
import axios from 'axios';

export default  class Returnitem extends  Component{


    constructor(props){
        super(props);

        // this.onChangeItemName = this.onChangeFoodName.bind(this);
        this.onChangeRepaireId = this.onChangeRepaireId.bind(this);
        this.onChangeWarrentyId = this.onChangeWarrentyId.bind(this);
        this.onChangeNote = this.onChangeNote.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            RepaireId: '',
            WarrantyId: '',
            Note:''
        }
    }

    onChangeRepaireId(e){
        this.setState( {
            RepaireId: e.target.value
        });
    }
    onChangeWarrentyId(e){
        this.setState( {
            WarrantyId: e.target.value
        });
    }
    onChangeNote(e){
        this.setState( {
            Note: e.target.value
        });
    }
   
    onSubmit(e){
        e.preventDefault();
        this.state.status = 'pending';
        const obj = {
            RepaireId : this.state.RepaireId,
            WarrantyId : this.state.WarrantyId,
            Note : this.state.Note,
        };

        axios.post('http://localhost:4000/repair/addreturnitem',obj)
                                .then(res => {
                                    alert("Return Item added Successfully");
                                    this.setState({
                                        RepaireId: '',
                                        WarrantyId: '',
                                        Note:''
                            
                                    })
                                    console.log(res.data)});
                                    window.location.replace('/returnitem');
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
   
            <Box
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                maxWidth={700}
                alignContent={"center"}
                alignSelf={"center"}
                marginLeft={"auto"}
                marginRight={"auto"}
                marginTop={10}
            >
                    
                    <FormLabel> Repaire Id</FormLabel>
                    <TextField value={this.state.RepaireId} onChange={this.onChangeRepaireId}margin="normal" fullWidth variant ="outlined" name="itemName"/>
                    <FormLabel> Warrenty Id</FormLabel>
                    <TextField value={this.state.WarrantyId} onChange={this.onChangeWarrentyId}type="normal"margin="normal" fullWidth variant ="outlined" name="repairperiod"/>
                    <FormLabel> Note</FormLabel>
                    <TextField value={this.state.Note} onChange={this.onChangeNote} type="text"margin="normal" fullWidth variant ="outlined" name="estimatedcost"/>
            
                    
                    <Button variant ="contained" type ="submit">Add Return</Button>
                    </Box>
                </form>
            </div>
        )
    }
}

