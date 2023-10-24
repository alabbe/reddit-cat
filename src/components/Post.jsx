import React from "react";

// get user data from username
// https://www.reddit.com/user/hhttomal/about.json
const USER = {"kind": "t2", "data": {"is_employee": false, "is_friend": false, "subreddit": {"default_set": false, "user_is_contributor": null, "banner_img": "", "allowed_media_in_comments": [], "user_is_banned": null, "free_form_reports": true, "community_icon": null, "show_media": true, "icon_color": "", "user_is_muted": null, "display_name": "u_hhttomal", "header_img": null, "title": "", "previous_names": [], "over_18": true, "icon_size": [256, 256], "primary_color": "", "icon_img": "https://styles.redditmedia.com/t5_nuqyw/styles/profileIcon_snoo01b5020a-50ba-4c93-974a-1f353f7e7c8e-headshot.png?width=256&amp;height=256&amp;crop=256:256,smart&amp;s=9fecf39b26c4d42b331500b79a6d81032a0d8b41", "description": "", "submit_link_label": "", "header_size": null, "restrict_posting": true, "restrict_commenting": false, "subscribers": 0, "submit_text_label": "", "is_default_icon": false, "link_flair_position": "", "display_name_prefixed": "u/hhttomal", "key_color": "", "name": "t5_nuqyw", "is_default_banner": true, "url": "/user/hhttomal/", "quarantine": false, "banner_size": null, "user_is_moderator": null, "accept_followers": true, "public_description": "", "link_flair_enabled": false, "disable_contributor_requests": false, "subreddit_type": "user", "user_is_subscriber": null}, "snoovatar_size": [380, 600], "awardee_karma": 843, "id": "1z8gqtpo", "verified": true, "is_gold": false, "is_mod": false, "awarder_karma": 45, "has_verified_email": true, "icon_img": "https://styles.redditmedia.com/t5_nuqyw/styles/profileIcon_snoo01b5020a-50ba-4c93-974a-1f353f7e7c8e-headshot.png?width=256&amp;height=256&amp;crop=256:256,smart&amp;s=9fecf39b26c4d42b331500b79a6d81032a0d8b41", "hide_from_robots": false, "link_karma": 6175, "is_blocked": false, "total_karma": 7084, "pref_show_snoovatar": false, "name": "hhttomal", "created": 1535536900.0, "created_utc": 1535536900.0, "snoovatar_img": "https://i.redd.it/snoovatar/avatars/01b5020a-50ba-4c93-974a-1f353f7e7c8e.png", "comment_karma": 21, "accept_followers": true, "has_subscribed": true}};

const getUserDisplayName = (userData) => {
    return userData.data.subreddit.display_name_prefixed;
}

const getUserIconUrl = (userData) => {
    return userData.data.snoovatar_img;
}

const getPostCreatedDate = (timestamp) => {
    return new Date(timestamp * 1000);
}

const getTimeAgo = (date) => {

    let currentDate = new Date();
    // diff entre deux date : en heure, jour, mois année
    let secondsDiff = Math.floor((currentDate - date) / 1000);

    var interval = secondsDiff / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = secondsDiff / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = secondsDiff / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = secondsDiff / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = secondsDiff / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    if (secondsDiff < 10) return 'just now';
    return Math.floor(secondsDiff) + " seconds ago";
}

const formatVotesCounter = (votesCounter) => {
    let ratio = votesCounter / 1000000;
    console.log("ratio: ", ratio);
    if (ratio > 1 ) {
        return (Math.round((ratio + Number.EPSILON) * 100) / 100) + "M";
    }
    ratio = votesCounter / 1000;
    if (ratio > 1 ) {
        return (Math.round((ratio + Number.EPSILON) * 10) / 10) + "k";
    }
    return votesCounter;
}


function Post(props) {

    let post = props.data.data;
    console.log("display current post: ", post);

    // recuperer la date du post pour afficher la diff
    let postCreatedDate = getPostCreatedDate(post.created);
    let timeAgo = getTimeAgo(postCreatedDate);

    // recuperer le user et son avatar
    let username = getUserDisplayName(USER);
    let userIconUrl = getUserIconUrl(USER);

    // recuperer le titre
    let title = post.title;

    // recuperer le contenu - texte et/ou image seulement
    let imageUrl = post.url;

    // recuperer nb de votes
    let votesCounter = post.ups;

    // recuperer nb de comments;
    let commentsNb = post.num_comments;

    return (
        <div id="post" className='bg-yellow-200 w-[280px] rounded-lg lg:w-[650px] p-2'>
            <div className="grid grid-cols-6 w-full items-center gap-2">
                <div className="col-span-4">
                    <div id="author" className="flex justify-start items-center gap-2">
                        <div className="rounded-full w-6 h-6 bg-zinc-300 flex justify-center items-center overflow-clip">
                            <img src={userIconUrl} className=""/>
                        </div>
                        <span className="text-pink-400 text-base lg:text-lg font-normal">{username}</span>
                    </div>
                </div>
                <div className="col-span-2 place-self-end">
                    <span className="text-pink-400 text-xs lg:text-lg font-light">{timeAgo}</span>
                </div>
                <div className="col-span-6">
                    <span className=" text-pink-400 text-base lg:text-lg font-bold">{title}</span>
                </div>
                <div id="media-container" className="col-span-6 bg-white">
                   <img src={imageUrl} />
                </div>
                <div className="col-span-3">
                    <div id="upvote-button" className="h-6 inline-flex justify-center items-center ">
                        <a id="up-vote" className="group bg-white hover:bg-fuchsia-600 h-6 w-8 rounded-l-full flex items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 fill-fuchsia-600 group-hover:fill-white">
                                <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <div id="votes-counter" className="bg-white text-fuchsia-600 text-sm lg:text-base font-normal h-6 flex items-center">
                            {formatVotesCounter(votesCounter)}
                        </div>
                        <a id="down-vote" className="group bg-white hover:bg-fuchsia-600 h-6 w-8 rounded-r-full flex items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 fill-fuchsia-600  group-hover:fill-white">
                                <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-span-3 place-self-end">
                    <div id="comments-button" className="h-6 inline-flex justify-center items-center">
                        <a id="comments" className="group bg-white hover:bg-fuchsia-600 h-6 w-16 rounded-xl flex items-center justify-center gap-2 text-fuchsia-600 text-sm lg:text-base font-normal hover:text-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-fuchsia-600  group-hover:fill-white">
                                <path d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
                                <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
                            </svg>
                            {commentsNb}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;