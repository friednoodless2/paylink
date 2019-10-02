import React, { Component } from 'react';
// import "./finance_input.css";

class Financial_Input extends Component {
    constructor(props){
        super(props);
        this.state = { 
            reciever: null,
            bank_num: null,
            account_num: null,
            description: null,
            price: null,
            submit: false,
        }
        this.handleRecieverChange = this.handleRecieverChange.bind(this);
        this.handleBankChange = this.handleBankChange.bind(this);
        this.handleAccountChange = this.handleAccountChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);

    }

     handleRecieverChange = (evt) => {
        this.setState({
            reciever: evt.target.value,
        })
     };
     handleBankChange = (evt) => {
        this.setState({
            bank_num: evt.target.value,
        })
     };
     handleAccountChange = (evt) => {
        this.setState({
            account_num: evt.target.value,
        })
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

     

    render() { 
        return ( 
            <div>
                <form id="input">

                    <h5>Input Financial Information:</h5> Required <hr />
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Reciever Name:</span>
                        </div>
                            <input type="text" className="form-control input-lg col-sm-8" placeholder="Reciever Name" value = {this.state.reciever} onChange={this.handleRecieverChange}></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" >Bank Code:</span>
                        </div>
                            <input type="text" className="form-control input-lg col-sm-8" placeholder="Bank Code" value = {this.state.bank_num} onChange={this.handleBankChange}></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" >Account Number:</span>
                        </div>
                            <input type="text" className="form-control input-lg col-sm-8" placeholder="Account Number" value = {this.state.account_num} onChange={this.handleAccountChange}></input>
                    </div>

                    <div>
                        <span className="input-group-text" >Payment Description</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" >Price:</span>
                        </div>
                            <input type="text" className="form-control input-lg col-sm-8" placeholder="Price" value = {this.state.price} onChange={this.handlePriceChange}></input>
                    </div>

                    <div>
                        <button block type="submit">Get Link</button>
                    </div>
                </form>
            </div>
            
         );
    }
}
 
export default Financial_Input;