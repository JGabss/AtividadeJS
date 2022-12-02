const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var c1 = parseInt(document.getElementById("c1").value)
  var c2 = parseInt(document.getElementById("c2").value)
  
  var hipotenusa = (c1 ** 2 + c2 ** 2) ** (1/2)
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `Hipotenusa: ${hipotenusa} um`,
    })
})