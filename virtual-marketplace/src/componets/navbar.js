import React, { Component } from "react";
import {Pay,PayCredit} from "./block";

var cart;

class Navbar extends Component{
  render(){
    return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Virtual Marketplace</span>
        <div className="dropdown">
          <button
          style={{width: '18rem', textAlign: 'center'}} 
          type="button"
          className="btn btn-primary dropdown-toggle"
          id="dropdownMenuButton1"
          onClick={() => this.props.onAdd()}  
          data-bs-toggle="dropdown" 
          aria-expanded="false">
            Shopping Cart
          </button>
          <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end text-right show" aria-labelledby="dropdownMenuButton1">
            <li className="dropdown-item" >Name NFT: {this.props.shopNames}</li>
            <li><hr className="dropdown-divider"></hr></li>
            <li type="button" id="amountNoCredit" value={this.props.shopPrices} onClick={Pay} className="dropdown-item">Price NFT: {this.props.shopPrices} ETH</li>
            <li type="button" id="amountWithCredit" value={this.props.shopPrices} onClick={PayCredit} className="dropdown-item"> Price with credit NFT: {this.props.shopPrices} ETH</li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Navbar;  