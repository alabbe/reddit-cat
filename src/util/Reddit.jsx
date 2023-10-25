// recuperer les post sur plusieurs communautés spécialisées en chat
// r/cats
// r/CastBeingCats
// r/StartledCats
// r/aww
// r/SupermodelCats

export const FILTERS_TYPE = {
    default: "new",
    best: "best",
    hot: "hot",
    new: "new",
    top: "top"
}

export const Reddit = {

    async getFeed(type) {
        let feedEndpoint = `https://www.reddit.com/r/cats+cat+aww+CastBeingCats+StartledCats+SupermodelCats/${type}.json?limit=20&t=month`;
        //let feedEndpoint = "https://www.reddit.com/r/cat/new.json?limit=10&t=month";
        try {
            const response = await fetch(feedEndpoint);
            // console.log("response: ",response);
            if (response.ok) {
                const json = await response.json();
                //console.log("json: ", json);
                return json;
            } else {
                const body = await response.text();
                throw new Error(`Erreur HTTP : ${response.status} / ${body}`);
            }
        } catch (error) {
            console.log("Unable to get feed from Reddit: ", error);
        }
    },

};