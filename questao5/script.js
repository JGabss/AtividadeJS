const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var base = parseInt(document.getElementById("base").value)
  var altura = parseInt(document.getElementById("altura").value)
  
  var area = ( base * altura ) / 2
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `Área: ${area} um²`,
    })
})