function Window() {
  this.windowProperties = "height=450px,width=400px,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,resizable=no" ;
  this.str = "(ftp:\/\/\/|http:\/\/|https:\/\/)(w{3}|[a-zA-Z]*)\.([a-zA-Z]*|\d)\.([a-zA-Z]*|\d|\.([a-zA-Z]*|\d)|\/([a-zA-Z]*|\d))" ;    
}

Window.prototype.isNotValid = function() {
  var patt = new RegExp(this.str); 
  return ((!Url) || (!patt.test(Url)));  
};

Window.prototype.openWindow = function() {
  var blocked = false;
  //handling POPUP
  try {
    var newWindow = window.open(Url,"_blank",this.windowProperties);
    if(newWindow == null) {
      blocked = true;
    }
  }
  catch(ex) {
    blocked = true;
  }
  if(blocked) {
    alert("PLease Allow PoP Up to display");
    location.reload();
  }
};

function createWindow() {
  return new Window();
}

var Url = prompt("Enter the Url You want to navigate");
window.onload = function() {
  windo = createWindow();
  if(!windo.isNotValid()) {
    windo.openWindow();
  }
  else {
    alert("Please Enter the URL Correctly : Hint http:\/\/ or ftp :\/\/");
    location.reload();
  }
};  