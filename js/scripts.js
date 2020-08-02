$(document).ready(function() {
$('#delivery').on('input', function() {
  var input=$(this);
  var message=$(this).val();
  if (message==='Yes'){
    alert('Please enter your delivery address');
  }
});

  $('#delveryAddress').change(function(event) {
    var input=$(this);
    var message=$(this).val();
    alert('Your order will be delivered to' + ' '+ message);
  });
  
  });
 
  // alert("Your order will be delivered to your location")
