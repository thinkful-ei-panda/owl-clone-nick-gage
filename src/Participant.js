import store from './store'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class participant extends Component{
    
    render(props) {
        const { store } = this.props
    return (
        <div className= 'session-participant'>
            <img src={store.avatar} alt={store.name} className="user-avatar"/>
            <div className="participant-info">

            </div>
        </div>
    )
        
        
    }

}