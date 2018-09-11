function getIt() {
  $('p').on("click", function(){
    alert("Hey!")
  });
}

function frameIt() {
  $('.tasty').on("load", function(){
    alert("Hey!")
  });
}

$(document).ready(function(){

// call functions here

});
