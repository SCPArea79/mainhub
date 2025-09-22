var wrongCounter = 0;
  function LoginButton() {
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    var wrongMsg = document.getElementById("WrongMsg");

    if (user.value == "1967EthicsCommittee" && pass.value != "") {
      location.href =
        "https://sites.google.com/view/the-ethics-committee-homepage/home";
    } else if (user.value == "Secret" && pass.value == "Password") {
      location.href =
        "funnywebsite.html";
    } else {
      wrongCounter = wrongCounter + 1;
      wrongMsg.style.visibility = "visible";
    }

    if (wrongCounter == 3) {
      location.href = "accessdenied.html";
    }
  }