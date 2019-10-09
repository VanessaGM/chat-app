import React, { Component } from 'react';
import './Contact.css';


class Contact extends React.Component{
   
    render() {
        console.log(this.props)
        return (
            
            
            <div className="Contact">
                <div className="avatar"><img src={this.props.user.avatar} alt="avatar" className="avatar"/></div>
                <div className = "status">
                    <cite className = {this.props.user.online ? "status-online" : "status-offline"}></cite>
                    <cite className = "status-text">
                        {this.props.user.status ? "online" : "offline"}
                    </cite>
                    <div className="name">{this.props.user.name}</div>
                </div>
            </div>
       
                
        );
    }

}

export default Contact;













