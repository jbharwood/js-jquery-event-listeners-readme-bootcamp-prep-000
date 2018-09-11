function getIt() {
  $('p').on("click", function(){
    alert("Hey!")
  });
}

function frameIt() {
  $('.tasty').on("load", function(){
    document.$(`border-style: solid;`)
  });
}

$(document).ready(function(){

// call functions here

});
