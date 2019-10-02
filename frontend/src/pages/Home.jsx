import React, { Component } from 'react';
import Login from "../components/login";
import Create_acc from "../components/create_acc";
import { connect } from 'react-redux'

class Home extends React.Component {
    submitForm = (x) => {
      const cookies = this.props.cookies
      cookies.set('Username', x, { path: '/' })
    }
    render() {
      return(
        <React.Fragment>
          <main>
            <Login onLogin={this.submitForm}> </Login>
          </main>
        
          <main>
          <Create_acc>
  
          </Create_acc>
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

export const HomeContainer = connect(
    mapStateToProps, 
    null
)(Home);

export default HomeContainer; 