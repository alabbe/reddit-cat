import React from "react";
import Post from "./Post";


const getPost = (listing) => {
    let post = listing.filter((post) => post.data.title === "Lion or Cat?");
    return post[0];
}

function Feeds(props) {

    // recuperer les posts non video / non gallery dans le listing
    let imagesPostsList = props.posts.data.children.filter((post) => {
        if (!post.data.is_video & !post.data.is_gallery) {
            return post;
        }
    });
    console.log("listing", imagesPostsList);

    let feeds = imagesPostsList.map((post) => <Post key={post.data.id} data={post.data} />);
    console.log("feeds: ", feeds);
    // extraire du listing un post
    //let postData = getPost(props.posts.data.children);

    return (
        //<Post data={postData} />
        <>
            {feeds}
        </>
    );
}

export default Feeds;