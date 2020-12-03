console.log("Welcome");
function menuToggle() {
  var x = document.getElementById('navtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
