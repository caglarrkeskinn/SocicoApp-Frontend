import React from "react";
import { makeStyles } from "@mui/styles";
import { CardContent, InputAdornment, OutlinedInput } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    comment: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    small: {
        width: '1.5rem',
        height: '1.5rem',
    },
    link: {
        textDecoration: 'none',
        boxShadow   : 'none',
        color: 'white',
        
    },
    avatar: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        marginRight: '0.5rem',

    },
}))

function Comment(props) {
    const {text, userId, userName} = props;
    const classes = useStyles();
    return (
        <CardContent className={classes.comment}>
            <OutlinedInput 
            style={{backgroundColor: 'white',
            color: 'black',
            }}
            disabled
            id='outlined-adornment-amount'
            multiline
            inputProps={{maxLength: 50}}
            fullWidth
            value={text}
            startAdornment = {
                <Link to={{pathname: '/users/'+ userId}} className={classes.link}>
                <Avatar aria-label="recipe" className={classes.avatar}>
                {userName.charAt(0).toUpperCase()}
              </Avatar>
                </Link>
            }
           
            >
                
            </OutlinedInput>
        </CardContent>
    )
}

export default Comment;