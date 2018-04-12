const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const firstController = require('../controllers/firstController');

router.get('/', function(req, res){
  res.render('index')
});

router.get('/routeOne', (req, res) => {
  res.render('routeOne')
});

router.post('/upload', (req, res) => {
  firstController.upload
});

module.exports = router;