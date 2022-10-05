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
import { useDispatch } from 'react-redux';
export default function AcccessibleTable() {
 const dispatch=useDispatch()
  const [productsData]=useState(products)
  const [quantity,setQuantity]=useState({})
  const [data,setData]=useState([])
  console.log(data)
  const [checked,setChecked]=useState()
  
  const handleChange=(value)=>{
const obj={qunatity:value}
setQuantity({...quantity,...obj})
  }
  const handleCheck=(e,item,quantity)=>{
    e.preventDefault();
const productQuantity={...item,...quantity}
const productQuantityStrigfy=JSON.stringify(productQuantity)
const productQuantityParse=JSON.parse(productQuantityStrigfy)
console.log(productQuantityParse)
if(e.target.checked){
  setChecked(true)
  setData(productQuantityParse)
}else{
  setChecked(false)
  setData(productQuantityParse)
  }
}
  useEffect(() => {
    if (checked) {
      dispatch({
        type: 'let product',
        payload:  {data}
      })
  }else{
    dispatch({
      type: 'let uncheckproduct',
      payload:  {data}
    })
  }

  }, [data,checked]);
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
