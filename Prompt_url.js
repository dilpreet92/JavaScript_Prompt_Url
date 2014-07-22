STR = "(ftp:\/\/\/|http:\/\/|https:\/\/)(w{3}|[a-zA-Z]*)\.([a-zA-Z]*|\d)\.([a-zA-Z]*|\d|\.([a-zA-Z]*|\d)|\/([a-zA-Z]*|\d))" ,   
WINDOW_PROPERTIES = "height=450px,width=400px,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,resizable=no" ;

function Window() {}

Window.prototype.isNotValid = function() {
  var PATT = new RegExp(STR); 
  return ((!url) || (!PATT.test(url)));  
};

Window.prototype.openWindow = function() {
  var blocked = false;
  //handling POPUP
  try {
    var newWindow = window.open(url, "_blank", WINDOW_PROPERTIES);
    if (!newWindow) {
      blocked = true;
    }
  }
  catch(ex) {
    blocked = true;
  }
  if (blocked) {
    alert("PLease Allow PoP Up to display");
    location.reload();
  }
};

function createWindow() {
  return new Window();
}

var url = prompt("Enter the Url You want to navigate");
window.onload = function() {
  windo = createWindow();
  if (!windo.isNotValid()) {
    windo.openWindow();
  }
  else {
    alert("Please Enter the URL Correctly : Hint http:\/\/ or ftp :\/\/");
    location.reload();
  }
};  