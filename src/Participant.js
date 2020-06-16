import React, { Component } from 'react';

class Participant extends Component {

  static defaultProps = {
    id: 0,
    name: 'defaultName',
    avatar: 'some.image',
    inSession: true,
    onStage: false
  };

  render(props) {
    const { store } = this.props;

    return (
      <div className='session-participant'>
        <img src={store.avatar} alt={store.name} className="user-avatar" />
        <div className="participant-info">
          <h6 className="participant-name">{store.name}</h6>
          <div className="participant-status participant-status__green">
            "on stage"
          </div>
        </div>
      </div>
    )
  }
}

export default Participant;