import React, { Component } from 'react';
import './login.css';
import Financial_Input from "./finance input";
import { connect } from 'react-redux';
import { addReciever_user, toggleReciever_user, deleteReciever_user, fetchReciever_user} from '../actions/reciever_user';

class Create_acc extends Component{
    constructor(props){
        super(props);

        this.state= {
            n_username: "",
            n_password: "",
        }

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.addUser = this.addUser.bind(this);
    }
    handleUserChange = (evt) => {
        this.setState({
            n_username: evt.target.value,
        });
        
     };
     handlePassChange = (evt) => {
        this.setState({
            n_password: evt.target.value,
        })
     };
     addUser (event){
        event.preventDefault()
        
        // if( this.state.n_username !== '' ){
            
            const reciever_user = { username: this.state.n_username, password: this.state.n_password, status: true}
            this.props.addReciever_user(reciever_user)
            this.setState({ n_username: '', n_password: ''})
        // }
    }
    

    render() {
        return (
            <div>
                <form id="login" onSubmit={this.addUser}>
                    <h5>Create Account:</h5> Non-required <hr />
                    
                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="password">Username:</span>
                    </div>
                        <input type="text" className="form-control input-lg col-sm-8" placeholder="Username" value = {this.state.n_username} onChange={this.handleUserChange}></input>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="password">Password:</span>
                        </div>
                            <input type="text" className="form-control input-lg col-sm-8" placeholder="Password" value = {this.state.n_password} onChange={this.handlePassChange}></input>
                    </div>
                    {/* <div>
                        <Financial_Input>

                        </Financial_Input>
                    </div> */}

                    <div>
                        <button type="submit" id="login-submit" >Create Account</button>
                    </div>
                </form>
            </div>
        
        )   
    }
};

const mapStateToProps = (state) => {
    return {
        reciever_user: state.reciever_user.items,
        isLoading: state.reciever_user.loading,
        isSaving: state.reciever_user.saving,
        error: state.reciever_user.error
    }
}

const mapDispatchToProps = {
    addReciever_user,
    toggleReciever_user,
    deleteReciever_user,
    fetchReciever_user
}

export default connect(mapStateToProps, mapDispatchToProps)(Create_acc);