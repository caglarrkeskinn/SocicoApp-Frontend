import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles'; 

const StyledIconButton = styled(IconButton)({
    marginRight: theme => theme.spacing(2) // Use theme.spacing directly within styled
  });

  const StyledLink = styled(Link)({
    color: 'white',
    textDecoration: 'none',



  });
  const StyledTitle = styled(Link)({
      color: 'white',
      textDecoration: 'none',
  })


function Navbar () {
    let userId = 1;
    return (
        <div>

            <AppBar position="static">
                <Toolbar>
                <StyledIconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </StyledIconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                    <StyledTitle to="/">Home</StyledTitle>
                </Typography>
                <Typography variant="h6" component="div" >
                    <StyledLink to={{pathname: '/users/'+ userId}}>User</StyledLink>
                </Typography>
                </Toolbar>
            </AppBar>


        </div>
    )
}


export default Navbar