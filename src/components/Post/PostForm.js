import React from 'react';
import { makeStyles } from "@mui/styles";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, InputAdornment, OutlinedInput } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


const useStyles = makeStyles((theme) => ({
    root: {
        width: 850,
        textAlign : "left",
        margin : 20
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        
    },
    avatar: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
    },
    link: {
        textDecoration: 'none',
        boxShadow   : 'none',
        color: 'white',
    }
}));

function PostForm(props) {
    const {userId, userName, refreshPosts} = props;
    const classes = useStyles();
    const [text, setText] = React.useState("");
    const [title, setTitle ] = React.useState("");
    const [isSent, setIsSent] = React.useState(false);
    
    const savePost = () => {
        fetch("/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                userId: userId,
                text: text
            }),
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
    }
    const handleSubmit = () => {
        savePost();
        setIsSent(true);
        setTitle("");
        setText("");
        refreshPosts();
    }

    const handleTitle = (value) => {
        setTitle(value);
        setIsSent(false);
    }

    const handleText = (value) => {
        setText(value);
        setIsSent(false);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setIsSent(false);
      };

    return (
        <div>

<Snackbar open={isSent} autoHideDuration={1200} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success" >
    Your post has been sent!
  </Alert>
</Snackbar>
            
            <Card className={classes.root}>
      <CardHeader
        avatar={
            <Link to={{pathname: '/users/'+ userId}} className={classes.link}>
            <Avatar aria-label="recipe" className={classes.avatar}>
            {userName.charAt(0).toUpperCase()}
          </Avatar>
            </Link>
          
        }

        title={<OutlinedInput
        id='outlined-adornment-amount'
        multiline
        placeholder='Title'
        inputProps={{maxLength: 50}}
        fullWidth
        value={title}
        onChange={(i) => handleTitle(i.target.value )}
        >
        </OutlinedInput>}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <OutlinedInput
        id='outlined-adornment-amount'
        multiline
        placeholder='Text'
        inputProps={{maxLength: 250}}
        fullWidth
        value={text}
        onChange={(i) => handleText(i.target.value )}
        endAdornment = {
            <InputAdornment position="end">
            <Button
            variant='contained'
            style={{background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' ,
            color: 'white',}}
            onClick={handleSubmit}
            >
            Post
            </Button>
            </InputAdornment>
        }
        >

        </OutlinedInput>
        </Typography>
      </CardContent>
    </Card>
            
        </div>
    )
}

export default PostForm;