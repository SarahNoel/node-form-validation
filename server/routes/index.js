var express = require('express');
var router = express.Router();

var errArray =[];
var puppyArray = [];
var peopleArray = [];

var nameErr = 'Name cannot be blank';
var hobbyErr = 'Hobby cannot be blank';
var idErr = "ID cannot be blank";
var idNumErr = "An ID must be at least 3 characters long";

//homepage
router.get('/', function(req, res, next) {
  res.render('index')
});

//add puppy page
router.get('/puppy/new', function(req, res, next) {
  res.render('puppies', {
    title: 'Add a Puppy', errArray:errArray});
});

//re-route to add another puppy
router.post('/addPup', function(req, res) {
  res.redirect('/puppy/new');
});

//submit added puppy
router.post('/submit', function(req, res, next) {
  var name = req.body.name;
  var id = req.body.id;
  errArray = [];
  //checks for id
  if(id === ""){
    errArray.push(idErr);
  //checks for name
  }if(name === ""){
    errArray.push(nameErr);
  //checks for id length
  }if(id.length < 3){
    errArray.push(idNumErr);
  //reloads if errors
  }if(errArray.length > 0){
  res.redirect('/puppy/new');
  //submits puppy if no errors
  }else{
  puppyArray.push({name: name, id: id});
  errArray = [];
  res.redirect('/puppies');}
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
  var name = req.body.name;
  var hobby = req.body.hobby;
  errArray = [];
  //checks for name
  if(name === ""){
    errArray.push(nameErr);
  //checks for hobby
  }if(hobby === ""){
    errArray.push(hobbyErr);
  //reloads with errors
  }if(errArray.length>0){
    res.redirect('/people/new');
  //submits person if error free
  }else{
  peopleArray.push({name: name, hobby: hobby});
  res.redirect('/people');}
  });

//renders people page
router.get('/people', function(req, res, next) {
  res.render('showPeople', {title:'Showing People', peopleArray:peopleArray});
});

//redirects to person page
router.post('/addPeep', function(req, res) {
  res.redirect('/people/new');
});

//redirects home on home button
router.post('/home', function(req, res){
  res.redirect('/');
})

module.exports = router;
