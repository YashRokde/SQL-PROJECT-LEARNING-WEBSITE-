
var nameC, cityC,stateC,pinC;

function readForm() {
 nameC = document.getElementById("fname").value;
  cityC = document.getElementById("city").value;
  stateC = document.getElementById("state").value;
  pinC = document.getElementById("zip").value;
  console.log(nameC,cityC,stateC,pinC);
}

document.getElementById("payment").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("buyers/" + pinC)
    .set({
     fname:nameC,
     city:cityC,
     state:stateC,
     zip:pinC,
    });
  alert("You successfully bought the course!!");
  document.getElementById("fname").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("zip").value = "";

  
};
