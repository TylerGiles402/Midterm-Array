var wrapperEle = document.body.querySelector(".wrapper");
var number = 0
function counter(){
  number = number + 1;
  document.body.querySelector(".number").innerHTML = number;
}
document.body.querySelector(".button").addEventListener("click", function(){
  counter();
});
document.body.querySelector(".number").innerHTML = number;
 
var nameList = [
  {
    name:"Harry",
    age:25,
  },
  {
    name:"Larry",
    age:15,
  },
  {
    name:"Bert",
    age:45
  },
  {
    name:"Jerry",
    age:35
  },
  {
    name:"Berry",
    age:5
  },
  {
    name:"Bart",
    age:55
  }
];
for (var i = 0; i < nameList.length; i++) {
  var peopleEle = document.createElement("div");
  peopleEle.innerHTML = nameList[i].name+", "+nameList[i].age;
  wrapperEle.appendChild(peopleEle);
  if (nameList[i].age > 40) {
    peopleEle.style.color = "red";
  }
}