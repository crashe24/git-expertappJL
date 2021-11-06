const getGif = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=QXwQtusV1QtA8XGd3ycg1vJ5UNYZcFBx&q=${ encodeURI(category)}&limit=5`;
    const resp = await fetch (url);


    const {data} = await resp.json();

    return data.map ( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    


}

export default getGif;