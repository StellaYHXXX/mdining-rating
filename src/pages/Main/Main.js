
import * as React from "react";
import {
    Button,
    TextField,
    Stack,
    Paper,
    Box,
    Card,
    CardActions,
    CardContent,
    Typography,
  } from "@mui/material";
import './main.css';
import BestOfDay from './BestOfDay'

function Main() {
  return (
    <div className="Main">
      {/* <ResponsiveAppBar /> */}
      <Welcome/>
      <BestOfDay/>
      <p>View Dining Halls</p>
    </div>
  );
}

const Welcome = () =>{
   return (
    <Box id = "welcome-section">
        <h1 id = "welcome-words">Welcome to MDining!</h1>
    </Box>
   )
}

export default Main;