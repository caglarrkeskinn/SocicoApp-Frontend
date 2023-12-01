import React, {  useEffect } from 'react';
import { makeStyles } from "@mui/styles";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';





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

function Post(props) {
    const {title, text, userId, userName, postId} = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [liked, setLiked] = React.useState(false);

    

    const handleLike = () => {
        setLiked(!liked);
    }


    return (
        <div className='postContainer'>
            <Card className={classes.root}>
      <CardHeader
        avatar={
            <Link to={{pathname: '/users/'+ userId}} className={classes.link}>
            <Avatar aria-label="recipe" className={classes.avatar}>
            {userName.charAt(0).toUpperCase()}
          </Avatar>
            </Link>
          
        }

        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton 
        onClick={handleLike}
        aria-label="add to favorites">
          <FavoriteIcon style={{color : liked ? "red" : null}}/>
        </IconButton>

      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Container fixed className={classes.container}>

          
        </Container>
      </Collapse>
    </Card>
            
        </div>
    )
}

export default Post;