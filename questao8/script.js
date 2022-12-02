const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var valor = parseInt(document.getElementById("p").value)
  var centimetros = valor * 2.54
  
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `Área: ${centimetros} cm`,
    })
})