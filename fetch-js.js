const https = require('https');
const fs = require('fs');

https.get('https://innadove.com/wp-content/themes/InnaDove/assets/js/main.js', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('main-script.js', data);
    console.log('Done');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
