/* jshint esversion: 6 */
/* jshint asi: true */

const express = require('express')
const app = express()
const path = require('path')

/*Use bodyParser to parse form data*/
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

global.__basedir = __dirname;
app.use(express.static(path.join(__dirname, 'public')))

/*Import all of the route modules*/
const portal = require('./routes/portal')
const api = require('./routes/api')
const playlists = require('./routes/playlists')
const numeracy = require('./routes/numeracy')
const literacy = require('./routes/literacy')
const grade7 = require('./routes/grade7')

app.use('/', portal)
app.use('/api', api)
app.use('/playlists', playlists)
app.use('/numeracy', numeracy)
app.use('/literacy', literacy)
app.use('/grade7', grade7)

/*Results dashboard page*/
app.get('/coach', (req, res) => {
    res.sendFile(__dirname + '/dashboard/index.html')
})

app.listen(process.env.PORT || 5000)