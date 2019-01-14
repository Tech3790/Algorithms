// Given a name (string) and an array of people (objects), find the person with the given name and return his/her hobby.
//  Return false if there is no person with the given name.

function findPerson(name, people) {
  /*    USING A FOR LOOP
    for(let i=0; i < people.length; i++){
      if(name === people[i].name){
        return people[i].hobby;
      }
    }
    return false;
    */

  //    USING RECURSION
  if (people.length !== 0) {
    if (name === people[0].name) {
      return people[0].hobby;
    } else {
      return findPerson(name, people.slice(1));
    }
  } else {
    return false;
  }
}
