import React, { Component } from "react";
import {ConnectToMetamask} from "./block";
class Connect extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Connect your account Metamask to my shop</span>
                    <button 
                    style={{width: '18rem', textAlign: 'center'}} 
                    type="button"
                    className="btn btn-primary" 
                    onClick={ConnectToMetamask}>
                        Connect
                    </button>
                </div>
            </nav>
        );
    }  
}

export default Connect;