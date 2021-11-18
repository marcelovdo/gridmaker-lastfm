const axios = require('axios');

require('dotenv').config()
const env = process.env;

const rootURL = 'http://ws.audioscrobbler.com/2.0/';

const getAlbums = async () => {
    const userName = 'marcelovalentim';
    const period = '12month';
    const searchLimit = 20;
    const config = { params: {
        method: 'user.gettopalbums',
        user: userName,
        api_key: env.API_KEY,
        period,
        limit: searchLimit,
        format: 'json'
    }};
    const res = await axios.get(rootURL, config);
    for (let album of res.data.topalbums.album) {
        console.log(`Album: ${album.name} | Artist: ${album.artist.name} | Playcount: ${album.playcount}`);
    }
};

getAlbums();