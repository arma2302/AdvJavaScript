let MenuIcon = document.getElementById("bars");
let navmenu = document.getElementById("nav-items");

let icon = true;
function showMenu() {
  if (icon) {
    navmenu.style.left = "0%";
  } else {
    navmenu.style.left = "-100%";
  }
  icon = !icon;
}
function username() {
  var userdata = localStorage.getItem("object_name");
  localStorage.clear(); //clean the localstorage
  var value1 = JSON.parse(userdata).user;
  console.log(value1);
  let UnameHomepage = document.getElementById("user");
  UnameHomepage.innerText = value1;
}
username();

// filter data
// function filterdata() {
//   return maincard.filter((obj) => obj.cardtitle == "max");
// }
// function handleclick() {
//   const filter = filterdata();
//   console.log(filter);
// }
