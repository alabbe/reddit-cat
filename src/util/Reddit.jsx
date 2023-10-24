// recuperer les post sur plusieurs communautés spécialisées en chat
// r/cats
// r/CastBeingCats
// r/StartledCats
// r/aww
// r/SupermodelCats



export const Reddit = {

    async getFeed() {
        let feedEndpoint = "https://www.reddit.com/r/cats+aww/new.json?limit=25&t=month";
        try {
            const response = await fetch(feedEndpoint);
            console.log("response: ",response);
            if (response.ok) {
                const json = await response.json();
                console.log("json: ", json);
                return json;
            } else {
                const body = await response.text();
                throw new Error(`Erreur HTTP : ${response.status} / ${body}`);
            }
        } catch (error) {
            console.log("Unable to get feed from Reddit: ", e);
        }
    }
};