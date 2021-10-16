import './style.css';
import * as React from 'react';
import Button from '@mui/material/Button';

export default class PlayerCard extends React.Component {
  render() {
    return (
      <div className="PlayerCard">
        <div className="PlayerCard-picture">

        </div>
        <div className="PlayerCard-info">
          <p>{this.props.player_name}</p>
          <p>Also known as {this.props.player_known_name}</p>
          <p>Born {this.props.player_birthday}</p>
        </div>
        <Button variant="contained">See stats</Button>
      </div>
    );
  }
}