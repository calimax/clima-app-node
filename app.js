const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para Obtener el clima',
        demand: true
    },
    lat: {
        desc: 'Latitud'
    },
    lng: {
        desc: 'Longitud'
    }

}).argv;



const getInfo = async(direccion) => {
    try {
        let coors = await getLugarLatLng(direccion);
        let temp = await getClima(coors.lat, coors.lng);

        return ` ${argv.direccion}, con temperatura de: ${temp}`;
    } catch (e) {
        return `No se pudo determinar el Clima en ${direccion}`
    }
}

getInfo(argv.direccion).then(res => {
    console.log(res);
}).catch(e => console.log(e));