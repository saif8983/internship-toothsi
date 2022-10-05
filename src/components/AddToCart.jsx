import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import style from '../utils/style';

const handleProductQuantity = (id, qunatity, newproduct) => {
  const updateCartProducts = JSON.parse(JSON.stringify(newproduct))
  const updateIndex = updateCartProducts.findIndex((item) => item.id === id)
  updateCartProducts[updateIndex].qunatity = qunatity > 0||!isNaN(qunatity) ? qunatity : 1;
  console.log(updateCartProducts)
  return updateCartProducts

}
export default function AddToCart() {
  const dispatch=useDispatch()
   const [addCarts,setAddCarts]=useState([])
  const selector = useSelector((state) => {
    return {
      addCart: state.products
    }
  })
  const { addCart } = selector
  const handleRemove=(row)=>{
    dispatch({
      type:'remove_cart',
      payload:{removeProduct:row}
    })
  }
  useEffect(()=>{
setAddCarts(addCart)
  },[addCart])
  return (
    <div>
      <Stack direction="row" spacing={6}>
        <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800, }} aria-label="caption table">
        <TableHead >
          <TableRow sx={style.tableHeadingCSS}>
            <TableCell>Products</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {addCarts.map((row,index) => (
            
            <TableRow key={index}>
              <TableCell component="th" scope="row">
              <Stack direction="row" spacing={1}>
              <Button onClick={()=>handleRemove(row)}><HighlightOffIcon  /></Button>
              <img src={row.image}/>
              {row.title}
              </Stack>
               
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right" >
              <Button onClick={() => {
                        const updateAddProduct = handleProductQuantity(row.id, Number(row.qunatity) + 1, addCarts)
                        console.log(updateAddProduct)
                        dispatch({
                          type: 'update_cart',
                          payload: { cartProduct: updateAddProduct }
                        })
                      }

                      }>+</Button>
              { row.quantity==""?0:Number(row.qunatity)}
              <Button onClick={() => {
                        const updateAddProduct = handleProductQuantity(row.id, Number(row.qunatity)-1 , addCarts)
                        console.log(updateAddProduct)
                        dispatch({
                          type: 'update_cart',
                          payload: { cartProduct: updateAddProduct }
                        })
                      }

                      }>-</Button>
              </TableCell>
              <TableCell align="right">{(Number(row.qunatity)*Number(row.price))}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cart Totals
          </Typography>
          <Stack direction="row" spacing={6}><Typography variant="h6" color="text.secondary">
            Subtotal
          </Typography>
            <Typography>123</Typography>
          </Stack>
          
          <Stack direction="row" spacing={9}><Typography variant="h6" color="text.secondary">
            Totals
          </Typography>
          <Typography>144</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
      <CardActions sx={style.cardActionCss}>
        <Button sx={style.cardButtonCss} size="small" variant='contained'>
          proceed to checkout
        </Button>
      </CardActions>
    </Card>
        </div>
      </Stack>
    </div>
  );
}
