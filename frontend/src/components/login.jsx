import React, { Component } from 'react';
import './login.css';
import { conditionalExpression } from '@babel/types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addReciever_user, toggleReciever_user, deleteReciever_user, fetchReciever_user} from '../actions/reciever_user';

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state= {
            username: "",
            password: "",
            name: "john",
            bank: "1234",
            submit: false,
            users: {},
            error: '',
        }

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
    }
    componentDidMount(){
        this.props.fetchReciever_user()
    }

     handleUserChange = (evt) => {
        this.setState({
            username: evt.target.value,
        });
     };
     handlePassChange = (evt) => {
        this.setState({
            password: evt.target.value,
        })
     };    

    submitForm(e){
        e.preventDefault()
        const { reciever_user } = this.props
        reciever_user.map(
            (reciever_users) => (this.state.users[reciever_users.username]= reciever_users.password));

        if((this.state.username in this.state.users) && (this.state.users[this.state.username] === this.state.password)){
            this.props.onLogin(this.state.username)
            this.props.history.push('/LoggedIn')
        }
    };
        

    render() { 
        return (
        <div>
            <form id="login" onSubmit={this.submitForm.bind(this)}>
                    <h5>Login:</h5> <hr />
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="password">Username:</span>
                        </div>
                            <input type="text" className="form-control input-lg col-sm-8" placeholder="Username" value = {this.state.username} onChange={this.handleUserChange}></input>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="password">Password:</span>
                        </div>
                            <input type="text" className="form-control input-lg col-sm-8" placeholder="Password" value = {this.state.password} onChange={this.handlePassChange}></input>
                        </div>

                    <div>
                        <button type="submit" id="login-submit" >Login</button>
                    </div>
            </form>
        </div>  );
    }
}


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
    fetchReciever_user,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));