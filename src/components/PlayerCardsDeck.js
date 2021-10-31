import React from "react";
import PlayerCard from './PlayerCard.js';
import Box from '@mui/material/Box';

export default function PlayerCardsDeck(props) {
  const { sx } = props;
  const cardStyle = {
    mr: '10px',
    mb: '10px',
    maxWidth: 300
  };
  return (
    <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: 1280,
          m: 'auto',
          ...sx
        }}
      >
        <PlayerCard 
          player_name="Cristiano Ronaldo" 
          player_image="https://pbs.twimg.com/profile_images/728454941568720897/11-uQ19O.jpg"
          player_known_name="negro" 
          player_birthday="01/01/1987"
          country_name="Portugal"
          sx={cardStyle}
          ></PlayerCard>
          <PlayerCard 
          player_name="Sergio Ramos" 
          player_image="https://pbs.twimg.com/profile_images/378800000045934166/675701cd5299c44874177e79ac5c49ad.jpeg"
          player_known_name="pichichi" 
          player_birthday="01/01/1987"
          country_name="Spain"
          sx={cardStyle}
          ></PlayerCard>
      </Box>  
    );
  }
