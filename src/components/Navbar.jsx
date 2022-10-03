import React from "react";
import {AppBar,Box,Toolbar,InputLabel ,MenuItem,FormControl,Select,Button, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import style from "../utils/style";
{
  /* That navbar by using material ui*/
}
const Navbar = () => {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static" style={style.backgroundOfNavbar}>
        <Toolbar>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Hodies</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
         
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">size</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>XL</MenuItem>
        <MenuItem value={20}>XXL</MenuItem>
        <MenuItem value={30}>XXL</MenuItem>
      </Select>
    </FormControl>
    <Button>Reset</Button>
    <Typography style={style.colorSearchNavbar}>search:</Typography>
    <TextField
    sx={style.searchNavbar}
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
          color="primary"
        />
        <Button variant='contained' sx={style.addToCartButton} >Add To Cart</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
