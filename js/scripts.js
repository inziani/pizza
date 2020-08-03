  //Business Logic
  // function PizzaOrder(size){
  //   this.inputSize=size
  // };
var order=[];
  const myFunction = (ev)=>{
    ev.preventDefault();
    //var order=[];
    var size=document.getElementById('pizzaSize').value;
    var crust=document.getElementById("crust").value;
    var toppings=document.getElementById("toppings").value;
    var quantity=document.getElementById("quantity").value;
    var delivery=document.getElementById("delivery").value;

    order.push(size, crust, toppings, quantity, delivery);
    alert("This is your order" + " "+ order);
  }

// ********************************************************************
//Failed to invoke the prototype function. No time to research further.
//***********************************************************************

var listPrice=[1000, 1500, 2000, 100, 200, 400, 200,400, 600]
function myFunctiontwo(){
  if (order[0]==='Small' && order[1]==='Crispy Crusty' && order[2]==='Veggy' && order[4]==='Yes' 
  && order[3]==='1'){
    // alert('Your Bill is :\n' + 'Size' + (order[0] + '\n' + (parseInt(listPrice[0])+ parseInt(listPrice[3])))
    alert('Your bill is :\n '+ 'Size' + ' '+ order[0] + ' '+ listPrice[0])
  } 
}


  document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("delivery").addEventListener("input", myFunction);

    document.getElementById("submit").addEventListener("click", myFunctiontwo);
  });
  



//  ****************** 
// var size = document.getElementById("pizzaSize").value;
// //document.getElementById("submit").addEventListener("click", myFunction);
// function myFunction() {
//   alert("Your Pizza size is" + " " + size)
// }
// ******************
  //User Logic

$(document).ready(function() {
$('#delivery').on('input', function() {
  var input=$(this);
  var message=$(this).val();
  if (message==='Yes'){
    alert('Please enter your delivery address. The deilvery cost will be 10% of your total Pizza Cost');
  }
});

  $('#delveryAddress').change(function(event) {
    var input=$(this);
    var message=$(this).val();
    alert('Your order will be delivered to' + ' '+ message + ' '
    + ". Please click the submit button for your order to be processed.");
  });

  // $("form#myForm").submit(function(event) {
  // $("#submit").click(function(event){
  //   event.preventDefault();

  //   var inputPizzaSize = $("input#pizzaSize").val();
  //   var inputPizzaCrust = $("input#crust").val();
  //   var inputPizzaToppings = $("input#toppings").val();
  //   var inputPizzaQuantity = $("input#quantity").val();
  //   var inputPizzaDelivery= $("input#delivery").val();

  //   var newPizzaOrder = new PizzaOrder(inputPizzaSize, inputPizzaCrust, inputPizzaToppings,
  //     inputPizzaQuantity, inputPizzaDelivery);
  //   alert(newPizzaOrder);
  // });
})



 
