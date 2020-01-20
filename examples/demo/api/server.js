var cors = require('cors')
var express = require('express');

const app = express();

app.use(cors());
const PORT = process.env.PORT || 5000;

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.route('/devis').get((req, res, next) => {
  setTimeout(() => {
    const data = require('./devis.json');
    res.send(data.devis);
  }, 500);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
