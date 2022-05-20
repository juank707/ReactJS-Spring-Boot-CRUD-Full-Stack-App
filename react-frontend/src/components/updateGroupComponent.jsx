import React, { Component } from 'react'
import GroupService from '../services/GroupService';
class updateGroupComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            id: this.props.match.params.id,
            groupName: '',
            finishDate: '',
            minimumAmount: '',
            frequency: '',
            approvedLoanInterest: ''
        }
        this.changeGroupName = this.changeGroupName.bind(this);
        this.changeFinishDate = this.changeFinishDate.bind(this);
        this.changeMinimumAmount = this.changeMinimumAmount.bind(this);
        this.changeFrequency = this.changeFrequency.bind(this);
        this.changeApprovedLoanInterest = this.changeApprovedLoanInterest.bind(this);
        this.updateGroup = this.updateGroup.bin(this);
    }
    componentDidMount(){
        GroupService.getGroupById(this.state.id).then( (rest) => {
            let group = res.data;
            this.setState({groupName: group.groupName,
                 finishDate: group.finishDate,
                  minimumAmount: group.minimumAmount,
                   frequency: group.frequency, 
                   approvedLoanInterest: group.approvedLoanInterest
                });
        });
    }

    updateGroup = (g) => {
        g.preventDefault();
        let group = {groupName: this.state.groupName, finishDate: this.state.finishDate, minimumAmount: this.state.minimumAmount, frequency: this.state.frequency, approvedLoanInterest: this.state.approvedLoanInterest}
        console.log();
        console.log()
        GroupService.updateGroup(group, this.state.id).then( res =>{
            this.props.history.push('/groups')
        });
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
                                <h3 className="text-center">Actualizar Grupo</h3>
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

                                        <button className="btn btn-success" onClick={this.updateGroup}>Guardar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>

            </div>
        );
    }
}
export default updateGroupComponent;
