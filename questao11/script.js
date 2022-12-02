const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var valor = parseInt(document.getElementById("num").value)

  var paridade = ""
  if (valor % 2 == 0) {
    paridade = "par"
  } else {
    paridade = "impar"
  }
  
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `${valor} é ${paridade}`,
    })
})