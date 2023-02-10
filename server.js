const express = require('express');
const path = require('path');

const app = express();

const PORT = 8001;
///home/ubuntu/react/_work/aws-react/aws-react/build
// Have Node serve the files for our built React app
// app.use(
//   express.static(
//     path.resolve(__dirname, '../../../../react/_work/aws-react/aws-react/build')
//   )
// );

app.get('/api', (req, res) => {
  res.send('Hello lorem ipsum');
});

// All other GET requests not handled before will return our React app
app.get('/*', (req, res) => {
  res.sendFile(
    path.resolve(
      __dirname,
      '../../../../react/_work/aws-react/aws-react/build',
      'index.html'
    )
  );
});

app.listen(PORT, () => {
  console.log(`service run on ${PORT}`);
});
