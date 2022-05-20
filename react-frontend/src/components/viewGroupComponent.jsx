import { group } from 'console';
import React, { Component } from 'react'
import GroupService from '../services/GroupService';
class ViewGroupComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            group: {}
        }

    }
componentDidMount(){
    GroupService.getGroupById(this.state.id).then( res =>{
        this.setState({group: res.data});
    });
}

    render() {
        return (
            <div>
                 <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> ver detalles del grupo </h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> nombre del grupo: </label>
                            <div> { this.state.group.groupName }</div>
                        </div>
                        <div className = "row">
                            <label> Fecha cierre grupo: </label>
                            <div> { this.state.group.finishDate }</div>
                        </div>
                        <div className = "row">
                            <label> Monto minimo </label>
                            <div> { this.state.group.minimumAmount}</div>
                        </div>
                        <div className = "row">
                            <label> Frecuencia </label>
                            <div> { this.state.group.frequency}</div>
                        </div>
                        <div className = "row">
                            <label> %  Interes </label>
                            <div> { this.state.group.approvedLoanInterest}</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ViewGroupComponent;