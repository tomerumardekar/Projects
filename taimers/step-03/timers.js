//constructor function use us a Template of creating obj
function fullName(name,lastName){
  this.name = name;
  this.last_name = lastName;
  this.fname = function(){
   console.log('full name',this.name,this.last_name);
  }
}

//creat new object with fullName constructor function
const obj1 = new fullName('Noam','Grin');
//creat another object
const obj2 = new fullName('tomer','umardekar');

//calling the fname function of the object
obj1.fname();
obj2.fname();
export default fullName;