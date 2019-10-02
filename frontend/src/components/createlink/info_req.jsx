import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Display_Check from './display_check';
import "./info_req.css";
import { connect } from 'react-redux';
import { addNewLink, toggleNewLink, deleteNewLink, fetchNewLink} from '../../actions/newLink';
 



class Info_Req extends Component {
    constructor(props){

        super(props);
        this.state = { 
            description: null,
            price: null,
            show: false,
         }
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    };
    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModal = () => {
    this.setState({ show: false });
    };

    handleDescriptionChange = (evt) => {
        this.setState({
            description: evt.target.value,
        })
     };
     handlePriceChange = (evt) => {
        this.setState({
            price: evt.target.value,
        })
     };
     submitForm = (e) => {
        e.preventDefault();
        const user = this.props.dataFromLoggedIn;

        const newlink = { username: user,  description: this.state.description, price: this.state.price}
        this.props.addNewLink(newlink)
     };
     
    
    render() { 
        return ( 
            <main id="input">
                <form id="input" onSubmit={this.submitForm.bind(this)}>
                    <h5>Input Information for Link:</h5> <hr />
                    <div>
                        <span className="input-group-text" >Payment Description</span>
                        <textarea class="form-control" aria-label="With textarea" onChange={this.handleDescriptionChange}></textarea>
                    </div>
                    
                    <span>{' - '}</span>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" >Price:</span>
                        </div>
                            <input type="text" className="form-control input-lg col-sm-8" placeholder="Price" value = {this.state.price} onChange={this.handlePriceChange}></input>
                    </div>

                    <div id="modal">
                        <Modal id="Modal" show={this.state.show} handleClose={this.hideModal} size='lg' >
                            <div class="modal-header">
                                <h5>Double Check</h5>
                            </div>
                            <div class="modal-content">
                                <body id="info">
                                    Description: {this.state.description}
                                    <br></br>
                                    Price: {this.state.price}
                                </body>
                            </div>
    
                        <div class="modal-footer">
                            <button class="btn btn-secondary" onClick={this.hideModal}>Save</button>
                            <button class="btn primary"onClick={this.hideModal}>Close</button>
                        </div>
                        </Modal>
                            <button type="submit"  onClick={this.showModal}>Get Link</button>
                    </div>
                </form>
        </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newlink: state.newlink.items,
        isLoading: state.newlink.loading,
        isSaving: state.newlink.saving,
        error: state.newlink.error
    }
}

const mapDispatchToProps = {
    addNewLink,
    toggleNewLink, 
    deleteNewLink,
    fetchNewLink,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Info_Req));
// export default Info_Req