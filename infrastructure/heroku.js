var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN);

configurator.export('bookinginv').then(function (result) {
    console.log(result);
});

