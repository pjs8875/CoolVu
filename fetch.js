const https = require('https');
const fs = require('fs');

https.get('https://innadove.com/en/main-en/?ref=landing.love', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('innadove.html', data);
    console.log('Done');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
