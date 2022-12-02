const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var n1 = parseInt(document.getElementById("n1").value)
  var n2 = parseInt(document.getElementById("n2").value)
  var n3 = parseInt(document.getElementById("n3").value)

  var lista = [n1, n2, n3] 

  var lista = lista.sort((a, b) => {
    return (a - b)
  })
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `o valor central é  ${lista[1]} `,
    })
})