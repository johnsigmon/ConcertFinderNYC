const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = (DEV) ? require('dotenv').config() : undefined;

const express     = require('express');
const bodyParser  = require('body-parser');
const logger      = require('morgan');
const path        = require('path');

const app         = express();
const PORT        = process.argv[2] || process.env.PORT || 3000;

app.set('superSecret', 'my super secret word');

app.use( logger( DEV ? 'dev' : 'common') );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*app.use( '/api', require('./routes/seatgeek'));*/

app.use( express.static(path.join(__dirname, 'dist')));

app.listen(PORT , ()=> console.log(`server here! listening on`, PORT));
