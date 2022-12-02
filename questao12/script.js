const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var m = parseInt(document.getElementById("m").value)

  var n = parseInt(document.getElementById("n").value)

  var multiplo = ""
  if (m % n == 0) {
     multiplo = `${m} é multiplo de ${n}`
  } else {
    multiplo = `${m} não é multiplo de ${n}`
  }
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `${multiplo}`,
    })
})