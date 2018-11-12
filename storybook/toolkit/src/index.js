const express = require('express');
const bodyParser = require('body-parser');
const { listDirectories } = require('./listDirectories');

const env = process.env;

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const directories = listDirectories();
  if (directories.length > 0) {
    res.redirect(`/${directories[0].name}`);
  }
});

app.get('/api/versions', (request, response) => {
  response.json({
    versions: listDirectories(),
  });
});

app.use(express.static('public'));

const port = process.env.PORT || 1337;
const server = app.listen(port, () => {
  const host = env.HOST || server.address().address;
  const port = server.address().port;

  console.log(`Server running at http://${host}:${port}`);
});
