function getIt() {
  $('p').on("click", function(){
    alert("Hey!")
  });
}

function frameIt() {
  $('img').on("load", function(){
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $(document).on('keydown', function(key) {
  if(key.which == 83){
      alert('s was pressed');
  }
});
}

$(document).ready(function(){

// call functions here

});
