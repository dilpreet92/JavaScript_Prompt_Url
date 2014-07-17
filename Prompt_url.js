function Window () {
  this.url = prompt("Enter the Url You want to navigate");
  this.validate();
}
Window.prototype = {
  validate : function() {
    if((!this.url) || (!patt.test(this.url))) {
      alert("Please Enter the URL Correctly : Hint http:\/\/ or ftp :\/\/");
      location.reload();
    }
    else {
      this.openWindow();
    }
  },
  openWindow : function () {
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
    }
  }
}
function createWindow () {
  var win = new Window();
}
var windowProperties = "height=450px,width=400px,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,resizable=no" ;
var patt = new RegExp("(ftp:\/\/\/|http:\/\/|https:\/\/)(w{3}|[a-zA-Z]*)\.([a-zA-Z]*|\d)\.([a-zA-Z]*|\d|\.([a-zA-Z]*|\d)|\/([a-zA-Z]*|\d))");     
window.onload = createWindow();