const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var l = parseInt(document.getElementById("lado").value)

  var perimetro = l * 4
  var area = l ** 2
  
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `Área: ${area} u.m² e perimetro ${perimetro} u.m`,
    })
})