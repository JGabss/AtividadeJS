const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var n1 = parseInt(document.getElementById("n1").value)
  var operador = document.getElementById("operador").value
  var n2 = parseInt(document.getElementById("n3").value)

  var value = ""
  
  if (operador == "+") {
    value = n1 + n2
  } else if (operador == "-"){
    value = n1 - n2
  } else if ( operador == "*") {
    value = n1 * n2
  } else if (operador == "/") {
    value = n1 / n2
  } else {
    value = "Inválido"
  }

  swal.fire({
    position: 'center',
    icon: 'success',
    title: `O resultado é ${value} `,
    })
})