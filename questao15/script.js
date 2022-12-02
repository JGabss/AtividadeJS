const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var l1 = parseFloat(document.getElementById("l1").value)
  var l2 = parseFloat(document.getElementById("l2").value)
  var l3 = parseFloat(document.getElementById("l3").value)

  var text = ""
  if (l1 == l2 & l1 == l3 & l2 == l3) {
     text = `Equilátero`
  } else if (l1 != l2  & l1 != l3 & l2 != l3) {
    text = `Escaleno`
  } else {
    text = "Isósceles"
  }
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `o triângulo é ${text} `,
    })
})