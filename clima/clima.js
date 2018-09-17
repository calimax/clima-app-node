const axios = require('axios');

const getClima = async(lat, lng) => {

    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=57110320d7cd66782a9bb23eade0193b`);

    let temp = res.data.main.temp;

    return temp;

}

module.exports = {
    getClima
}