
function Pop() {
  var x = document.getElementById("pop");
  if (x.style.display === "block") {
    document.getElementById("pop").style.display = "none";
  }
  else {
    document.getElementById("pop").style.display = "block";
  }
}

function shut() {
  var x = document.getElementById("pop");
  if (x.style.display === "block") {
    document.getElementById("pop").style.display = "none";
  }
  else {
    document.getElementById("pop").style.display = "block";
  }
}



function validate() {
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');
  var city = document.getElementById('city');

  if (name.value == "") {
      name.style.border = "1px solid Red";
      return false;
  }
  if (email.value == "") {
      email.style.border = "1px solid Red";
      return false;
  }
  if (phone.value == "") {
      phone.style.border = "1px solid Red";
      return false;
  }
  if (city.value == "") {
      city.style.border = "1px solid Red";
      return false;
  }
  else{
    name.style.border = "1px solid green";
    email.style.border = "1px solid green";
    phone.style.border = "1px solid green";
    city.style.border = "1px solid green";

    document.getElementById("text").innerHTML = "<h3>Din ansøgning er sendt ind, og du vil snart høre fra os</h3>";
    text.style.color = "white";
    document.getElementById("text").style.display = "block";

  }
}
