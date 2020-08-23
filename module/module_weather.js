const rqPromis = require('request-promise')

module.exports = async (city)=>{
    if (!city){
        throw new Error('Ошибка получения данных')
    }
    const KEY = '' // Необходимо указать ключ, зарегистрироваться на сайте http://api.openweathermap.org
    const uri = 'http://api.openweathermap.org/data/2.5/weather'

    const options = {
        uri,
        qs:{
            q:city,
            appid: KEY,
            inits: 'imperial'
        },
        json: true
    }
    const data = await rqPromis(options)

    try{
        let temperature = (data.main.temp - 273.15).toFixed(0)
        console.log(temperature)
        return{
            weather: `${data.name}: ${temperature}°C`,
            error: null
        }
    }catch(error){
        return {
            weather: null,
            error: error.error.message,
            
        }
    }

}