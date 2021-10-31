import "./PlayerCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export default class PlayerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {flipped: false};
  }

  render() {
    const { sx } = this.props;
    const sideStyle = {backgroundColor: 'white', padding: 0, borderRadius: 4}
    return (
      <div className="PlayerCard">
        <Flippy 
          flipOnClick={false} 
          isFlipped={this.state.flipped}
          flipDirection="horizontal"
          style={{"margin-bottom": sx.mb, "margin-right": sx.mr}}
        >
          <FrontSide style={{...sideStyle}}>
            <Card sx={{ maxWidth: sx.maxWidth, boxShadow: 0 }}>
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
                  Also known as {this.props.player_known_name}, it's a football
                  player from {this.props.country_name} and was born on{" "}
                  {this.props.player_birthday}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=> this.setState({flipped: !this.state.flipped})}>
                  <span>See stats</span>
                </Button>
              </CardActions>
            </Card>
          </FrontSide>

          <BackSide style={{...sideStyle, color: '#333'}}>
            <Card sx={{ maxWidth: sx.maxWidth, boxShadow: 0 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {this.props.player_name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=> this.setState({flipped: !this.state.flipped})}>
                  <span>Back</span>
                </Button>
              </CardActions>
            </Card>
          </BackSide>
        </Flippy>
      </div>
    );
  }
}
