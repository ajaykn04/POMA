import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Container, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';

    axios.get(apiUrl)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <Grid container spacing={2} sx={{mt:8}}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={15} md={4} lg={3} key={index}>
          <Paper elevation={3} sx={{ padding: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '400px'}}>
            <Container style={{ backgroundColor: 'white', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img src={product.image} alt={product.title} style={{  width: 'auto', height: '185px', objectFit: 'cover' }} />
            <Typography variant="h6" sx={{ mt: 1 }}>
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {product.category}
            </Typography>
            </Container>
          </Paper>
        </Grid>
      ))}
    </Grid>
    </div>
  )
}

export default Home