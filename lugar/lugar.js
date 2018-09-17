const axois = require('axios');


const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let res = await axois.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}+CA&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`);



    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    var location = res.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng

    }
}

module.exports = {
    getLugarLatLng
}