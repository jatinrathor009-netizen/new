function login(){
  const name = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const correctPassword = "123";

  if(name === "" || pass === ""){
    alert("Enter username and password ❤️");
    return;
  }

  if(pass !== correctPassword){
    alert("Wrong password 💔");
    return;
  }

  sessionStorage.setItem("loveName", name);
  window.location.href = "index.html";
}