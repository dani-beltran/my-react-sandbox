import "./PlayerCard.css";
import * as React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default class PlayerCard extends React.Component {
  render() {
    const { sx } = this.props;
    return (
      <div className="PlayerCard">
        <Card sx={{...sx }}>
          <CardMedia
            component="img"
            height="300"
            image={this.props.player_image}
            alt={this.props.player_name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.player_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Also known as {this.props.player_known_name}, it's a football player
              from {this.props.country_name} and was born on {this.props.player_birthday} 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
