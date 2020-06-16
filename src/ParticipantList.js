import Participant from './Participant'
import React, { Component } from 'react';

class ParticipantList extends Component {
  static defaultProps = {
    participants: []
  };

  render() {
    return (
      <Participant />
    )

  }
}

export default ParticipantList;