import React from "react";
import Post from "./Post";


const getPost = (listing) => {
    let post = listing.filter((post) => post.data.title === "Lion or Cat?");
    return post[0];
}

function Feeds(props) {

    // extraire du listing un post
    let postData = getPost(props.posts.data.children);

    return (
        <Post data={postData} />
    );
}

export default Feeds;