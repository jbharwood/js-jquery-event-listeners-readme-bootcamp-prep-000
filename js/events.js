function getIt() {
  $('p').on("click", function(){
    alert("Hey!")
  });
}

function frameIt() {
  $('.tasty').on("load", function(){
    document.$(`border: 1px solid black`)
  });
}

$(document).ready(function(){

// call functions here

});
