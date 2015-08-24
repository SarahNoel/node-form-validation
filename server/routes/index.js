var express = require('express');
var router = express.Router();

var errArray =[];
var puppyArray = [];
var peopleArray = [];

var nameErr = 'Name cannot be blank';
var hobbyErr = 'Hobby cannot be blank';
var idErr = "ID cannot be blank";
var idNumErr = "An ID must be at least 3 characters long";

router.get('/', function(req, res, next) {
  res.redirect('/puppy/new');
});

router.get('/puppy/new', function(req, res, next) {
  res.render('puppies', {
    title: 'Add a Puppy', errArray:errArray});
});

router.post('/addPup', function(req, res) {
  res.redirect('/puppy/new');
});

router.post('/submit', function(req, res, next) {
  var name = req.body.name;
  var id = req.body.id;
  errArray = [];
  if(id === ""){
    errArray.push(idErr);
  }if(name === ""){
    errArray.push(nameErr);
  }if(id.length < 3){
    errArray.push(idNumErr);
  }if(errArray.length > 0){
  res.redirect('/puppy/new');
  }else{
  puppyArray.push({name: name, id: id});
  errArray = [];
  res.redirect('/puppies');}
  });

router.get('/puppies', function(req, res, next) {
  res.render('showPuppies', {title:'Showing Puppies', puppyArray:puppyArray});
});



///adding people ///
router.get('/people/new', function(req, res, next) {
  res.render('people', {
    title: 'Add a Person', errArray:errArray});
});

router.post('/submit2', function(req, res, next) {
  var name = req.body.name;
  var hobby = req.body.hobby;
  errArray = [];
  if(name === ""){
    errArray.push(nameErr);
  }if(hobby === ""){
    errArray.push(hobbyErr);
  }if(errArray.length>0){
    res.redirect('/people/new');
  }else{
  peopleArray.push({name: name, hobby: hobby});
  res.redirect('/people');}
  });

router.get('/people', function(req, res, next) {
  res.render('showPeople', {title:'Showing People', peopleArray:peopleArray});

});

router.post('/addPeep', function(req, res) {
  res.redirect('/people/new');
});


module.exports = router;
