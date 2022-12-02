const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var raio = parseInt(document.getElementById("raio").value)

  var area = 3.14 * raio ** 2
  var comprimento = 3.14 * 2 * raio
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `Área: ${area} um², Comprimento: ${comprimento} um`,
    })
})