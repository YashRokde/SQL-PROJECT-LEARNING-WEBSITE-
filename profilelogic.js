var nameP,emailP,phonenoP,genderP,educationP,skillsP;

function readFom() {
 nameP = document.getElementById("fname").value;
  emailP = document.getElementById("email").value;
  genderP = document.getElementById("gender").value;
  phonenoP = document.getElementById("phoneno").value;
  educationP = document.getElementById("education").value;
  skillsP = document.getElementById("skills").value;
  console.log(nameP,emailP,phonenoP,genderP,educationP,skillsP);
}

document.getElementById("save").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("Users/" + nameP)
    .set({
      fname:nameP,
      email:emailP,
      gender:genderP,
      phoneno:phonenoP,
      education:educationP,
      skills:skillsP,
    });
  alert("Your Details Saved Successfully!");
  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("phoneno").value = "";
  document.getElementById("education").value = "";
  document.getElementById("skills").value = "";
};
