import "./PlayerCard.css";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export default function PlayerCard(props) {
  const { sx } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  const sideStyle = { backgroundColor: "white", padding: 0, borderRadius: 4 };
  return (
    <div className="PlayerCard">
      <Flippy
        flipOnClick={false}
        isFlipped={isFlipped}
        flipDirection="horizontal"
        style={{ marginBottom: sx.mb, marginRight: sx.mr }}
      >
        <FrontSide style={{ ...sideStyle }}>
          <Card sx={{ maxWidth: sx.maxWidth, boxShadow: 0 }}>
            <CardMedia
              component="img"
              height="300"
              image={props.player_image}
              alt={props.player_name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.player_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Also known as {props.player_known_name}, it's a football player
                from {props.country_name} and was born on{" "}
                {props.player_birthday}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => setIsFlipped(!isFlipped)}>
                <span>See stats</span>
              </Button>
            </CardActions>
          </Card>
        </FrontSide>

        <BackSide style={{ ...sideStyle, color: "#333" }}>
          <Card sx={{ maxWidth: sx.maxWidth, boxShadow: 0 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.player_name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => setIsFlipped(!isFlipped)}>
                <span>Back</span>
              </Button>
            </CardActions>
          </Card>
        </BackSide>
      </Flippy>
    </div>
  );
}
