import React, { Component } from 'react';



class Contact extends React.Component{
    render() {
        return (
                <div className="Contact">
                    <img className='avatar' src={this.props.avatar} alt="avatar"/>
                    <div> 
                        <p className="name">{this.props.name}</p>
                        <div className="status">
                            <p className="status-text">{this.props.online ? "online" : "offline" }</p>
                            <div className={this.props.online ? "status-online" : "status-offline"}></div>
                        </div>
                    </div>
                </div>
        );
    }

}

export default Contact;













