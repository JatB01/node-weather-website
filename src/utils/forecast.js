const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c82dc1fa427a3339c3a480e254df0edd/' + longitude + ',' + latitude + '?units=si'
    request({url, json: true}, (error, {body}) => {
    if (error)
    {
        callback('Unable to connect to Weather Service', undefined)
    }
    else if (body.error)
    {
        callback(body.error, undefined)
    }
    else
    {
        const data = body.currently
        const today = body.daily.data[0]
        callback(undefined, `${today.summary} It is currently ${data.temperature} degrees out. There is a ${data.precipProbability}% chance of rain.`)
    }
    })
    }

    module.exports = forecast