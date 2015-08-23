var express = require('express');
var router = express.Router();

var puppyArray = [];

router.get('/', function(req, res, next) {
  res.redirect('/puppy/new');
});

router.get('/puppy/new', function(req, res, next) {
  res.render('puppies', {
    title: 'Add a Puppy'});
});

router.post('/submit', function(req, res, next) {
  var name = req.body.name;
  var id = req.body.id;
  puppyArray.push({name: name, id: id});
  res.redirect('/puppies');
  });

router.get('/puppies', function(req, res, next) {
  res.render('showPuppies', {title:'Showing Puppies'});

});


module.exports = router;
