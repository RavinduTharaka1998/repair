import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material";
import React, { Component } from 'react';
import axios from 'axios';


// const AddRepair = () => {
//     const [inputs,setInputs] =useState({
//        // RepairID:'',
//        // ItemName:'',
//        // RepairPeriod:'',
//        // EstimatedCost:'',
//         //Description:'', 
//     });
    
//     const handleChange = (e) => {
//         setInputs((prevState) => ({
//             ...prevState,
//             [e.target.RepairID]:e.target.value,
//         }))
//     };
//     //const handleSubmit= (e) =>{
//       //  e.preventDefault();
//       //  console.log(inputs);
//     //}
//     return (
//     <form>
   
//         <Box
//         display="flex"
//         flexDirection="column"
//         justifyContent={"center"}
//         maxWidth={700}
//         alignContent={"center"}
//         alignSelf={"center"}
//         marginLeft={"auto"}
//         marginRight={"auto"}
//         marginTop={10}
//         >
//         <FormLabel> RepairID</FormLabel>
//         <TextField value={inputs.RepairID} margin="normal" fullWidth variant ="outlined" name="repairID"/>
//         <FormLabel> Item Name</FormLabel>
//         <TextField value={inputs.ItemName} onChange={handleChange}margin="normal" fullWidth variant ="outlined" name="itemName"/>
//         <FormLabel> Repair Period</FormLabel>
//         <TextField value={inputs.RepairPeriod} onChange={handleChange}type="normal"margin="normal" fullWidth variant ="outlined" name="repairperiod"/>
//         <FormLabel> Estimated Cost</FormLabel>
//         <TextField value={inputs.EstimatedCost} onChange={handleChange}type="number"margin="normal" fullWidth variant ="outlined" name="estimatedcost"/>
//         <FormLabel>Description</FormLabel>
//         <TextField value={inputs.Description} onChange={handleChange}margin="normal" fullWidth variant ="outlined" name="Description"/>

//         <FormControlLabel control={<Checkbox Checked={inputs.alldetailsarecorrect} />} label="All details are correct"/>
//         <Button variant ="contained"type ="submit">Add Repair</Button>
//         </Box>
//     </form>
// )};
// export default AddRepair;

export default  class AddRepair extends  Component{


    constructor(props){
        super(props);

        // this.onChangeItemName = this.onChangeFoodName.bind(this);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeRepairPeriod = this.onChangeRepairPeriod.bind(this);
        this.onChangeEstimatedCost = this.onChangeEstimatedCost.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ItemName: '',
            RepairPeriod: '',
            EstimatedCost:'',
            Description:'',
            status:''
        }
    }

    onChangeItemName(e){
        this.setState( {
            ItemName: e.target.value
        });
    }
    onChangeRepairPeriod(e){
        this.setState( {
            RepairPeriod: e.target.value
        });
    }
    onChangeEstimatedCost(e){
        this.setState( {
            EstimatedCost: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState( {
            Description: e.target.value
        });
    }
   
    onSubmit(e){
        e.preventDefault();
        this.state.status = 'pending';
        const obj = {
            ItemName : this.state.ItemName,
            RepairPeriod : this.state.RepairPeriod,
            EstimatedCost : this.state.EstimatedCost,
            Description : this.state.Description,
            status : this.state.status
        };

        axios.post('http://localhost:4000/repair/add',obj)
                                .then(res => {
                                    alert("Item added Successfully");
                                    this.setState({
                                        ItemName: '',
                                        RepairPeriod: '',
                                        EstimatedCost:'',
                                        Description:''
                            
                                    })
                                    console.log(res.data)});
                                    window.location.replace('/view');
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
                    {/* <FormLabel> RepairID</FormLabel>
                    <TextField value={RepairID} margin="normal" fullWidth variant ="outlined" name="repairID"/> */}
                    <FormLabel> Item Name</FormLabel>
                    <TextField value={this.state.ItemName} onChange={this.onChangeItemName}margin="normal" fullWidth variant ="outlined" name="itemName"/>
                    <FormLabel> Repair Period</FormLabel>
                    <TextField value={this.state.RepairPeriod} onChange={this.onChangeRepairPeriod}type="normal"margin="normal" fullWidth variant ="outlined" name="repairperiod"/>
                    <FormLabel> Estimated Cost</FormLabel>
                    <TextField value={this.state.EstimatedCost} onChange={this.onChangeEstimatedCost}type="number"margin="normal" fullWidth variant ="outlined" name="estimatedcost"/>
                    <FormLabel>Description</FormLabel>
                    <TextField value={this.state.Description} onChange={this.onChangeDescription}margin="normal" fullWidth variant ="outlined" name="Description"/>
            
                    {/* <FormControlLabel control={<Checkbox Checked={inputs.alldetailsarecorrect} />} label="All details are correct"/> */}
                    <Button variant ="contained" type ="submit">Add Repair</Button>
                    </Box>
                </form>
            </div>
        )
    }
}

