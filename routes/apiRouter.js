const express = require('express');
const apiController = require('../controllers/apiController')
const apiRouter = express.Router();

apiRouter.get('/cards', apiController.showCards);

apiRouter.post('/settings', apiController.settingsSet);
apiRouter.get('/settings', apiController.settingsRequest);

apiRouter.get('/', apiController.hello);

module.exports = apiRouter