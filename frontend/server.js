const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps Assignment</title>
      </head>
      <body>
        <h1>Express Frontend Running Successfully!</h1>
        <p>Backend URL: http://YOUR_PUBLIC_IP:5000</p>
      </body>
    </html>
  `);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Frontend running on port 3000');
});