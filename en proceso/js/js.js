function openNav() {
  document.getElementById("overlay").style.width = "100%";
}
function closeNav() {
  document.getElementById("overlay").style.width = "0%";
}
function openMenu() {
  document.getElementById("menu_movil").style.display = "block";
  document.getElementById("boton1").style.display = "none";
  document.getElementById("boton2").style.display = "inline-block";
  document.getElementById("boton2").style.float = "right";
  document.getElementById("boton2").style.marginRight = "10%";
  document.getElementById("boton2").style.marginTop = "2.5%";
}
function closeMenu() {
  document.getElementById("menu_movil").style.display = "none";
  document.getElementById("boton1").style.display = "inline-block";
  document.getElementById("boton1").style.float = "right";
  document.getElementById("boton2").style.display = "none";
  document.getElementById("boton1").style.marginRight = "10%";
  document.getElementById("boton1").style.marginTop = "2.5%";
  document.getElementById("Practices").style.display = "none";
  document.getElementById("our_lawyers").style.display = "none";
}
function openPracticies() {
  document.getElementById("Practices").style.display = "block";
}
function openOur_lawyers() {
  document.getElementById("our_lawyers").style.display = "block";
}