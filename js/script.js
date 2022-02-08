var luas;
var keliling;
var tinggi;
var sisiSejajarAtas;
var sisiSejajarBawah;
var sisiMiring;
var alas;
function hitung() {
  sisiSejajarAtas = parseFloat(
    document.getElementById("ipt_sisiSejajarAtas").value
  );
  sisiSejajarBawah = parseFloat(
    document.getElementById("ipt_sisiSejajarBawah").value
  );
  sisiMiring = parseFloat(document.getElementById("ipt_sisiMiring").value);
  tinggi = parseFloat(document.getElementById("ipt_tinggi").value);
  luas = ((sisiSejajarAtas + sisiSejajarBawah) * tinggi) / 2;
  keliling = sisiSejajarBawah + sisiMiring + sisiMiring + sisiSejajarAtas;
  document.getElementById("opt_luas").value = luas;
  document.getElementById("opt_keliling").value = keliling;
}

// kalkulator

let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";

// Clears the screen on click of C button.
function clearScreen() {
  document.getElementById("result").value = "";
}
// Displays entered value on screen.
function liveScreen(value) {
  let res = document.getElementById("result");
  if (res.value == "undefined") {
    res.value = "";
  }
  res.value += value;
}
// Swaps the style sheet in order to  achieve dark mode.
function changeTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == lightTheme) {
    theme.href = darkTheme;
    darkMode.innerHTML = "Light Mode 🌞";
  } else {
    theme.href = lightTheme;
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}
