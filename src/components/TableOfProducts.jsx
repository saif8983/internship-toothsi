import * as React from 'react';
import {useState,useEffect} from 'react'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Paper from '@mui/material/Paper';
import style from '../utils/style';
import products from '../local-JSON/productsAPI.json'
import Navbar from './Navbar';
import { Stack } from '@mui/system';
export default function AcccessibleTable() {
  const [productsData]=useState(products)
  const [quantity,setQuantity]=useState({})
  const [data,setData]=useState([])
  
  const handleChange=(value)=>{
const obj={qunatity:value}
setQuantity(obj)
  }
  const handleCheck=(e,item,quantity)=>{
const productQuantity={...item,...quantity}
if(e.target.checked){
  setData([...data,productQuantity])
}else{
  const index=data.findIndex(item=>item.id===productQuantity.id)
  if(index){
  const arrayofData=data.splice(index-1,1)
  setData(arrayofData)}
  else if(index==0){
setData('')
  }
}
  }
  useEffect(() => {
    console.log(data)
  }, [data]);
  return (
    <>
<Navbar/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, }} aria-label="caption table">
        <TableHead >
          <TableRow sx={style.tableHeadingCSS}>
            <TableCell>Image</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Buy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <img src={row.image}/>
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.color}</TableCell>
              <TableCell align="right">In Stock</TableCell>
              <TableCell align="right">
                <Stack direction="row"  spacing={2}>
                <TextField
          id="outlined-size-small"
          size="small"
          onChange={(e)=>handleChange(e.target.value)}
          sx={style.inputQuantitycss}
        />
        <ShoppingCartIcon/>
        <Checkbox onChange={(e)=>handleCheck(e,row,quantity)}   />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
