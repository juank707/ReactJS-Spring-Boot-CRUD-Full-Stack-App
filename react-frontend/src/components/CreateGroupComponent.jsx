/*import for nodeJS_dom 
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Swal from 'sweetalert2'
//import NabVarPage from '../navBar/navBarPage'
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import {  Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import imagenCochinito from '../../img/imagenCochinito.jpg'
fin de import for dom */

//import {useAuth0} from '@auth0/auth0-react'
import React, { Component, Fragment } from 'react';
import GroupService from '../services/GroupService';
import axios from 'axios'

class CreateGroupComponent extends Component {
    
    constructor(props){
        super(props)
       
        //const {user, isAuthenticated, isLoading} = useAuth0();

        this.state = {
            id: this.props.match.params.id,
            groupName: '',
            finishDate: '',
            minimumAmount: '',
            frequency: '',
            approvedLoanInterest: '',
            leaderId: ''
        }
        this.changeGroupName = this.changeGroupName.bind(this);
        this.changeFinishDate = this.changeFinishDate.bind(this);
        this.changeMinimumAmount = this.changeMinimumAmount.bind(this);
        this.changeFrequency = this.changeFrequency.bind(this);
        this.changeApprovedLoanInterest = this.changeApprovedLoanInterest.bind(this);
        this.saveOrUpdateGroup = this.saveOrUpdateGroup.bind(this);
    }
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            GroupService.getGroupById(this.state.id).then ((res)=> {
                let group = res.data;
                this.setState({groupName: group.groupName, 
                    finishDate: group.finishDate, 
                    minimumAmount: group.minimumAmount, 
                    frequency: group.frequency, 
                    approvedLoanInterest: group.approvedLoanInterest, 
                    leaderId: group.leaderId
                })
            });
    }
}
    saveOrUpdateGroup = (g) => {
        g.preventDefault();
        let group = {groupName: this.state.groupName,
            finishDate: this.state.finishDate,
            minimumAmount: this.state.minimumAmount,
            frequency: this.state.frequency,
            approvedLoanInterest: this.state.approvedLoanInterest};
            console.log('group => ' + JSON.stringify(group));

        if (this.state.id === '_add') {
            GroupService.createGroup(group).then(res =>{
                this.props.history.push('/groups');
            });
        }else{
            GroupService.updateGroup(group,this.state.id).then(res =>{
                this.props.history.push('/groups');
            });
        }
            
    }

    changeGroupName = (event) =>{
        this.setState({groupName: event.target.value});

    }
    changeFinishDate = (event) => {
        this.setState({finishDate: event.target.value});
    }
    changeMinimumAmount = (event) => {
        this.setState({minimumAmount: event.target.value});
     }
    changeFrequency = (event) => {
        this.setState({frequency: event.target.value});
    }
    changeApprovedLoanInterest = (event) =>{
        this.setState({approvedLoanInterest: event.target.value});
    }
         getTitle(){
             if (this.state.id === '_add') {
                 return <h3 className='text-center'>Crear Grupo</h3>;
                 
             }else{
                 return <h3 className='text-center'>Actualizar Grupo</h3>;
             }
         }

        cancel(){
            this.props.history.push('/groups');
        }

        
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                            <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nombre del Grupo: </label>
                                            <input placeholder="Nombre del Grupo" name="groupName" className="form-control" 
                                                value={this.state.groupName} onChange={this.changeGroupName}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Fecha de cierre Grupo: </label>
                                            <input type="text" placeholder="MM/DD/YYYY" name="finishDate" className="form-control" 
                                                value={this.state.finishDate} onChange={this.changeFinishDate} onfocus="(this.type='date')"/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Monto minimo: </label>
                                            <input placeholder="$" name="minimumAmount" className="form-control" 
                                                value={this.state.minimumAmount} onChange={this.changeGroupName}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Frecuencia: </label>
                                            <select
                                                 placeholder="selecione" name="frequency" className="form-control" 
                                                value={this.state.frequency} onChange={this.changeFrequency} />
                                        </div>
                                        <div className = "form-group">
                                            <label> monto aprovado </label>
                                            <input placeholder="$" name="approvedLoanInterest" className="form-control" 
                                                value={this.state.approvedLoanInterest} onChange={this.changeApprovedLoanInterest}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateGroup}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        
        ); 
    }
}


export default CreateGroupComponent;