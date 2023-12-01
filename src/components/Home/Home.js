import React from "react";
import Post from "../Post/Post";
import { useState, useEffect } from "react";
import './Home.css';
import { makeStyles } from "@mui/styles";
import PostForm from "../Post/PostForm";


const useStyles = makeStyles((theme) => ({
    display: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#adb9cc',
        flexWrap: 'wrap',
    }
   

  }));

function Home () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);
    const classes = useStyles();


    const refreshPosts = () => {
        fetch("/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (Array.isArray(result)) {
                        setPostList(result);
                    } else {
                        setError("Invalid data received");
                    }
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    useEffect(() => {
        refreshPosts();
    }, [postList])

    if (error) {
        return <div>Error!!!</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (



            <div fixed className={classes.display}>
                <PostForm userId={1} userName = {"caglar"} refreshPosts={refreshPosts}></PostForm>
                 {postList.map(post => (
                    <Post postId = {post.id} userId={post.userId} userName = {post.userName} title={post.title} text={post.text}></Post>

                ))}
            </div>


               


        );
    }
   
}

export default Home