const axios = require('axios');
const dotenv = require('dotenv');

const getAlbums = async () => {
    const params = {
        method: 'user.getweeklyalbumchart',
        user: 'marcelovalentim',
        api_key: ,
        format: 'json'
    };
    axios.get('http://ws.audioscrobbler.com/2.0/');
};