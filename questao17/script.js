const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var n1 = parseFloat(document.getElementById("n1").value)
  var n2 = parseFloat(document.getElementById("n2").value)
  var n3 = parseFloat(document.getElementById("n3").value)

  var lista = [n1, n2, n3].sort((a, b) => {
    return (a - b)
  })
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `o maior número ${lista[lista.length -1]}
    o menor é ${lista[0]}
    `,
    })
})