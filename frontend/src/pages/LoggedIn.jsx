import React, { Component } from 'react';
import { connect } from 'react-redux';
import Info_Req from '../components/createlink/info_req'

class LoggedIn extends React.Component {
    state = {
        username: ''
    }

    render() {
        const cookies = this.props.cookies
        this.state.username = cookies.get("Username")
        return(
            <React.Fragment>
              <main>
                <Info_Req dataFromLoggedIn={this.state.username}>       
                </Info_Req>
              </main>
            </React.Fragment>
            )
          }
    }

    const mapStateToProps = (state, ownProps) => {
        return({
          state: state, 
          cookies: ownProps.cookies, 
        });
      };
    
    export const LoggedInContainer = connect(
        mapStateToProps, 
        null
    )(LoggedIn);
    
    export default LoggedInContainer; 