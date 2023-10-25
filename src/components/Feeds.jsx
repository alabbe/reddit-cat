import React from "react";
import Post from "./Post";


const getPost = (listing) => {
    let post = listing.filter((post) => post.data.title === "Lion or Cat?");
    return post[0];
}

const getUserPost = (post, users) => {
    return users.filter((user) => user.id === post.id);
}

function Feeds(props) {

    let feeds = "";
    if (props.posts) {
        feeds = props.posts.map((post) => <Post key={post.data.id} data={post.data} />);
    }

    return (
        //<Post data={postData} />
        <>
            {feeds}
        </>
    );
}

export default Feeds;