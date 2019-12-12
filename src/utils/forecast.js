const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/9e2cc4618be120ab9bd42a71da0a43a5/'+ encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?exclude=minutely,hourly,alerts&units=si'
    request({url, json: true}, (error, {body})=>{
        if (error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to connect to weather service for this location!!', undefined)
        } else {
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature,
                precipProbability: body.currently.precipProbability
            })
            
        }
    })
}

module.exports = forecast