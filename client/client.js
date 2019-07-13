
var rp = require('request-promise');

var options = {
  method: 'POST',
  uri: 'http://localhost:3000/example',
  body: {
      text: process.argv.slice(2).join(' ')
  },
  json: true 
};

rp(options)
    .then(function (parsedBody) {
        let response = parsedBody.response;
        console.log(response)
    })
    .catch(function (err) {
        console.log('Something go wrong...')
    });
