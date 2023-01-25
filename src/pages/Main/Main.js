
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
import {useState } from 'react';
import BestOfDay from './BestOfDay'


let selectedCriteria = []

function Main() {
  return (
    <div className="Main">
      <Welcome/>
      <SearchBar/>
      <Filter/>
      <p>Best of the Day</p>
      <BestOfDay/>
      <p>View Dining Halls</p>
    </div>
  );
}

const Welcome = () =>{
   return (
    <Box id = "welcome-section">
        <h1 id = "welcome-words">Welcome to MDining Rating!</h1>
    </Box>
   )
}

const SearchBar = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Stack direction="row" spacing={2} >
        <TextField label="Enter a dish" />
        <Button variant="contained" id="search-button">Search</Button>
      </Stack>
    </Box>
  );
};


const Filter = () => {
  const dishFilters = ['Gluten Free', 'Halal', 'Spicy', 'Vegan', 'Vegetarian', 'Kosher'];
  const initialState = new Array(dishFilters.length).fill(false);
  const [clicked, setClicked] = useState(initialState);
  

  const handleClick = (index) => {
    const newClicked = [...clicked];
    if (!clicked[index]){
      selectedCriteria.push(dishFilters[index]);
    }else{
      selectedCriteria = selectedCriteria.filter(criteria => criteria !== dishFilters[index]);
    }
    newClicked[index]=!newClicked[index];
    setClicked(newClicked);
    console.log("The searching criterias are " + selectedCriteria);
  }



  return (
    <Stack direction="row" spacing={2} sx={{m:2}}>
      {dishFilters.map((name, index) => (
        <Button
          key={index}
          variant="outlined" 
          style={{color: clicked[index] ? 'white': '#655A52',
          backgroundColor: clicked[index] ? '#655A52': 'white',
          borderColor: '#655A52'}}
          onClick={()=>handleClick(index)}
        >
          {name}
        </Button>
      ))}
    </Stack>

  )
}

export default Main;