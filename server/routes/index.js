var express = require('express');
var router = express.Router();
var logic = require('../logic/logic');

var errArray =[];
var puppyArray = [];
var peopleArray = [];

//homepage
router.get('/', function(req, res, next) {
  res.render('index')
});

//add puppy page
router.get('/puppy/new', function(req, res, next) {
  res.render('puppies', {title: 'Add a Puppy', errArray:errArray});
});

//submit added puppy
router.post('/submit', function(req, res, next) {
  errArray = logic.addPuppy(req.body, res, puppyArray, errArray)
});


//shows all puppies on puppies page
router.get('/puppies', function(req, res, next) {
  res.render('showPuppies', {title:'Showing Puppies', puppyArray:puppyArray});
});


///adding people ///
router.get('/people/new', function(req, res, next) {
  res.render('people', {
    title: 'Add a Person', errArray:errArray});
});

//submit button for people
router.post('/submit2', function(req, res, next) {
  errArray = logic.addPerson(req.body, res, peopleArray, errArray)
});

//renders people page
router.get('/people', function(req, res, next) {
  res.render('showPeople', {title:'Showing People', peopleArray:peopleArray});
});

module.exports = router;
