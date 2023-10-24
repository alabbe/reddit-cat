import React from "react";
import Post from "./Post";


const getPost = (listing) => {
    let post = listing.filter((post) => post.data.title === "Lion or Cat?");
    return post[0];
}

function Feeds(props) {

    let feeds = "";
    if (props.posts) {
        console.log("props from Feeds", props.posts);
        // recuperer les posts non video / non gallery dans le listing
        let imagesPostsList = props.posts.filter((post) => {
            if (!post.is_video & !post.is_gallery & !post.is_self) {
                return post;
            }
        });
        console.log("listing", imagesPostsList);

        feeds = imagesPostsList.map((post) => <Post key={post.id} data={post} />);
        console.log("feeds: ", feeds);
        // extraire du listing un post
        //let postData = getPost(props.posts.data.children);
    }

    return (
        //<Post data={postData} />
        <>
            {feeds}
        </>
    );
}

export default Feeds;