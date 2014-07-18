function Window() {
  this.url = Url;
}

Window.prototype.validate = function() {
  if((!this.url) || (!patt.test(this.url))) {
    alert("Please Enter the URL Correctly : Hint http:\/\/ or ftp :\/\/");
    location.reload();
  }
  else {
    this.openWindow();
  }
};

Window.prototype.openWindow = function() {
  var blocked = false;
  //handling POPUP
  try {
    var newWindow = window.open(this.url,"_blank",windowProperties);
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
var windowProperties = "height=450px,width=400px,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,resizable=no" ,
    str = "(ftp:\/\/\/|http:\/\/|https:\/\/)(w{3}|[a-zA-Z]*)\.([a-zA-Z]*|\d)\.([a-zA-Z]*|\d|\.([a-zA-Z]*|\d)|\/([a-zA-Z]*|\d))",
    patt = new RegExp(str);
    Url = prompt("Enter the Url You want to navigate");     
window.onload = function() {
  windo = createWindow();
  windo.validate();
};  