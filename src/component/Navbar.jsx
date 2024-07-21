import { AppBar, Avatar, Button, Container, IconButton, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import profileImage from '../assets/logindefault.png';
import iconImage from '../assets/POMA.ico';

const StyledToolbar = styled(Toolbar)`
    background-color: black;
    
    
`;

const Navbar = () => {

    const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/login');
  };
    
  return (
    <div>
        <AppBar position='fixed'>
            <StyledToolbar >
                
                <Avatar sx={{ width: 50, height: 50 }} alt="POMA" src={iconImage} />
                {/* <center style={{display:'flex',justifyContent:'flex-start'}}> */}
                <Typography style={{ fontSize:'40px', fontFamily: 'fantasy', color:'white' }}>&nbsp;POMA</Typography>
                {/* <Typography  variant='overline' style={{fontFamily:'initial'}}>For the best products</Typography> */}
                &nbsp;&nbsp;
                <Typography variant='overline' style={{fontFamily:'initial'}}>For&nbsp;</Typography>
                <Typography variant='overline' style={{fontFamily:'initial'}}>the&nbsp;</Typography>
                <Typography variant='overline' style={{fontFamily:'initial'}}>best&nbsp;</Typography>
                <Typography variant='overline' style={{fontFamily:'initial'}}>Products</Typography>
                {/* </center> */}
                <Container sx={{ display: 'flex', justifyContent: 'flex-start', gap:'6rem' }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant='text' style={{fontSize:'20px',fontFamily:'fantasy' ,color:'black'}}>
                    <Link style={{textDecoration:'none',color:'orange'}} to={'/'}>HOME</Link>
                </Button>
                <Button variant='text' style={{fontSize:'20px',fontFamily:'fantasy' ,color:'black'}}>
                    
                    <Link style={{textDecoration:'none',color:'orange'}} to={'/add'}>Add Product</Link>
                </Button>
                </Container>
                <IconButton onClick={handleProfileClick}>
                    <Avatar alt="Profile" src={profileImage} />
                </IconButton>
            </StyledToolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
