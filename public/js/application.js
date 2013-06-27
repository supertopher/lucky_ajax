$(document).ready(function() {
  $(document).on('submit', function(e){
    e.preventDefault();
    $.post('/rolls').done(function(responseData){
      console.log(responseData.roll.value);
        $('img').attr('src', responseData.roll.value + ".png");
    });   
  });
});


