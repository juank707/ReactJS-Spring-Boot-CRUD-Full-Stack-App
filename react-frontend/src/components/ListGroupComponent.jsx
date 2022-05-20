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
fin de import for dom*/

//import {useAuth0} from '@auth0/auth0-react'
import React, { Component } from 'react';
import GroupService from '../services/GroupService';


class ListGroupComponent extends Component {
    constructor(props){
        super(props)

    this.state = {
        groups: {}
        }
        this.addGroup = this.addGroup.bin(this);
        this.updateGroup = this.updateGroup.bin(this);
        this.deleteGroup = this.deleteGroup.bin(this);
        this.viewGroup = this.viewGroup.bin(this);
    }
    componentDidMount(){
       GroupService.getAllGroups().then((res) => {
            this.setState({ groups: res.data});
        });
    }

    addGroup(){
    this.props.history.push(`/add-Group/_add`);
    }
    updateGroup(id){
        this.props.history.push(`/add-Group/${id}`);
    }
    viewGroup(id){
        this.props.history.push(`/view-group/${id}`)
    }
    deleteGroup(userId, groupId){
        GroupService.deleteGroup(userId, groupId).then( rest => {
            this.setState({groups: this.state.groups.filter(groups => groups.id !==groupId)});
        })
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Detalles de Grupo</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addGroup}> Agregar grupo</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Grupo Nombre grupo</th>
                                    <th> Grupo Fecha Fin</th>
                                    <th> Grupo Monto Minimo</th>
                                    <th> Grupo Frecuencia</th>
                                    <th> Grupo % Interes </th>
                                    <th> Grupo Lider</th>
                                    <th> Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.groups.map(
                                        group => 
                                        <tr key = {group.id}>
                                             <td> {group.groupName} </td>   
                                             <td> {group.finishDate}</td>
                                             <td> {group.minimumAmount}</td>
                                             <td> {group.frequency}</td>
                                             <td> {group.approvedLoanInterest}</td>
                                             <td> {group.leaderId}</td>
                                             <td>
                                                 <button onClick={ () => this.updateGroup(group.id)} className="btn btn-info">Actualizar </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteGroup(group.id)} className="btn btn-danger">Eliminar </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewGroup(group.id)} className="btn btn-info">Ver </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        );
    }
}

export default ListGroupComponent;