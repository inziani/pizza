  //Business Logic
  document.getElementById("submit").addEventListener("click", PizzaOrder.pizzaOrderCost);
  function PizzaOrder(size, crust, toppings, quantity, delivery){
    // this.pizzaSize=size;
    // this.pizzaCrust=crust;
    // this.pizzaToppings=toppings;
    // this.pizzaQuantity=quantity
    // this.pizzaDelivery=delivery

  this.document.querySelector("#pizzaSize").value=size;
  this.document.querySelector("#crust").value()=crust;
  this.document.querySelector("#toppings").value()=toppings;
  this.document.querySelector("#quantity").value()=quantity ;
  this.document.querySelector("#delivery").value()=delivery ;
  }
  
  PizzaOrder.prototype.pizzaOrderCost = function(){
   alert('testing');
  }





//  ****************** 
var size = document.getElementById("pizzaSize").value;
//document.getElementById("submit").addEventListener("click", myFunction);
function myFunction() {
  alert("Your Pizza size is" + " " + size)
}
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



 
