import React, { Component } from 'react';



class Contact extends React.Component{
    state={
        online: false
    }
    render() {
        const changeStatus = () => {
            this.setState({
                online: !this.state.online
            });
        }
        return (
                <div className="Contact">
                    <img className='avatar' src={this.props.avatar} alt="avatar"/>
                    <div> 
                        <p className="name">{this.props.name}</p>
                        <div className="status" onClick={changeStatus}>
                            <p className="status-text">{this.state.online ? "online" : "offline" }</p>
                            <div className={this.state.online ? "status-online" : "status-offline"}></div>
                        </div>
                    </div>
                </div>
        );
    }

}

export default Contact;













