import * as React from 'react';
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
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import style from '../utils/style';
export default function AddToCart() {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
      ];
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
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
