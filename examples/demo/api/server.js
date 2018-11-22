const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.route('/devis').get((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  setTimeout(() => {
    const data = require('./devis.json');
    res.send(data.devis);
  }, 500);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
