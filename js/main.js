
// dropdown
const btn = document.getElementById("navbar_btn");
let a = 1;
function openMenu() {
  if (a == 1) {
    document.getElementById("navbarMenu").style.display = "block";
    return (a = 0);
  } else {
    document.getElementById("navbarMenu").style.display = "none";
    return (a = 1);
  }
}
btn.addEventListener("click", openMenu);

// modal
var modal = document.getElementById("myModal");
var btn1 = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn1.onclick = function () {
  modal.style.display = "flex";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
