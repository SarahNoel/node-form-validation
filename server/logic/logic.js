var errArray =[];
var nameErr = 'Name cannot be blank';
var hobbyErr = 'Hobby cannot be blank';
var idErr = "ID cannot be blank";
var idNumErr = "An ID must be at least 3 characters long";
var idDup = "That ID is already in use"

function addPuppy(body, res, puppyArray, errArray) {
  var name = body.name.trim();
  var id = body.id.trim();
  errArray = [];
  // checks for duplicate IDS
  for (var i = 0; i < puppyArray.length; i++) {
    if(puppyArray[i].id === id){
      errArray.push(idDup);
    }
  }
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
  res.redirect('/puppies');
  }
  return errArray
};



function addPerson(body, res, peopleArray, errArray){
  var name = body.name;
  var hobby = body.hobby;
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
    res.redirect('/people');
  }
  return errArray;
}










module.exports = {
  addPuppy:addPuppy,
  addPerson:addPerson,

}
